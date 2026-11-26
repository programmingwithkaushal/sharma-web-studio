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
        void: "#03050a",
        surface: "#070b14",
        elevated: "#0d1322",
        champagne: {
          100: "#fef9ee",
          200: "#fdf1d6",
          300: "#fbe4b2",
          400: "#f7cf82",
          500: "#f3b952",
          600: "#d99732",
        },
        cyan: {
          400: "#38bdf8",
          500: "#06b6d4",
          600: "#0891b2",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#070b14",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "aurora-slow": "ambientDrift 20s ease-in-out infinite alternate",
        "pulse-glow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
