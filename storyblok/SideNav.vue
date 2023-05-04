<template>
	<div>
		<ElMenu mode="vertical">
			<ElMenuItem
				v-for="link in blok.links"
				:key="link._uid">
				<StoryblokComponent :blok="link" />
			</ElMenuItem>
		</ElMenu>
	</div>
</template>

<script setup lang="ts">
	import { SideNavStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: SideNavStoryblok }>()
</script>
