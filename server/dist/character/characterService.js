"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCharacter = exports.updateCharacter = exports.getCharacter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var HashService = _interopRequireWildcard(require("../hash/HashService"));

var FeatService = _interopRequireWildcard(require("../feats/featService"));

var _Character = _interopRequireDefault(require("./Character"));

var _util = require("../lib/util");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getFeats = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_char) {
    var charJson, feats;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            charJson = _char.toJSON();
            _context.next = 3;
            return FeatService.getFeatsById(charJson.talentosAdicionados);

          case 3:
            feats = _context.sent;
            charJson.talentosAdicionados = feats.map(function (f) {
              return f.toJSON();
            });
            return _context.abrupt("return", charJson);

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

var getCharacter = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(hash, cache) {
    var _char2, charWithFeats;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!cache) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", cache);

          case 2:
            _context2.next = 4;
            return _Character["default"].find({
              hash: hash
            });

          case 4:
            _char2 = _context2.sent;
            (0, _util.checkNotFound)(_char2, 'Character');
            _context2.next = 8;
            return getFeats(_char2[0]);

          case 8:
            charWithFeats = _context2.sent;
            return _context2.abrupt("return", charWithFeats);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCharacter(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCharacter = getCharacter;

var updateCharacter = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(hash, character) {
    var updated, charWithFeats;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Character["default"].findByIdAndUpdate(character._id, character, {
              "new": true
            });

          case 2:
            updated = _context3.sent;
            (0, _util.checkNotFound)(updated, 'Character');
            _context3.next = 6;
            return getFeats(updated);

          case 6:
            charWithFeats = _context3.sent;
            return _context3.abrupt("return", charWithFeats);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateCharacter(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateCharacter = updateCharacter;

var createCharacter = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(character) {
    var hash, charObj, _char3, charWithFeats;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return HashService.createHash();

          case 2:
            hash = _context4.sent;
            charObj = _objectSpread(_objectSpread({}, character), {}, {
              hash: hash.hash
            });
            _context4.next = 6;
            return _Character["default"].create(charObj);

          case 6:
            _char3 = _context4.sent;
            _context4.next = 9;
            return getFeats(_char3);

          case 9:
            charWithFeats = _context4.sent;
            return _context4.abrupt("return", charWithFeats);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createCharacter(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createCharacter = createCharacter;
//# sourceMappingURL=characterService.js.map