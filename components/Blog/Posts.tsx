"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { PostProps } from "@/types/Post"
import CardBlog from "../Cards/CardBlog"
import SectionTitle from "../SectionTitle"

export default function Posts({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown)
  }

  return (
    <section className="container mx-auto grid grid-cols-1 justify-self-center py-28 px-5 md:py-32">
      <SectionTitle className="text-center mb-8">Blogs</SectionTitle>

      <ul className="grid lg:grid-cols-3 gap-8">
        {posts?.length > 0 ? (
          posts.slice(0, loadMore).map((post) => (
            <li key={post.title}>
              <CardBlog {...post} className="h-full" />
            </li>
          ))
        ) : (
          <h2 className="p-4 text-red-500">No posts created</h2>
        )}
      </ul>

      {posts?.length > 3 && (
        <div className="items-center flex flex-col justify-center gap-8 mt-8">
          {loadMore < posts?.length ? (
            <Button onClick={showMoreArticles} variant="purple">
              Load More
            </Button>
          ) : (
            <p>No more articles.</p>
          )}

          {loadMore < posts?.length && (
            <p>
              Showing {loadMore} of {posts?.length} articles.
            </p>
          )}
        </div>
      )}
    </section>
  )
}
