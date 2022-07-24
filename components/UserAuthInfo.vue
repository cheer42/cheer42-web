<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore()
</script>

<template>
  <n-dropdown :options="dropdownOptions"
              trigger="click" placement="bottom-start"
              @select="onExtraOptionClick" >
    <div class="user-auth-info">
      <n-icon class="mr-3"><person-icon /></n-icon>
      <span>{{authStore.userInitials}}</span>
      <n-icon><chevron-down-outline /></n-icon>
    </div>
  </n-dropdown>
  <n-modal v-model:show="showAuthPanel">
    <AuthPanel />
  </n-modal>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { Person as PersonIcon, ChevronDownOutline } from '@vicons/ionicons5'
import AuthPanel from '../components/AuthPanel.vue'

const LOGIN_KEY = 'login'

export default defineComponent({
  name: "UserAuthInfo",
  data() {
    return {
      showAuthPanel: false,
      dropdownOptions: [
        { label: 'Войти', key: LOGIN_KEY },
      ]
    }
  },
  components: {AuthPanel, PersonIcon, ChevronDownOutline},
  methods: {
    onExtraOptionClick(key){
      if (key === LOGIN_KEY)
        this.showAuthPanel = true
    }
  }
})
</script>

<style scoped>
.user-auth-info{
  user-select: none;
  display: flex;
  align-items: center;
  padding: .3em .5em;
}
.user-auth-info:hover{
  cursor: pointer;
  background: #ececec;
}
</style>