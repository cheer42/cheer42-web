<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
const supabase = useSupabaseClient()

async function signOut() {
  await authStore.signOut(supabase)
}
</script>

<template>
  <n-dropdown :options="dropdownOptions"
              trigger="click" placement="bottom-start"
              @select="onExtraOptionClick" >
    <n-button strong secondary class="user-auth-info text-base">
      <n-avatar :src="authStore.userAvatar" round />
      <span class="mx-2">{{authStore.userInitials}}</span>
      <n-icon><chevron-down-outline /></n-icon>
    </n-button>
  </n-dropdown>
  <n-modal v-model:show="showAuthPanel">
    <AuthPanel style="max-width: 600px" />
  </n-modal>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { Person as PersonIcon, ChevronDownOutline } from '@vicons/ionicons5'
import AuthPanel from '../components/AuthPanel.vue'

const LOGIN_KEY = 'login'
const LOGOUT_KEY = 'logout'

export default defineComponent({
  name: "UserAuthInfo",
  data() {
    return {
      showAuthPanel: false,
      dropdownOptions: [
        { label: 'Войти', key: LOGIN_KEY },
        { label: 'Выйти', key: LOGOUT_KEY },
      ]
    }
  },
  components: {AuthPanel, PersonIcon, ChevronDownOutline},
  methods: {
    onExtraOptionClick(key){
      switch (key) {
        case LOGIN_KEY:
          this.showAuthPanel = true
          break;
        case LOGOUT_KEY:
          this.signOut()
          break;
      }
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
</style>