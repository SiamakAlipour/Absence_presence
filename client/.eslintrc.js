const options = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-wrap-multilines': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

module.exports = options;
