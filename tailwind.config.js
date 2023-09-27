/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans'],
      'fraunces': ['Fraunces', 'serif']
    },
    extend: {
      colors: {
        'darkcyan': '#3c8067',
        'cream': '#f2ebe3',
        'verydarkblue': '#1c232b',
        'darkgrayish': '#6c7289',
      },
  
    },
  },
  plugins: [],
}

