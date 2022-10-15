import React from "react";
import { useQueryPopularPosts } from "../../hooks/posts/useQueryPopularPosts";
import { PostItem } from "./PostItem";

export const Popular = () => {
  const { data, isLoading } = useQueryPopularPosts();

  if (isLoading) return <div>loading...</div>;

  return (
    <ul className="h-full w-full">
      {data?.popular?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
