// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      pathPrefix: false
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false
    },
  ],
supabase: {
  redirectOptions: {
    login: '/auth',
    callback: '/confirm',
    exclude: ['/'],
  }
}
})
