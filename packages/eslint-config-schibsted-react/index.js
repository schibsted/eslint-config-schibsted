'use strict';

module.exports = {
    'extends': require.resolve('./react.js')
    /* TODO airbnb has this too:
    parserOptions: {
      ecmaFeatures: {
        jsx: true
        generators: false
        experimentalObjectRestSpread: true
        objectLiteralDuplicateProperties: false
      },
      ecmaVersion: 2017
      }
    */
};
