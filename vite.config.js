import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa';
// import ViteGhPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3D-Portfolio-Website',
  plugins: [
    react(),
    // VitePWA(),
    // ViteGhPages({
      // Specify the base path if your project is not at the root of the repository
      // base: '/3D-Portfolio-Website/', // Replace with your repository name
    // }),
  ],
});