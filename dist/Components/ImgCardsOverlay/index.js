"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Text/index"));

var _index3 = _interopRequireDefault(require("../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHImgCardsOverlay = function VHImgCardsOverlay(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(S.ImgItem, {
    image: props.image
  }), /*#__PURE__*/_react.default.createElement(S.CardsWrapper, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.CardLeftWrapper, null, /*#__PURE__*/_react.default.createElement(_index3.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    style: {
      padding: "50px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "90%",
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.cardLeftTitle
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "90%",
    alignItemsCenter: true,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "subtitle2",
    color: "black-60",
    text: props.cardLeftDescription
  }))))), /*#__PURE__*/_react.default.createElement(S.CardRightWrapper, null, /*#__PURE__*/_react.default.createElement(_index3.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    style: {
      padding: "50px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "90%",
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.cardRightTitle
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "90%",
    alignItemsCenter: true,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "subtitle2",
    color: "black-60",
    text: props.cardRightDescription
  }))))))))));
};

VHImgCardsOverlay.defaultProps = {
  className: ''
};
VHImgCardsOverlay.prototypes = {
  className: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  cardLeftTitle: _propTypes.default.string,
  cardLeftDescription: _propTypes.default.string,
  cardRightTitle: _propTypes.default.string,
  cardRightDescription: _propTypes.default.string
};
var _default = VHImgCardsOverlay;
exports.default = _default;