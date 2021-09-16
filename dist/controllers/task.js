"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.deleteTask = exports.addTask = exports.getTask = exports.getTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Task = require('../models/Tasks');

var getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Task.find();

          case 2:
            data = _context.sent;
            res.json(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Task.findById(req.params.id);

          case 2:
            data = _context2.sent;
            res.json(data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTask = getTask;

var addTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            task = new Task(req.body);
            task.save();
            res.json('Agregado');

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addTask = addTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Task.findByIdAndRemove(req.params.id);

          case 2:
            res.json('Eliminado');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var updateTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body, title, description;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            _context5.next = 3;
            return Task.findByIdAndUpdate(req.params.id, {
              title: title,
              description: description
            });

          case 3:
            res.json('Actualizado');

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;