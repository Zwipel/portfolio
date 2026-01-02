import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Use './' so built asset links are relative and work when served from /docs or a subpath
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "..", "docs"),
    emptyOutDir: false,
  },
});