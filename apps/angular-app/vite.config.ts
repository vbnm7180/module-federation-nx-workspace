import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

// Vite build for angular-app: https://analogjs.org/docs/packages/vite-plugin-angular/overview
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
  ],
  server: {
    port: 4200,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
  },
});