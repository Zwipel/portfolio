import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // If your repo is https://<user>.github.io/portfolio use '/portfolio/'
  // Alternatively use './' for fully relative paths (works in many cases)
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  build: {
    // write build into the repository-level docs/ folder that GitHub Pages serves
    outDir: path.resolve(__dirname, '..', 'docs'),
    emptyOutDir: true,
  },
});