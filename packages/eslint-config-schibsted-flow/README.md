# eslint-config-schibsted-flow [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the SPT flow type linting rules for [ESLint](http://eslint.org/).

## How to use

```bash
yarn add eslint-config-schibsted eslint-config-schibsted-flow -D
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": [
        "spt",
        "spt-flow"
    ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
