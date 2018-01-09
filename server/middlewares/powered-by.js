var settings = require('../settings');

module.exports = function() {
  return function poweredBy(req, res, next) {
    res.setHeader('X-Powered-By', settings.ENV === 'production' ? settings.APP_NAME : settings.APP_NAME + ' ' + settings.APP_VERSION);
    next();
  }
};
