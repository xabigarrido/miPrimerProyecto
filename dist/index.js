"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app["default"].set('port', process.env.PORT || 3000);

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Server on port ' + _app["default"].get('port'));
});