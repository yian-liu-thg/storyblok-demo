// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
		"@element-plus/nuxt"
	],
	vite: {
		optimizeDeps: {
			exclude: ["fsevents"]
		}
	},
	buildDir: "dist"
})
