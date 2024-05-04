// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/omunga-app/",
    // buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  ssr: false,
  image: {
    format: ["webp"],
  },
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      // GQL_HOST: "https://omunga-api-9pjq.onrender.com/graphql",
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          // REMOVER AS QUE NÃO FOREM UTILIZADAS
          Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        display: "swap",
      },
    ],
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
});
