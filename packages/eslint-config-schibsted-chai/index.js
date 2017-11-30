"use strict";

module.exports = {
  env: {
    node: true
  },
  extends: ["./chai.js"].map(require.resolve)
};
