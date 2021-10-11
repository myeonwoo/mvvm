export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mvvm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules 
  modules: [
  ],
  // modules: [
  //   [
  //     '@nuxtjs/firebase',
  //     {
  //       config: {
  //         apiKey: "AIzaSyDAGChfMliWEkWEgyLaswnKG845QOf2ZGg",
  //         authDomain: "vue-calendar-437bc.firebaseapp.com",
  //         projectId: "vue-calendar-437bc",
  //         storageBucket: "vue-calendar-437bc.appspot.com",
  //         messagingSenderId: "225608021331",
  //         appId: "1:225608021331:web:f8dd4b95375dfd88f91da6"
  //         // measurementId: '<measurementId>'
  //       },
  //       services: {
  //         firestore: true
  //         // auth: true // Just as example. Can be any other service.
  //       }
  //     }
  //   ]
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
