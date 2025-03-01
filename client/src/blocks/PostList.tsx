
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { usePosts } from "@/hooks/usePosts"

export function PostList(){
  const {data} = usePosts()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recent Posts</h2>

      {data.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            No posts yet. Be the first to share something!
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{post.name}</CardTitle>
                <CardDescription>{post.createdAt.toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

