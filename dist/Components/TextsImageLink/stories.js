"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var premiumServices = [{
  title: "INTERVIEW CLASS",
  highlight: "Learn how to ace an interview and improve your English skills at the same time",
  description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
  image: require("../../assets/svg/background/img_premium_interview.svg"),
  reverseTop: false,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: false
}, {
  title: "PROFILE REVIEW",
  highlight: "Have experts review your VanHack profile - improve all your profiles at once",
  description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
  image: require("../../assets/svg/background/img_premium_interview.svg"),
  reverseTop: true,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: true
}, {
  title: "PREMIUM SLACK GROUP",
  highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
  description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
  image: require("../../assets/svg/background/img_premium_interview.svg"),
  reverseTop: false,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: false
}, {
  title: "LIVE EXCLUSIVE WEBINARS",
  highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
  description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
  image: require("../../assets/svg/background/img_premium_interview.svg"),
  reverseTop: true,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: true
}];
(0, _react2.storiesOf)("Components|Texts Image Link", module).add("Default", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_index.default, {
    title: premiumServices[0].title,
    highlight: premiumServices[0].highlight,
    description: premiumServices[0].description,
    image: premiumServices[0].image,
    reverseTop: premiumServices[0].reverseTop,
    mdLabel: premiumServices[0].mdLabel,
    label: premiumServices[0].label,
    to: premiumServices[0].to,
    source: premiumServices[0].source,
    smImg: premiumServices[0].smImg,
    reverseBottom: premiumServices[0].reverseBottom
  }));
}).add("Reverse", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_index.default, {
    title: premiumServices[1].title,
    highlight: premiumServices[1].highlight,
    description: premiumServices[1].description,
    image: premiumServices[1].image,
    reverseTop: premiumServices[1].reverseTop,
    mdLabel: premiumServices[1].mdLabel,
    label: premiumServices[1].label,
    to: premiumServices[1].to,
    source: premiumServices[1].source,
    smImg: premiumServices[1].smImg,
    reverseBottom: premiumServices[1].reverseBottom
  }));
}).add("Multiply", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, premiumServices.map(function (service) {
    return _react.default.createElement(_index.default, {
      title: service.title,
      highlight: service.highlight,
      description: service.description,
      image: service.image,
      reverseTop: service.reverseTop,
      mdLabel: service.mdLabel,
      label: service.label,
      to: service.to,
      source: service.source,
      smImg: service.smImg,
      reverseBottom: service.reverseBottom
    });
  }));
});