import { useAuthStore } from "~/store";
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuthStore();
  if (
    isAuthenticated &&
    (to.name == "auth-login" || to.name == "auth-register")
  ) {
    return navigateTo("/");
  } else if (
    !isAuthenticated &&
    (to.name == "new" ||
      to.meta.layout == "settings" ||
      to.name == "@user-article-edit")
  ) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });

    // return navigateTo("/");
  }
});
