import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

export default defineConfig((config) => {
  const { command, mode } = config
  const env = loadEnv(mode, process.cwd())

  const isProduction = mode === 'production'

  return {
    base: '/liveadmin/', // 添加这一行
    plugins: [
      vue(),
      viteMockServe({
        // 在构建和开发阶段启用 mock 服务
        localEnabled: command === 'serve' || isProduction,
        // 根据环境变量决定是否启用 mock
        prodEnabled: isProduction,
        // 你的 mock 文件路径
        mockPath: 'mock',
        // 生产环境下的接口拦截器
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      vueJsx(),
      VueSetupExtend(),
      svgLoader(),
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'https://mock.apifox.cn/m1/2869156-0-default',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
  }
})
