import type { ILoginRequest, ILoginResponse, ILogoutResponse } from "~/types";
import { user } from "@/constants";
import { useResponse } from "@/composables";

const { getResponse, setResponse } = useResponse();
export function useAuth() {
  async function login({ email, password }: ILoginRequest) {
    try {
      const response = await GqlLoginUser({ email, password });
      if (response.sigIn) {
        useGqlToken({
          token: response.sigIn.token,
          config: {
            type: "Bearer",
          },
        });
        const username = response.sigIn.user.username;
        let data;
        if (username) {
          const getFollowing = await GqlGetFollowing({ username: username });
          data = getFollowing.GetFollowing.map((user) => {
            return user.followingUser.id;
          });
        }
        return setResponse(200, "success", {
          ...response.sigIn,
          following: data,
        }) as ILoginResponse;
      }
    } catch (error) {
      return getResponse(error) as ILoginResponse;
    }
  }
  async function logout() {
    try {
      useGqlToken(null);
      return setResponse(200, "success", user) as ILogoutResponse;
    } catch (error) {
      return getResponse(error) as ILogoutResponse;
    }
  }

  return { login, logout };
}
