"use stict";

var config = require('./config').logger,
  bunyan = require('bunyan');

var logger = bunyan.createLogger({
  name: "app-logger",
  stream: process.stdout,
  level: config.level
});

module.exports = logger;