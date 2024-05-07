import type { IRegisterRequest, IRegisterResponse } from "@/types";
import { useResponse } from "@/composables";

const { getResponse, setResponse } = useResponse();
export function useUser() {
  async function register({
    email,
    name,
    password,
    username,
  }: IRegisterRequest) {
    try {
      const response = await GqlCreateUser({ email, name, password, username });
      if (response.signup) {
        return setResponse(200, "success", {});
      }
    } catch (err) {
      return getResponse(err);
    }
  }

  return { register };
}
