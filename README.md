# eslint-config-schibsted [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted JavaScript linting rules for [ESLint](http://eslint.org/).

## Contributing

If you want to contribute, [read more here](CONTRIBUTING.md).

## How to use

There are 2 modules, `eslint-config-schibsted`, which is standalone, and `eslint-config-schibsted-react`, which requires `eslint-plugin-react`.

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

## Testing

We use Yarn for installation.
It is recommended to install Yarn using the native installation method for your environment.
See https://yarnpkg.com/en/docs/install
So don't do a `npm i -g yarn`. Use `brew update && brew install yarn` on mac
or see [yarn installation guide](https://yarnpkg.com/en/docs/install) for more info.
*For travis, we rely on [the existence of `yarn.lock` in the root]
(https://blog.travis-ci.com/2016-11-21-travis-ci-now-supports-yarn) to do the heavy work.*
Then simply run `npm t` from the root to test all packages in `packages` dir.


### Subdirectories
ESLint configuration supports [cascading with hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy). Every directory can have an `.eslintrc` file which overwrites settings included in `.eslintrc` files further up the tree.  As such you should set rules for required syntax as close to the code that uses that syntax as possible.

For example you may have a subdirectory called `app` which is where all of your Node.js code resides.  You should therefore have an `app/.eslinrc` files with at least the `extends` `schibsted/env-node` value in it.

Since the project root includes an `.eslintrc` file with `extends` `schibsted` it is advisable not to respecify this in subdirectories.

### Locality & scoping
Using the ability of cascading configuration you should make all syntax as local to the code that requires it as possible.  This includes `env`, `rules`, `globals` etc.

This will enable the linting process to be as accurate as possible, preventing easily spotted false positives and the harder to spot false negatives.

### extends vs env
tldr; `env` sets globals, `extends` sets globals and rules. Use `extends` when possible.

A number of the available `schibsted/*` "rules packs" available to `extends` match `env` settings that can be toggled.  It should be noted that in addition to toggling the `env` setting, they also set up additional rules that should be followed in that syntax.  As such, when possible, always `extends` vs toggling an `env`.  

It may not always be possible to isolate rules using `extends`; for example in a  project root where there may be files for a mixture of environments.  In such cases efforts should be made to set file based rules that provide some level of confidence in the file's syntax.  It is not currently possible to use `extends` on a per-files basis.

Rule packs
------

### ECMAScript 2015
ECMAScript 2015 (aka ES6, ECMA-262 6th Edition) syntax is enabled by default.  If you would like to disable these features then you should `extend` `schibsted/env-es6-false` to remove the syntax.  Note that doing so will disable all ES6 features such as ES6 modules.

```json
{
  "extends": [
    "schibsted/env-es6-false"
  ]
}
```

If you would like to re-enable ES6 syntax for a specific subfolder tree make sure there is an `.eslintrc` file in that folder that includes at least the following.

```json
{
  "extends": [
    "schibsted/env-es6"
  ]
}
```

#### ES6 modules
If you use ES6 modules you can enable and disable the syntax with the following `extends` values.

Note that these are not enabled by default because they can potentially cause a lot of lint errors in your other files.  For example, ES6 modules are always in  strict mode.  As such, having a `"use strict";` declaration is redundant and causes a lint error.  However, if you enable this syntax globally then non-ES6 modules can throw the same error even though they require the use of `"use strict";` to be in strict mode.

To enable:
```json
{
  "extends": [
    "schibsted/env-es6-modules"
  ]
}
```

To disable:
```json
{
  "extends": [
    "schibsted/env-es6-modules-false"
  ]
}
```

### Node
Node.js syntax can be enabled and disabled with the following `extends` value.

To enable:
```json
{
  "extends": [
    "schibsted/env-node"
  ]
}
```

To disable:
```json
{
  "extends": [
    "schibsted/env-node-false"
  ]
}
```

### React
React syntax can be linted with the following `extends` value.

To enable:

```json
{
  "extends": [
    "schibsted",
    "schibsted-react"
  ]
}
```
