import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: '/vti-website/',  // ⚠️ Utilisez le nom EXACT de votre repo GitHub
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})