var errorHelper = require('../helpers/error.helper');

module.exports = function() {
  return function notFound(req, res, next) {
    return next(errorHelper.notFoundError(new Error('404 not found')));
    next();
  }
};
