"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bookController = _interopRequireDefault(require("./books/bookController"));

var _featController = _interopRequireDefault(require("./feats/featController"));

var router = _express["default"].Router();

router.use('/book', _bookController["default"]);
router.use('/feat', _featController["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map