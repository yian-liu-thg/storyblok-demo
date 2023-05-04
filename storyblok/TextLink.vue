<template>
	<div v-editable="blok">
		<NuxtLink
			:to="'/' + (isStory ? blok.link.cached_url : blok.link.url)"
			style="text-decoration-line: none">
			<ElText size="large">
				{{ blok.displayed_text }}
			</ElText>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	import { TextLinkStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: TextLinkStoryblok }>()
	const isStory = blok.link.linktype == "story"
</script>
