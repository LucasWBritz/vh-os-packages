"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  sectionTitle: "Premium Vanhackers hired",
  btnLabel: "JOIN VANHACK PREMIUM"
};
var candidates = [{
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "canada"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "usa"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "ireland"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "uk"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "germany"
}];
(0, _react2.storiesOf)("Sections|Premium/Hired", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#ffffff",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    sectionTitle: items.sectionTitle,
    btnLabel: items.btnLabel,
    candidates: candidates
  }));
});