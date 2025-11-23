import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// If deploying to gh-pages for a repo named "portfolio", set base: '/portfolio/'
// otherwise set base: '/' or leave './' for relative paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});