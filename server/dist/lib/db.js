"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var MONGO_URL = process.env.MONGO_URL;
var ERROR_CODE = 1;

var db = _mongoose["default"].createConnection(MONGO_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', function (error) {
  if (error.name === 'MongoNetworkError') {
    var fp = 'Not properly connected with MongoDB.';
    var sp = 'Check if your .env file is correctly filled and if you have the necessary permissions in MongoDB.';
    console.log("".concat(fp, "\n").concat(sp));
  }

  ;
  process.exit(ERROR_CODE);
});
db.once('open', function () {
  console.log('Connection opened with Mongo Atlas');
});
var _default = db;
exports["default"] = _default;
//# sourceMappingURL=db.js.map