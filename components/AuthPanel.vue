<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
const supabase = useSupabaseClient()

function signInWithGoogle() {
  authStore.signInWithGoogle(supabase)
}
async function signout() {
  await authStore.signOut(supabase)
}

</script>

<template>
  <n-card title="Авторизация" size="small">
    User: <code>{{JSON.stringify(authStore.user)}}</code>
    <n-button @click="signInWithGoogle">Auth with Google</n-button>
  </n-card>

</template>

<script lang="ts">
export default {
  name: "AuthPanel",
  methods: {

  },

}
</script>

<style scoped>

</style>