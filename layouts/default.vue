<template>
  <header class="site-header backdrop-blur sticky top-0 border-b">
    <div class="site-header__main-info">
      <nuxt-link class="site-header__logo" to="/">
        <Avatar image="/logo.jpg" :size="'normal'" />
        <span >
          CheerShowDance
        </span>

      </nuxt-link>
      <UserAuthInfo />
    </div>
    <div class="flex justify-evenly">
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
    </div>
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

    }
  },
  components: {
    UserAuthInfo
  }

})
</script>

<style>
body{
  @apply bg-gradient-to-tr from-blue-200 bg-slate-300
}
</style>

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
