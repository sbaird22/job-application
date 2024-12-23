// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
        cors: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // Your backend server
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
            },
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});