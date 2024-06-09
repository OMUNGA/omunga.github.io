import type { IResponse } from "./http";
import type { IUserSchema } from "./user";

export interface IUpdateArticle {
  content: string;
  cover: string;
  description: string;
  published: Boolean;
  slug: string;
  tags: string | string[];
  title: string;
}

export interface IArticle {
  postID: string;
  title: string;
  slug: string;
  description: string;
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

export interface ICreateArticleResponse extends IResponse {
  data: IArticle;
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

export interface IGetOneArticleResponse extends IResponse {
  data: IArticle;
}
