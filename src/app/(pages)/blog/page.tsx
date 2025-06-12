// app/page.tsx
import Posts from '@/app/ui/post'
import { Suspense } from 'react'

async function getPosts() {
  const response = await fetch('https://api.vercel.app/blog')
  return response.json()
}

export default function Page() {
  const posts = getPosts() // Don't await, so it stays a Promise

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}