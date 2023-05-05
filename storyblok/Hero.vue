<template>
	<div
		v-editable="blok"
		class="container">
		<div v-html="textContent"></div>
		<div v-if="blok.links">
			<div
				class="button"
				v-for="link in blok.links"
				:key="link._uid">
				<StoryblokComponent :blok="link" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { HeroStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: HeroStoryblok }>()
	const textContent = computed(() => renderRichText(blok.text))
	const backgroundImage = blok.background && `url(${blok.background.filename})`
</script>

<style>
	.button {
		margin-top: 20px;
		display: inline-block;
		background-color: lightgray;
		border-radius: 5px;
		padding: 10px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20em;
		background-image: v-bind(backgroundImage);
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
