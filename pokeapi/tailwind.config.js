/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#DB504A',
				secondary: '#0081A7',
				tertiary: '#698F3F',
				black: '#070707',
				white: '#FFFFFF'
			},
			fontSize: {
				h1: ['2rem', '1.2'],
				h2: '1.5rem',
				h3: '1.25rem',
				h4: '1rem',
				wh1: '4rem',
				wh2: '2rem',
				wh3: '1.5rem',
				wh4: '1rem',
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem'
			},
			fontFamily: {
				sans: ['Inter']
			}
		}
	},
	plugins: []
};
