"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _ = _interopRequireDefault(require("."));

_dotenv["default"].config();

var PORT = process.env.PORT;

if (!PORT) {
  throw Error('You should properly configure the .env file before running.');
}

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/', _["default"]);
app.get('/health', function (req, res) {
  res.status(200).send({
    status: 'Up and Running'
  });
});
app.listen(PORT || 8081);
console.log("App running on port ".concat(PORT || 8081));
//# sourceMappingURL=app.js.map