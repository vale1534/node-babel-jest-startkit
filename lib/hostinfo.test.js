"use strict";

var _hostinfo = _interopRequireDefault(require("./hostinfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('?0', () => {
  expect(_hostinfo["default"].homeDir).toBeDefined();
  expect(_hostinfo["default"].hostname).toBeDefined();
  expect(_hostinfo["default"].environ).toBeDefined();
});
test('?1', () => {
  expect(_hostinfo["default"].environ).toHaveProperty('Path');
});