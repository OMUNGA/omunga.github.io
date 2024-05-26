import type { IResponse } from "./http";
import type { IUserSchema } from "./user";

export interface IArticle {
  postID: string;
  title: string;
  content: string;
  cover: string;
  tags: string[];
  published?: boolean;
  userID: string;
  createdAt: string;
  user: Partial<IUserSchema>;
  comment: [];
  postLike: [];
}

export interface IGetAllArticle {
  posts: IArticle[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}

export interface IGetAllArticleResponse extends IResponse {
  data: IGetAllArticle;
}
