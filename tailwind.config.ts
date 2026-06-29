import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mbc: {
          blue: "#0b4f8a",
          navy: "#07324f",
          sky: "#e7f2fb",
          green: "#36a269",
          graphite: "#253241"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 50, 79, 0.16)",
        soft: "0 16px 40px rgba(7, 50, 79, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
