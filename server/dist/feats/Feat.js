"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _db = _interopRequireDefault(require("../lib/db"));

var featSchema = new _mongoose.Schema({
  nome: String,
  livro: String,
  tipo: String,
  preRequisito: String,
  beneficio: String,
  especial: String,
  normal: String
}, {
  collection: 'tormenta'
});

var Feat = _db["default"].model('Feat', featSchema, 'tormenta');

var _default = Feat;
exports["default"] = _default;
//# sourceMappingURL=Feat.js.map