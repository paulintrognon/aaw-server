"use strict";

module.exports = {
  construct: apiControllerFactory
};

var baseControllerFactory = require('./baseController');

function apiControllerFactory() {
  var apiController = baseControllerFactory.construct();

  // GET /api
  apiController.ping = ping;

  return apiController;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function ping() {
    return {
      ping: 'AAW API'
    };
  }
}
