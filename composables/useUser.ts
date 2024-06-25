import type {
  IRegisterRequest,
  IRegisterResponse,
  IUserResponse,
  IUserSchema,
  IUsersResponse,
} from "@/types";
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
    } catch (error) {
      return getResponse(error);
    }
  }

  async function updateUser(data: Partial<IUserSchema>) {
    try {
      const response = await GqlUpdateUser({ user: data });
      if (response.updateUser) {
        const id = response.updateUser.id;
        return setResponse(200, "success", { id });
      }
    } catch (error) {
      return getResponse(error);
    }
  }

  async function getOneUser(username: string) {
    try {
      const user = await GqlGetOneUser({ username });
      const posts = await GqlGetAllUserArticle({ username });
      return setResponse(200, "success", {
        user: { ...user.FindOneUser },
        posts: { ...posts.FindPostByUserID },
      }) as IUserResponse;
    } catch (error) {
      return getResponse(error) as IUserResponse;
    }
  }

  async function searchUser(user: string) {
    try {
      const response = await GqlSearchUser({ user });
      return setResponse(
        200,
        "success",
        response.searchUsers as IUserSchema[]
      ) as IUsersResponse;
    } catch (error) {
      return getResponse(error);
    }
  }
  return { register, updateUser, getOneUser, searchUser };
}
