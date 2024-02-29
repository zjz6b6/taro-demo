import type { UserConfigExport } from "@tarojs/cli";

export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      port: 8080,
      host: 'localhost',
      // proxy: {
      //   '/mock': {
      //     target: 'https://api.juejin.cn',
      //     // pathRewrite: {
      //     //   '^/mock/': '/'
      //     // },
      //     changeOrigin: true,
      //     secure: false
      //   }
      // }
    }
  }
} satisfies UserConfigExport
