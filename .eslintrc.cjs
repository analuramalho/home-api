module.exports = {
  extends: ['standard-with-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ["./tsconfig.eslint.json"]
  }, 
  plugins: ['@typescript-eslint'],
  root: true
}
