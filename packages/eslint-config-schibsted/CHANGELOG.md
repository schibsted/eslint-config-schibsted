# 7.0.0
- set `ecmaVersion: 2018`
- [deps] Update eslint-plugin-unicorn to v4
  - Set new unicorn rules to `error`
    - [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md)
    - [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md)
    - [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md)
 - Set [problematic unicorn rules](https://github.com/sindresorhus/eslint-plugin-unicorn/issues/151) to `off`
    - [unicorn/catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md)
    - [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md)
    - [unicorn/no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md)
    - [unicorn/no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md)
- [deps] Update Prettier to v1.13
  - [v1.10 changes](https://prettier.io/blog/2017/12/05/1.9.0.html)
  - [v1.11 changes](https://prettier.io/blog/2018/02/26/1.11.0.html)
  - [v1.12 changes](https://prettier.io/blog/2018/04/11/1.12.0.html)
  - [v1.13 changes](https://prettier.io/blog/2018/05/27/1.13.0.html)
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
