import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/oddsboard-basic-ui',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
