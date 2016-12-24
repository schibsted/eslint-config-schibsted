# eslint-config-spt [![Build Status](https://travis-ci.org/schibsted/eslint-config-spt.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-spt)

A module to contain the SPT JavaScript linting rules for [ESLint](http://eslint.org/).

## How to use

```bash
npm install --save-dev eslint-config-spt
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "spt"
}
```

If it's a React project, install `eslint-config-spt`, `eslint-config-spt-react` and `eslint-plugin-react`.

```bash
npm install --save-dev eslint-config-spt eslint-config-spt-react eslint-plugin-react@4
```

Then add the `extends` option to your `.eslintrc`:
```json
{
    "extends": [
        "spt",
        "spt-react"
    ]
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
