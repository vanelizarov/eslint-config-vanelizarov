module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'arrow-spacing': 'error',
    'block-spacing': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'capitalized-comments': 'warn',
    'default-case': [
      'error'
    ],
    'eol-last': [
      'warn',
      'always'
    ],
    eqeqeq: [
      'error',
      'always'
    ],
    'func-names': [
      'error',
      'as-needed'
    ],
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: false,
          afterColon: true
        }
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: true,
        afterLineComment: true
      }
    ],
    'no-const-assign': 'error',
    'no-dupe-keys': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-set-state': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': [
      'warn'
    ],
    'react/jsx-uses-vars': 'error',
    'require-await': 'error',
    semi: [
      'error',
      'never'
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    strict: 'off',
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
}
