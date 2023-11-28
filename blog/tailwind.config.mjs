/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
	    colors:{
    'textcolor': '#333333',   
    },
	fontFamily: {	  
       'Noto': ['Noto Sans JP', 'sans-serif'], 
      }
    },
  },
  plugins: [
require('@tailwindcss/forms'),
    require("@tailwindcss/typography")],
  darkMode: "media",
}
