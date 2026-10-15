import { useQuery } from '@tanstack/react-query'
import { fetchCourses } from '../services/educationService'

export function useCourses() {
  return useQuery({
    queryKey: ['education', 'courses'],
    queryFn: fetchCourses,
  })
}
