"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    visitor: {
      StringLiteral: function StringLiteral(path) {
        if (isChinese(path.node.value)) {
          path.node.value = (0, _trans2.default)(path.node.value);
        }
      }
    }
  };
};

var _trans = require("./trans");

var _trans2 = _interopRequireDefault(_trans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isChinese(s) {
  return (/[\u4e00-\u9fa5]/.test(s)
  );
}