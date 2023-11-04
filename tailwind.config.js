/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'zilla-slab': ['Zilla Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

