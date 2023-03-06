module.exports = {
  extends: ['standard-with-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json"
  }, 
  plugins: ['@typescript-eslint'],
  root: true
}
