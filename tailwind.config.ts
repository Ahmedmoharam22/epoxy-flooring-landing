import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          gold: "#e3b348",
          "gold-hover": "#f0c563",
          "gold-dark": "#b08420",
          dark: "#1b1c1a",
          "dark-card": "#20211e",
          "dark-deep": "#131411",
          gray: "#64748B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
