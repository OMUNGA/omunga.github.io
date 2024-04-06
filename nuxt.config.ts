// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  image: {
    format: ["webp"],
  },
  colorMode: {
    preference: 'system',
    classSuffix: ''
  },
  modules: [
  '@unocss/nuxt',
  '@nuxtjs/color-mode',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [400],
        },
        display: "swap",
      },
    ],
    // Image Optimization
    "@nuxt/image",
  ],
});
