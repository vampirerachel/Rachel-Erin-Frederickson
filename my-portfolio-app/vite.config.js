import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
        main: './src/Main.jsx', // Specify the correct path to your main entry file
      },
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-solid-svg-icons',
      ],
    },
  },
});
