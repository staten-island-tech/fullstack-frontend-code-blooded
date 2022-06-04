export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'oden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['balm-ui/dist/balm-ui.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/balm-ui', '~/plugins/auth0.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  axios: {},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  /* auth: {
    redirect: {
      login: '/', // redirect user when not connected
        callback: '/auth/signed-in' 
    },
    strategies: {
      auth0: {
        domain: 'dev-snb3oo-9.us.auth0.com',
        clientId: 'mqbzKmpUpw3xHt5yi9IwLbaFMmLX7eIh',
         logoutRedirectUri: 'http://localhost:3000', 
         audience: 'https://my-api-domain.com/'
      },
    },
  }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
