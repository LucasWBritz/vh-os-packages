"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var date = new Date();
(0, _react2.storiesOf)("Components|Timer", module).add("VHTimer", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "250px ",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    endDate: date.setDate(date.getDate() + 2),
    onEndTime: function onEndTime(event) {
      return console.log(event);
    }
  }));
});