import type { ILoginRequest, ILoginResponse, ILogoutResponse } from "~/types";
import { user } from "@/constants";
import { useResponse } from "@/composables";

const { getResponse, setResponse } = useResponse();
export function useAuth() {
  async function login({ email, password }: ILoginRequest) {
    try {
      const response = await GqlLoginUser({ email, password });
      if (response.sigIn) {
        return setResponse(200, "success", response.sigIn) as ILoginResponse;
      }
    } catch (err) {
      const error = getResponse(err) as ILoginResponse;
      return {
        ...error,
      };
    }
  }
  async function logout() {
    try {
      return setResponse(200, "success", user) as ILogoutResponse;
    } catch (err) {
      const error = getResponse(err) as ILogoutResponse;
      return {
        ...error,
      };
    }
  }

  return { login, logout };
}
