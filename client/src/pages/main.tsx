import { PostForm } from '@/blocks/PostForm'
import { PostList } from '@/blocks/PostList'
import { PostSkeleton } from '@/blocks/PostSkeleton'
import { Suspense } from 'react'

function Main() {

  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Post App</h1>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] lg:gap-12">
        <div>
          <PostForm />
        </div>
        <div>
          <Suspense fallback={<PostSkeleton />}>
            <PostList />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

export default Main
