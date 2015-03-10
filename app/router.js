"use strict";

// Dependencies
var express = require('express'),
  logger = require('./logger');

// Creating the router
var router = express.Router();

// Middleware used for all requests
router.use(function(req, res, next) {
  logger.debug('Called %s', req.originalUrl);
  next(); // make sure we go to the next routes and don't stop here
});

// Linking controllers to routes
var apiController = require('./controllers/apiController').construct();

// Hello World
router.get('/', apiController.ping);

module.exports = router;