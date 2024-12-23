import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/client/src/utils/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/client/src/utils/search-api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
