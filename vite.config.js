import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https: true,
    host: '0.0.0.0',
  },
  plugins: [react()],
})

