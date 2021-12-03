export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Системы безопасности | ReGuard',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
    // https://go.nuxtjs.dev/eslint
  ],
  loading: false,
  fontawesome: {
    icons: {
      brands: ['faVk', 'faInstagram', 'faViber', 'faWhatsapp'],
      solid: ['faArrowRight', 'faBars']
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/google-fonts', { families: { 'Fira+Sans': { wght: [400, 600, 700, 800, 900] } } }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
