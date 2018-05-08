// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'vue/no-parsing-error': [0, {
      'x-invalid-end-tag': false
    }],
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "allowFirstLine": true
      }
    }],
    'func-names': ['error', 'as-needed'],
    'no-console': [0],
    'object-shorthand': [0],
    'arrow-parens': ['error', 'as-needed'],
    'vue/html-indent': ['error', 2],
    'no-unused-vars': [0],
    'prefer-template': [0],
    'no-plusplus': [0],
    'no-mixed-operators': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'default-case': [0],
    'vue/attributes-order': [0],
    'vue/require-valid-default-prop': [0],
    'no-bitwise': [0],
    'no-param-reassign': ["error", { "props": false }],
    'func-names': ["error", "never"],
    'linebreak-style': ["error", "unix"],
    'consistent-return': [0]
  }
};
