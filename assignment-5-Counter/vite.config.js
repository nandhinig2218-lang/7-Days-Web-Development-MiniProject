import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/7-Days-Web-Development-MiniProject/assignment-5-Counter/',
})
