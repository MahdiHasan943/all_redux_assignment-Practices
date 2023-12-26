import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'vite-plugin-postcss';

export default defineConfig({
  plugins: [
    react(),
    postcss({
      config: {
        // Path to your PostCSS config file
        path: './postcss.config.js',
      },
    }),
  ],
});
