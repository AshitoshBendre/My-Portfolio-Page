/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e60012",
        secondary: "#FFD700",
        "accent-blue": "#3B82F6",
        "background-grid": "#F5F5F5",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        retro: ["'Press Start 2P'", "cursive"],
        "mono-one": ["'Rubik Mono One'", "sans-serif"],
      },
      boxShadow: {
        neo: "6px 6px 0px 0px rgba(15, 23, 42, 0.55)",
        "neo-lg": "12px 12px 0px 0px rgba(15, 23, 42, 0.42)",
        "neo-red": "6px 6px 0px 0px rgba(230, 0, 18, 0.42)",
        "neo-blue": "12px 12px 0px 0px rgba(59, 130, 246, 0.36)",
        "neo-yellow": "12px 12px 0px 0px rgba(255, 215, 0, 0.45)",
        "mini-neo": "2px 2px 0px 0px rgba(15, 23, 42, 0.55)",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
