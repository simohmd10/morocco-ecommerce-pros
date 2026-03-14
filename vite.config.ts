import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(), // ✅ صحيح بدون await
  ].filter(Boolean),

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },

  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 400,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // ✅ هذا الأسلوب أكثر أماناً من الـ object الثابت
          if (id.includes("node_modules/react") || 
              id.includes("node_modules/react-dom") ||
              id.includes("node_modules/scheduler")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-animation";
          }
          if (id.includes("node_modules/")) {
            return "vendor-misc";
          }
        },
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));