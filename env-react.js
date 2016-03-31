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
        'react/display-name': 0,
        'react/jsx-boolean-value': 2,
        'jsx-quotes': [2, 'prefer-double'],
        'react/jsx-no-undef': 2,
        'react/jsx-sort-props': 0,
        'react/jsx-sort-prop-types': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-did-mount-set-state': [2, 'allow-in-func'],
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 2,
        'react/no-unknown-property': 1,
        'react/prop-types': [1, { 'ignore': ['children', 'className'] }],
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/wrap-multilines': 2,
        'react/sort-comp': [2, {
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
