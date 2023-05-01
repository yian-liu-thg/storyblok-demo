<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="blok in blok.columns"
			:key="blok._uid"
			:blok="blok" />
	</div>
</template>

<script setup>
	import { GridStoryblok } from "./types/component-types-sb"
	defineProps({ blok: GridStoryblok })
</script>
