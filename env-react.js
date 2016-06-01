module.exports = {
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaFeatures': {
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
        'react/no-did-mount-set-state': ['error', 'allow-in-func'],
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': 'error',
        'react/no-unknown-property': 'warn',
        'react/prop-types': ['warn', { 'ignore': ['children', 'className'] }],
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/wrap-multilines': 'error',
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
