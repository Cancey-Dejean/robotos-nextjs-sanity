"use client"

import { urlForImage } from "@/sanity/lib/image"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { useState } from "react"
import PostCard from "./PostCard"
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

      <ul className="grid grid-cols-3 gap-8">
        {posts?.length > 0 ? (
          posts.slice(0, loadMore).map((post) => (
            <li key={post._id}>
              <CardBlog {...post} className="h-full" />
            </li>
          ))
        ) : (
          <h2 className="p-4 text-red-500">No posts created</h2>
        )}
      </ul>

      {posts?.length > 3 && (
        <div className="text-center mt-8">
          {loadMore < posts?.length ? (
            <Button onClick={showMoreArticles} variant="purple">
              Load More
            </Button>
          ) : (
            <Button onClick={showMoreArticles} variant="purple" disabled>
              End of Blog List
            </Button>
          )}

          {loadMore < posts?.length && (
            <p className="mt-8">
              Showing {loadMore} of {posts?.length} articles.
            </p>
          )}
        </div>
      )}
    </section>
  )
}
