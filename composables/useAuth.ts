import type { ILoginRequest, ILoginResponse, IResponse } from "~/types";
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
  async function logout() {}

  return { login, logout };
}
