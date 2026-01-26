import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A24D",
        "gold-soft": "#F6EFD8",

        charcoal: "#0B1220",
        "charcoal-foreground": "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
