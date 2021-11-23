module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        selago: '#F4F6FD',
        spun_pearl: '#ABA8B2',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
