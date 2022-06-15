export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  watchers: {
    webpack: {
      poll: true
    }
  },
  generate: {
    cache: false,
  },
  head: {
    title: 'CamuCamu - Faîtes vos comptes plus facilement.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CamuCamu est un site web qui facilite la gestion des comptes bancaires en inscrivant manuellement vos opérations bancaires de manière sécurisée.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    '@/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-material' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English (Anglais)'
          },
          {
            code: 'fr',
            name: 'Français (France)'
          }
        ],
        defaultLocale: 'fr',
        vueI18nLoader: true,
      },
    ]
  ],

  styleResources: {
    scss: ['@/assets/main.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
