import { GraphQLClient } from "graphql-request";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT as string;

export const graphqlRequestClient = new GraphQLClient(ENDPOINT, {
  credentials: "include",
  mode: "cors",
});
