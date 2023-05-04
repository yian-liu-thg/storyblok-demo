<template>
	<div v-editable="blok">
		<ElMenu mode="horizontal">
			<ElMenuItem index="0">
				<ElText size="large">{{ blok.page_name }}</ElText>
			</ElMenuItem>
			<div style="flex-grow: 1" />
			<ElMenuItem
				v-for="link in blok.links"
				:key="link._uid">
				<StoryblokComponent :blok="link" />
			</ElMenuItem>
		</ElMenu>
	</div>
</template>

<script setup lang="ts">
	import { HeaderNavStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: HeaderNavStoryblok }>()
</script>
