# eslint-config-spt [![Build Status](https://travis-ci.org/schibsted/eslint-config-spt.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-spt)

A module to contain the SPT JavaScript linting rules for [ESLint](http://eslint.org/).

## How to use

There are 2 modules, `eslint-config-spt`, which is standalone, and `eslint-config-spt-react`, which requires `eslint-plugin-react`.

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

## Publishing

```bash
# Make sure to only make do this in the package that has changed
# Update CHANGELOG
$ npm version <patch | minor | major>
$ git push --tags origin master
$ npm publish
```

### Subdirectories
ESLint configuration supports [cascading with hierarchy](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy). Every directory can have an `.eslintrc` file which overwrites settings included in `.eslintrc` files further up the tree.  As such you should set rules for required syntax as close to the code that uses that syntax as possible.

For example you may have a subdirectory called `app` which is where all of your Node.js code resides.  You should therefore have an `app/.eslinrc` files with at least the `extends` `spt/env-node` value in it.

Since the project root includes an `.eslintrc` file with `extends` `spt` it is advisable not to respecify this in subdirectories.

### Locality & scoping
Using the ability of cascading configuration you should make all syntax as local to the code that requires it as possible.  This includes `env`, `rules`, `globals` etc.

This will enable the linting process to be as accurate as possible, preventing easily spotted false positives and the harder to spot false negatives.

### extends vs env
tldr; `env` sets globals, `extends` sets globals and rules. Use `extends` when possible.

A number of the available `spt/*` "rules packs" available to `extends` match `env` settings that can be toggled.  It should be noted that in addition to toggling the `env` setting, they also set up additional rules that should be followed in that syntax.  As such, when possible, always `extends` vs toggling an `env`.  

It may not always be possible to isolate rules using `extends`; for example in a  project root where there may be files for a mixture of environments.  In such cases efforts should be made to set file based rules that provide some level of confidence in the file's syntax.  It is not currently possible to use `extends` on a per-files basis.

Rule packs
------

### ECMAScript 2015
ECMAScript 2015 (aka ES6, ECMA-262 6th Edition) syntax is enabled by default.  If you would like to disable these features then you should `extend` `spt/env-es6-false` to remove the syntax.  Note that doing so will disable all ES6 features such as ES6 modules.

```json
{
  "extends": [
    "spt/env-es6-false"
  ]
}
```

If you would like to re-enable ES6 syntax for a specific subfolder tree make sure there is an `.eslintrc` file in that folder that includes at least the following.

```json
{
  "extends": [
    "spt/env-es6"
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
    "spt/env-es6-modules"
  ]
}
```

To disable:
```json
{
  "extends": [
    "spt/env-es6-modules-false"
  ]
}
```

### Node
Node.js syntax can be enabled and disabled with the following `extends` value.

To enable:
```json
{
  "extends": [
    "spt/env-node"
  ]
}
```

To disable:
```json
{
  "extends": [
    "spt/env-node-false"
  ]
}
```

### React
React syntax can be linted with the following `extends` value.

To enable:

```json
{
  "extends": [
    "spt",
    "spt-react"
  ]
}
```
