<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const supabase = useSupabaseClient()
const authStore = useAuthStore()

authStore.autoSignIn(supabase)

supabase.auth.onAuthStateChange((event, session) => {
  authStore.autoSignIn(supabase)
})

</script>

<template>
  <Head>
    <Title>CheerShowDance</Title>
  </Head>
<!--  <NuxtWelcome />-->
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  data(){
    return{
      layout: 'default'
    }
  }
})
</script>