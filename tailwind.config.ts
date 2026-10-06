import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#14140f", soft: "#3a3a33", muted: "#6b6b62" },
        paper: { DEFAULT: "#fafaf7", warm: "#f2f1ec" },
        accent: { DEFAULT: "#2f6b4f", light: "#e3efe8" },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};
export default config;
