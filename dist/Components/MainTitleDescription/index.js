"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../TitleDescription/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMainTitleDescription = function VHMainTitleDescription(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    className: "vh-main-title-description",
    data: props.data,
    description: props.rightTitle,
    descriptionColor: "gray-60",
    descriptionVariant: "platform1",
    inline: true,
    title: props.title,
    titleColor: "primary-light",
    titleVariant: "subtitle1"
  }), _react.default.createElement(_index.default, {
    className: "vh-main-title-description",
    data: props.data,
    title: props.description,
    titleColor: "gray-90",
    titleVariant: "cation"
  }));
};

VHMainTitleDescription.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHMainTitleDescription;
exports.default = _default;