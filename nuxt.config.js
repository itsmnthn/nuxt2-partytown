// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
// eslint-disable-next-line nuxt/no-cjs-in-config
const CopyPlugin = require('copy-webpack-plugin')
// eslint-disable-next-line nuxt/no-cjs-in-config
const partytown = require('@builder.io/partytown/utils')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-partytown',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/js/gtag.js' },
      { src: '/~partytown/debug/partytown.js' },
      { src: '/js/partytown.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: partytown.libDirPath(),
            to: path.join(__dirname, 'static', '~partytown'),
          },
        ],
      }),
    ],
  },
}
