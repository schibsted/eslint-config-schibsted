'use strict';

/*
    Load ES6 settings as well as the ES6 modeule settings, since the modules are of no use otherwise.
*/
module.exports = {
  'extends': [
    './env-es6.js'
  ].map(require.resolve),
  'parserOptions': {
    'sourceType': 'module'
  }
};
