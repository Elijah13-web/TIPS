import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // ✅ Very important for Vercel to route correctly
  server: {
    historyApiFallback: true
  }
});
