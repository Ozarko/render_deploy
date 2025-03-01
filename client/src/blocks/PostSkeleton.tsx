import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


export function PostSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <Skeleton className="h-5 w-[120px]" />
        <Skeleton className="h-4 w-[100px] mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[85%]" />
        </div>
      </CardContent>
    </Card>
  )
}

export function PostListSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-[140px]" />
      <div className="space-y-4">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  )
}
