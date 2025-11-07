import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: './', // 👈 this is the crucial part for cPanel hosting
  server: {
    historyApiFallback: true, // for React Router (optional in dev)
  },
});
