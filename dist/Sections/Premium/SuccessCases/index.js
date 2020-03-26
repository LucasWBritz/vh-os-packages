"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/TextHighlightDescriptionImage/index"));

var _index4 = _interopRequireDefault(require("../../../Components/ImgCardsOverlay/index"));

var _index5 = _interopRequireDefault(require("../../../Components/ImgVideoIconText/index"));

var _index6 = _interopRequireDefault(require("../../../Hyperlinks/LinkImage/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumSuccessCasesSection = function VHPremiumSuccessCasesSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Container, null, _react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginBottom: 40
  }, _react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.sectionTitle
  })), _react.default.createElement(_index.Row, {
    row: true,
    responsive: true
  }, _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_index.Row, null, _react.default.createElement(_index3.default, {
    title: props.title,
    highlight: props.highlight
  })), _react.default.createElement(_index.Row, null, _react.default.createElement(_index4.default, {
    image: props.imgBackgroundCards,
    cardLeftTitle: props.cardLeftTitle,
    cardLeftDescription: props.cardLeftDescription,
    cardRightTitle: props.cardRightTitle,
    cardRightDescription: props.cardRightDescription
  }))), _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_index.Row, {
    marginBottom: 8,
    marginTop: 50
  }, _react.default.createElement(_index5.default, {
    image: props.imgVideo,
    icon: props.icon,
    text: props.videoDescription
  })), _react.default.createElement(_index.Row, null, _react.default.createElement(_index6.default, {
    lgLabel: true,
    label: props.label,
    to: props.to,
    source: props.linkIcon // title={props.label}
    ,
    smImg: true
  }))))));
};

VHPremiumSuccessCasesSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  highlight: _propTypes.default.string,
  imgBackgroundCards: _propTypes.default.string,
  cardLeftTitle: _propTypes.default.string,
  cardLeftDescription: _propTypes.default.string,
  cardRightTitle: _propTypes.default.string,
  cardRightDescription: _propTypes.default.string,
  imgVideo: _propTypes.default.string,
  icon: _propTypes.default.string,
  videoDescription: _propTypes.default.string,
  label: _propTypes.default.string,
  to: _propTypes.default.string,
  linkIcon: _propTypes.default.string
};
var _default = VHPremiumSuccessCasesSection;
exports.default = _default;