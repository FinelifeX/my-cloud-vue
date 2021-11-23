module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        selago: '#F4F6FD',
        spun_pearl: '#ABA8B2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
