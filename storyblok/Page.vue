<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="story in blok.body"
			:key="story._uid"
			:blok="story" />
	</div>
</template>

<script setup lang="ts">
	import { PageStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: PageStoryblok }>()
</script>
