"use strict";

var express = require('express'),
  logger = require('./app/logger'),
  config = require('./app/config').server;

// Creating the app
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from AAW\'s API!');
});

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  logger.info('Server listening at http://%s:%s', host, port);
});
