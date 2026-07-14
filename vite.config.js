import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react({
      include: "**/*.{jsx,js}",
    }),
    svgr(),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 800,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
    }
  },
  optimizeDeps: {
    entries: ['index.html'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
