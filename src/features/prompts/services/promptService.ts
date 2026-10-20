import type { PromptResource, PromptApiErrorResponse } from '../types/prompt'

export class PromptServiceError extends Error {
  code: PromptApiErrorResponse['code']
  details?: string
  status?: number

  constructor(message: string, code: PromptApiErrorResponse['code'], status?: number, details?: string) {
    super(message)
    this.name = 'PromptServiceError'
    this.code = code
    this.status = status
    this.details = details
  }
}

export async function fetchPrompt(
  resourceId: string,
  options?: { bypassCache?: boolean }
): Promise<PromptResource> {
  const params = new URLSearchParams()
  params.set('resource', resourceId.trim())
  if (options?.bypassCache) {
    params.set('bypassCache', 'true')
  }

  const response = await fetch(`/api/prompt?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
      ...(options?.bypassCache ? { 'Cache-Control': 'no-cache' } : {}),
    },
  })

  let responseData: any = null
  try {
    responseData = await response.json()
  } catch {
    // Non-JSON response
  }

  if (!response.ok) {
    const errorMsg = responseData?.error || 'Failed to fetch prompt'
    const errorCode = responseData?.code || (response.status === 404 ? 'NOT_FOUND' : 'FETCH_ERROR')
    throw new PromptServiceError(errorMsg, errorCode, response.status, responseData?.details)
  }

  return responseData as PromptResource
}
