import { gql } from "graphql-request";

export const GET_USER = gql`
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

export const GET_USER_BY_NAME = gql`
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

export const FOLLOW = gql`
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

export const UPDATE_USER = gql`
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

export const REMOVE_USER = gql`
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
