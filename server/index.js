"use strict";

var settings = require('./settings');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');


var express = require('express');

// load express middlewares
var cors = require('cors');

var bodyParser = require('body-parser');


//const io = require('socket.io');


var poweredBy = require('./middlewares/powered-by');
var security = require('./middlewares/security');
var notFound = require('./middlewares/not-found');
var errorHandler = require('./middlewares/error-handler');

var requireDir = require('require-dir');


// create a new express server
var app = express();

// set powered-by app name
app.use(poweredBy());

// set the socket
app.use((req,res,next) => {
    //res.io = io;
    next();
});




//app.set("io",io);

app.post(cors({
    origin: settings.ORIGIN,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'X-Access-Token']
}));

// set cors security

app.use(cors({
    origin: settings.ORIGIN,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'X-Access-Token']
}));



// set logger on express
// app.use(morgan(settings.ENV === 'production' ? 'combined' : ':remote-addr :method :url', { stream: logger.stream }));

// serve the files out of ./public as our main files
app.use(express.static('./public'));


// BodyParser
// The limit of the request/response
app.use(bodyParser.json({
    limit: '1mb'
}));

// set parameters validator
//app.use(expressValidator());
var appEnv = cfenv.getAppEnv();
// TODO: these values look too high
app.use(bodyParser.urlencoded({
    limit: '50mb', // default is 100kb
    extended: true,
    parameterLimit: 50000 // default is 1000
}));

// import routes
var routes = requireDir('./routes');

// public routes
for(let route in routes) {
    app.use('/' + route.replace(/.route$/, ''), routes[route].publicRoutes());
}


// end public routes

// prevent non-logged users to go further
app.use(security());

// private routes
for(let route in routes) {
    app.use('/' + route.replace(/.route$/, ''), routes[route].privateRoutes());
}
// end private routes

// else catch errors
app.use(notFound());
app.use(errorHandler());
// end catch errors

module.exports = {
    express: app,
    appEnv : appEnv
};
