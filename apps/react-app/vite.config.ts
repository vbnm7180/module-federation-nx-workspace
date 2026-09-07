import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
// react-app — Module Federation consumer (host): подгружает remote `remote` в рантайме
export default defineConfig({
  plugins: [
    federation({
      name: 'react-app',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: 'http://localhost:4174/remoteEntry.js', // TODO: заменить на реальный URL remote-приложения
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
    react(),
  ],
})
