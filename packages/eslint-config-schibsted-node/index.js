"use strict";

module.exports = {
  env: {
    node: true
  },
  extends: ["./airbnb.js"].map(require.resolve)
};
