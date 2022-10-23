/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"mobile-light": "url('/images/bg-mobile-light.jpg')",
				"mobile-dark": "url('/images/bg-mobile-dark.jpg')",
				"desktop-light": "url('/images/bg-desktop-light.jpg')",
				"desktop-dark": "url('/images/bg-desktop-dark.jpg')"
			}
		}
	},
	darkMode: "class",
	plugins: [],
}
