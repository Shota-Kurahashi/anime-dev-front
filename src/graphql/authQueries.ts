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
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      message
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
