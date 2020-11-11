module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      title: ['PT Sans', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    minWidth: {
      'sidemenu': '350px'
    },
    minHeight: {
      'sidemenu': '900px'
    },
    backgroundColor: theme => ({
      'primary': '#292929'
    }),
    textColor: {
      'primary': '#6d6d6d',
      'accent': '#c91c1c',
      'white': '#fff'
    }
  },
  variants: {},
  plugins: [],
}
