# eslint-config-schibsted [![Build Status](https://travis-ci.org/schibsted/eslint-config-schibsted.svg?branch=master)](https://travis-ci.org/schibsted/eslint-config-schibsted)

A module to contain the Schibsted JavaScript linting rules for [ESLint](http://eslint.org/).

## Contributing

If you want to contribute, [read more here](CONTRIBUTING.md).

## How to use
See the [README.md](packages/eslint-config-schibsted/README.md) in `packages/eslint-config-schibsted` for usage documentation.

## Testing

We use Yarn for installation.
It is recommended to install Yarn using the native installation method for your environment.
See https://yarnpkg.com/en/docs/install
So don't do a `npm i -g yarn`. Use `brew update && brew install yarn` on mac
or see [yarn installation guide](https://yarnpkg.com/en/docs/install) for more info.
*For travis, we rely on [the existence of `yarn.lock` in the root]
(https://blog.travis-ci.com/2016-11-21-travis-ci-now-supports-yarn) to do the heavy work.*
Then simply run `yarn run test` from the root to test all packages in `packages` dir.
