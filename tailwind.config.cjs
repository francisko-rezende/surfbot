/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Alice", ...defaultTheme.fontFamily.serif],
				sans: ["Nunito", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				surf: {
					blue: {
						100: '#269BFF',
						200: '#1188EE',
						300: '#0467CC',
					},
					lightGray: {
						100: '#EFF4F9',
						200: '#BBCCDD',
						300: '#99AABB',
					},
					darkGray: {
						100: '#667788',
						200: '#445566',
						300: '#17222D',
					},
					red: {
						100: '#FF3726',
						200: '#EE2211',
						300: '#D91504',
					},
				}
			}
		},
	},
	plugins: [""],
};
