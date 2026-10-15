import { useQuery } from '@tanstack/react-query'
import { fetchContentReels, fetchCuratedTools } from '../services/contentService'

export function useContentReels() {
  return useQuery({
    queryKey: ['content', 'reels'],
    queryFn: fetchContentReels,
  })
}

export function useCuratedTools() {
  return useQuery({
    queryKey: ['content', 'tools'],
    queryFn: fetchCuratedTools,
  })
}
