'use strict';

/*
Turn off all ES6 features, including sub-settings such as modules.
*/

module.exports = {
    'extends': [
        './env-es6-modules-false'
    ].map(require.resolve),
    'env': {
        'es6': false
    },
    'parserOptions': {
        'ecmaVersion': 5
    },
    'rules': {
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'generator-star': 0,
        'no-this-before-super': 0,
        'no-var': 0,
        'object-shorthand': 0,
        'prefer-const': 0
    }
};
