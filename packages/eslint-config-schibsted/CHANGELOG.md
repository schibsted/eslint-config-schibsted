# 7.0.0
- set `ecmaVersion: 2018`
- Require Node 6
- [deps] Update to [ESlint v5](https://eslint.org/blog/2018/06/eslint-v5.0.0-released)
- [deps] Update to [eslint-config-airbnb-base v13](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1300--2018-06-21)
  - set to error
    - [import/no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
    - [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)
    - [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
    - [no-else-return](https://eslint.org/docs/rules/no-else-return)
  - set to warn
    - [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
- [deps] Update eslint-plugin-unicorn to v6
  - Set new unicorn rules to `error`
    - [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md)
    - [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md)
    - [unicorn/prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md) duplicated in AirBnB
    - [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md)
  - Set [problematic unicorn rules](https://github.com/sindresorhus/eslint-plugin-unicorn/issues/151) to `off`
    - [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md)
    - [unicorn/no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md)
    - [unicorn/no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md)
  - Change the default name option of the catch-error-name rule to be error instead of err.
- [deps] Update Prettier to v1.14
  - [v1.10 changes](https://prettier.io/blog/2017/12/05/1.9.0.html)
  - [v1.11 changes](https://prettier.io/blog/2018/02/26/1.11.0.html)
  - [v1.12 changes](https://prettier.io/blog/2018/04/11/1.12.0.html)
  - [v1.13 changes](https://prettier.io/blog/2018/05/27/1.13.0.html)
  - [v1.14 changes](https://prettier.io/blog/2018/07/29/1.14.0.html)
- [deps] Update to eslint-plugin-prettier 3.0.0
  - [breaking changes](https://github.com/prettier/eslint-plugin-prettier/blob/master/CHANGELOG.md#v300-2018-10-01)
- [deps] Minor dependencies update

# 6.0.0
- [deps] Update eslint-plugin-unicorn to v3
- [deps] Minor dependencies update

# 5.0.0
- Use airbnb as initial extends
- Use eslint-plugin-unicorn
- Use eslint-plugin-prettier
- Use eslint-config-prettier

# 3.0.0
- Extract all React rules into its own `react` package

# 2.0.0
- Update for ESLint 2 (@nosilleg, https://github.com/schibsted/eslint-config-schibsted/pull/3)
- Change rule `strict` from option `function` to `safe` (http://eslint.org/docs/rules/strict)
- Change rule `no-labels` from warn to error (http://eslint.org/docs/rules/no-labels)

# 1.0.7
- Add missing file `env-es6-modules.js`

# 1.0.6
- Publish to public GitHub.

# 0.0.1
- Add placeholder project
