import { Post } from '@/types/Post'
import { useSuspenseQuery } from '@tanstack/react-query'

export const usePosts = () => {
  return useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`) // Add your API URL here
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const result = await response?.json()
      return result as Post[]
    },
  })
}
