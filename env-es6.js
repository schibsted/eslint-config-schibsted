module.exports = {
    'env': {
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'constructor-super': 'error',
        'generator-star-spacing': 'off',
        'generator-star': 'off',
        'no-this-before-super': 'error',
        'no-var': 'error',
        // TODO: bring back to 'error' when object-shorthand rule supports ES7 object spread.
        // cf. https://github.com/eslint/eslint/issues/2486
        'object-shorthand': 'warn',
        'prefer-const': 'off'
    }
};
