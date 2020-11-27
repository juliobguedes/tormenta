"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _memoryCache = _interopRequireDefault(require("memory-cache"));

var featService = _interopRequireWildcard(require("./featService"));

var router = _express["default"].Router();

router.get('/', function (req, res) {
  featService.getFeats(_memoryCache["default"].get('allFeats')).then(function (feats) {
    _memoryCache["default"].put('allFeats', feats);

    res.status(200).send(feats);
  })["catch"](function (error) {
    var message = error.message;
    res.status(400).send({
      message: message
    });
  });
});
router.get('/:id', function (req, res) {
  var featId = req.params.id;
  featService.getFeatById(featId, _memoryCache["default"].get(featId)).then(function (feat) {
    _memoryCache["default"].put(featId, feat);

    res.status(200).send(feat);
  })["catch"](function (error) {
    var message = error.message;
    res.status(400).send({
      message: message
    });
  });
});
router.get('/health', function (req, res) {
  res.status(200).send({
    status: 'Feat Controller is up and running'
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=featController.js.map