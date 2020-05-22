module.exports = {
  root: true,
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    'import/resolver': {
      'node': {
        extensions: ['.js', '.jsx', '.json', '.native.js']
      }
    },
  },
  parser: '@typescript-eslint/parser',
  //plugins: ['@typescript-eslint'],
  //'@react-native-community'
};