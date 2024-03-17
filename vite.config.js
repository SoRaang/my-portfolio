import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.includes('swiper-')
            }
        }
    }) ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    preview: {},
    build: {
        minify: 'esbuild',
        emptyOutDir: true
    }
})