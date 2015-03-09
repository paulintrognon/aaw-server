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

// Hello World
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to aaw-server\'s API root!' });
});

module.exports = router;