export interface PromptResource {
  resource_id: string
  title: string
  prompt: string
  published: boolean
}

export type PromptErrorCode =
  | 'INVALID_ID'
  | 'NOT_FOUND'
  | 'CREDENTIALS_MISSING'
  | 'FETCH_ERROR'
  | 'UNEXPECTED_ERROR'

export interface PromptApiErrorResponse {
  error: string
  code: PromptErrorCode
  details?: string
}

export type PromptStatus = 'idle' | 'loading' | 'success' | 'error'
