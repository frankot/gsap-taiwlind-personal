module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'texture': "url(/imgs/annie-spratt-6a3nqQ1YwBw-unsplash.jpg)"
      },
      colors: {
        custom: {
          primary: '#222831',
          secondary: '#393E46',
          third: '#FFD369',
          forth: '#EEEEEE'
        },
      },
      fontFamily: {
        'custom': ['Poppins'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
