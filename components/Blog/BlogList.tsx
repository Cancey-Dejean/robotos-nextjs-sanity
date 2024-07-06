"use client"
import { PostProps } from "@/types/Post"
import React, { useState } from "react"
import PostCard from "./PostCard"
import { Button } from "../ui/button"

export default function BlogList({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown)
  }
  return (
    <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.slice(0, loadMore).map((post) => {
          return (
            <li key={post._id}>
              <PostCard {...post} />
            </li>
          )
        })}
      </ul>
      <div className=" text-center mt-8">
        {loadMore < posts?.length ? (
          <Button onClick={showMoreArticles}>Load More Articles</Button>
        ) : (
          <Button
            className="flex justify-center mt-8"
            onClick={showMoreArticles}
            disabled
          >
            End of Blog List
          </Button>
        )}
      </div>

      {loadMore < posts?.length && (
        <p className="flex justify-center mt-8">
          Showing {loadMore} of {posts?.length} articles
        </p>
      )}
    </div>
  )
}
