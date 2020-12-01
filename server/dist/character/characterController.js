"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _memoryCache = _interopRequireDefault(require("memory-cache"));

var characterService = _interopRequireWildcard(require("./characterService"));

var router = _express["default"].Router();

router.get('/:hash', function (req, res) {
  var hash = req.params.hash;
  characterService.getCharacter(hash, _memoryCache["default"].get(hash)).then(function (_char) {
    _memoryCache["default"].put(hash, _char);

    res.status(200).send(_char);
  })["catch"](function (err) {
    var message = err.message;
    res.status(400).send({
      message: message
    });
  });
});
router.put('/:hash', function (req, res) {
  var hash = req.params.hash;
  var character = req.body;
  characterService.updateCharacter(hash, character).then(function (_char2) {
    _memoryCache["default"].put(hash, _char2);

    res.status(200).send(_char2);
  })["catch"](function (err) {
    var message = err.message;
    res.status(400).send({
      message: message
    });
  });
});
router.post('/', function (req, res) {
  var character = req.body;
  characterService.createCharacter(character).then(function (_char3) {
    console.log('hey');

    _memoryCache["default"].put(_char3.hash, _char3);

    res.status(201).send(_char3);
  })["catch"](function (err) {
    var message = err.message;
    res.status(400).send({
      message: message
    });
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=characterController.js.map