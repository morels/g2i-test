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
    }],
    "import/prefer-default-export": "off",
    "arrow-parens": ["error", "as-needed"],
    "sort-imports": ["error", { "ignoreCase": true, "ignoreDeclarationSort": true }],
    "import/order": [1, {
      "groups": [
        "external", "builtin", "internal", "sibling", "parent", "index"
      ],
      "pathGroups": [
        { "pattern": "components", "group": "internal" },
    "arrow-parens": ["error", "as-needed"]
      ],
      "pathGroupsExcludedImportTypes": ["internal"],
      "alphabetize": { "order": "asc", "caseInsensitive": true }
    }],
    "react/require-default-props": "off"
  }
};
