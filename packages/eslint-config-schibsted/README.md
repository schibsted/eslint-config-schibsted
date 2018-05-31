# eslint-config-schibsted [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted JavaScript linting rules for [ESLint](http://eslint.org/).

## How to use

```bash
yarn add eslint-config-schibsted eslint@^4.19.1eslint-plugin-import@^2.12.0 eslint-plugin-prettier@^2.6.0 eslint-plugin-unicorn@^4.0.3 prettier@^1.13.3 -D
```

Then add the `extends` option to your `.eslintrc.*`:

```json
{
    "extends": "schibsted",
    "root": true
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.

## Additional configurations

There are several configurations available:

1. `eslint-config-schibsted`, which is the base and standalone
1. `eslint-config-schibsted-chai` for inclusion with chai files
1. `eslint-config-schibsted-flow` for inclusion with flow typed files
1. `eslint-config-schibsted-modules` for inclusion with ES6 module files
1. `eslint-config-schibsted-node` for inclusion with Node files.
1. `eslint-config-schibsted-react` for inclusion with React files, and requires `eslint-plugin-react`

The additional packages should be included as `extends` in directories containing
the relevant source type files.

## Intent

The intent of these packages is to provide a common set of rules for coding within
the Schibsted codebases.  It is made up from a number of different packages
with predefined settings.  This will make transitioning between projects a
smoother experience.

### Why not just AirBnB?

While AirBnB is a popular configuration, there are a lot of valuable rules that
are not included in it.  Instead of having every project need to source these
additional rules, the `eslint-config-schibsted-*` packages provide these for you.

AirBnB is one of the included configurations in these packages.

### Prettier
Linting usually happens in two places.

1. In the editor.
1. In build tools.

By default this config uses Prettier in relaxed mode.  This means that errors will not show for rules that are covered by running `prettier --write`.  This allows people to code in their own style.  

However, it means that build tools, by default, also don't include the errors.  You may want errors to show in your build tools so you will need to specify the `prettier-strict` config as appropriate.  e.g. using the cli add `--config ./packages/eslint-config-schibsted/prettier-strict.js`.

If you would like code editors to show the errors as well, simply add `prettier-strict` to the `extends` config.

```json
{
    "extends": [
      "schibsted",
      "schibsted/prettier-strict"
    ],
    "root": true  
}
```
