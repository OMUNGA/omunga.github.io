import { defineStore } from "pinia";

interface IApp {
  locale?: string;
  primary: string;
  gray: string;
}

export const useAppStore = defineStore("app", {
  state: (): IApp => {
    return {
      locale: "",
      primary: "",
      gray: "",
    };
  },
  actions: {
    updateThemeApp() {
      const appConfig = useAppConfig().ui;
      if (this.primary == "" && this.gray == "") {
        this.primary = appConfig.primary;
        this.gray = appConfig.gray;
      } else {
        appConfig.primary = this.primary;
        appConfig.gray = this.gray;
      }
    },
  },
  persist: true,
});
