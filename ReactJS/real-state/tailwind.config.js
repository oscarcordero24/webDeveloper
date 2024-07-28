/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '500px': '500px'
      },
      borderRadius: {
        'circle': '50%'
      },
      boxShadow: {
        'border-1': 'inset 2px 2px 8px rgba(0,0,0,0.4), 2px 2px 8px rgba(0,0,0,0.4)',
        'border-2': '2px 2px 8px rgba(0,0,0,0.4)',
        'whole': 'inset 4px 4px 15px rgba(0,0,0,0.2)',
      },
      gridTemplateColumns: {
        'custom-1': '1fr 1fr'
      },
      gridTemplateRows: {
        'custom-1': '6rem 1fr 10rem'
      }
    },
  },
  plugins: [],
}

