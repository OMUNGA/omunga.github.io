import type { UpdatePostDto } from "#gql";
import { useResponse } from "@/composables";
import type {
  ICreateArticleResponse,
  IGetAllArticleResponse,
  IGetOneArticleResponse,
} from "@/types";

interface ICreateArticle {
  title: string;
  description: string;
  cover: string;
  content: string;
  tags: string | string[];
  published: boolean;
}

export function useArticle() {
  const { getResponse, setResponse } = useResponse();

  async function getAllArticle(page: number = 1, limit: number = 5) {
    try {
      const response = await GqlGetAllArticle({ page: page, limit: limit });
      return setResponse(
        200,
        "success",
        response.FindAllPosts
      ) as IGetAllArticleResponse;
    } catch (error) {
      return getResponse(error) as IGetAllArticleResponse;
    }
  }

  async function getAllUserArticle(
    username: string,
    page: number = 1,
    limit: number = 5
  ) {
    try {
      const response = await GqlGetAllUserArticle({ page, limit, username });
      return setResponse(
        200,
        "success",
        response.FindPostByUserID
      ) as IGetAllArticleResponse;
    } catch (error) {
      return getResponse(error) as IGetAllArticleResponse;
    }
  }

  async function getAllUnpublishedArticle(page: number = 1, limit: number = 5) {
    try {
      const response = await GqlGetAllUnpublishedArticle({ page, limit });
      return setResponse(
        200,
        "success",
        response.FindAllUnpublishedPosts
      ) as IGetAllArticleResponse;
    } catch (error) {
      return getResponse(error) as IGetAllArticleResponse;
    }
  }

  async function getOneArticle(username: string, slug: string) {
    try {
      const response = await GqlGetOnePostByUserAndTitle({
        username,
        slug,
      });
      return setResponse(
        200,
        "success",
        response.findPostsByUserAndTitle
      ) as IGetOneArticleResponse;
    } catch (error) {
      return getResponse(error) as IGetOneArticleResponse;
    }
  }

  async function createArticle(data: ICreateArticle) {
    try {
      const response = await GqlCreateArticle({ ...data });
      return setResponse(
        200,
        "success",
        response.createPost
      ) as ICreateArticleResponse;
    } catch (error) {
      return getResponse(error);
    }
  }

  async function updateArticle(id: string, data: UpdatePostDto) {
    try {
      const response = await GqlUpdateArticle({ id, data });
      if (response.updatePost) {
        return setResponse(200, "success", response.updatePost);
      }
    } catch (error) {
      return getResponse(error);
    }
  }

  async function searchArticle(article: string) {
    try {
      const response = await GqlSearchArticle({ article });
      return setResponse(200, "success", response.searchPost);
    } catch (error) {
      return getResponse(error);
    }
  }

  async function getAllComments(postID: string) {
    try {
      const response = await GqlFindAllComments({ postID });
      return setResponse(200, "success", response.findAllComments);
    } catch (error) {
      return getResponse(error);
    }
  }

  async function createComment(postID: string, content: string) {
    try {
      const response = await GqlCreateComment({ postID, content });
      return setResponse(200, "success", response.CreateComment);
    } catch (error) {
      return getResponse(error);
    }
  }

  async function deleteComment(id: string) {
    try {
      const response = await GqlDeleteComment({ id });
      return setResponse(200, "success", response.removeComment);
    } catch (error) {
      return getResponse(error);
    }
  }

  async function editComment(commentID: string, content: string) {
    try {
      const response = await GqlUpdateComment({ commentID, content });
      return setResponse(200, "success", response.updateComment);
    } catch (error) {
      return getResponse(error);
    }
  }
  return {
    getAllArticle,
    createArticle,
    getAllUserArticle,
    getOneArticle,
    getAllUnpublishedArticle,
    updateArticle,
    searchArticle,
    getAllComments,
    createComment,
    deleteComment,
    editComment,
  };
}
