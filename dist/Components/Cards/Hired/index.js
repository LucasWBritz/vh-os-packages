"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Avatar/index"));

var _index3 = _interopRequireDefault(require("../../Text/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardHired = function VHCardHired(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.OutterImg, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    image: props.userPhoto,
    size: "xl",
    showCursor: true
  }), /*#__PURE__*/_react.default.createElement(S.InnerImg, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    image: props.flag,
    size: "md",
    showCursor: true
  })))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginTop: 10
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "subtitle3",
    color: "gray-90",
    text: props.name
  }), /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "platform",
    color: "gray-70",
    text: props.position
  }), /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "platform",
    color: "gray-70",
    text: props.country
  })));
};

VHCardHired.defaultProps = {
  className: '',
  showCursor: false
};
VHCardHired.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  position: _propTypes.default.string.isRequired,
  country: _propTypes.default.string,
  userPhoto: _propTypes.default.string.isRequired,
  flag: _propTypes.default.string.isRequired
};
var _default = VHCardHired;
exports.default = _default;