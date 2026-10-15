import { useQuery } from '@tanstack/react-query'
import { fetchCreatorMetrics } from '../services/mediaKitService'

export function useMediaKit() {
  return useQuery({
    queryKey: ['media-kit', 'metrics'],
    queryFn: fetchCreatorMetrics,
  })
}
