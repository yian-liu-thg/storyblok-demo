<template>
	<div>
		<el-container>
			<el-aside width="200px"><DocsSideNav /></el-aside>
			<el-main>
				<StoryblokComponent
					v-for="story in blok.body"
					:key="story._uid"
					:blok="story"
			/></el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import { PageStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: PageStoryblok }>()
</script>
