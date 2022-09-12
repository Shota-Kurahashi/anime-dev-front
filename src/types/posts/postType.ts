import { Category, Role } from "../../generated/graphql";

export type PopularPosts = {
  __typename?: "Post";
  id: string;
  userId?: string | null;
  createdAt: any;
  authorRole: Role;
  authorName: string;
  startTime: any;
  title: string;
  episode?: number | null;
  category: Category;
  content?: string | null;
  participant?: Array<string> | null;
  like?: Array<string> | null;
  public: boolean;
  url?: string | null;
  deleted: boolean;
  _count: { __typename?: "PostCount"; comments: number };
  comments?: Array<{
    __typename?: "Comment";
    id: string;
    userId?: string | null;
    authorName: string;
    createdAt: any;
    content: string;
    likes?: Array<string> | null;
    unLiked?: Array<string> | null;
    tiktokId?: string | null;
    twitterId?: string | null;
    instagramId?: string | null;
    facebookId?: string | null;
    youtubeId?: string | null;
    spoiler: boolean;
    spoilers?: Array<string> | null;
    deleted: boolean;
  }> | null;
};
