<script setup>
	const { slug } = useRoute().params
	const story = await useAsyncStoryblok(slug.join("/").replace(/\/$/, ""), {
		version: "draft"
	})
</script>

<template>
	<StoryblokComponent
		v-if="story"
		:blok="story.content" />
	<ElText size="large">Not Found</ElText>
</template>
