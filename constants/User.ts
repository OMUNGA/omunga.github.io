import type { IAuthenticatedUser } from "@/types";

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
