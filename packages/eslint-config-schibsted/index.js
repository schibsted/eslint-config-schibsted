'use strict';

module.exports = {
  'extends': [
    './env-es6.js',
    './env-es6-modules-false.js',
    './env-node-false.js'
  ].map(require.resolve),
  'env': {
    'browser': false,
    'jasmine': false,
    'mocha': false
  },
  'rules': {
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'warn',

    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'keyword-spacing': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'off',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-process-env': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-void': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],

    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',

    'brace-style': 'error',
    'camelcase': ['error', { 'properties': 'always' }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-style': ['off', 'declaration'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'max-nested-callbacks': ['error', 3],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': ['warn', { 'max': 2 }],
    'no-nested-ternary': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-unneeded-ternary': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'spaced-comment': ['error', 'always', { 'exceptions': ['eslint-disable', 'global', 'eslint', 'eslint-env'] }],
    'global-strict': 'off',
    'strict': ['error', 'safe']
  }
};
