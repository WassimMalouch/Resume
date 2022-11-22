/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:' rgba(3,17,54,1)',
        primaryDark:'rgba(1,12,39,1)',
        secondary:' rgba(83,185,205)',
        third:'rgba(241,241,241)',
        match:"#f1dac4"
      },
    },
  },
  plugins: [],
}
