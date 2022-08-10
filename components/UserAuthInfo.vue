<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
const supabase = useSupabaseClient()

async function signOut() {
  await authStore.signOut(supabase)
}
</script>

<template>
  <div @click="toggleMenu" class="user-auth-info text-base">
    <Avatar  :image="authStore.userAvatar" round />
    <span class="mx-2">{{authStore.userInitials}}</span>
    <i class="pi pi-angle-down" />
  </div>
  <Menu ref="menu" :model="menu" :popup="true" />
  <AuthPanel v-model:visible="showAuthPanel" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AuthPanel from '../components/AuthPanel.vue'

export default defineComponent({
  name: "UserAuthInfo",
  data() {
    return {
      showAuthPanel: false,
      menu: [
        {
          label: 'Авторизация',
          items: [
            {
              label: 'Войти',
              command: () => {
                this.toggleAuthPanel()
              }
            },
            {
              label: 'Выйти',
              command: () => {
                this.signOut()
              }
            }
          ]
        }
      ]
    }
  },
  components: {AuthPanel},
  methods: {
    toggleMenu(event){
      this.$refs.menu.toggle(event)
    },
    toggleAuthPanel(){
      this.showAuthPanel = !this.showAuthPanel
    }
  }
})
</script>

<style scoped>
.user-auth-info{
  user-select: none;
  display: flex;
  align-items: center;
}
.user-auth-info:hover{
  cursor: pointer;
  background-color: rgba(0,0,0,.1);
}
</style>