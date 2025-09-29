// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  server: {
    port: 5173,
    open: true,
  },
  // Remove CSS PostCSS configuration
  css: {
    postcss: null,
  }
})