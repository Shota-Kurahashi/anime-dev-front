import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Auth = {
  __typename?: "Auth";
  csrfToken?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type AuthInput = {
  email: Scalars["String"];
  facebookId?: InputMaybe<Scalars["String"]>;
  img?: InputMaybe<Scalars["String"]>;
  instagramId?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  tiktokId?: InputMaybe<Scalars["String"]>;
  twitterId?: InputMaybe<Scalars["String"]>;
  youtubeId?: InputMaybe<Scalars["String"]>;
};

export enum Category {
  Anime = "Anime",
  AnimeMovie = "AnimeMovie",
  Doujinshi = "Doujinshi",
  Drama = "Drama",
  DramaMovie = "DramaMovie",
  Manga = "Manga",
  Music = "Music",
  Tv = "TV",
  Unknown = "Unknown",
}

export type Comment = {
  __typename?: "Comment";
  authorName: Scalars["String"];
  authorRole: Role;
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deleted: Scalars["Boolean"];
  facebookId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  instagramId?: Maybe<Scalars["String"]>;
  ipAddress?: Maybe<Scalars["Float"]>;
  likes?: Maybe<Array<Scalars["String"]>>;
  post: Post;
  postId: Scalars["String"];
  spoiler: Scalars["Boolean"];
  spoilers?: Maybe<Array<Scalars["String"]>>;
  tiktokId?: Maybe<Scalars["String"]>;
  twitterId?: Maybe<Scalars["String"]>;
  unLiked?: Maybe<Array<Scalars["String"]>>;
  updatedAt: Scalars["DateTime"];
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]>;
  youtubeId?: Maybe<Scalars["String"]>;
};

export type CreateCommentInput = {
  authorName?: InputMaybe<Scalars["String"]>;
  authorRole?: InputMaybe<Role>;
  content: Scalars["String"];
  facebookId?: InputMaybe<Scalars["String"]>;
  instagramId?: InputMaybe<Scalars["String"]>;
  postId: Scalars["String"];
  tiktokId?: InputMaybe<Scalars["String"]>;
  twitterId?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
  youtubeId?: InputMaybe<Scalars["String"]>;
};

export type CreatePostInput = {
  authorName: Scalars["String"];
  authorRole?: InputMaybe<Role>;
  category?: InputMaybe<Category>;
  content?: InputMaybe<Scalars["String"]>;
  episode?: InputMaybe<Scalars["Int"]>;
  public?: InputMaybe<Scalars["Boolean"]>;
  startTime?: InputMaybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  url?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type FollowUserInput = {
  followingUserId: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createComment: Comment;
  createPost: Post;
  follow: User;
  like: Post;
  likeComment: Comment;
  login: Auth;
  logout: Auth;
  participant: Post;
  refresh: Auth;
  removePost: Post;
  removeUser: User;
  sighUp: Auth;
  unLike: Comment;
  updateProfile: Profile;
  updateUser: User;
};

export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};

export type MutationFollowArgs = {
  followUserInput: FollowUserInput;
};

export type MutationLikeArgs = {
  id: Scalars["String"];
};

