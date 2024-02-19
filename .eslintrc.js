module.exports = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  rules: {
    'class-methods-use-this': ['off'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-unused-expressions': [2, { allowTernary: true }],
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
