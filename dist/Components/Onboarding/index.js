"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../Cards/Base"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _Button = _interopRequireDefault(require("../Button"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHOnboarding = function VHOnboarding(props) {
  console.log('props', props);

  var _useState = (0, _react.useState)(props.currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    justifyCenter: true,
    fullHeight: true,
    style: {
      backgroundColor: 'blue'
    },
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Base.default, {
    noPadding: true,
    width: "50%",
    height: "50vh"
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    steps: props.steps,
    currentStep: currentStep,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      width: '90%',
      height: 'calc(100% - 10px)'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      height: '100%',
      overflow: 'scroll'
    }
  }, props.children), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true,
    alignItemsCenter: true,
    style: {
      padding: '12px 0'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, currentStep > 1 && /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "",
    outline: true,
    label: "Back",
    disabled: currentStep === 1,
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep - 2,
            step: currentStep - 1,
            stepPlus: currentStep
          }
        }
      });
      setCurrentStep(currentStep - 1);
    },
    primary: true,
    data: props
  })), /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: "".concat(currentStep, " / ").concat(props.steps),
    variant: "platform1",
    color: "gray-60"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "",
    label: "Next",
    disabled: currentStep === props.steps + 1,
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep,
            step: currentStep + 1,
            stepPlus: currentStep + 2
          }
        }
      });
      setCurrentStep(currentStep + 1);
    },
    primary: true,
    data: props
  })))))));
};

VHOnboarding.defaultProps = {
  className: ""
};
VHOnboarding.propTypes = {
  steps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHOnboarding;
exports.default = _default;