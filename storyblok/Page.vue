<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="blok in blok.body"
			:key="blok._uid"
			:blok="blok" />
	</div>
</template>

<script setup>
	import { PageStoryblok } from "./types/component-types-sb"
	defineProps({ blok: PageStoryblok })
</script>
