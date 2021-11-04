module.exports = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  rules: {
    'class-methods-use-this': ['off'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-unused-expressions': [2, { allowTernary: true }],
  },
  globals: {
    document: false,
  },
  env: {
    'jest/globals': true,
  },
};
