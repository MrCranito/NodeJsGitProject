var errorHelper = require('../helpers/error.helper');
var settings = require('../settings');

module.exports = function() {
  return function errorHandler(err, req, res, next) {
    res.status(err.status || 500);

    if(settings.ENV === 'production') {
      res.json({
        status: err.status,
        code: err.code
      });
    }
    else {
      res.json({
        status: err.status,
        code: err.code,
        trace: err.message
      })
    }
  }
};
