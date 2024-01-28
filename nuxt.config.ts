// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/supabase'],
  runtimeConfig: {
    public: {
      env: process.env.ENV,
      appUrl: process.env.APP_URL,
    },
  },
})
