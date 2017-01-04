'use strict';

// TODO: these are airbnb's rules: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

module.exports = {
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    /* TODO list of all rules set by airbnb
    react/forbid-prop-types
    react/jsx-boolean-value
    react/jsx-closing-bracket-location
    react/jsx-curly-spacing
    react/jsx-indent-props
    react/jsx-no-bind
    react/jsx-no-duplicate-props
    react/jsx-no-undef
    react/jsx-pascal-case
    react/jsx-uses-react
    react/jsx-uses-vars
    react/no-danger
    react/no-deprecated
    react/no-did-mount-set-state
    react/no-did-update-set-state
    react/no-is-mounted
    react/no-multi-comp
    react/no-string-refs
    react/no-unknown-property
    react/prefer-es6-class
    react/prefer-stateless-function
    react/prop-types
    react/react-in-jsx-scope
    react/require-render-return
    react/self-closing-comp
    react/jsx-space-before-closing
    react/sort-comp
    react/jsx-wrap-multilines
    react/jsx-first-prop-new-line
    react/jsx-equals-spacing
    react/jsx-indent
    react/jsx-no-target-blank
    react/jsx-filename-extension
    react/jsx-no-comment-textnodes
    react/no-render-return-value
    react/no-find-dom-node
    react/no-danger-with-children
    react/no-unused-prop-types
    react/style-prop-object
    react/no-unescaped-entities
    react/no-children-prop
    */
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
        'react/no-multi-comp': 'error',
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
