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
        obsidian: "#060709",
        graphite: "#0c0e12",
        charcoal: "#14171f",
        metallic: "#1f2430",
        void: "#060709",
        surface: "#0c0e12",
        elevated: "#14171f",
        "electric-lime": {
          DEFAULT: "#d4ff00",
          muted: "#a8cc00",
          glow: "rgba(212, 255, 0, 0.35)",
        },
        champagne: {
          100: "#fef9ee",
          200: "#fdf1d6",
          300: "#fbe4b2",
          400: "#f7cf82",
          500: "#e6c687",
          600: "#d4af37",
        },
        cyan: {
          400: "#38bdf8",
          500: "#06b6d4",
          600: "#0891b2",
        },
        silver: {
          DEFAULT: "#94a3b8",
          light: "#e2e8f0",
          dark: "#64748b",
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
