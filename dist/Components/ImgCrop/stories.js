"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Source|Img Crop', module).add('VHImg Crop', function () {
  return _react.default.createElement(_.default, {
    source: "http://via.placeholder.com/200x200",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
});