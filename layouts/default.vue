<template>
  <header class="site-header">
    <div class="site-header__main-info">
      <nuxt-link class="site-header__logo" to="/">
        <n-avatar src="/logo.jpg" :size="48" round />
        <n-gradient-text :size="24" type="success">
          CheerShowDance
        </n-gradient-text>

      </nuxt-link>
      <UserAuthInfo />
      <n-dropdown :options="options" placement="bottom-start">
        <n-button :bordered="false" circle style="padding: 0 4px">
          ···
        </n-button>
      </n-dropdown>
    </div>
    <n-space justify="space-around">
      <n-button>123</n-button>
      <n-button>123</n-button>
      <n-button>123</n-button>
      <n-button>123</n-button>
    </n-space>
  </header>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAuthInfo from "~/components/UserAuthInfo.vue";

export default defineComponent({
	name: 'DefaultLayout',
  data() {
    return {
      options: [
        { label: 'More episodes', key: '2' },
        { label: 'More episodes', key: '3' }
      ]
    }
  },
  components: {
    UserAuthInfo
  }

})
</script>

<style scoped>
.site-header {
	padding: .5rem 1rem;
}
.site-header__main-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header__logo{
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>
