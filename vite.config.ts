import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock', // 指定 mock 文件夹路径
        enable: command === 'serve', // 只在本地开发环境启用 mock
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // '@' 现在指向项目的 src 目录
        // 你可以添加更多的别名
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/gstyle.scss";',
        },
      },
    },
  }
})
