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
        neo: "6px 6px 0px 0px #000000",
        "neo-lg": "12px 12px 0px 0px #000000",
        "neo-red": "6px 6px 0px 0px #e60012",
        "neo-blue": "12px 12px 0px 0px #3B82F6",
        "neo-yellow": "12px 12px 0px 0px #FFD700",
        "mini-neo": "2px 2px 0px 0px #000000",
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
