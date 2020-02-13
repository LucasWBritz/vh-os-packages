"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _VHInput$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInput = function VHInput(props) {
  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  return _react.default.createElement(S.Input, {
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    className: "vh-input ".concat(props.className ? props.className : ''),
    disabled: props.disabled,
    autoFocus: props.autoFocus,
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter") {
        props.onEvent({
          data: {
            value: value,
            data: props.data
          },
          event: "onKeyUpAction",
          origin: "VHInput"
        });
      } else {
        handleChange(e.currentTarget.value);
        props.onEvent({
          data: {
            value: e.currentTarget.value,
            data: props.data
          },
          event: "onKeyUp",
          origin: "VHInput"
        });
      }
    },
    onFocus: function onFocus() {
      props.onEvent({
        data: {
          value: value,
          data: props.data
        },
        event: "onFocus",
        origin: "VHInput"
      });
    },
    onBlur: function onBlur() {
      props.onEvent({
        data: {
          value: value,
          data: props.data
        },
        event: "onBlur",
        origin: "VHInput"
      });
    }
  });
};

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: ''
};
VHInput.propTypes = (_VHInput$propTypes = {
  disabled: _propTypes.default.bool
}, _defineProperty(_VHInput$propTypes, "disabled", _propTypes.default.bool), _defineProperty(_VHInput$propTypes, "autoFocus", _propTypes.default.string), _defineProperty(_VHInput$propTypes, "placeholder", _propTypes.default.string), _VHInput$propTypes);
var _default = VHInput;
exports.default = _default;