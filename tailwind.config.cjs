/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: 'Roboto, sans-serif',
            cursive: 'Pacifico, cursive',
        },
        colors: {
            cinema: {
                'text-1': '#ECAB3F',
                'text-2': '#BA852A',
                'bg-1': '#00171C',
                'bg-2': '#093244',
            }
        },
        theme: {
            minWidth: {
                '2/12': '16.666667%',
            }
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
