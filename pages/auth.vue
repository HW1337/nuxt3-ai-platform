<template>
    <Auth
      :supabaseClient="supabaseClient"
      :appearance="{
        theme: ThemeSupa
      }"
    />
  </template>
  
  <script setup lang="ts">
    import { ThemeSupa } from '@supabase/auth-ui-shared'
    import { Auth } from '@nuxtbase/auth-ui-vue'
  
    const supabaseClient = useSupabaseClient();
    definePageMeta({
        layouts: 'home'
    })
  </script>