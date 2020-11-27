"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _characterController = _interopRequireDefault(require("./character/characterController"));

var _featController = _interopRequireDefault(require("./feats/featController"));

var router = _express["default"].Router();

router.use('/feat', _featController["default"]);
router.use('/character', _characterController["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map