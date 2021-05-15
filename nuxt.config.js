import serveStatic from 'serve-static'
import { resolve } from 'path'

export default {
  server: {
    port: 3333, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: {
      total: true
    }
  }, /*
  ** 别名
  * <img src="~images/main-bg.jpg">
  */
  alias: {
    'images': resolve(__dirname, './assets/images'),
  },
  /*
  ** nuxt 运行模式 默认支持 ssr
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /**
   *  指定nuxt应用的源码目录 如需更改目录，同时需修改 tsconfig.json 中的 'path'
   */
  srcDir: 'client/',
  /**
   * Specify build directory
   */
  buildDir: 'build/client',
  /*
  ** html模板 head配置
  ** 可以全局加载外部 js 或 css
  ** 如需在page中加载 page/*.vue 中可以在 @Component 修饰器中添加 meta
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'code-generator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios'],
    [
      '@nuxtjs/proxy',
      {
        onProxyReq(proxyReq, req, res) {
          // common proxy event to do
          console.log('[proxy]: proxy to %s', proxyReq.url);
        },
        pathRewrite: {
          '^/.*?/api': '/api',
        },
      },
    ],
  ],

  /**
   * axios配置
   */
  axios: {
    proxy: true,
    // baseURL: '/api',
    prefix: '/api', // it not work
    credentials: true,
  },

  /**
   * 中间件设置
   */
  serverMiddleware: [
    { path: "/api", handler: __dirname + "/server/index" },
    { path: '/static', handler: serveStatic(__dirname + '/static') }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
