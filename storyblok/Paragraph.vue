<template>
	<div
		v-editable="blok"
		class="container">
		<div v-html="text"></div>
	</div>
</template>

<script setup lang="ts">
	import { ParagraphStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: ParagraphStoryblok }>()
	const text = computed(() => renderRichText(blok.text))
</script>

<style>
	.container {
		padding: 2em;
		align-items: baseline;
	}
</style>
