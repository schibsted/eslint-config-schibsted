"use strict";

module.exports = {
  extends: [
    "eslint-config-airbnb/rules/react",
    "eslint-config-airbnb/rules/react-a11y"
  ].map(require.resolve),
  rules: {}
};
