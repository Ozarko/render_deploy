import { Post } from '@/types/Post';
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey:[ 'addPost'],
    mutationFn: async (newPost: {name: string; content: string}) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })

      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
    onSuccess: (result: Post) => {
      queryClient.setQueryData(['posts'], (prev: Post[]) => [result, ...prev])
    },
  })
}
