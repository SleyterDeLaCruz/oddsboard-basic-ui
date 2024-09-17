import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/oddsboard-basic-ui/' : '/',  // Use '/' for local dev and '/oddsboard-basic-ui/' for production
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
}));