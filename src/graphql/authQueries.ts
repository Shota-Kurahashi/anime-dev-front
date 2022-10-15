import { gql } from "graphql-request";

export const LOGIN = gql`
  mutation Login($authInput: AuthInput!) {
    login(authInput: $authInput) {
      message
    }
  }
`;

export const SIGH_UP = gql`
  mutation SighUp($authInput: AuthInput!) {
    sighUp(authInput: $authInput) {
      message
      user {
        id
        profile {
          id
        }
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      message
      user {
        id
        profile {
          id
        }
      }
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refresh {
      message
    }
  }
`;
