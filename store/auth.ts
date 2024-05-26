import { defineStore } from "pinia";
import type { IAuthenticatedUser, IUser, IUserSchema } from "@/types";
export const useAuthStore = defineStore("auth", {
  state: (): IAuthenticatedUser => {
    return {
      isAuthenticated: false,
      user: {
        id: "",
        username: "",
        name: "",
        email: "",
        bio: "",
        phone: "",
        photo: "",
      },
      token: {
        value: "",
        expiredAt: "",
      },
    };
  },
  actions: {
    async setUser(sign: IUser): Promise<boolean> {
      this.isAuthenticated = !!sign.token;
      this.user = sign.user;
      this.token = {
        value: sign.token,
        expiredAt: sign.expiresIn,
      };
      return this.isAuthenticated;
    },
    async updateUserStore(data: Partial<IUserSchema>): Promise<boolean> {
      if (data) {
        this.user = { ...this.user, ...data };
        return true;
      }
      return false;
    },
  },
  persist: true,
});
