import { gql } from "graphql-request";

export const GET_PROFILE = gql`
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

export const UPDATE_PROFILE = gql`
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
