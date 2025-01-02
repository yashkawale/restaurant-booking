/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"light-golden": "#DFB17F",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".text-shadow-sm": {
					textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow": {
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-lg": {
					textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
				},
			});
		},
	],
};
