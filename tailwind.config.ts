import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

export default config;
