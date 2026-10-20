import test from 'node:test'
import assert from 'node:assert/strict'
import {
  validateResourceId,
  processPromptRequest,
} from '../api/promptHandler.ts'
import {
  parseSheetRows,
  validateGoogleCredentials,
  clearPromptCache,
} from '../services/googleSheetsService.ts'

test('Resource ID Validation', async (t) => {
  await t.test('accepts valid alphanumeric, hyphenated, and underscored IDs', () => {
    assert.equal(validateResourceId('video001').isValid, true)
    assert.equal(validateResourceId('lead-gen-bot').isValid, true)
    assert.equal(validateResourceId('PROMPT_V2').isValid, true)
    assert.equal(validateResourceId('reel-DeKhhdTSe3V').isValid, true)
  })

  await t.test('rejects empty, null, or whitespace-only IDs', () => {
    assert.equal(validateResourceId('').isValid, false)
    assert.equal(validateResourceId('   ').isValid, false)
    assert.equal(validateResourceId(null).isValid, false)
    assert.equal(validateResourceId(undefined).isValid, false)
  })

  await t.test('rejects IDs with illegal characters or traversal attempts', () => {
    assert.equal(validateResourceId('video 001').isValid, false)
    assert.equal(validateResourceId('video?id=1').isValid, false)
    assert.equal(validateResourceId('../secret').isValid, false)
    assert.equal(validateResourceId('<script>alert(1)</script>').isValid, false)
    assert.equal(validateResourceId('video$').isValid, false)
  })

  await t.test('rejects IDs exceeding 100 characters', () => {
    const longId = 'a'.repeat(101)
    assert.equal(validateResourceId(longId).isValid, false)
  })
})

test('Google Sheets Row Parsing & Column Normalization', async (t) => {
  await t.test('parses exact standard columns', () => {
    const rawData = [
      ['resource_id', 'title', 'prompt', 'published'],
      ['video001', 'Claude Artifacts Masterclass', 'You are a master coder...', 'TRUE'],
      ['video002', 'Unpublished Draft', 'Secret prompt text...', 'FALSE'],
      ['video003', 'Missing Published Status', 'Another prompt...', ''],
    ]

    const parsed = parseSheetRows(rawData)
    assert.equal(parsed.length, 3)

    assert.equal(parsed[0].resource_id, 'video001')
    assert.equal(parsed[0].title, 'Claude Artifacts Masterclass')
    assert.equal(parsed[0].prompt, 'You are a master coder...')
    assert.equal(parsed[0].published, true)

    assert.equal(parsed[1].resource_id, 'video002')
    assert.equal(parsed[1].published, false)

    assert.equal(parsed[2].resource_id, 'video003')
    assert.equal(parsed[2].published, false)
  })

  await t.test('handles case-insensitive and shuffled headers', () => {
    const rawData = [
      ['TITLE', 'PUBLISHED', 'RESOURCE_ID', 'PROMPT'],
      ['Reversed Columns Post', 'true', 'video-rev', 'Line 1\nLine 2\nLine 3'],
    ]

    const parsed = parseSheetRows(rawData)
    assert.equal(parsed.length, 1)
    assert.equal(parsed[0].resource_id, 'video-rev')
    assert.equal(parsed[0].title, 'Reversed Columns Post')
    assert.equal(parsed[0].published, true)
    assert.equal(parsed[0].prompt, 'Line 1\nLine 2\nLine 3')
  })
})

test('Credentials Validation', async (t) => {
  await t.test('identifies missing environment variables', () => {
    const emptyConfig = {}
    const result = validateGoogleCredentials(emptyConfig)
    assert.equal(result.isValid, false)
    assert.equal(result.missing.length, 3)
    assert.ok(result.missing.includes('GOOGLE_SERVICE_ACCOUNT_EMAIL'))
    assert.ok(result.missing.includes('GOOGLE_PRIVATE_KEY'))
    assert.ok(result.missing.includes('GOOGLE_SHEETS_SPREADSHEET_ID'))
  })

  await t.test('passes when all three credentials are present', () => {
    const validConfig = {
      serviceAccountEmail: 'service@project.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nfake\n-----END PRIVATE KEY-----',
      spreadsheetId: 'sheet-12345',
    }
    const result = validateGoogleCredentials(validConfig)
    assert.equal(result.isValid, true)
    assert.equal(result.missing.length, 0)
  })
})

test('API Request Processing & Security Policies', async (t) => {
  clearPromptCache()

  await t.test('returns 400 INVALID_ID for invalid characters', async () => {
    const response = await processPromptRequest('bad id!', false)
    assert.equal(response.status, 400)
    assert.equal(response.body.code, 'INVALID_ID')
  })

  await t.test('returns 503 CREDENTIALS_MISSING when credentials not set', async () => {
    // With empty config without touching real env
    const response = await processPromptRequest('video001', false, {
      config: {
        serviceAccountEmail: '',
        privateKey: '',
        spreadsheetId: '',
      },
    })
    assert.equal(response.status, 503)
    assert.equal(response.body.code, 'CREDENTIALS_MISSING')
  })
})

test('Privacy & Security: Never leak unpublished prompt content', async () => {
  const rawRows = [
    ['resource_id', 'title', 'prompt', 'published'],
    [
      'video001',
      'Claude 3.5 Artifacts System Prompt',
      'You are an expert full-stack engineer.\nRules:\n1. Use clean code.\n2. Always verify.\n',
      'TRUE',
    ],
    [
      'video002_draft',
      'Secret Unpublished Draft Prompt',
      'TOP_SECRET_INTERNAL_PROMPT_DO_NOT_EXPOSE',
      'FALSE',
    ],
    [
      'video003_empty_pub',
      'Another Hidden Prompt',
      'ANOTHER_CONFIDENTIAL_PROMPT',
      '',
    ],
  ]

  const records = parseSheetRows(rawRows)

  // 1. Published item lookup
  const publishedItem = records.find(
    (r) => r.resource_id.toLowerCase() === 'video001' && r.published
  )
  assert.ok(publishedItem)
  assert.equal(publishedItem.title, 'Claude 3.5 Artifacts System Prompt')
  assert.equal(
    publishedItem.prompt,
    'You are an expert full-stack engineer.\nRules:\n1. Use clean code.\n2. Always verify.\n'
  )

  // 2. Explicitly unpublished (FALSE)
  const unpublishedItem = records.find(
    (r) => r.resource_id.toLowerCase() === 'video002_draft' && r.published
  )
  assert.equal(unpublishedItem, undefined, 'Unpublished prompt must not be returned')

  // 3. Blank published status
  const blankPubItem = records.find(
    (r) => r.resource_id.toLowerCase() === 'video003_empty_pub' && r.published
  )
  assert.equal(blankPubItem, undefined, 'Blank published status must not be treated as published')
})
