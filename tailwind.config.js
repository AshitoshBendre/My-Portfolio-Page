/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a5b4fc", // Soft lavender (like VS Code purple)
        secondary: "#cbd5e1", // Pastel gray (like code comments)
        background: "#000000", // Pure black (like terminal)
        surface: "#0a0a0a", // Slightly lighter black
        accent: "#93c5fd", // Light sky blue (like syntax highlighting)
        "surface-hover": "#1a1a1a", // Dark gray for hover states
        "text-primary": "#f8fafc", // Soft white (like code text)
        "text-secondary": "#cbd5e1", // Light gray (like muted text)

        // Pastel syntax highlighting colors
        "code-string": "#fecaca", // Soft pink (for strings)
        "code-keyword": "#bfdbfe", // Soft blue (for keywords)
        "code-function": "#bbf7d0", // Soft green (for functions)
        "code-variable": "#e9d5ff", // Soft purple (for variables)
        "code-comment": "#94a3b8", // Muted blue (for comments)
        "code-number": "#fef08a", // Soft yellow (for numbers)

        // Terminal-inspired accents
        "terminal-green": "#86efac", // Soft green (like successful commands)
        "terminal-red": "#fca5a5", // Soft red (like errors)
        "terminal-yellow": "#fef08a", // Soft yellow (like warnings)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)",
        panel:
          "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
        glow: "0 0 15px rgba(165, 180, 252, 0.3)", // Soft purple glow
      },
    },
  },
  plugins: [],
};
