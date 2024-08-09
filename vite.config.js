import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'client',  // Set root to the client directory
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the built files
  }
});
