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
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-icon',
    // '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    // '@nuxtjs/i18n',
  ],
  devtools: {
    enabled: true,
  },
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' },
    {
      src: '~/plugins/arco.ts',
    }
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
  css: [
    '@/assets/style/style.less',
  ],
  // i18n: {
  //   vueI18n: './locale/index.ts',
  // },
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
