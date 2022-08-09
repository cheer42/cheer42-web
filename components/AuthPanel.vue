<script setup lang="ts">
import {useAuthStore} from "~/stores/auth"
import { FormInst, useMessage } from 'naive-ui'

const authStore = useAuthStore()
const supabase = useSupabaseClient()
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const loginInputs = ref({ email: '', password: '' })

function signInWithEmail() {
  console.log('email')
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}

function signInWithGoogle() {
  authStore.signInWithGoogle(supabase)
}
async function signout() {
  await authStore.signOut(supabase)
}

</script>

<template>
  <n-card title="Авторизация" size="small"
          :segmented="{
            content: true,
            footer: 'soft'
          }">
    <template #header-extra>
      <n-button v-if="modal" @click="$emit('closeModal')" tertiary >
        <template #icon>
          <n-icon><close-outline /></n-icon>
        </template>
      </n-button>
    </template>
    <n-form
        ref="formRef"
        :label-width="80"
        :model="loginInputs"
        :rules="rules"
        size="small"
        @submit="signInWithEmail"
    >
      <n-form-item label="Email" path="user.name">
        <n-input v-model:value="loginInputs.email" placeholder="Введите email" type="email" />
      </n-form-item>
      <n-form-item label="Пароль" path="user.age">
        <n-input v-model:value="loginInputs.password" placeholder="Введите пароль" type="password" />
      </n-form-item>
      <n-form-item>
        <n-button @click="signInWithEmail">
          Войти
        </n-button>
      </n-form-item>
    </n-form>
    <template #footer>
      #footer
    </template>
    <template #action>
      <n-button @click="signInWithGoogle">Google</n-button>
    </template>
  </n-card>

</template>

<script lang="ts">
import { CloseOutline } from '@vicons/ionicons5'
export default {
  name: "AuthPanel",
  props: {
    modal: Boolean
  },
  emits: ['closeModal'],
  components: {
    CloseOutline
  },
  data(){
    return {
      rules: {
        email: {
          required: true,
          message: 'Пожалуйста, введите email',
          trigger: 'blur'
        },
        password: {
          required: true,
          message: 'Поожалуйста, введите пароль',
          trigger: ['input', 'blur']
        }
      }
    }
  }

}
</script>

<style scoped>

</style>