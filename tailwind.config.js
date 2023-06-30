module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        'screen/minus-200': `calc(100vh - 500px)`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
