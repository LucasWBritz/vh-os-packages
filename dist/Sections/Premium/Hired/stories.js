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
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL1ByZW1pdW0vSGlyZWQvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJpdGVtcyIsInNlY3Rpb25UaXRsZSIsImJ0bkxhYmVsIiwiY2FuZGlkYXRlcyIsIm5hbWUiLCJwb3NpdGlvbiIsImNvdW50cnkiLCJ1c2VyUGhvdG8iLCJmbGFnIiwibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEtBQUssR0FBRztBQUNWQyxFQUFBQSxZQUFZLEVBQUUsMEJBREo7QUFFVkMsRUFBQUEsUUFBUSxFQUFFO0FBRkEsQ0FBZDtBQUtBLElBQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLEVBQUFBLElBQUksRUFBRSxpQkFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsbUJBRmQ7QUFHSUMsRUFBQUEsT0FBTyxFQUFFLGFBSGI7QUFJSUMsRUFBQUEsU0FBUyxFQUFFLG9FQUpmO0FBS0lDLEVBQUFBLElBQUksRUFBRTtBQUxWLENBRGUsRUFRZjtBQUNJSixFQUFBQSxJQUFJLEVBQUUsaUJBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLG1CQUZkO0FBR0lDLEVBQUFBLE9BQU8sRUFBRSxhQUhiO0FBSUlDLEVBQUFBLFNBQVMsRUFBRSxvRUFKZjtBQUtJQyxFQUFBQSxJQUFJLEVBQUU7QUFMVixDQVJlLEVBZWY7QUFDSUosRUFBQUEsSUFBSSxFQUFFLGlCQURWO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxtQkFGZDtBQUdJQyxFQUFBQSxPQUFPLEVBQUUsYUFIYjtBQUlJQyxFQUFBQSxTQUFTLEVBQUUsb0VBSmY7QUFLSUMsRUFBQUEsSUFBSSxFQUFFO0FBTFYsQ0FmZSxFQXNCZjtBQUNJSixFQUFBQSxJQUFJLEVBQUUsaUJBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLG1CQUZkO0FBR0lDLEVBQUFBLE9BQU8sRUFBRSxhQUhiO0FBSUlDLEVBQUFBLFNBQVMsRUFBRSxvRUFKZjtBQUtJQyxFQUFBQSxJQUFJLEVBQUU7QUFMVixDQXRCZSxFQTZCZjtBQUNJSixFQUFBQSxJQUFJLEVBQUUsaUJBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLG1CQUZkO0FBR0lDLEVBQUFBLE9BQU8sRUFBRSxhQUhiO0FBSUlDLEVBQUFBLFNBQVMsRUFBRSxvRUFKZjtBQUtJQyxFQUFBQSxJQUFJLEVBQUU7QUFMVixDQTdCZSxFQW9DZjtBQUNJSixFQUFBQSxJQUFJLEVBQUUsaUJBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLG1CQUZkO0FBR0lDLEVBQUFBLE9BQU8sRUFBRSxhQUhiO0FBSUlDLEVBQUFBLFNBQVMsRUFBRSxvRUFKZjtBQUtJQyxFQUFBQSxJQUFJLEVBQUU7QUFMVixDQXBDZSxDQUFuQjtBQTZDQSx1QkFBVSx3QkFBVixFQUFvQ0MsTUFBcEMsRUFDS0MsR0FETCxDQUNTLFNBRFQsRUFDb0I7QUFBQSxTQUNaO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLEtBQ0ksNkJBQUMsU0FBRDtBQUNJLElBQUEsWUFBWSxFQUFFYixLQUFLLENBQUNDLFlBRHhCO0FBRUksSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ0UsUUFGcEI7QUFHSSxJQUFBLFVBQVUsRUFBRUM7QUFIaEIsSUFESixDQURZO0FBQUEsQ0FEcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZIUHJlbWl1bUhpcmVkU2VjdGlvbiBmcm9tIFwiLlwiO1xuXG5jb25zdCBpdGVtcyA9IHtcbiAgICBzZWN0aW9uVGl0bGU6IFwiUHJlbWl1bSBWYW5oYWNrZXJzIGhpcmVkXCIsXG4gICAgYnRuTGFiZWw6IFwiSk9JTiBWQU5IQUNLIFBSRU1JVU1cIixcbn07XG5cbmNvbnN0IGNhbmRpZGF0ZXMgPSBbXG4gICAgeyAgIFxuICAgICAgICBuYW1lOiBcIk1pdGNoZWxsIFdhdHNvblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJCYWNrZW5kIERldmVsb3BlclwiLFxuICAgICAgICBjb3VudHJ5OiBcImZyb20gQnJhemlsXCIsXG4gICAgICAgIHVzZXJQaG90bzogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIixcbiAgICAgICAgZmxhZzogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNaXRjaGVsbCBXYXRzb25cIixcbiAgICAgICAgcG9zaXRpb246IFwiQmFja2VuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgY291bnRyeTogXCJmcm9tIEJyYXppbFwiLFxuICAgICAgICB1c2VyUGhvdG86IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCIsXG4gICAgICAgIGZsYWc6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWl0Y2hlbGwgV2F0c29uXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIGNvdW50cnk6IFwiZnJvbSBCcmF6aWxcIixcbiAgICAgICAgdXNlclBob3RvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiLFxuICAgICAgICBmbGFnOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk1pdGNoZWxsIFdhdHNvblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJCYWNrZW5kIERldmVsb3BlclwiLFxuICAgICAgICBjb3VudHJ5OiBcImZyb20gQnJhemlsXCIsXG4gICAgICAgIHVzZXJQaG90bzogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIixcbiAgICAgICAgZmxhZzogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNaXRjaGVsbCBXYXRzb25cIixcbiAgICAgICAgcG9zaXRpb246IFwiQmFja2VuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgY291bnRyeTogXCJmcm9tIEJyYXppbFwiLFxuICAgICAgICB1c2VyUGhvdG86IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCIsXG4gICAgICAgIGZsYWc6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWl0Y2hlbGwgV2F0c29uXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIGNvdW50cnk6IFwiZnJvbSBCcmF6aWxcIixcbiAgICAgICAgdXNlclBob3RvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiLFxuICAgICAgICBmbGFnOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiLFxuICAgIH0sXG5dO1xuXG5zdG9yaWVzT2YoXCJTZWN0aW9uc3xQcmVtaXVtL0hpcmVkXCIsIG1vZHVsZSlcbiAgICAuYWRkKFwiRGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgICAgICAgPFZIUHJlbWl1bUhpcmVkU2VjdGlvblxuICAgICAgICAgICAgICAgIHNlY3Rpb25UaXRsZT17aXRlbXMuc2VjdGlvblRpdGxlfVxuICAgICAgICAgICAgICAgIGJ0bkxhYmVsPXtpdGVtcy5idG5MYWJlbH1cbiAgICAgICAgICAgICAgICBjYW5kaWRhdGVzPXtjYW5kaWRhdGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7XG4iXX0=