import { PostProps } from "@/types/Post"
import { sanityFetch } from "@/sanity/lib/fetch"
import { POSTS_QUERY } from "@/sanity/lib/fragments/pages/post"
import Posts from "@/components/Blog/Posts"

export default async function Page() {
  const posts = await sanityFetch<PostProps[]>({
    query: POSTS_QUERY,
  })

  console.log(posts.length)

  if (posts.length < 1) return <div>No posts</div>

  return <Posts posts={posts} />
}
