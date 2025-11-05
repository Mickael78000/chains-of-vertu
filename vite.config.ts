import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'production' &&
    visualizer({ filename: "dist/stats.html", template: "treemap", gzipSize: true, brotliSize: true }),
    mode === 'production' &&
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
    mode === 'production' &&
    viteCompression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      } as any,
      format: {
        comments: false,
      } as any,
    },
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Keep React and React-DOM together in a single chunk
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("recharts")) return "recharts";
            if (id.includes("framer-motion")) return "framer";
            if (id.includes("@tanstack")) return "tanstack";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("react-router-dom")) return "react-router";
            if (id.includes("date-fns")) return "date-fns";
            if (id.includes("lucide-react")) return "lucide";
            if (id.includes("cmdk")) return "cmdk";
            if (id.includes("embla-carousel-react")) return "embla";
            return "vendor";
          }
          if (id.includes("src/pages/industries/")) return "industries-pages";
          if (id.includes("src/pages/artists/")) return "artists-pages";
          if (id.includes("src/pages/blockchains/")) return "blockchains-pages";
        },
      },
    },
  },
}));
