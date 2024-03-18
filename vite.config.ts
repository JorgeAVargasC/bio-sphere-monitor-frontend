import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {

      "@dashboard": path.resolve(__dirname, './src/app/dashboard/'),
      "@hooks": path.resolve(__dirname, './src/app/shared/hooks/'),
      "@app-utils": path.resolve(__dirname, './src/app/shared/utils/'),
      "@config": path.resolve(__dirname, './src/app/shared/config/'),
      "@styles": path.resolve(__dirname, './src/app/shared/styles/'),
      "@store": path.resolve(__dirname, './src/app/shared/store/'),
      "@providers": path.resolve(__dirname, './src/app/shared/providers/'),

      "@components": path.resolve(__dirname, './src/app/shared/components/'),
      "@forms": path.resolve(__dirname, './src/app/shared/components/forms/'),
      "@ui": path.resolve(__dirname, './src/app/shared/components/ui/'),
      "@components-styled": path.resolve(__dirname, './src/app/shared/components/styled/'),

      "@icons": path.resolve(__dirname, './src/assets/icons/'),
      "@images": path.resolve(__dirname, './src/assets/images/'),
      "@logos": path.resolve(__dirname, './src/assets/logos/'),
      "@videos": path.resolve(__dirname, './src/assets/videos/'),

      "@utils": path.resolve(__dirname, './src/utils/'),

      "@services": path.resolve(__dirname, './src/services/'),

      "@axios": path.resolve(__dirname, './src/axios/'),
    }
  },
  plugins: [react(), svgr()],
  server: {
    host: true
  }
})
