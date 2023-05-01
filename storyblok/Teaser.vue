<template>
	<div v-editable="blok">
		{{ blok.headline }}
	</div>
</template>

<script setup>
	import { TeaserStoryblok } from "./types/component-types-sb"
	defineProps({ blok: TeaserStoryblok })
</script>
