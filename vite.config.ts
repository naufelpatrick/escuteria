import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ssgPlugin } from '@wroud/vite-plugin-ssg'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ssgPlugin({ entry: 'src/index.entry.tsx', react: false }),
  ],
})
