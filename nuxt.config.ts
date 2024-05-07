// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', 'nuxt-icon'],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      pathPrefix: false
    },
    {
      path: '~/components/shared',
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
},
runtimeConfig: {
  openaiKey: '',
  replicateKey: '',
}
})
