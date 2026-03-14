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
    mode === "development" && componentTagger(),
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
          // React core
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) return "vendor-react";

          // Router
          if (id.includes("node_modules/react-router"))
            return "vendor-router";

          // Radix UI — أكبر مصدر للـ bloat
          if (id.includes("node_modules/@radix-ui/"))
            return "vendor-radix";

          // framer-motion — ~100KB
          if (id.includes("node_modules/framer-motion"))
            return "vendor-animation";

          // Recharts
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-"))
            return "vendor-charts";

          // TanStack Query
          if (id.includes("node_modules/@tanstack/"))
            return "vendor-query";

          // Forms
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform/") ||
            id.includes("node_modules/zod")
          ) return "vendor-forms";

          // Lucide icons
          if (id.includes("node_modules/lucide-react"))
            return "vendor-icons";

          // Utilities
          if (
            id.includes("node_modules/class-variance-authority") ||
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge")
          ) return "vendor-utils";

          // باقي node_modules
          if (id.includes("node_modules/"))
            return "vendor-misc";
        },
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
