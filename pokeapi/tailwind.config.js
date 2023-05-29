/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// COLORS
				primary: '#DB504A',
				secondary: '#0081A7',
				tertiary: '#698F3F',
				black: '#070707',
				white: '#FFFFFF',
				// GRAYS
				'gray-1': '#F2F2F2',
				'gray-2': '#E6E6E6',
				// POKEMON COLORS
				normal: '#A8A77A',
				fire: '#EE8130',
				water: '#6390F0',
				electric: '#F7D02C',
				grass: '#7AC74C',
				ice: '#96D9D6',
				fighting: '#C22E28',
				posion: '#A33EA1',
				ground: '#E2BF65',
				flying: '#A98FF3',
				psychic: '#F95587',
				bug: '#A6B91A',
				rock: '#B6A136',
				ghost: '#735797',
				dragon: '#6F35FC',
				dark: '#705746',
				steel: '#B7B7CE',
				fairy: '#D685AD'
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
			},
			borderRadius: {
				DEFAULT: '0.9375rem'
			}
		}
	},
	plugins: []
};
