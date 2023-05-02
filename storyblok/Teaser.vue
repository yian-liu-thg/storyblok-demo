<template>
	<div v-editable="blok">
		<el-text>{{ blok.headline }}</el-text>
	</div>
	<el-card
		shadow="always"
		:body-style="{ padding: '20px' }">
		<div>
			<ElText>{{ blok.headline }}</ElText>
		</div>
		<!-- card body -->
	</el-card>
</template>

<script setup lang="ts">
	import { TeaserStoryblok } from "./types/component-types-sb"
	const { blok } = defineProps<{ blok: TeaserStoryblok }>()
</script>
