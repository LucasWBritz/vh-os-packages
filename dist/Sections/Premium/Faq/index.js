"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/TitleDescriptionImage/index"));

var _index4 = _interopRequireDefault(require("../../../Components/Input/SimpleWithButton/index"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumFaqSection = function VHPremiumFaqSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Row, {
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
    width: "50%",
    alignItemsCenter: true
  }, _react.default.createElement(_index.Row, {
    width: "80%"
  }, _react.default.createElement(_index.Row, {
    marginBottom: 12,
    style: {
      marginLeft: "30px"
    }
  }, _react.default.createElement(_index3.default, {
    titleColor: "gray-100",
    descriptionColor: "black-70",
    titleVariant: "h4",
    descriptionVariant: "h6",
    title: props.title,
    description: props.description,
    image: props.image
  })), _react.default.createElement(_index.Row, {
    style: {
      backgroundColor: "#ffffff"
    }
  }, _react.default.createElement(_index4.default, {
    placeholder: "E-mail",
    label: "SEND"
  })))), _react.default.createElement(_index.Row, {
    width: "50%"
  }, props.faqs.map(function (faq) {
    return _react.default.createElement(_index.Row, {
      width: "80%",
      alignItemsCenter: true,
      marginBottom: 20,
      style: {
        marginLeft: "20px"
      }
    }, _react.default.createElement(_index.Row, {
      marginBottom: 3
    }, _react.default.createElement(_index2.default, {
      variant: "h4",
      color: "gray-90",
      text: faq.question
    })), _react.default.createElement(_index.Row, null, _react.default.createElement(_index2.default, {
      variant: "h6",
      color: "gray-90",
      text: faq.answer
    })));
  }))));
};

VHPremiumFaqSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  question: _propTypes.default.string,
  answer: _propTypes.default.string
};
var _default = VHPremiumFaqSection;
exports.default = _default;