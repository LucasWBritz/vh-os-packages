"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("@Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Typography|Headers', module).add('Default', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    h1: true,
    label: "H1 - Roboto med 36/48"
  }), _react.default.createElement(_.default, {
    h2: true,
    label: "H2 - Roboto med 32/40"
  }), _react.default.createElement(_.default, {
    h3: true,
    label: "H3 - Roboto med 28/36"
  }), _react.default.createElement(_.default, {
    h4: true,
    label: "H4 - Roboto med 24/32"
  }), _react.default.createElement(_.default, {
    h5: true,
    label: "H5 - Roboto med 20/24"
  }), _react.default.createElement(_.default, {
    h6: true,
    label: "H6 - Roboto med 16/20"
  }));
}).add('Reverse', function () {
  return _react.default.createElement("div", {
    style: {
      background: _Colors.default.gradient.h,
      padding: '8px'
    }
  }, _react.default.createElement(_.default, {
    reverse: true,
    h1: true,
    label: "H1 - Roboto med 36/48"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h2: true,
    label: "H2 - Roboto med 32/40"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h3: true,
    label: "H3 - Roboto med 28/36"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h4: true,
    label: "H4 - Roboto med 24/32"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h5: true,
    label: "H5 - Roboto med 20/24"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h6: true,
    label: "H6 - Roboto med 16/20"
  }));
});