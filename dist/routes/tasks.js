"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task");

var ruta = (0, _express.Router)();
ruta.get("/tasks", _task.getTasks);
ruta.get("/tasks/:id", _task.getTask);
ruta.post("/tasks", _task.addTask);
ruta["delete"]("/tasks/:id", _task.deleteTask);
ruta.put("/tasks/:id", _task.updateTask);
ruta.get("/", function (req, res) {
  res.send("Hola mundo");
});
var _default = ruta;
exports["default"] = _default;