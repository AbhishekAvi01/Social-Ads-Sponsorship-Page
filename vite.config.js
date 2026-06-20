import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Sahi package name ye hai
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})