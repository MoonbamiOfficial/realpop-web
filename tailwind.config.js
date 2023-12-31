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
        'deep-violet': '#3F0071',

        // Using legacy `rgba`
        'opaque-black': 'rgba(var(--black), 0.5)',
        'opaque-deep-violet': 'rgba(var(--deep-violet), 0.5)',
        'opaque-electric-pink': 'rgba(var(--electric-pink), 0.8)',
        'header-black': 'rgba(var(--black), 0.8)',
      },
      container: {
        center: true,
      },
      screens: {
        'xs': '475px',
        'premium': '1920px',
      },
      dropShadow: {
        'shop-now-btn': '0px 0px 16px rgba(251, 37, 118, 1)',
        'send-msg-btn': '0px 0px 8px rgba(251, 37, 118, 1)',
      }
    },
  },
  plugins: [],
}