"use strict";

module.exports = {
  construct: baseControllerFactory
};

function baseControllerFactory() {
  var baseController = {};

  baseController.action = action;

  return baseController;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function action(actionName) {
    return function (req, res, next) {
      res.json(baseController[actionName](req));
      next();
    }
  }
}
