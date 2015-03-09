"use strict";

var express = require('express');

// Creating the app
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from AAW\'s API!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
