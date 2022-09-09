import { gql } from "graphql-request";

export const GET_POSTS = gql`
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

export const GET_POST = gql`
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

export const GET_POPULAR_POSTS = gql`
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

export const GET_USER_POSTS = gql`
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
export const FOLLOWER_POSTS = gql`
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

export const GET_LIKE_POSTS = gql`
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

export const CREATE_POST = gql`
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

export const PARTICIPANT = gql`
  mutation Participant($participantInput: ParticipantInput!) {
    participant(participantInput: $participantInput) {
      id
    }
  }
`;

export const LIKE = gql`
  mutation Like($id: String!) {
    like(id: $id) {
      id
      like
    }
  }
`;
