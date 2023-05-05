<template>
	<div
		v-editable="blok"
		class="container">
		<div
			v-html="text"
			class="text"></div>
	</div>
</template>

<script setup lang="ts">
	import { ParagraphStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: ParagraphStoryblok }>()
	const text = computed(() => renderRichText(blok.text))
</script>

<style scoped>
	.container {
		padding: 2em;
		align-items: baseline;
	}

	.text {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
	}
</style>
