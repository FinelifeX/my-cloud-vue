module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      {
        vue: 'never',
      },
    ],
  },
};
