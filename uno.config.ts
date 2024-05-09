// uno.config.ts
import { defineConfig, presetMini, presetIcons, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetMini(), presetIcons()],
  theme: {
    colors: {
      brand: {
        primary: "#8571ff",
        white: "#FFFFFF",
        dark: "#111827",
        border: {
          white: "#EDEDED",
          dark: "#1E293B",
        },
        shadow: "",
      },
    },
  },
});
