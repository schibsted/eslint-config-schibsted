"use strict";

module.exports = {
  extends: ["./airbnb.js"].map(require.resolve),
  parserOptions: {
    sourceType: "module"
  }
};
