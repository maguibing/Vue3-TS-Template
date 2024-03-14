import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_PROXY_TARGET } = viteEnv
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      VueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: true,
        eslintrc: {
          // 这里先设置成true然后npm run dev 运行之后会生成 .eslintrc-auto-import.json 文件之后，在改为false
          enabled: false,
          filepath: './.eslintrc-auto-import.json', // 生成的文件路径
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: false,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: false,
      // proxy: {
      //   '/api': {
      //     target: VITE_PROXY_TARGET,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(new RegExp('^/api'), ''),
      //     secure: false,
      //     configure: (proxy, options) => {
      //       // 配置此项可在响应头中看到请求的真实地址
      //       proxy.on('proxyRes', (proxyRes, req) => {
      //         proxyRes.headers['x-real-url'] = new URL(req.url || '', options.target)?.href || ''
      //       })
      //     },
      //   },
      // },
    },
    build: {
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
    },
  }
})
