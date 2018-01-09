"use strict";


module.exports = (function() {
	const DATABASE_ERROR = 'DATABASE_ERROR';
	const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
	const INVALID_TOKEN = 'INVALID_TOKEN';
	const INVALID_PARAMS = 'INVALID_PARAMS';
	const NOT_FOUND = 'NOT_FOUND';

	function databaseError(err) {
		err.status = 500;
		err.code = DATABASE_ERROR;
		return err;
	}
	function authenticateError(err) {
		err.status = 400;
		err.code = AUTHENTICATION_FAILURE;
		return err;
	}
	function invalidTokenError(err) {
		err.status = 403;
		err.code = INVALID_TOKEN;
		return err;
	}
	function invalidParamsError(err) {
		err.status = 405;
		err.code = INVALID_PARAMS;
		return err;
	}
	function notFoundError(err) {
		err.status = 404;
		err.code = NOT_FOUND;
		return err;
	}

	return {
		databaseError,
		authenticateError,
		invalidTokenError,
		invalidParamsError,
		notFoundError
	};
})();
