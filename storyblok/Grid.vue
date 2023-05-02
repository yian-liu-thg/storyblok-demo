<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="column in blok.columns"
			:key="column._uid"
			:blok="column" />
	</div>
</template>

<script setup lang="ts">
	import { GridStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: GridStoryblok }>()
</script>
