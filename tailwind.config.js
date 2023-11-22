/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cetacean-blue': '#150050',
        'electric-pink': '#FB2576',

        // Using legacy `rgba`
        'opaque-black': 'rgba(var(--opaque-black), 0.5)'
      },
      container: {
        center: true,
      },
      screens: {
        'xs': '475px',
        'premium': '1920px',
      }
    },
  },
  plugins: [],
}