'use strict';

module.exports = {
    'env': {
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'constructor-super': 2,
        'generator-star-spacing': 0,
        'generator-star': 0,
        'no-this-before-super': 2,
        'no-var': 2,
        // TODO: bring back to 2 when object-shorthand rule supports ES7 object spread.
        // cf. https://github.com/eslint/eslint/issues/2486
        'object-shorthand': 1,
        'prefer-const': 0
    }
};
