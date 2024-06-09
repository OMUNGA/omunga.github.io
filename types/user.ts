import type { IGetAllArticle } from "./article";
import type { IResponse } from "./http";

export interface IUser {
  user: IUserSchema;
  token: string;
  expiresIn: string;
}

export interface IUserSchema {
  id: string;
  username: string;
  name: string;
  email: string;
  bio: string;
  phone: string;
  photo?: string;
}

export interface IUserResponse extends IResponse {
  data: IUserDataResponse;
}

interface IUserDataResponse {
  user: IUserSchema;
  posts: IGetAllArticle;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILogoutResponse extends IResponse {
  data: IUser;
}

export interface ILoginResponse extends IResponse {
  data: IUser;
}

export interface IRegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  email: string;
  password: string;
}

export interface IToken {
  value: string;
  expiredAt: string;
}

export interface IAuthenticatedUser {
  isAuthenticated: boolean;
  user: IUserSchema;
  token: IToken;
}
