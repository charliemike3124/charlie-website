import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
	nitro: {
		preset: 'node-server',
	},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	css: ['~/assets/stylesheets/main.css'], //-- Include in all of our pages
});
