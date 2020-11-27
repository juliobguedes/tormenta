"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var _mongoose = require("mongoose");

var _db = _interopRequireDefault(require("../lib/db"));

var hashSchema = new _mongoose.Schema({
  hash: {
    type: String,
    unique: true,
    required: true
  }
});
hashSchema.plugin(_mongooseUniqueValidator["default"], {
  type: 'is already taken.'
});

var Hash = _db["default"].model('Hash', hashSchema, 'Hash');

var _default = Hash;
exports["default"] = _default;
//# sourceMappingURL=Hash.js.map