"use strict";

module.exports = {
  extends: ["./react.js", "./airbnb.js", "./prettier.js"].map(require.resolve)
};
