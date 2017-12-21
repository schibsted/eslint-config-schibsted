"use strict";

module.exports = {
  env: {
    browser: false,
    node: false,
    commonjs: false,
    "shared-node-browser": false,
    es6: true,
    worker: false,
    amd: false,
    mocha: false,
    jasmine: false,
    jest: false,
    phantomjs: false,
    protractor: false,
    qunit: false,
    jquery: false,
    prototypejs: false,
    shelljs: false,
    meteor: false,
    mongo: false,
    applescript: false,
    nashorn: false,
    serviceworker: false,
    atomtest: false,
    embertest: false,
    webextensions: false,
    greasemonkey: false
  },
  extends: ["./airbnb.js", "./unicorn.js", "./prettier.js"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "script"
  },
  rules: {
    strict: ["error", "safe"]
  }
};
