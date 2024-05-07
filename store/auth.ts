import { defineStore } from "pinia";
import type { IAuthenticatedUser, IUser } from "@/types";
import { authenticatedUser } from "@/constants";
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
      },
      token: {
        value: "",
        expiredAt: "",
      },
    };
  },
  actions: {
    async setUser(sign: IUser): Promise<boolean> {
      if (sign.token) {
        this.isAuthenticated = true;
        this.user = sign.user;
        this.token = {
          value: sign.token,
          expiredAt: sign.expiresIn,
        };
      }
      return this.isAuthenticated;
    },

    async logout(): Promise<boolean> {
      this.$state = { ...authenticatedUser };
      return !this.isAuthenticated;
    },
  },
  persist: true,
});
