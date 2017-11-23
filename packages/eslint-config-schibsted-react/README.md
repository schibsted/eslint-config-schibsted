# eslint-config-schibsted-react [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted React linting rules for [ESLint](http://eslint.org/).

## How to use

In addition to [installing the main package](../eslint-config-schibsted/README.md) you will need to install this package.

```bash
yarn add eslint-config-schibsted-react eslint-plugin-react@7 -D
```

Then add the `extends` option to your `.eslintrc.*`:

```json
{
  "extends": [
    "schibsted-react"
  ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
