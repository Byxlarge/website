import head from './config/meta'
import sitemap from './config/sitemap'
import publicRuntimeConfig from './config/publicRuntimeConfig'
import privateRuntimeConfig from './config/privateRuntimeConfig'

export default {
  rootDir: './',
  srcDir: 'src',
  target: 'static',
  ssr: true,
  components: true,
  publicRuntimeConfig,

  privateRuntimeConfig,

  // Meta tags imported from ./config/meta.js
  head,

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
    '@nuxt/image',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-183921946-1'
},

  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-helmet',
    '@nuxt/content',
    '@nuxtjs/robots',
    ['@nuxtjs/sitemap', sitemap],
  ],

  // Loads all of css files from one rootscss file
  css: ['~/stylesheets/root.scss'],

  // Imports Animate-on-scroll and v-tooltip plugin
  plugins: ['@/plugins/aos.client.js', '@plugins/v-tooltip.client.js'],

  // Configuration for modules

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  colorMode: {
    classSuffix: '',
  },

  // For @nuxt/content
  content: {
    liveEdit: false,

    // Specifies blog posts' directory
    dir: '../posts',

    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-holi-theme.css",
      },     
    },
  },

  webfontloader:{
    google:{
      families: ['JetBrains Mono:400,700']
    }
  }
}
