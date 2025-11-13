import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../dist/ui",
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "index.html")
    }
  }
});
