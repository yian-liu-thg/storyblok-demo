<template>
	<div v-editable="blok">
		<NuxtLink
			v-if="isStory"
			:to="'/' + blok.link.cached_url"
			style="text-decoration-line: none">
			<ElText size="large">
				{{ blok.displayed_text }}
			</ElText>
		</NuxtLink>
		<ElLink
			v-else
			:href="blok.link.url"
			>{{ blok.displayed_text }}</ElLink
		>
	</div>
</template>

<script setup lang="ts">
	import { TextLinkStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: TextLinkStoryblok }>()
	const isStory = blok.link.linktype == "story"
</script>
