'use strict';

module.exports = {
  extends: './base.js',
  env: {
    'node': true
  },
  rules: {
    'no-alert': 'error', // TODO doesn't env:node set this?
    'no-console': 'off', // TODO doesn't env:node set this?
    'no-global-assign': 'off' // TODO doesn't env:node set this?

    /* TODO some configs from airbnb
    parserOptions.sourceType:
      airbnb : 'module'
      we: undefined
    settings:
      airbnb : { 'import/resolver': { node: { extensions: [Object] } },
        'import/extensions': [ '.js', '.jsx' ],
        'import/core-modules': [],
        'import/ignore': [ 'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$' ],
        react: { pragma: 'React', version: '0.14' } }
      we: undefined
    parserOptions.ecmaFeatures.generators:
      airbnb : false
      we: undefined
    parserOptions.ecmaFeatures.objectLiteralDuplicateProperties:
      airbnb : false
      we: undefined
    parserOptions.ecmaFeatures.experimentalObjectRestSpread:
      airbnb : true
      we: undefined
    parserOptions.ecmaFeatures.jsx:
      airbnb : true
      we: undefined
    parserOptions.ecmaVersion:
      airbnb : 2017
      we: undefined

    env.es6:
      airbnb : true
      we: undefined

    ecmaFeatures.jsx:
      airbnb: true
      we: undefined

    */
  }
};
