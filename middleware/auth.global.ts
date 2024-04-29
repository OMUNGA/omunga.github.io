import { useAuthStore } from "~/store";
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuthStore();

  if (
    isAuthenticated &&
    (to.name == "auth-login" || to.name == "auth-register")
  ) {
    return navigateTo("/");
  }
});
