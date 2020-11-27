"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHash = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Hash = _interopRequireDefault(require("./Hash"));

var _util = require("../lib/util");

var LENGTH = 5;

var createHash = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var txt, hash;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!true) {
              _context.next = 14;
              break;
            }

            _context.prev = 1;
            txt = (0, _util.genHash)(LENGTH);
            _context.next = 5;
            return _Hash["default"].create({
              hash: txt
            });

          case 5:
            hash = _context.sent;
            return _context.abrupt("break", 14);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            throw _context.t0;

          case 12:
            _context.next = 0;
            break;

          case 14:
            return _context.abrupt("return", hash);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function createHash() {
    return _ref.apply(this, arguments);
  };
}();

exports.createHash = createHash;
//# sourceMappingURL=HashService.js.map