# eslint-config-schibsted [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted JavaScript linting rules for [ESLint](http://eslint.org/).

## How to use

```bash
npm install --save-dev eslint-config-schibsted
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "schibsted"
}
```

If it's a React project, install `eslint-config-schibsted`, `eslint-config-schibsted-react` and `eslint-plugin-react`.

```bash
npm install --save-dev eslint-config-schibsted eslint-config-schibsted-react eslint-plugin-react@4
```

Then add the `extends` option to your `.eslintrc`:
```json
{
    "extends": [
        "schibsted",
        "schibsted-react"
    ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
