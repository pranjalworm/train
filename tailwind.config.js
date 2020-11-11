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
      'sidemenu': '350px',
      'card': '250px'
    },
    maxWidth: {
      'card': '300px'
    },
    minHeight: {
      'sidemenu': '900px',
      'card': '300px'
    },
    backgroundColor: theme => ({
      'sidemenu': '#292929',
      'content': '#fafbfc',
      'white': '#fff'
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
