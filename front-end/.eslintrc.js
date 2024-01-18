module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    "vue/no-unused-components": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/attributes-order": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-undef": "off",
    // "vue/no-dupe-keys": "off",
    // "vue/no-side-effects-in-computed-properties": "off",
    // "vue/no-deprecated-filter": "off",
    // "no-mixed-spaces-and-tabs": 0, // disable rule 
    // "no-extra-semi": "off",
    // "no-dupe-keys": "off",
    // "no-redeclare": "off",
    // "no-cond-assign": "off",
    // "no-prototype-builtins": "off",
    // "no-unreachable": "off",
    // "no-import-assign": "off"
  },
};