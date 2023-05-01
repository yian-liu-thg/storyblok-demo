<template>
	<div v-editable="blok">
		<h3>
			{{ blok.name }}
		</h3>
	</div>
</template>

<script setup>
	import { FeatureStoryblok } from "./types/component-types-sb"
	defineProps({ blok: FeatureStoryblok })
</script>
