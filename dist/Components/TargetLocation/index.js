"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../Icon/index"));

var _index2 = _interopRequireDefault(require("../Text/index"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHTargetLocation = function VHTargetLocation(props) {
  var items = Object.keys(props.items).length > 0 ? props.items : [{
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }];

  var _useState = (0, _react.useState)(items[0].status),
      _useState2 = _slicedToArray(_useState, 2),
      canada = _useState2[0],
      setCanada = _useState2[1];

  var _useState3 = (0, _react.useState)(items[1].status),
      _useState4 = _slicedToArray(_useState3, 2),
      germany = _useState4[0],
      setGermany = _useState4[1];

  var _useState5 = (0, _react.useState)(items[2].status),
      _useState6 = _slicedToArray(_useState5, 2),
      ireland = _useState6[0],
      setIreland = _useState6[1];

  var _useState7 = (0, _react.useState)(items[3].status),
      _useState8 = _slicedToArray(_useState7, 2),
      netherlands = _useState8[0],
      setNetherlands = _useState8[1];

  var _useState9 = (0, _react.useState)(items[4].status),
      _useState10 = _slicedToArray(_useState9, 2),
      uk = _useState10[0],
      setUk = _useState10[1];

  var _useState11 = (0, _react.useState)(items[5].status),
      _useState12 = _slicedToArray(_useState11, 2),
      usa = _useState12[0],
      setUsa = _useState12[1];

  _react.default.useEffect(function () {
    setCanada(items[0].status), setGermany(items[1].status), setIreland(items[2].status), setNetherlands(items[3].status), setUk(items[4].status), setUsa(items[5].status);
  }, [items[0].status, items[1].status, items[2].status, items[3].status, items[4].status, items[5].status]);

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-target-location ".concat(props.className ? props.className : ''),
    row: true,
    justifySpaceBetween: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !canada,
    onClick: function onClick() {
      setCanada(!canada);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[0].id,
            status: canada ? 0 : 1
          },
          position: 0
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'canada',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Canada'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !germany,
    onClick: function onClick() {
      setGermany(!germany);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[1].id,
            status: germany ? 0 : 1
          },
          position: 1
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'germany',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Germany'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !ireland,
    onClick: function onClick() {
      setIreland(!ireland);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[2].id,
            status: ireland ? 0 : 1
          },
          position: 2
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'ireland',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Ireland'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !netherlands,
    onClick: function onClick() {
      setNetherlands(!netherlands);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[3].id,
            status: netherlands ? 0 : 1
          },
          position: 3
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'netherlands',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Netherlands'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !uk,
    onClick: function onClick() {
      setUk(!uk);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[4].id,
            status: uk ? 0 : 1
          },
          position: 4
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'uk',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.K'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !usa,
    onClick: function onClick() {
      setUsa(!usa);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[5].id,
            status: usa ? 0 : 1
          },
          position: 5
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    icon: 'usa',
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.S.A'
  })));
};

VHTargetLocation.defaultProps = {
  description: "",
  onEvent: null,
  className: ""
};
VHTargetLocation.propTypes = {
  description: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHTargetLocation;
exports.default = _default;