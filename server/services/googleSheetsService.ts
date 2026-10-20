import { JWT } from 'google-auth-library'

export interface SheetPromptRecord {
  resource_id: string
  title: string
  prompt: string
  published: boolean
}

export interface GoogleSheetsConfig {
  serviceAccountEmail?: string
  privateKey?: string
  spreadsheetId?: string
  sheetName?: string
  cacheTtlSeconds?: number
}

interface CacheEntry {
  rows: SheetPromptRecord[]
  fetchedAt: number
}

let inMemoryCache: CacheEntry | null = null

export function clearPromptCache(): void {
  inMemoryCache = null
}

export function getGoogleSheetsConfig(): GoogleSheetsConfig {
  return {
    serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1',
    cacheTtlSeconds: Number(process.env.CACHE_TTL_SECONDS) || 30,
  }
}

export function validateGoogleCredentials(config: GoogleSheetsConfig): {
  isValid: boolean
  missing: string[]
} {
  const missing: string[] = []
  if (!config.serviceAccountEmail) missing.push('GOOGLE_SERVICE_ACCOUNT_EMAIL')
  if (!config.privateKey) missing.push('GOOGLE_PRIVATE_KEY')
  if (!config.spreadsheetId) missing.push('GOOGLE_SHEETS_SPREADSHEET_ID')

  return {
    isValid: missing.length === 0,
    missing,
  }
}

function cleanPrivateKey(rawKey: string): string {
  let key = rawKey.trim()
  // Strip surrounding quotes if present
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1)
  }
  // Replace escaped \n with actual newlines
  return key.replace(/\\n/g, '\n')
}

export function parseSheetRows(rawRows: string[][]): SheetPromptRecord[] {
  if (!rawRows || rawRows.length < 2) {
    return []
  }

  const headerRow = rawRows[0].map((cell) => String(cell || '').trim().toLowerCase())
  let idCol = headerRow.findIndex((h) => h === 'resource_id')
  let titleCol = headerRow.findIndex((h) => h === 'title')
  let promptCol = headerRow.findIndex((h) => h === 'prompt')
  let publishedCol = headerRow.findIndex((h) => h === 'published')

  // Fallbacks if header names differ slightly
  if (idCol === -1) idCol = 0
  if (titleCol === -1) titleCol = 1
  if (promptCol === -1) promptCol = 2
  if (publishedCol === -1) publishedCol = 3

  const records: SheetPromptRecord[] = []

  for (let i = 1; i < rawRows.length; i++) {
    const row = rawRows[i]
    if (!row || !row[idCol]) continue

    const resource_id = String(row[idCol] || '').trim()
    const title = String(row[titleCol] || '').trim()
    const prompt = String(row[promptCol] || '')
    const publishedStr = String(row[publishedCol] || '').trim().toUpperCase()
    const published = publishedStr === 'TRUE'

    if (resource_id) {
      records.push({
        resource_id,
        title,
        prompt,
        published,
      })
    }
  }

  return records
}

export async function fetchAllRowsFromGoogleSheets(
  config: GoogleSheetsConfig
): Promise<SheetPromptRecord[]> {
  const { isValid, missing } = validateGoogleCredentials(config)
  if (!isValid) {
    const error = new Error(`Server credentials missing: ${missing.join(', ')}`)
    ;(error as any).code = 'CREDENTIALS_MISSING'
    throw error
  }

  const client = new JWT({
    email: config.serviceAccountEmail,
    key: cleanPrivateKey(config.privateKey!),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheetName = config.sheetName || 'Sheet1'
  const escapedSheetName = sheetName.includes(' ') ? `'${sheetName.replace(/'/g, "''")}'` : sheetName
  const range = `${escapedSheetName}!A:D`
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
    config.spreadsheetId!
  )}/values/${encodeURIComponent(range)}`

  const response = await client.request<{ values?: string[][] }>({ url })
  const values = response.data?.values || []

  return parseSheetRows(values)
}

export async function getPromptRecord(
  resourceId: string,
  options: { bypassCache?: boolean; config?: GoogleSheetsConfig } = {}
): Promise<SheetPromptRecord | null> {
  const config = options.config || getGoogleSheetsConfig()
  const ttlMs = (config.cacheTtlSeconds || 30) * 1000
  const now = Date.now()

  let rows: SheetPromptRecord[]

  if (!options.bypassCache && inMemoryCache && now - inMemoryCache.fetchedAt < ttlMs) {
    rows = inMemoryCache.rows
  } else {
    rows = await fetchAllRowsFromGoogleSheets(config)
    inMemoryCache = {
      rows,
      fetchedAt: now,
    }
  }

  const targetId = resourceId.trim().toLowerCase()
  const matched = rows.find((r) => r.resource_id.toLowerCase() === targetId)

  // SECURITY: Only return if record exists AND published is strictly TRUE
  if (!matched || !matched.published) {
    return null
  }

  return matched
}
