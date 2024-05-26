import { useResponse } from "@/composables";
import type { IGetAllArticle, IGetAllArticleResponse } from "@/types";
export function useArticle() {
  const { getResponse, setResponse } = useResponse();

  async function getAll(page: number = 1, limit: number = 5) {
    try {
      const response = await GqlGetAll({ page: page, limit: limit });
      return setResponse(
        200,
        "sucess",
        response.FindAllPosts
      ) as IGetAllArticleResponse;
    } catch (err) {
      return getResponse(err) as IGetAllArticleResponse;
    }
  }

  async function getOne(id: String) {}

  return { getAll };
}
