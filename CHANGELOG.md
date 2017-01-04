## base.js 

The new base uses `eslint:recommended`

This means the following changes in the new version:

```
rules:
  no-unexpected-multiline:
    left: 'error'
    right: 'warn'
env.es6:
  new: undefined
  old: true
env.node:
  new: undefined
  old: false
env.browser:
  new: undefined
  old: false
env.jasmine:
  new: undefined
  old: false
env.mocha:
  new: undefined
  old: false
parserOptions.ecmaVersion:
  new: undefined
  old: 6
parserOptions.sourceType:
  new: undefined
  old: 'script'
ecmaFeatures:
  new: {}
  old: undefined
```

And the following rules have the recommended config now:

```
no-case-declarations
no-class-assign
no-cond-assign
no-console
no-const-assign
no-constant-condition
no-control-regex
no-debugger
no-dupe-args
no-dupe-class-members
no-dupe-keys
no-duplicate-case
no-empty
no-empty-character-class
no-empty-pattern
no-ex-assign
no-extra-boolean-cast
no-extra-semi
no-func-assign
no-global-assign
no-inner-declarations
no-invalid-regexp
no-irregular-whitespace
no-mixed-spaces-and-tabs
no-new-symbol
no-obj-calls
no-regex-spaces
no-self-assign
no-sparse-arrays
no-unreachable
no-unsafe-finally
no-unsafe-negation
no-unused-labels
require-yield
use-isnan
valid-typeof
```

It adds the following rules:

```
no-var
object-shorthand
strict
accessor-pairs
block-scoped-var
curly
dot-notation
eqeqeq
guard-for-in
keyword-spacing
no-alert
no-caller
no-div-regex
no-else-return
no-eq-null
no-eval
no-extra-bind
no-floating-decimal
no-implied-eval
no-iterator
no-labels
no-lone-blocks
no-loop-func
no-multi-str
no-native-reassign
no-new-func
no-new-wrappers
no-new
no-octal-escape
no-proto
no-return-assign
no-script-url
no-self-compare
no-sequences
no-throw-literal
no-unused-expressions
no-void
vars-on-top
wrap-iife
no-shadow
no-undef-init
no-undefined
no-use-before-define
brace-style
camelcase
comma-spacing
comma-style
consistent-this
eol-last
indent
key-spacing
max-nested-callbacks
new-cap
new-parens
no-array-constructor
no-lonely-if
no-multiple-empty-lines
no-nested-ternary
object-curly-spacing
no-unneeded-ternary
operator-assignment
operator-linebreak
padded-blocks
quotes
semi
space-before-blocks
spaced-comment
```

These rules are exactly the same:

```
no-delete-var
no-fallthrough
no-octal
no-redeclare
no-this-before-super
no-undef
no-unused-vars
constructor-super
```

## .editorconfig `indent_size`:

* new: `2`
* old: `4`
