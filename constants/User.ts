import type { IAuthenticatedUser, IUser } from "@/types";

export const authenticatedUser: IAuthenticatedUser = {
  isAuthenticated: false,
  user: {
    id: "",
    username: "",
    name: "",
    email: "",
    bio: "",
    phone: "",
  },
  token: {
    value: "",
    expiredAt: "",
  },
};

export const user: IUser = {
  token: "",
  expiresIn: "",
  user: {
    bio: "",
    email: "",
    id: "",
    name: "",
    phone: "",
    username: "",
  },
};
