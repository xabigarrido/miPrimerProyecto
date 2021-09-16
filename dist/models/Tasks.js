"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var schemaTask = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});
module.exports = _mongoose["default"].model('tasks', schemaTask);