/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#f70",
        secondary: "#000000e3",
        tertiary: "#ff00efde"
      },
      gridTemplateRows: {
        "auto": "auto",
      },
      backgroundSize: {
        "full": "100%",
        "full2xl": "200%",
      },
      gridTemplateColumns: {
        "testimonialbox": "4rem auto",
        "menuLayout": "16rem auto",
      },
      screens: {
        'desktop': { 'max': '1400px' },
        // => @media (max-width: 1535px) { ... }

        'laptop': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'tablet': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'mobile-lg': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'mobile-md': { 'max': '500px' },

        // => @media (max-width: 639px) { ... }
        'mobile-sm': { 'max': '400px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [require("tailgrids/plugin")],
}