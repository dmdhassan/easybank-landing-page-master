module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Publicsans': ["'Public Sans'", 'sans-serif']
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'light-grayish-blue': 'hsl(220, 16%, 96%)',
        'grayish-blue': 'hsl(220, 16%, 96%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'dark-blue': 'hsl(233, 26%, 24%)'
      }
    },
  },
  plugins: [],
}