import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// If deploying to gh-pages for a repo named "portfolio", set base: '/portfolio/'
// otherwise set base: '/' or leave './' for relative paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  build: {
    outDir: 'dist'
  }
});