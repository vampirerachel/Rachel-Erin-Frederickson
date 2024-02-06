import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/Main.jsx',
      },
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-solid-svg-icons',
      ],
    },
  },
});
