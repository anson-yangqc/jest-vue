module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "space-before-function-paren": 0,
    "quotes": [1, "single"],
    semi: 0,
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
    "one-var": "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)",
      "**/tests/integration/**/*.spec.{j,t}s?(x)"
    ],
    env: {
      jest: true
    }
  }]
};
