"use strict";

var express = require('express'),
  logger = require('./app/logger');

// Creating the app
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from AAW\'s API!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  logger.info('Example app listening at http://%s:%s', host, port);
});
