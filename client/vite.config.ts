import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";


const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,

    rollupOptions: {
      input: {
        background: r("background/index.ts"),
        content: r("content/index.ts")
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "background") return "background/index.js";
          if (chunk.name === "content") return "content/index.js";
          return "[name].js";
        }
      },
    },
  },
  plugins: [react()],
})
