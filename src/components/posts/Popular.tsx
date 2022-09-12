import React from "react";
import { useQueryPopularPosts } from "../../hooks/posts/useQueryPopularPosts";
import { PostItem } from "./PostItem";

export const Popular = () => {
  const { data, isLoading, isError, error } = useQueryPopularPosts();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error?.message}</div>;

  return (
    <ul className="h-full w-full">
      {data?.popular?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
