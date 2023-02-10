export default {
  telemetry: false,
  target: 'static',
  generate: {
    cache: false
  },
  serverMiddleware: {
    '/api': '~/backend'
  },
  axios: {
    baseURL:
      process.env.NODE_ENV == 'development'
        ? 'http://localhost:3000/api/'
        : process.env.NODE_ENV == 'staging'
        ? 'https://staging.inzn.com.br/api/'
        : 'https://production.nznvaas.io/api/'
  },
  head: {
    title: 'Kiosk Bank Brasil',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/kiosk_favicon.png' }]
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  },

  css: [
    '~/assets/css/normalize.css',
    '~/assets/scss/global.scss',
    'boxicons/css/boxicons.min.css'
  ],

  plugins: [{ src: '~/plugins/helper', mode: 'client' }],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
    [
      'nuxt-lazy-load',
      {
        defaultImage: 'loading.gif'
      }
    ]
  ],

  /* 
    Adicione aqui seu código GTM
    Bastante alterá-lo na propriedade ID
  */
  gtm: {
    id: 'YOUR-GTM-ID',
    enabled: false
  },

  buildModules: ['@nuxtjs/google-fonts'],

  /* 
    Adicione novas fontes aqui 
    Bastante criar uma nova entrada ao objeto families
  */
  googleFonts: {
    preload: true,
    families: {
      Poppins: [100, 300, 400, 700],
      Mulish: [100, 300, 400, 700],
      Mukta: [100, 300, 400, 700]
    }
  }
}
