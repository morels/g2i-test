module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules"
  ],
  rules: {
    "selector-class-pattern": "^[A-Z][a-zA-Z0-9]+$" // UpperCamelCase
  }
};
