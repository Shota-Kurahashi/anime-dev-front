import React from "react";
import { useMutateAuth } from "../../hooks/auth/useMutateAuth";

export const Login = () => {
  const { loginMutate, logoutMutate } = useMutateAuth();

  return (
    <div>
      <button
        onClick={() =>
          loginMutate.mutate({
            authInput: { email: "test@gmail.com", password: "00000000" },
          })
        }
        type="button"
      >
        login
      </button>
      <button onClick={() => logoutMutate.mutate({})} type="button">
        logout
      </button>
    </div>
  );
};
