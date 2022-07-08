<template>
	<n-page-header class="header" subtitle="Занятия спортом по черлидингу в г. Кемерово" @back="handleBack">
		<n-space justify="space-around">
			<n-button>123</n-button>
			<n-button>123</n-button>
			<n-button>123</n-button>
			<n-button>123</n-button>
		</n-space>
		<template #title>
			CheerShowDance
		</template>
		<template #avatar>
			<nuxt-link to="/">
				<n-avatar
					src="/logo.jpg"
					:size="48"
					round
				/>
			</nuxt-link>
		</template>
		<template #extra>
			<n-space>
				<n-dropdown :options="options" placement="bottom-start">
					<n-button :bordered="false" style="padding: 0 4px">
						···
					</n-button>
				</n-dropdown>
			</n-space>
		</template>
	</n-page-header>
	<slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
	name: 'DefaultLayout',
	setup () {
		const message = useMessage()
		return {
			handleBack () {
				message.info('[onBack]')
			},
			options: [
				{
					label: 'More episodes',
					key: '1'
				},
				{
					label: 'More episodes',
					key: '2'
				},
				{
					label: 'More episodes',
					key: '3'
				}
			]
		}
	}
})
</script>

<style scoped>
.header {
	padding: .5rem 1rem;
}
</style>
