var config = require('../config.json');
var nodeApp = require('../package.json');

var env = process.argv[2] || process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV !== env) {
    // force env
    process.env.NODE_ENV = env;
}


module.exports = {
    'ENV': env,
    'SECRET': config.secret,
    'AUTH_TIME': config.auth_time,
    'START_TIME': new Date().getTime(),
    'SALT_ROUNDS': config.salt_rounds,
    'ORIGIN': config.origin,
    'APP_NAME': nodeApp.name,
    'APP_VERSION': nodeApp.version
};
