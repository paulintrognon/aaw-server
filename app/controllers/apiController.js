"use strict";

module.exports = {
  construct: apiControllerFactory
};

function apiControllerFactory() {
  var apiController = {};

  apiController.ping = ping;

  return apiController;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function ping(req, res, next) {
    res.json({
      ping: 'AAW API'
    });
  }
}
