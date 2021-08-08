module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': `url("https://s3.us-east-2.amazonaws.com/nandanv.com/bgimg.jpeg")`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
