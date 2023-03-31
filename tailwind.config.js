/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'var(--font-roboto)'
    },
    extend: {
      colors: {
        bg_color: '#080321',
        box_color: '#14102c',
        gray: '#b0aeb8',
        blue:'#3e7dff',
      },
      backgroundColor: {
        bg_color: '#080321',
        box_color: '#14102c',
        gray: '#b0aeb8',
        blue:'#3e7dff',
      }
    },
  },
  plugins: [],
}