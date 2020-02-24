"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHComments = function VHComments(props) {
  return _react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments (".concat(props.comments.length, ")")
  })), _react.default.createElement(_Grid.Row, {
    margin: true
  }, _react.default.createElement(S.Wrapper, null, props.comments.map(function (comment) {
    return _react.default.createElement(_Grid.Row, {
      row: true,
      margin: true,
      justifyBottom: true
    }, _react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, _react.default.createElement(_Avatar.default, {
      image: comment.user.avatar,
      size: "md"
    })), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Grid.Row, {
      margin: true,
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-100",
      text: comment.user.name
    }), _react.default.createElement(S.TextWrapper, null, _react.default.createElement(_Text.default, {
      variant: "caption",
      color: "gray-50",
      text: comment.createdOn
    }))), _react.default.createElement(_Grid.Row, {
      margin: true,
      marginBottom5: true
    }, _react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-80",
      text: comment.note
    }))));
  }))), _react.default.createElement(_Grid.Row, {
    row: true,
    margin: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Avatar.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md"
  }), _react.default.createElement(S.Area, {
    placeholder: "Ask a question or post a uptade",
    onKeyUp: function onKeyUp(event) {
      if (props.onEvent && event.key === 'Enter') {
        props.onEvent({
          data: props,
          type: 'onEvent',
          target: 'VHComments',
          comment: event.currentTarget.value.replace(/[^a-zA-Z ]/g, "")
        });
        event.currentTarget.value = '';
      }

      ;
    }
  })));
};

VHComments.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};
VHComments.propTypes = {
  comments: _propTypes.default.array,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHComments;
exports.default = _default;