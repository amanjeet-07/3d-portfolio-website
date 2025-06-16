import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/3d-portfolio-website/",
  build: {
    chunkSizeWarningLimit: 1500, // increases the warning threshold to 1.5MB
  },
});