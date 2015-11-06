/*
Turn off all ES6 features, including sub-settings such as modules.
*/

const _ = require('lodash');
const envEs6ModulesFalse = require('./env-es6-modules-false');
const defaults = {
    'env': {
        'es6': false
    },
    'rules': {
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'generator-star': 0,
        'no-this-before-super': 0,
        'no-var': 0,
        'object-shorthand': 0,
        'prefer-const': 0
    }
};

module.exports = _.merge({}, envEs6ModulesFalse, defaults);