export type MutationLikeCommentArgs = {
  commentId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationLoginArgs = {
  authInput: AuthInput;
};

export type MutationParticipantArgs = {
  participantInput: ParticipantInput;
};

export type MutationRemovePostArgs = {
  id: Scalars["String"];
};

export type MutationSighUpArgs = {
  authInput: AuthInput;
};

export type MutationUnLikeArgs = {
  commentId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type ParticipantInput = {
  postId: Scalars["String"];
  userId: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  _count: PostCount;
  authorName: Scalars["String"];
  authorRole: Role;
  category: Category;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deleted: Scalars["Boolean"];
  episode?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  ipaddress?: Maybe<Scalars["Float"]>;
  like?: Maybe<Array<Scalars["String"]>>;
  participant?: Maybe<Array<Scalars["String"]>>;
  public: Scalars["Boolean"];
  startTime: Scalars["DateTime"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  url?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]>;
};

export type PostCount = {
  __typename?: "PostCount";
  comments: Scalars["Int"];
};

export type Profile = {
  __typename?: "Profile";
  createdAt: Scalars["DateTime"];
  facebookId?: Maybe<Scalars["String"]>;
  favorite?: Maybe<Array<Scalars["String"]>>;
  id: Scalars["ID"];
  img?: Maybe<Scalars["String"]>;
  instagramId?: Maybe<Scalars["String"]>;
  tiktokId?: Maybe<Scalars["String"]>;
  twitterId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["String"];
  youtubeId?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  comments: Array<Comment>;
  follower: Array<Post>;
  like: Array<Post>;
  loginUser: User;
  popular: Array<Post>;
  post: Post;
  posts: Array<Post>;
  profile: Profile;
  user: User;
  userByName: User;
  userPosts: Array<Post>;
};

export type QueryCommentsArgs = {
  postId: Scalars["String"];
};

export type QueryPostArgs = {
  id: Scalars["String"];
};

export type QueryProfileArgs = {
  userId: Scalars["String"];
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryUserByNameArgs = {
  username: Scalars["String"];
};

export type QueryUserPostsArgs = {
  id: Scalars["String"];
};

export enum Role {
  Anonymous = "ANONYMOUS",
  Authenticated = "AUTHENTICATED",
}

export type UpdateProfileInput = {
  facebookId?: InputMaybe<Scalars["String"]>;
  favorite?: InputMaybe<Array<Scalars["String"]>>;
  img?: InputMaybe<Scalars["String"]>;
  instagramId?: InputMaybe<Scalars["String"]>;
  tiktokId?: InputMaybe<Scalars["String"]>;
  twitterId?: InputMaybe<Scalars["String"]>;
  youtubeId?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  id?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  _count: UserCount;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars["DateTime"];
  deleted: Scalars["Boolean"];
  email: Scalars["String"];
  follow?: Maybe<Array<Scalars["String"]>>;
  followed?: Maybe<Array<Scalars["String"]>>;
  hashedPassword: Scalars["String"];
  hashedRefreshToken?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ipaddress?: Maybe<Scalars["Float"]>;
  loginStatus: Scalars["Boolean"];
  posts?: Maybe<Array<Post>>;
  profile?: Maybe<Profile>;
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UserCount = {
  __typename?: "UserCount";
  comments: Scalars["Int"];
  posts: Scalars["Int"];
};

export type LoginMutationVariables = Exact<{
  authInput: AuthInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "Auth"; message?: string | null };
};

export type SighUpMutationVariables = Exact<{
  authInput: AuthInput;
}>;

export type SighUpMutation = {
  __typename?: "Mutation";
  sighUp: { __typename?: "Auth"; message?: string | null };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: "Mutation";
  logout: { __typename?: "Auth"; message?: string | null };
};

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshTokenMutation = {
  __typename?: "Mutation";
  refresh: { __typename?: "Auth"; message?: string | null };
};

export type GetCommentsQueryVariables = Exact<{
  postId: Scalars["String"];
}>;

export type GetCommentsQuery = {
  __typename?: "Query";
  comments: Array<{
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
  }>;
};

export type CreateCommentMutationVariables = Exact<{
  createCommentInput: CreateCommentInput;
}>;

export type CreateCommentMutation = {
  __typename?: "Mutation";
  createComment: {
    __typename?: "Comment";
    id: string;
    userId?: string | null;
    authorName: string;
    createdAt: any;
    content: string;
    tiktokId?: string | null;
    twitterId?: string | null;
    instagramId?: string | null;
    facebookId?: string | null;
    youtubeId?: string | null;
  };
};

export type LikeCommentMutationVariables = Exact<{
  userId: Scalars["String"];
  commentId: Scalars["String"];
}>;

export type LikeCommentMutation = {
  __typename?: "Mutation";
  likeComment: {
    __typename?: "Comment";
    id: string;
    likes?: Array<string> | null;
  };
};

export type UnlikeCommentMutationVariables = Exact<{
  userId: Scalars["String"];
  commentId: Scalars["String"];
}>;

export type UnlikeCommentMutation = {
  __typename?: "Mutation";
  unLike: {
    __typename?: "Comment";
    id: string;
    unLiked?: Array<string> | null;
  };
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = {
  __typename?: "Query";
  posts: Array<{
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
  }>;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetPostQuery = {
  __typename?: "Query";
  post: {
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
};

export type GetPopularPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPopularPostsQuery = {
  __typename?: "Query";
  popular: Array<{
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
  }>;
};

export type GetUserPostsQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserPostsQuery = {
  __typename?: "Query";
  userPosts: Array<{
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
  }>;
};

export type FollowerPostsQueryVariables = Exact<{ [key: string]: never }>;

export type FollowerPostsQuery = {
  __typename?: "Query";
  follower: Array<{
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
  }>;
};

export type GetLikePostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetLikePostsQuery = {
  __typename?: "Query";
  like: Array<{
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
    }> | null;
  }>;
};

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost: {
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
  };
};

export type ParticipantMutationVariables = Exact<{
  participantInput: ParticipantInput;
}>;

export type ParticipantMutation = {
  __typename?: "Mutation";
  participant: { __typename?: "Post"; id: string };
};

export type LikeMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type LikeMutation = {
  __typename?: "Mutation";
  like: { __typename?: "Post"; id: string; like?: Array<string> | null };
};

export type GetProfileQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetProfileQuery = {
  __typename?: "Query";
  profile: {
    __typename?: "Profile";
    id: string;
    favorite?: Array<string> | null;
    twitterId?: string | null;
    youtubeId?: string | null;
    tiktokId?: string | null;
    instagramId?: string | null;
    facebookId?: string | null;
    img?: string | null;
  };
};

export type UpdateProfileMutationVariables = Exact<{
  updateProfileInput: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: "Mutation";
  updateProfile: {
    __typename?: "Profile";
    id: string;
    favorite?: Array<string> | null;
    twitterId?: string | null;
    youtubeId?: string | null;
    tiktokId?: string | null;
    instagramId?: string | null;
    facebookId?: string | null;
    img?: string | null;
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export type LoginUserQueryVariables = Exact<{ [key: string]: never }>;

export type LoginUserQuery = {
  __typename?: "Query";
  loginUser: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export type GetUserByNameQueryVariables = Exact<{
  username: Scalars["String"];
}>;

export type GetUserByNameQuery = {
  __typename?: "Query";
  userByName: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export type FollowMutationVariables = Exact<{
  followUserInput: FollowUserInput;
}>;

export type FollowMutation = {
  __typename?: "Mutation";
  follow: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export type RemoveUserMutationVariables = Exact<{ [key: string]: never }>;

export type RemoveUserMutation = {
  __typename?: "Mutation";
  removeUser: {
    __typename?: "User";
    id: string;
    createdAt: any;
    username: string;
    follow?: Array<string> | null;
    followed?: Array<string> | null;
    loginStatus: boolean;
    profile?: {
      __typename?: "Profile";
      id: string;
      favorite?: Array<string> | null;
      twitterId?: string | null;
      youtubeId?: string | null;
      tiktokId?: string | null;
      instagramId?: string | null;
      facebookId?: string | null;
      img?: string | null;
    } | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
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
    }> | null;
  };
};

export const LoginDocument = `
    mutation Login($authInput: AuthInput!) {
  login(authInput: $authInput) {
    message
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ["Login"],
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        client,
        LoginDocument,
        variables,
        headers
      )(),
    options
  );
export const SighUpDocument = `
    mutation SighUp($authInput: AuthInput!) {
  sighUp(authInput: $authInput) {
    message
  }
}
    `;
export const useSighUpMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SighUpMutation,
    TError,
    SighUpMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<SighUpMutation, TError, SighUpMutationVariables, TContext>(
    ["SighUp"],
    (variables?: SighUpMutationVariables) =>
      fetcher<SighUpMutation, SighUpMutationVariables>(
        client,
        SighUpDocument,
        variables,
        headers
      )(),
    options
  );
export const LogoutDocument = `
    mutation Logout {
  logout {
    message
  }
}
    `;
export const useLogoutMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LogoutMutation,
    TError,
    LogoutMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
    ["Logout"],
    (variables?: LogoutMutationVariables) =>
      fetcher<LogoutMutation, LogoutMutationVariables>(
        client,
        LogoutDocument,
        variables,
        headers
      )(),
    options
  );
export const RefreshTokenDocument = `
    mutation RefreshToken {
  refresh {
    message
  }
}
    `;
export const useRefreshTokenMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    RefreshTokenMutation,
    TError,
    RefreshTokenMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    RefreshTokenMutation,
    TError,
    RefreshTokenMutationVariables,
    TContext
  >(
    ["RefreshToken"],
    (variables?: RefreshTokenMutationVariables) =>
      fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(
        client,
        RefreshTokenDocument,
        variables,
        headers
      )(),
    options
  );
export const GetCommentsDocument = `
    query GetComments($postId: String!) {
  comments(postId: $postId) {
    id
    userId
    authorName
    createdAt
    content
    likes
    unLiked
    tiktokId
    twitterId
    instagramId
    facebookId
    youtubeId
    spoiler
    spoilers
  }
}
    `;
export const useGetCommentsQuery = <TData = GetCommentsQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetCommentsQueryVariables,
  options?: UseQueryOptions<GetCommentsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetCommentsQuery, TError, TData>(
    ["GetComments", variables],
    fetcher<GetCommentsQuery, GetCommentsQueryVariables>(
      client,
      GetCommentsDocument,
      variables,
      headers
    ),
    options
  );

useGetCommentsQuery.getKey = (variables: GetCommentsQueryVariables) => [
  "GetComments",
  variables,
];
export const CreateCommentDocument = `
    mutation CreateComment($createCommentInput: CreateCommentInput!) {
  createComment(createCommentInput: $createCommentInput) {
    id
    userId
    authorName
    createdAt
    content
    tiktokId
    twitterId
    instagramId
    facebookId
    youtubeId
  }
}
    `;
export const useCreateCommentMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreateCommentMutation,
    TError,
    CreateCommentMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    CreateCommentMutation,
    TError,
    CreateCommentMutationVariables,
    TContext
  >(
    ["CreateComment"],
    (variables?: CreateCommentMutationVariables) =>
      fetcher<CreateCommentMutation, CreateCommentMutationVariables>(
        client,
        CreateCommentDocument,
        variables,
        headers
      )(),
    options
  );
export const LikeCommentDocument = `
    mutation LikeComment($userId: String!, $commentId: String!) {
  likeComment(userId: $userId, commentId: $commentId) {
    id
    likes
  }
}
    `;
export const useLikeCommentMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LikeCommentMutation,
    TError,
    LikeCommentMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    LikeCommentMutation,
    TError,
    LikeCommentMutationVariables,
    TContext
  >(
    ["LikeComment"],
    (variables?: LikeCommentMutationVariables) =>
      fetcher<LikeCommentMutation, LikeCommentMutationVariables>(
        client,
        LikeCommentDocument,
        variables,
        headers
      )(),
    options
  );
export const UnlikeCommentDocument = `
    mutation UnlikeComment($userId: String!, $commentId: String!) {
  unLike(userId: $userId, commentId: $commentId) {
    id
    unLiked
  }
}
    `;
export const useUnlikeCommentMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    UnlikeCommentMutation,
    TError,
    UnlikeCommentMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    UnlikeCommentMutation,
    TError,
    UnlikeCommentMutationVariables,
    TContext
  >(
    ["UnlikeComment"],
    (variables?: UnlikeCommentMutationVariables) =>
      fetcher<UnlikeCommentMutation, UnlikeCommentMutationVariables>(
        client,
        UnlikeCommentDocument,
        variables,
        headers
      )(),
    options
  );
export const GetPostsDocument = `
    query GetPosts {
  posts {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
      deleted
    }
  }
}
    `;
export const useGetPostsQuery = <TData = GetPostsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: GetPostsQueryVariables,
  options?: UseQueryOptions<GetPostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetPostsQuery, TError, TData>(
    variables === undefined ? ["GetPosts"] : ["GetPosts", variables],
    fetcher<GetPostsQuery, GetPostsQueryVariables>(
      client,
      GetPostsDocument,
      variables,
      headers
    ),
    options
  );

useGetPostsQuery.getKey = (variables?: GetPostsQueryVariables) =>
  variables === undefined ? ["GetPosts"] : ["GetPosts", variables];
export const GetPostDocument = `
    query GetPost($id: String!) {
  post(id: $id) {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
      deleted
    }
  }
}
    `;
export const useGetPostQuery = <TData = GetPostQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetPostQueryVariables,
  options?: UseQueryOptions<GetPostQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetPostQuery, TError, TData>(
    ["GetPost", variables],
    fetcher<GetPostQuery, GetPostQueryVariables>(
      client,
      GetPostDocument,
      variables,
      headers
    ),
    options
  );

useGetPostQuery.getKey = (variables: GetPostQueryVariables) => [
  "GetPost",
  variables,
];
export const GetPopularPostsDocument = `
    query GetPopularPosts {
  popular {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
      deleted
    }
  }
}
    `;
export const useGetPopularPostsQuery = <
  TData = GetPopularPostsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: GetPopularPostsQueryVariables,
  options?: UseQueryOptions<GetPopularPostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetPopularPostsQuery, TError, TData>(
    variables === undefined
      ? ["GetPopularPosts"]
      : ["GetPopularPosts", variables],
    fetcher<GetPopularPostsQuery, GetPopularPostsQueryVariables>(
      client,
      GetPopularPostsDocument,
      variables,
      headers
    ),
    options
  );

useGetPopularPostsQuery.getKey = (variables?: GetPopularPostsQueryVariables) =>
  variables === undefined
    ? ["GetPopularPosts"]
    : ["GetPopularPosts", variables];
export const GetUserPostsDocument = `
    query GetUserPosts($id: String!) {
  userPosts(id: $id) {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
      deleted
    }
  }
}
    `;
export const useGetUserPostsQuery = <
  TData = GetUserPostsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetUserPostsQueryVariables,
  options?: UseQueryOptions<GetUserPostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetUserPostsQuery, TError, TData>(
    ["GetUserPosts", variables],
    fetcher<GetUserPostsQuery, GetUserPostsQueryVariables>(
      client,
      GetUserPostsDocument,
      variables,
      headers
    ),
    options
  );

useGetUserPostsQuery.getKey = (variables: GetUserPostsQueryVariables) => [
  "GetUserPosts",
  variables,
];
export const FollowerPostsDocument = `
    query FollowerPosts {
  follower {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
      deleted
    }
  }
}
    `;
export const useFollowerPostsQuery = <
  TData = FollowerPostsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: FollowerPostsQueryVariables,
  options?: UseQueryOptions<FollowerPostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<FollowerPostsQuery, TError, TData>(
    variables === undefined ? ["FollowerPosts"] : ["FollowerPosts", variables],
    fetcher<FollowerPostsQuery, FollowerPostsQueryVariables>(
      client,
      FollowerPostsDocument,
      variables,
      headers
    ),
    options
  );

useFollowerPostsQuery.getKey = (variables?: FollowerPostsQueryVariables) =>
  variables === undefined ? ["FollowerPosts"] : ["FollowerPosts", variables];
export const GetLikePostsDocument = `
    query GetLikePosts {
  like {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
    deleted
    _count {
      comments
    }
    comments {
      id
      userId
      authorName
      createdAt
      content
      likes
      unLiked
      tiktokId
      twitterId
      instagramId
      facebookId
      youtubeId
      spoiler
      spoilers
    }
  }
}
    `;
export const useGetLikePostsQuery = <
  TData = GetLikePostsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: GetLikePostsQueryVariables,
  options?: UseQueryOptions<GetLikePostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetLikePostsQuery, TError, TData>(
    variables === undefined ? ["GetLikePosts"] : ["GetLikePosts", variables],
    fetcher<GetLikePostsQuery, GetLikePostsQueryVariables>(
      client,
      GetLikePostsDocument,
      variables,
      headers
    ),
    options
  );

useGetLikePostsQuery.getKey = (variables?: GetLikePostsQueryVariables) =>
  variables === undefined ? ["GetLikePosts"] : ["GetLikePosts", variables];
export const CreatePostDocument = `
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    userId
    createdAt
    authorRole
    authorName
    startTime
    title
    episode
    category
    content
    participant
    like
    public
    url
  }
}
    `;
export const useCreatePostMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    CreatePostMutation,
    TError,
    CreatePostMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    CreatePostMutation,
    TError,
    CreatePostMutationVariables,
    TContext
  >(
    ["CreatePost"],
    (variables?: CreatePostMutationVariables) =>
      fetcher<CreatePostMutation, CreatePostMutationVariables>(
        client,
        CreatePostDocument,
        variables,
        headers
      )(),
    options
  );
export const ParticipantDocument = `
    mutation Participant($participantInput: ParticipantInput!) {
  participant(participantInput: $participantInput) {
    id
  }
}
    `;
export const useParticipantMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    ParticipantMutation,
    TError,
    ParticipantMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    ParticipantMutation,
    TError,
    ParticipantMutationVariables,
    TContext
  >(
    ["Participant"],
    (variables?: ParticipantMutationVariables) =>
      fetcher<ParticipantMutation, ParticipantMutationVariables>(
        client,
        ParticipantDocument,
        variables,
        headers
      )(),
    options
  );
export const LikeDocument = `
    mutation Like($id: String!) {
  like(id: $id) {
    id
    like
  }
}
    `;
export const useLikeMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LikeMutation,
    TError,
    LikeMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LikeMutation, TError, LikeMutationVariables, TContext>(
    ["Like"],
    (variables?: LikeMutationVariables) =>
      fetcher<LikeMutation, LikeMutationVariables>(
        client,
        LikeDocument,
        variables,
        headers
      )(),
    options
  );
export const GetProfileDocument = `
    query GetProfile($userId: String!) {
  profile(userId: $userId) {
    id
    favorite
    twitterId
    youtubeId
    tiktokId
    instagramId
    facebookId
    img
  }
}
    `;
export const useGetProfileQuery = <TData = GetProfileQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetProfileQueryVariables,
  options?: UseQueryOptions<GetProfileQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetProfileQuery, TError, TData>(
    ["GetProfile", variables],
    fetcher<GetProfileQuery, GetProfileQueryVariables>(
      client,
      GetProfileDocument,
      variables,
      headers
    ),
    options
  );

useGetProfileQuery.getKey = (variables: GetProfileQueryVariables) => [
  "GetProfile",
  variables,
];
export const UpdateProfileDocument = `
    mutation UpdateProfile($updateProfileInput: UpdateProfileInput!) {
  updateProfile(updateProfileInput: $updateProfileInput) {
    id
    favorite
    twitterId
    youtubeId
    tiktokId
    instagramId
    facebookId
    img
  }
}
    `;
export const useUpdateProfileMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    UpdateProfileMutation,
    TError,
    UpdateProfileMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    UpdateProfileMutation,
    TError,
    UpdateProfileMutationVariables,
    TContext
  >(
    ["UpdateProfile"],
    (variables?: UpdateProfileMutationVariables) =>
      fetcher<UpdateProfileMutation, UpdateProfileMutationVariables>(
        client,
        UpdateProfileDocument,
        variables,
        headers
      )(),
    options
  );
export const GetUserDocument = `
    query GetUser($id: String!) {
  user(id: $id) {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetUserQuery, TError, TData>(
    ["GetUser", variables],
    fetcher<GetUserQuery, GetUserQueryVariables>(
      client,
      GetUserDocument,
      variables,
      headers
    ),
    options
  );

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => [
  "GetUser",
  variables,
];
export const LoginUserDocument = `
    query LoginUser {
  loginUser {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useLoginUserQuery = <TData = LoginUserQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: LoginUserQueryVariables,
  options?: UseQueryOptions<LoginUserQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<LoginUserQuery, TError, TData>(
    variables === undefined ? ["LoginUser"] : ["LoginUser", variables],
    fetcher<LoginUserQuery, LoginUserQueryVariables>(
      client,
      LoginUserDocument,
      variables,
      headers
    ),
    options
  );

useLoginUserQuery.getKey = (variables?: LoginUserQueryVariables) =>
  variables === undefined ? ["LoginUser"] : ["LoginUser", variables];
export const GetUserByNameDocument = `
    query GetUserByName($username: String!) {
  userByName(username: $username) {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useGetUserByNameQuery = <
  TData = GetUserByNameQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetUserByNameQueryVariables,
  options?: UseQueryOptions<GetUserByNameQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetUserByNameQuery, TError, TData>(
    ["GetUserByName", variables],
    fetcher<GetUserByNameQuery, GetUserByNameQueryVariables>(
      client,
      GetUserByNameDocument,
      variables,
      headers
    ),
    options
  );

useGetUserByNameQuery.getKey = (variables: GetUserByNameQueryVariables) => [
  "GetUserByName",
  variables,
];
export const FollowDocument = `
    mutation Follow($followUserInput: FollowUserInput!) {
  follow(followUserInput: $followUserInput) {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useFollowMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    FollowMutation,
    TError,
    FollowMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<FollowMutation, TError, FollowMutationVariables, TContext>(
    ["Follow"],
    (variables?: FollowMutationVariables) =>
      fetcher<FollowMutation, FollowMutationVariables>(
        client,
        FollowDocument,
        variables,
        headers
      )(),
    options
  );
export const UpdateUserDocument = `
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    ["UpdateUser"],
    (variables?: UpdateUserMutationVariables) =>
      fetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        client,
        UpdateUserDocument,
        variables,
        headers
      )(),
    options
  );
export const RemoveUserDocument = `
    mutation RemoveUser {
  removeUser {
    id
    createdAt
    username
    follow
    followed
    loginStatus
    profile {
      id
      favorite
      twitterId
      youtubeId
      tiktokId
      instagramId
      facebookId
      img
    }
    posts {
      id
      createdAt
      authorRole
      authorName
      startTime
      title
      episode
      category
      content
      participant
      like
      public
      url
    }
  }
}
    `;
export const useRemoveUserMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    RemoveUserMutation,
    TError,
    RemoveUserMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    RemoveUserMutation,
    TError,
    RemoveUserMutationVariables,
    TContext
  >(
    ["RemoveUser"],
    (variables?: RemoveUserMutationVariables) =>
      fetcher<RemoveUserMutation, RemoveUserMutationVariables>(
        client,
        RemoveUserDocument,
        variables,
        headers
      )(),
    options
  );
