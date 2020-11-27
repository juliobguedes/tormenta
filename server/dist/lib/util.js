"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genHash = exports.checkNotFound = void 0;

var checkNotFound = function checkNotFound(obj, name) {
  if (obj === null || obj.length === 0) {
    throw new Error("".concat(name, " not found."));
  }
};

exports.checkNotFound = checkNotFound;

var genHash = function genHash(length) {
  var hash = '';
  var chrIdx;
  var chars = 122 - 65;

  while (true) {
    if (hash.length === 5) break;
    chrIdx = 65 + Math.floor(Math.random() * chars);

    if (chrIdx < 91 || chrIdx > 97) {
      hash += String.fromCharCode(chrIdx);
    }
  }

  return hash;
};

exports.genHash = genHash;
//# sourceMappingURL=util.js.map