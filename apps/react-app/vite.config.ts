import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
// react-app — Module Federation consumer (host): подгружает remote `remote` (angular-app) в рантайме
export default defineConfig({
  plugins: [
    federation({
      name: 'react-app',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: 'http://localhost:4174/remoteEntry.js', // angular-app (MF remote)
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
      // Types of the remote are declared manually in src/remote.d.ts;
      // disable the DTS plugin to skip @mf-types.zip downloads.
      dts: false,
    }),
    react(),
  ],
})