import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base = process.env.GITHUB_PAGES === "true" ? "/meynt/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});
