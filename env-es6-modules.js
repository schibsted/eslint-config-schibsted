/*
    Load ES6 settings as well as the ES6 modeule settings, since the modules are of no use otherwise.
*/
module.exports = {
    'extends': [
        'spt/env-es6'
    ],
    'parserOptions': {
        'sourceType': 'module'
    }
};
