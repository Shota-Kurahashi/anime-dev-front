import { toast } from "react-toastify";
import {
  GetPopularPostsQuery,
  useGetPopularPostsQuery,
} from "../../generated/graphql";
import { graphqlRequestClient } from "../../libs/graphqlRequestClient";

export const useQueryPopularPosts = () => {
  const { data, isLoading, isError, error } = useGetPopularPostsQuery<
    GetPopularPostsQuery,
    Error
  >(
    graphqlRequestClient,
    {},
    {
      onError: (err) => {
        toast.error(err.message);
      },
      retry: false,
      staleTime: Infinity,
    }
  );

  return { data, isLoading, isError, error };
};
