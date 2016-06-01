/*
Turn off all ES6 features, including sub-settings such as modules.
*/

module.exports = {
    'extends': [
        'spt/env-es6-modules-false'
    ],
    'env': {
        'es6': false
    },
    'parserOptions': {
        'ecmaVersion': 5
    },
    'rules': {
        'constructor-super': 'off',
        'generator-star-spacing': 'off',
        'generator-star': 'off',
        'no-this-before-super': 'off',
        'no-var': 'off',
        'object-shorthand': 'off',
        'prefer-const': 'off'
    }
};
