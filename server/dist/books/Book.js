"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _db = _interopRequireDefault(require("../lib/db"));

var bookSchema = new _mongoose.Schema({
  nome: String,
  qtdTalentos: Number,
  talentos: [{
    nome: String,
    id: String
  }]
});

var Book = _db["default"].model('Book', bookSchema, 'Book');

var _default = Book;
exports["default"] = _default;
//# sourceMappingURL=Book.js.map