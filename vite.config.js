import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  assetsInclude: ["**/*.pdf"],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".pdf")) {
            return "assets/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        manualChunks: undefined,
      },
    },
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ["@vercel/analytics", "@vercel/speed-insights"],
  },
});
