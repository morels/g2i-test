module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json"
  },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "react/function-component-definition": ["error", {
      namedComponents: ["function-declaration", "arrow-function"],
      unnamedComponents: "arrow-function",
    }]
  }
};
