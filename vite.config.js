import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-icons',
            'react-lazy-load-image-component',
            'typewriter-effect',
          ],
        },
      },
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
