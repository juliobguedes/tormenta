"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _Hash = _interopRequireDefault(require("../hash/Hash"));

var _db = _interopRequireDefault(require("../lib/db"));

var characterSchema = new _mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  talentosAdicionados: {
    type: [_mongoose.Types.ObjectId],
    "default": []
  }
});

var Character = _db["default"].model('Character', characterSchema, 'Character');

var _default = Character;
exports["default"] = _default;
//# sourceMappingURL=Character.js.map