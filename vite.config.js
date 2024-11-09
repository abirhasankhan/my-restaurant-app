import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif'], // Specify image formats to include as assets
  base: '/my-restaurant-app/', // Ensure this matches your GitHub repository name
  build: {
    outDir: 'dist', // Ensures output is in the correct folder
  },
})
