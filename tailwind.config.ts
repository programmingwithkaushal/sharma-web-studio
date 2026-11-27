import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          dark: "#101112",
          surface: "#191B1D",
          ivory: "#F2F0E9",
          text: "#F5F4F0",
          muted: "#A5A5A0",
          accent: "#C5F36A",
          silver: "#D1D5DB",
        },
        obsidian: "#101112",
        graphite: "#191B1D",
        charcoal: "#1F2225",
        metallic: "#282C30",
        void: "#101112",
        surface: "#191B1D",
        elevated: "#23262A",
        "electric-lime": {
          DEFAULT: "#C5F36A",
          muted: "#A4CC52",
          glow: "rgba(197, 243, 106, 0.3)",
        },
        champagne: {
          100: "#fef9ee",
          200: "#fdf1d6",
          300: "#fbe4b2",
          400: "#f7cf82",
          500: "#F2F0E9",
          600: "#d4af37",
        },
        silver: {
          DEFAULT: "#A5A5A0",
          light: "#F5F4F0",
          dark: "#71716D",
        },
      },
      fontFamily: {
        sans: ["'Manrope'", "system-ui", "-apple-system", "sans-serif"],
        heading: ["'Sora'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Sora'", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
