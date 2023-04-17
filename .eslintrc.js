module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: { parser: "@typescript-eslint/parser" },
  rules: {
    "no-undef": "off",
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'vue/no-useless-v-bind': 'error',
    'vue/no-unused-refs': 'error',
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "GLOBAL",
          "RENDER_MODIFIERS",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],
     'vue/array-bracket-spacing': ['error', 'never'],
     'vue/arrow-spacing': ['error', { "before": true, "after": true }],
     'vue/block-spacing': ['error', 'always'],
     'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
     'vue/comma-dangle': ['error', 'always-multiline'],
     'vue/comma-spacing': ['error', { "before": false, "after": true }],
     'vue/comma-style': ['error', 'last'],
     'vue/dot-location': ['error', 'property'],
     'vue/dot-notation': ['error', { "allowKeywords": true }],
     'vue/eqeqeq': ['error', 'smart'],
     'vue/key-spacing': ['error', { "beforeColon": false, "afterColon": true }],
     'vue/keyword-spacing': ['error', { "before": true, "after": true }],
     'vue/no-constant-condition': 'warn',
     'vue/no-empty-pattern': 'error',
     'vue/no-extra-parens': ['error', 'functions'],
     'vue/no-irregular-whitespace': 'error',
     'vue/no-loss-of-precision': 'error',
     'vue/no-restricted-syntax': [
       'error',
       'DebuggerStatement',
       'LabeledStatement',
       'WithStatement',
     ],
     'vue/no-sparse-arrays': 'error',
     'vue/object-curly-newline': ['error', { "multiline": true, "consistent": true }],
     'vue/object-curly-spacing': ['error', 'always'],
     'vue/object-property-newline': ['error', { "allowMultiplePropertiesPerLine": true }],
     'vue/object-shorthand': [
       'error',
       'always',
       {
         "ignoreConstructors": false,
         "avoidQuotes": true,
       },
     ],
     'vue/operator-linebreak': ['error', 'before'],
     'vue/prefer-template': 'error',
     'vue/quote-props': ['error', 'consistent-as-needed'],
     'vue/space-in-parens': ['error', 'never'],
     'vue/space-infix-ops': 'error',
     'vue/space-unary-ops': ['error', { "words": true, "nonwords": false }],
     'vue/template-curly-spacing': 'error',
  },
};
