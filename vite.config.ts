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
        manualChunks: {
          // Keep React and React-DOM together
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          // Other vendor chunks
          'react-router': ['react-router-dom'],
          'ui-radix': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip', '@radix-ui/react-tabs'],
        },
      },
    },
  },
}));
