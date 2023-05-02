<template>
	<div v-editable="blok">
		<h3>
			{{ blok.name }}
		</h3>
	</div>
</template>

<script setup lang="ts">
	import { FeatureStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: FeatureStoryblok }>()
</script>
