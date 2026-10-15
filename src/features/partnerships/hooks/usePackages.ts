import { useQuery } from '@tanstack/react-query'
import { fetchCommercialPackages } from '../services/packagesService'

export function useCommercialPackages() {
  return useQuery({
    queryKey: ['partnerships', 'packages'],
    queryFn: fetchCommercialPackages,
  })
}
