// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // image: {
  //   format: ["webp"],
  // },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          //  FontFamilyName: [values]
          //  Ex:
          //  Inter: [400],
        },
        display: "swap",
      },
    ],
    // Image Optimization
    // "@nuxt/image",
  ],
});
