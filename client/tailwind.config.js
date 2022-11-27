/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['league spartan', 'serif']
    },
    colors: {
      'purple' : '#D368C7',
      'darkblue' : '#1B1B3A',
      'white' : '#fff',
      'blue': '#746CF7',
      'blueishgray': '#69658E',
      'red': '#FF0000',
      'green': '#00FF00',
    }
  },
  plugins: [
    require( '@tailwindcss/line-clamp'),
  ],
}
