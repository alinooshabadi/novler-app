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
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "spaced-comment": ["error", "always", {
      markers: ["/"]
    }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["off"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/camelcase": ["error", {
      properties: "always"
    }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "error",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
  }

};