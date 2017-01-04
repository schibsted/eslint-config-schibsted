'use strict';

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'script', // TODO airbnb: 'module' this should be set for browser and node separately
  },
  rules: {
    // All the rules missing from eslint:recommended
    'accessor-pairs': 'error', // TODO airbnb doesn't have that
    'block-scoped-var': 'error',
    'brace-style': 'error', // TODO airbnb : [ 'error', '1tbs', { allowSingleLine: true } ] we: 'error'
    'camelcase': ['error', { 'properties': 'always' }], // TODO airbnb : [ 'error', { properties: 'never' } ] we: [ 'error', { properties: 'always' } ]
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'consistent-this': ['error', 'self'], // TODO airbnb doesn't have that
    'curly': 'error', // TODO airbnb: [ 'error', 'multi-line' ]
    'dot-notation': 'error', // TODO airbnb: [ 'error', { allowKeywords: true } ]
    'eol-last': 'error', // TODO airbnb : [ 'error', 'always' ] we: 'error'
    'eqeqeq': 'error', // TODO airbnb [ 'error', 'allow-null' ]
    'guard-for-in': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }], /* TODO airbnb : [ 'error',
      2,
      { SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 } } ]
    we: [ 'error', 2, { SwitchCase: 1 } ]
    */
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'error', /* TODO   keyword-spacing:
        airbnb : [ 'error',
          { before: true,
            after: true,
            overrides: { return: [Object], throw: [Object], case: [Object] } } ]
        we: 'error'
    */
    'max-nested-callbacks': ['error', 3], // TODO airbnb doesn't have that
    'new-cap': 'error', /* TODO     airbnb : [ 'error',
          { newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ] } ]
        we: 'error'
    */
    'new-parens': 'error',
    'no-alert': 'error', // TODO airbnb: 'warn' (for node it should be error)
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error', // TODO airbnb doesn't have that
    'no-else-return': 'error',
    'no-eq-null': 'error', // TODO airbnb doesn't have that
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['warn', { 'max': 2 }], /* TODO no-multiple-empty-lines:
      airbnb : [ 'error', { max: 2, maxEOF: 1 } ]
      we: [ 'warn', { max: 2 } ] */
    'no-native-reassign': 'error', // TODO airbnb doesn't have that
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error', // TODO airbnb doesn't have that
    'no-unneeded-ternary': 'error', // TODO airbnb : [ 'error', { defaultAssignment: false } ] we: 'error'
    'no-unused-expressions': 'error', // TODO airbnb: [ 'error', { allowShortCircuit: false, allowTernary: false } ]
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error', /* TODO airbnb : [ 'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true } ]
    we: 'error'
    */
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'], // TODO airbnb doesn't have that
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'], // TODO airbnb : [ 'error', 'single', { avoidEscape: true } ] we: [ 'error', 'single' ]
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'], // TODO airbnb : 'error' we: [ 'error', 'always' ]
    'spaced-comment': ['error', 'always', { 'exceptions': ['eslint-disable', 'global', 'eslint', 'eslint-env'] }], /* TODO
    airbnb : [ 'error',
      'always',
      { line: { exceptions: [Object], markers: [Object] },
        block: { exceptions: [Object], markers: [Object], balanced: false } } ]
    we: [ 'error',
      'always',
      { exceptions: [ 'eslint-disable', 'global', 'eslint', 'eslint-env' ] } ]
    */
    'strict': ['error', 'safe'], // TODO airbnb : [ 'error', 'never' ] we: [ 'error', 'safe' ]
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'], // TODO airbnb: [ 'error', 'outside', { functionPrototypeMethods: false } ]
    // Other rules that come from the old config
    'constructor-super': 'error',
    'func-style': ['off', 'declaration'],
    'generator-star-spacing': 'off',
    'generator-star': 'off',
    'handle-callback-err': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-extend-native': 'off',
    'no-fallthrough': 'error',
    'no-mixed-requires': 'off',
    'no-multi-spaces': 'off',
    'no-new-require': 'off',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-redeclare': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'warn', // TODO airbnb:  'error'
    'no-unused-vars': 'error', // TODO airbnb : [ 'error', { vars: 'local', args: 'after-used' } ] we: 'error'
    'prefer-const': 'off',

    // TODO we inherit 'no-global-assign': 'error' from eslint:recommended but airbnb: [ 'error', { exceptions: [] } ]
    // TODO we inherit 'no-cond-assign': 'error' from eslint:recommended but airbnb:  [ 'error', 'always' ]
    // TODO we inherit 'no-console': 'error' from eslint:recommended but airbnb:  'warn'
    // TODO we inherit 'no-constant-condition': 'error' from eslint:recommended but airbnb:  'warn'

    // TODO we inherit 'valid-typeof': 'error' from eslint:recommended but airbnb: [ 'error', { requireStringLiterals: true } ]

  /* TODO
  Rules we are missing from airbnb
  array-callback-return
  class-methods-use-this
  consistent-return
  default-case
  dot-location
  no-empty-function
  no-extend-native
  no-extra-label
  no-multi-spaces
  no-param-reassign
  no-restricted-properties
  no-useless-concat
  no-useless-escape
  no-useless-return
  no-with
  radix
  yoda
  comma-dangle
  no-prototype-builtins
  no-template-curly-in-string
  global-require
  no-new-require
  no-path-concat
  array-bracket-spacing
  block-spacing
  computed-property-spacing
  func-call-spacing
  func-names
  jsx-quotes
  linebreak-style
  lines-around-directive
  max-len
  newline-per-chained-call
  no-bitwise
  no-continue
  no-mixed-operators
  no-new-object
  no-plusplus
  no-restricted-syntax
  no-spaced-func
  no-tabs
  no-trailing-spaces
  no-underscore-dangle
  no-whitespace-before-property
  object-property-newline
  one-var
  one-var-declaration-per-line
  quote-props
  semi-spacing
  space-before-function-paren
  space-in-parens
  space-infix-ops
  space-unary-ops
  unicode-bom
  no-label-var
  no-shadow-restricted-names
  arrow-body-style
  arrow-parens
  arrow-spacing
  generator-star-spacing
  no-confusing-arrow
  no-duplicate-imports
  no-useless-computed-key
  no-useless-constructor
  no-useless-rename
  prefer-arrow-callback
  prefer-const
  prefer-numeric-literals
  prefer-rest-params
  prefer-spread
  prefer-template
  rest-spread-spacing
  symbol-description
  template-curly-spacing
  yield-star-spacing
  */
  }
};
