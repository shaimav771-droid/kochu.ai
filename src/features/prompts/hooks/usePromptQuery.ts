import { useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPrompt, PromptServiceError } from '../services/promptService'
import type { PromptResource } from '../types/prompt'

export function usePromptQuery(resourceId: string | null) {
  const [bypassCache, setBypassCache] = useState(false)
  const [requestCount, setRequestCount] = useState(0)

  const trimmedId = resourceId?.trim() || null

  const query = useQuery<PromptResource, PromptServiceError>({
    queryKey: ['prompt', trimmedId, requestCount],
    queryFn: () => {
      if (!trimmedId) {
        throw new PromptServiceError('No resource ID provided', 'INVALID_ID', 400)
      }
      return fetchPrompt(trimmedId, { bypassCache })
    },
    enabled: Boolean(trimmedId),
    staleTime: 1000 * 30, // 30 seconds
    gcTime: 1000 * 60 * 5, // 5 minutes
    retry: false, // Don't auto-retry on 404 / 400 / 503; let user explicitly retry
  })

  const retryWithFreshCache = useCallback(() => {
    setBypassCache(true)
    setRequestCount((c) => c + 1)
  }, [])

  return {
    prompt: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    retryWithFreshCache,
  }
}
