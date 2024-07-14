"use client";
import { PostProps } from "@/types/Post";
import React, { useState } from "react";
import PostCard from "./PostCard";
import { Button } from "../ui/button";
import CardBlog from "../Cards/CardBlog";

export default function BlogList({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };
  return (
    <div className="">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.slice(0, loadMore).map((post) => {
          return (
            <li key={post._id}>
              <CardBlog {...post} />
            </li>
          );
        })}
      </ul>
      <div className="mt-8 text-center">
        {loadMore < posts?.length ? (
          <Button onClick={showMoreArticles}>Load More Articles</Button>
        ) : (
          <Button
            className="mt-8 flex justify-center"
            onClick={showMoreArticles}
            disabled
          >
            End of Blog List
          </Button>
        )}
      </div>

      {loadMore < posts?.length && (
        <p className="mt-8 flex justify-center">
          Showing {loadMore} of {posts?.length} articles
        </p>
      )}
    </div>
  );
}
