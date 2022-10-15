import React, { FC } from "react";
import { PopularPosts } from "../../types/posts/postType";
import { distanceTime } from "../../utils/date";

type Props = {
  post: PopularPosts;
};

export const PostItem: FC<Props> = ({ post }) => (
  <li className=" w-full border-b p-6">
    <div className="w-full ">
      <h5 className="">{post.title}</h5>
      <p>{distanceTime(post.createdAt)}</p>
    </div>
  </li>
);
