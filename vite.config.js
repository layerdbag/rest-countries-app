import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/rest-countries-app/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})
