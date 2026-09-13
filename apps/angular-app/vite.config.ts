import { fileURLToPath } from 'node:url';
import angular from '@analogjs/vite-plugin-angular';
import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

// Vite build for angular-app: https://analogjs.org/docs/packages/vite-plugin-angular/overview
// Module Federation remote: consumed by react-app as `remote` at http://localhost:4174/remoteEntry.js
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        // Absolute path: relative expose ids are not resolvable from the virtual
        // remoteEntry module by Rollup (Vite 5-7).
        './mount': fileURLToPath(new URL('./src/mount.ts', import.meta.url)),
      },
      remotes: {},
      shared: ['@angular/core'],
      // Inject the remote's built CSS (<link>) automatically when an exposed
      // module is loaded by the host.
      bundleAllCSS: true,
      dts: false,
      dev: {
        remoteHmr: true,
      },
    }),
    angular(),
  ],
  server: {
    port: 4174,
  },
  preview: {
    port: 4174,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
  },
});