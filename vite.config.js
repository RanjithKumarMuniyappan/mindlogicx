import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honour a PORT from the environment so a supervising tool can place this
    // server on a port it has already reserved; otherwise pick 5178, which
    // keeps clear of the other Mindlogicx dev servers (5173/5174/5175/5177/5180).
    port: process.env.PORT ? Number(process.env.PORT) : 5178,
  },
})
