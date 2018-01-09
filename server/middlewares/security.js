var settings = require('../settings');
var error = require('../helpers/error.helper');
//var jwt = require('jsonwebtoken');

module.exports = function() {
  return function security(req, res, next) {
    /*var token = req.body.token || req.query.token || req.headers['x-access-token'];
	  if (token) {
	    jwt.verify(token, settings.SECRET, function(err, decoded) {
	      if (err) {
					return next(error.invalidTokenError(err));
				}
	      req.decoded = decoded;
	      next();
	    });
	  } else {
	    return next(error.invalidTokenError(new Error('no token provided')));
	  }*/
  }
};
