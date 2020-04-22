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

var _Icon = _interopRequireDefault(require("../../Components/Input/Icon"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSocialSection = function VHSocialSection(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Social Profile",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, props.preLoading ? /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom4: true
  }, /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.InputSkeleton, {
    lines: 3
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    id: "linkedin-href"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "",
    disabled: false,
    error: props.controls.linkedin.error,
    loading: false,
    data: 'linkedin',
    icon: "linkedin",
    onEvent: props.onEvent,
    placeholder: "http://linkedin.com/",
    value: props.linkedin
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    id: "github-href"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "",
    disabled: false,
    error: props.controls.git.error,
    loading: false,
    data: 'git',
    icon: "github",
    onEvent: props.onEvent,
    placeholder: "http://github.com/",
    value: props.git
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    id: "website-href"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "",
    disabled: false,
    error: props.controls.webSite.error,
    loading: false,
    placeholder: "http://sitename.com/",
    value: props.webSite,
    data: 'webSite',
    icon: "webSite",
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    id: "resume-href"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "",
    disabled: false,
    error: props.controls.resume.error,
    loading: false,
    placeholder: "https://drive.google.com/your-resume",
    value: props.resume,
    data: 'resume',
    icon: "user",
    onEvent: props.onEvent
  }))))));
};

VHSocialSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHSocialSection;
exports.default = _default;