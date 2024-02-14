module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@builder.io/mitosis"],
  extends: ["plugin:@builder.io/mitosis/recommended"],
  rules: {
    "@builder.io/mitosis/css-no-vars": "error",
  },
};
