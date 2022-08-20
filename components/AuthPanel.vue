<script setup lang="ts">
import {useAuthStore} from "~/stores/auth"

const authStore = useAuthStore()
const supabase = useSupabaseClient()
// const loginInputs = ref({ email: '', password: '' })
//
// function signInWithEmail() {
//   console.log('email')
// }

function signInWithGoogle() {
  authStore.signInWithGoogle(supabase)
}

function signInWithVk() {
  authStore.signInWithVk(useRuntimeConfig())
}

</script>

<template>
  <Dialog header="Авторизация" v-model:visible="visible" @update:visible="$emit('update:visible')">
    <Button @click="signInWithGoogle">Google</Button>
    <Button @click="signInWithVk">VK</Button>
<!--    <form @submit.prevent="signInWithEmail" >-->
<!--      <span class="p-input-icon-right">-->
<!--          <InputText type="email" v-model="loginInputs.email" />-->
<!--          <i class="pi pi-user" />-->
<!--      </span>-->
<!--      <span class="p-input-icon-right">-->
<!--          <InputText type="password" v-model="loginInputs.password" />-->
<!--          <i class="pi pi-lock" />-->
<!--      </span>-->
<!--      <nuxt-link to="/auth/register">-->
<!--        <Button class="p-button-text">Регистрация</Button>-->
<!--      </nuxt-link>-->
<!--      <Button type="submit">-->
<!--        Войти-->
<!--      </Button>-->
<!--    </form>-->
  </Dialog>

</template>

<script lang="ts">
export default {
  name: "AuthPanel",
  props: {
    visible: Boolean
  },
  emits: ['update:visible'],
  data(){
    return {
    }
  }

}
</script>

<style scoped>

</style>