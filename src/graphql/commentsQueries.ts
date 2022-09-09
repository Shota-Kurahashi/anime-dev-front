import { gql } from "graphql-request";

export const GET_COMMENTS = gql`
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

export const CREATE_COMMENTS = gql`
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

export const LIKE_COMMENTS = gql`
  mutation LikeComment($userId: String!, $commentId: String!) {
    likeComment(userId: $userId, commentId: $commentId) {
      id
      likes
    }
  }
`;

export const UNLIKE_COMMENTS = gql`
  mutation UnlikeComment($userId: String!, $commentId: String!) {
    unLike(userId: $userId, commentId: $commentId) {
      id
      unLiked
    }
  }
`;
