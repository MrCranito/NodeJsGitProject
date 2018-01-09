var server = require('./server');
var logger = require('./server/helpers/logger.helper');

// start server on the specified port and binding host
server.express.listen(server.appEnv.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    logger.info("server starting on " + server.appEnv.url);
});
