// https://nuxt.com/docs/api/configuration/nuxt-config
const apiBaseUrl = 'https://api.coverr.co'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Me Cover',
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Download royalty free (for personal and commercial use), unique and beautiful video footage for your website or any project. No attribution required.' },
      ]
    },
    pageTransition: {
      name: 'slide',
      mode: 'out-in' // default
    },
    // layoutTransition: {
    //   name: 'slide',
    //   mode: 'out-in' // default
    // }
  },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' }
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  pwa: {
    manifest: {
      name: 'Me Cover',
      short_name: 'Me Cover',
      description: 'Download royalty free (for personal and commercial use), unique and beautiful video footage for your website or any project. No attribution required.',
      lang: 'en',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  // ...
  runtimeConfig: {
    public: {
      apiBaseUrl
    }
  },

})
