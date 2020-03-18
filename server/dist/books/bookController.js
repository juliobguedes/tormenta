"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var bookService = _interopRequireWildcard(require("./bookService"));

var router = _express["default"].Router();

router.get('/', function (req, res) {
  bookService.getBooks().then(function (response) {
    res.status(200).send(response);
  })["catch"](function (error) {
    var message = error.message;
    res.status(400).send(message);
  });
});
router.get('/health', function (req, res) {
  res.status(200).send({
    status: 'Books Controller is up and running'
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=bookController.js.map