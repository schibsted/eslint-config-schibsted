/*
    Load ES6 settings as well as the ES6 modeule settings, since the modules are of no use otherwise.
*/
const _ = require('lodash');
const envEs6 = require('./env-es6');
const defaults = {
    'ecmaFeatures': {
        'modules': true
    }
};

module.exports = _.merge({}, envEs6, defaults);
