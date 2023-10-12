import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 9010,
      spaEntryPoint: 'src/spa.tsx',
    }),
  ],
  resolve: {
    alias: {
      '~bootstrap': '/node_modules/bootstrap',
    },
  },
})
