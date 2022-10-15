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
      onError: () => {
        toast.error("エラーが発生しました");
      },
      retry: false,
      staleTime: Infinity,
    }
  );

  return { data, isLoading, isError, error };
};
