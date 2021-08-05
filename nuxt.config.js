import config from './.contentful.json';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'David Soards' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/global.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  styleResources: {
    // injects the variables in each component
    scss: '~assets/scss/_variables.scss',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {},
    babel: {
      // silence message in console - known nuxt bug - https://github.com/nuxt/nuxt.js/pull/9631
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT,
  },
};
