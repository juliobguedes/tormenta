"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeatById = exports.getFeats = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Feat = _interopRequireDefault(require("./Feat"));

var getFeats = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cachedFeats) {
    var feats;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!cachedFeats) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", cachedFeats);

          case 2:
            _context.next = 4;
            return _Feat["default"].find().sort({
              nomeRegex: 1
            });

          case 4:
            feats = _context.sent;
            return _context.abrupt("return", feats);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getFeats(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getFeats = getFeats;

var getFeatById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(featId, cachedFeat) {
    var feat;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!cachedFeat) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", cachedFeat);

          case 2:
            _context2.next = 4;
            return _Feat["default"].findById(featId);

          case 4:
            feat = _context2.sent;
            return _context2.abrupt("return", feat);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFeatById(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getFeatById = getFeatById;
//# sourceMappingURL=featService.js.map