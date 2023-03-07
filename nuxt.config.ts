// https://nuxt.com/docs/api/configuration/nuxt-config
const apiBaseUrl = 'https://api.coverr.co'
export default defineNuxtConfig({
  app: {
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
    // '@vite-pwa/nuxt',
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  // ...
  runtimeConfig: {
    public: {
      apiBaseUrl
    }
  },

})
