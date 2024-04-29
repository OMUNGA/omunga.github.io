import { defineStore } from "pinia";
import { emptyUser } from "@/constants";
interface IUser {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    name: string;
    email: string;
    bio: string;
    phone: string;
  };
  token: Token;
}

interface Token {
  value: string;
  expiredAt: string;
}

interface sigIn {
  token: string;
  expiresIn: any;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    bio: string;
    phone: string;
  };
}

export const useAuthStore = defineStore("auth", {
  state: (): IUser => {
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
    async setUser(sigIn: sigIn): Promise<boolean> {
      if (sigIn.token) {
        this.isAuthenticated = true;
        this.user = sigIn.user;
        this.token = {
          value: sigIn.token,
          expiredAt: sigIn.expiresIn,
        };
      }
      return this.isAuthenticated;
    },

    async logout(): Promise<boolean> {
      this.$state = { ...emptyUser };

      console.log("logout ", this.isAuthenticated);
      return !this.isAuthenticated;
    },
  },
  persist: true,
});
