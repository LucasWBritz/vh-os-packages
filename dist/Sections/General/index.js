"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHGeneralSection = function VHGeneralSection(props) {
  var citizenships = props.countries;
  var citizenship = props.citizenship != undefined ? citizenships.find(function (element) {
    return element.value === props.citizenship;
  }) : {};
  var locations = props.locations;
  var location = props.location != undefined ? citizenships.find(function (element) {
    return element.value === props.location;
  }) : {};
  var genders = props.genders;
  var gender = props.gender != undefined ? [genders[props.gender]] : {};

  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      preloaderPhone = _React$useState2[0],
      setPreloaderPhone = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-general-section-title ".concat(props.className ? props.className : ''),
    text: "General",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-general-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.citizenship.preLoading || false,
    caption: "Citizenship",
    className: "vh-general-section-citizenship ".concat(props.className ? props.className : ''),
    currentItem: citizenship,
    data: "citizenship",
    items: citizenships,
    onEvent: props.onEvent,
    isLoading: props.controls.citizenship.loading,
    description: props.controls.citizenship.error && props.controls.citizenship.message,
    descriptionColor: "gray-100",
    captionColor: props.controls.citizenship.loading ? "gray-40" : props.controls.citizenship.error ? "red" : 'gray-100'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.location.preLoading || false,
    caption: "Location",
    className: "vh-general-section-location ".concat(props.className ? props.className : ''),
    currentItem: location,
    data: "location",
    items: citizenships,
    onEvent: props.onEvent,
    isLoading: props.controls.location.loading,
    description: props.controls.location.error && props.controls.location.message,
    descriptionColor: "gray-100",
    captionColor: props.controls.location.loading ? "gray-40" : props.controls.location.error ? "red" : 'gray-100'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.gender.preLoading || false,
    caption: "Gender",
    className: "vh-general-section-gender ".concat(props.className ? props.className : ''),
    currentItem: gender,
    data: "gender",
    items: genders,
    onEvent: props.onEvent,
    isLoading: props.controls.gender.loading,
    description: props.controls.gender.error && props.controls.gender.message,
    descriptionColor: "red-light",
    placeholder: "Select an option",
    captionColor: props.controls.gender.loading ? "gray-40" : props.controls.gender.error ? "red" : 'gray-100'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-phone ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red-light" : "gray-90",
    preLoading: props.controls.phone.preLoading || false,
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Phone number",
    titleColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red" : "gray-100",
    titleVariant: "platform1"
  }), !props.controls.phone.preLoading && /*#__PURE__*/_react.default.createElement(_Simple.default, {
    data: "phone",
    onEvent: props.onEvent,
    disabled: props.controls.phone.loading,
    error: props.controls.phone.error,
    loading: props.controls.phone.loading,
    placeholder: "+1 778 000 0000",
    value: props.phone
  }))))));
};

VHGeneralSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHGeneralSection;
exports.default = _default;