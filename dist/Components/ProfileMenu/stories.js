"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{
  name: 'General',
  href: '#general'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Relocation',
  href: '#relocation'
}, {
  name: 'Languages',
  href: '#languages'
}, {
  name: 'Experience',
  href: '#experience'
}, {
  name: 'Education',
  href: '#education'
}];
(0, _react2.storiesOf)('Components|Profile Menu', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    links: links
  });
});