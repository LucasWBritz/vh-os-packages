"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  titleColor: "gray-100",
  descriptionColor: "black-70",
  titleVariant: "h4",
  descriptionVariant: "h6",
  title: "Have questions about VanHack Premium?",
  description: "Give us your email and we’ll get in touch.",
  image: require("../../../assets/images/img_hero_premium.png")
};
(0, _react2.storiesOf)("Components|Title Description Image", module).add("Default", function () {
  return _react.default.createElement(_index.Row, {
    style: {
      backgroundColor: "#f2f2f2",
      width: "100vw",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_index.Row, {
    width: "50%"
  }, _react.default.createElement(_index2.default, {
    titleColor: items.titleColor,
    descriptionColor: items.descriptionColor,
    titleVariant: items.titleVariant,
    descriptionVariant: items.descriptionVariant,
    title: items.title,
    description: items.description,
    image: items.image
  })));
});