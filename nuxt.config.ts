// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  ui: {
    icons: ["mdi", "carbon", "logos", "heroicons"],
  },
  image: {
    format: ["webp"],
  },
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "https://omunga.up.railway.app/graphql",
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
    // "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
  ],
});
