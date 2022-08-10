import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    ssr(),
    ],
}

export default config
