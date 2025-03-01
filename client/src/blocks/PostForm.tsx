import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAddPost } from "@/hooks/useAddPost"


export function PostForm() {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const {mutateAsync} = useAddPost()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && content.trim()) {
      mutateAsync({name, content})
      setName("")
      setContent("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Post</CardTitle>
        <CardDescription>Share your thoughts with the community</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="What's on your mind?"
              className="min-h-[120px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button type="submit" className="w-full">
            Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

