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
        socialMedia: [],
      },
      token: {
        value: "",
        expiredAt: "",
      },
      following: [],
    };
  },
  actions: {
    async setUser(sign: IUser): Promise<boolean> {
      this.isAuthenticated = !!sign.token;
      this.user = { ...this.user, ...sign.user };
      this.token = {
        value: sign.token,
        expiredAt: sign.expiresIn,
      };
      this.following.push(...sign.following);

      return this.isAuthenticated;
    },
    async updateUserStore(data: Partial<IUserSchema>): Promise<boolean> {
      if (data) {
        this.user = { ...this.user, ...data };
        return true;
      }
      return false;
    },

    // updateUserFollowing()
  },
  persist: true,
});
