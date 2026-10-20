import type { IncomingMessage, ServerResponse } from 'node:http'
import { URL } from 'node:url'
import {
  getPromptRecord,
  type GoogleSheetsConfig,
} from '../services/googleSheetsService.ts'

export interface PromptHandlerOptions {
  config?: GoogleSheetsConfig
}

const RESOURCE_ID_REGEX = /^[a-zA-Z0-9_-]{1,100}$/

export function validateResourceId(id: unknown): {
  isValid: boolean
  error?: string
} {
  if (typeof id !== 'string' || !id.trim()) {
    return {
      isValid: false,
      error: 'Missing resource parameter. Provide a valid resource ID.',
    }
  }

  const trimmed = id.trim()
  if (trimmed.length > 100) {
    return {
      isValid: false,
      error: 'Resource ID is too long (maximum 100 characters allowed).',
    }
  }

  if (!RESOURCE_ID_REGEX.test(trimmed)) {
    return {
      isValid: false,
      error:
        'Invalid resource ID format. Only alphanumeric characters, hyphens, and underscores are allowed.',
    }
  }

  return { isValid: true }
}

export async function processPromptRequest(
  resourceIdParam: string | null | undefined,
  bypassCacheParam: boolean,
  options?: PromptHandlerOptions
): Promise<{ status: number; body: Record<string, unknown> }> {
  const validation = validateResourceId(resourceIdParam)
  if (!validation.isValid) {
    return {
      status: 400,
      body: {
        error: validation.error,
        code: 'INVALID_ID',
      },
    }
  }

  const resourceId = resourceIdParam!.trim()

  try {
    const promptRecord = await getPromptRecord(resourceId, {
      bypassCache: bypassCacheParam,
      config: options?.config,
    })

    if (!promptRecord) {
      return {
        status: 404,
        body: {
          error: 'Prompt not found or unpublished',
          code: 'NOT_FOUND',
        },
      }
    }

    return {
      status: 200,
      body: {
        resource_id: promptRecord.resource_id,
        title: promptRecord.title,
        prompt: promptRecord.prompt,
        published: true,
      },
    }
  } catch (err: any) {
    if (err?.code === 'CREDENTIALS_MISSING') {
      return {
        status: 503,
        body: {
          error:
            'Google Sheets integration not configured. Server credentials missing.',
          code: 'CREDENTIALS_MISSING',
          details: err.message,
        },
      }
    }

    // Google API error or network issue
    const isGoogleAuthError =
      err?.message?.includes('invalid_grant') ||
      err?.message?.includes('unauthorized') ||
      err?.message?.includes('PEM')

    return {
      status: 502,
      body: {
        error: isGoogleAuthError
          ? 'Failed to authenticate with Google Sheets API. Check your service account credentials.'
          : 'Failed to retrieve prompt from Google Sheets.',
        code: 'FETCH_ERROR',
        details: err?.message,
      },
    }
  }
}

export async function handlePromptHttpRequest(
  req: IncomingMessage,
  res: ServerResponse,
  options?: PromptHandlerOptions
): Promise<void> {
  // Disallow non-GET methods
  if (req.method && req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Allow', 'GET')
    res.end(JSON.stringify({ error: 'Method Not Allowed', code: 'METHOD_NOT_ALLOWED' }))
    return
  }

  const host = req.headers.host || 'localhost'
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const fullUrl = new URL(req.url || '/', `${protocol}://${host}`)

  const resourceParam = fullUrl.searchParams.get('resource') || fullUrl.searchParams.get('resource_id')
  const bypassCacheParam =
    fullUrl.searchParams.get('bypassCache') === 'true' ||
    req.headers['cache-control'] === 'no-cache'

  const { status, body } = await processPromptRequest(
    resourceParam,
    bypassCacheParam,
    options
  )

  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  // Crucial: never cache in browser or proxy so unpublished state is immediately effective
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  )
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  res.end(JSON.stringify(body))
}
