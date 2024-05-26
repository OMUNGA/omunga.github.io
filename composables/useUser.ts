import type { IRegisterRequest, IRegisterResponse, IUserSchema } from "@/types";
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

  async function updateUser(data: Partial<IUserSchema>) {
    try {
      const response = await GqlUpdateUser({ user: data });
      if (response.updateUser) {
        const id = response.updateUser.id;
        return setResponse(200, "success", { id });
      }
    } catch (err) {
      return getResponse(err);
    }
  }

  return { register, updateUser };
}
