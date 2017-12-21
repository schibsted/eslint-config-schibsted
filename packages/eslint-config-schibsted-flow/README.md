# eslint-config-schibsted-flow [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted Flow type linting rules for [ESLint](http://eslint.org/).

## How to use

In addition to [installing the main package](../eslint-config-schibsted/README.md) you will need to install this package.

```bash
yarn add eslint-config-schibsted-flow babel-eslint@^8.0.3 eslint@^4.13.1 eslint-plugin-flowtype@^2.40.1 -D
```

Then add the `extends` option to your `.eslintrc.*`:

```json
{
  "extends": [
    "schibsted-flow"
  ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
