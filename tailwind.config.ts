import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f2ff",
          100: "#e9e8ff",
          200: "#d7d4ff",
          300: "#b9b2ff",
          400: "#8571ff",
          500: "#7555fd",
          600: "#6432f5",
          700: "#5520e1",
          800: "#481abd",
          900: "#3d189a",
          950: "#230c69",
        },
        omunga: {
          dark: "#111827",
          shadow: "#1C273D",
        },
      },
    },
  },
};
