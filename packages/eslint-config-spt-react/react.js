'use strict';

module.exports = {
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        }
    },
    'rules': {
        'react/display-name': 'off',
        'react/jsx-boolean-value': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-no-undef': 'error',
        'react/jsx-sort-props': 'off',
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
        'react/no-unknown-property': 'warn',
        'react/prop-types': ['warn', { 'ignore': ['children', 'className'] }],
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': ['error', {
            'order': [
                'constructor',
                'displayName',
                'propTypes',
                'contextTypes',
                'childContextTypes',
                'mixins',
                'statics',
                'defaultProps',
                'getDefaultProps',
                'getInitialState',
                'getChildContext',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'everything-else',
                '/^render.+$/',
                'render'
            ]
        }]
    }
};
