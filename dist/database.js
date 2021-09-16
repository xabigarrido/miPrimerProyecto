"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var URI = 'mongodb+srv://xabi:123@cluster0.xmvtl.mongodb.net/AppTasks?retryWrites=true&w=majority';

_mongoose["default"].connect(URI).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (err) {
  return console.log(err);
});