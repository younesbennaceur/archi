import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { window: 'readonly', document: 'readonly', fetch: 'readonly', console: 'readonly' }
    },
    rules: { 'no-unused-vars': 'warn' }
  }
]
