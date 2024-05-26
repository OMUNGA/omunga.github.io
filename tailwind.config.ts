import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        omunga: {
          dark: "#111827",
          shadow: "#1C273D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
