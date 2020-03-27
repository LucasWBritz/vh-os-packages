"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Text/index"));

var _ImgSvg = _interopRequireDefault(require("../ImgSvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleDescriptionImage = function VHTitleDescriptionImage(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    alignItemsCenter: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    style: {
      justifyContent: "center",
      marginRight: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom5: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h4",
    color: "gray-100",
    text: props.title
  })), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h6",
    color: "black-70",
    text: props.description
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_ImgSvg.default, {
    imgSvg: props.imgSvg
  })));
};

VHTitleDescriptionImage.defaultProps = {
  className: ''
};
VHTitleDescriptionImage.prototypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  imgSvg: _propTypes.default.string.isRequired
};
var _default = VHTitleDescriptionImage;
exports.default = _default;