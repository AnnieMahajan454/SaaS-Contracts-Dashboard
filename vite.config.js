import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SaaS-Contracts-Dashboard/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
  }
})
