import stylistic from '@stylistic/eslint-plugin'
import pluginImport from 'eslint-plugin-import'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
      'import': pluginImport,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        node: true,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
        },
      },
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      'import/no-unresolved': ['error', { commonjs: true }],
      'import/order': ['error', { 'newlines-between': 'always' }],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
    },
  },
]
