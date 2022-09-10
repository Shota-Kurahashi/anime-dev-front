import { useLoginMutation, useLogoutMutation } from "../../generated/graphql";
import { graphqlRequestClient } from "../../libs/graphqlRequestClient";

export const useMutateAuth = () => {
  const loginMutate = useLoginMutation<Error>(graphqlRequestClient, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
    retry: false,
  });

  const logoutMutate = useLogoutMutation<Error>(graphqlRequestClient, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
    retry: false,
  });

  return { loginMutate, logoutMutate };
};
