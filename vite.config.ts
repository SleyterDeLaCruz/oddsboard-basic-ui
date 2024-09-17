import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/oddsboard-basic-ui/', // Make sure this is correct
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});


