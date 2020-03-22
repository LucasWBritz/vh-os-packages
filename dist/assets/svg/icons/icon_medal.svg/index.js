"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon_medal = function icon_medal(props) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "36px",
    height: props.height || "36px",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 36 36"
  }, React.createElement("g", {
    clipPath: "url(#prefix__clip0)"
  }, React.createElement("path", {
    fill: "#0675CE",
    d: "M22.596 4.486c-3.96-2.001-8.73-1.236-11.87 1.903-3.649 3.65-4.014 9.467-.85 13.534.112.143.28.219.449.219.122 0 .244-.04.348-.12.247-.192.291-.549.1-.796-2.815-3.616-2.49-8.79.755-12.034 2.793-2.793 7.034-3.473 10.556-1.694.28.142.62.03.762-.25.141-.28.03-.621-.25-.762z"
  }), React.createElement("path", {
    fill: "url(#prefix__paint0_linear)",
    d: "M22.596 4.486c-3.96-2.001-8.73-1.236-11.87 1.903-3.649 3.65-4.014 9.467-.85 13.534.112.143.28.219.449.219.122 0 .244-.04.348-.12.247-.192.291-.549.1-.796-2.815-3.616-2.49-8.79.755-12.034 2.793-2.793 7.034-3.473 10.556-1.694.28.142.62.03.762-.25.141-.28.03-.621-.25-.762z"
  }), React.createElement("path", {
    fill: "#0675CE",
    d: "M27.126 9.017c-.142-.28-.483-.392-.763-.25-.28.14-.391.482-.25.761 1.778 3.521 1.097 7.763-1.694 10.554-3.245 3.245-8.419 3.57-12.035.756-.247-.192-.603-.148-.796.1-.192.247-.148.603.1.796 1.852 1.441 4.067 2.15 6.276 2.15 2.64 0 5.27-1.013 7.257-3 3.139-3.138 3.904-7.908 1.905-11.867z"
  }), React.createElement("path", {
    fill: "url(#prefix__paint1_linear)",
    d: "M27.126 9.017c-.142-.28-.483-.392-.763-.25-.28.14-.391.482-.25.761 1.778 3.521 1.097 7.763-1.694 10.554-3.245 3.245-8.419 3.57-12.035.756-.247-.192-.603-.148-.796.1-.192.247-.148.603.1.796 1.852 1.441 4.067 2.15 6.276 2.15 2.64 0 5.27-1.013 7.257-3 3.139-3.138 3.904-7.908 1.905-11.867z"
  }), React.createElement("path", {
    fill: "#0675CE",
    d: "M25.66 6.856c-.14-.16-.288-.316-.439-.467-.15-.15-.308-.298-.467-.439-.235-.207-.593-.185-.8.05-.208.234-.186.593.049.8.141.126.281.257.416.392.134.134.265.274.39.415.113.127.269.192.426.192.134 0 .268-.047.375-.142.235-.208.257-.566.05-.801z"
  }), React.createElement("path", {
    fill: "url(#prefix__paint2_linear)",
    d: "M25.66 6.856c-.14-.16-.288-.316-.439-.467-.15-.15-.308-.298-.467-.439-.235-.207-.593-.185-.8.05-.208.234-.186.593.049.8.141.126.281.257.416.392.134.134.265.274.39.415.113.127.269.192.426.192.134 0 .268-.047.375-.142.235-.208.257-.566.05-.801z"
  }), React.createElement("path", {
    fill: "#0675CE",
    d: "M31.364 14.654c.378-.62.378-1.392 0-2.012l-.746-1.224c-.099-.161-.137-.353-.107-.54l.222-1.413c.114-.72-.182-1.434-.772-1.863l-1.157-.841c-.153-.112-.261-.274-.306-.458l-.337-1.392c-.17-.707-.716-1.253-1.423-1.424l-1.392-.337c-.184-.044-.347-.153-.458-.306l-.841-1.157c-.43-.59-1.143-.886-1.864-.772l-1.413.222c-.187.03-.379-.008-.54-.107L19.006.284c-.62-.379-1.391-.379-2.012 0l-1.224.746c-.161.099-.352.136-.54.107L13.818.915c-.72-.114-1.434.182-1.863.772l-.841 1.157c-.111.153-.274.261-.458.306l-1.392.337c-.707.17-1.253.716-1.424 1.423l-.337 1.392c-.044.184-.153.347-.306.458L6.04 7.6c-.59.43-.885 1.143-.772 1.863l.222 1.414c.03.187-.008.379-.106.54l-.747 1.224c-.378.62-.378 1.391 0 2.012l.746 1.224c.099.161.137.353.107.54l-.222 1.413c-.114.72.182 1.434.772 1.863l1.157.841c.153.111.261.274.306.458l.337 1.392c.17.707.716 1.252 1.423 1.424l.582.14-3.934 8.776c-.084.187-.061.404.06.569.121.164.321.251.525.227l3.165-.379 1.824 2.615c.107.153.28.243.465.243.018 0 .035 0 .053-.002.204-.02.381-.147.465-.333l4.018-8.964.509.31c.31.19.658.285 1.006.285s.696-.095 1.006-.284l.527-.322 4.024 8.975c.083.186.26.313.464.333l.053.002c.185 0 .359-.09.466-.243l1.823-2.615 3.166.379c.203.024.403-.063.524-.227.121-.165.145-.382.06-.569l-3.936-8.78.56-.136c.707-.17 1.253-.716 1.424-1.424l.337-1.392c.044-.183.153-.346.306-.457l1.157-.842c.59-.428.885-1.142.772-1.863l-.222-1.414c-.03-.186.008-.378.107-.539l.746-1.224zM11.841 34.286l-1.445-2.072c-.12-.172-.325-.264-.533-.239l-2.508.3 3.584-7.996c.066.048.124.106.173.173l.841 1.157c.08.11.17.21.268.298l-1.886 4.209c-.129.285 0 .621.285.75.075.033.154.05.232.05.216 0 .423-.126.518-.336l1.88-4.194c.185.025.375.025.566-.005l1.414-.223c.085-.013.17-.012.254.002l-3.643 8.126zm16.828-2.011l-2.509-.3c-.208-.025-.413.067-.533.239l-1.445 2.072-3.644-8.13c.076-.01.154-.01.231.003l1.414.222c.199.031.397.03.59.002l1.88 4.197c.095.21.302.335.519.335.077 0 .156-.016.231-.05.286-.128.414-.463.286-.75l-1.894-4.224c.091-.085.176-.179.251-.282l.841-1.157c.053-.073.118-.135.191-.186l3.59 8.009zm1.726-18.212l-.746 1.224c-.238.39-.33.855-.26 1.307l.223 1.414c.047.297-.075.592-.319.769l-1.157.841c-.37.27-.633.663-.741 1.108l-.337 1.393c-.07.291-.296.517-.588.587l-1.392.337c-.445.108-.839.371-1.108.742l-.842 1.156c-.177.244-.471.366-.769.32l-1.413-.223c-.452-.072-.916.02-1.307.259l-1.224.746c-.256.156-.574.156-.83 0l-1.224-.746c-.305-.186-.654-.283-1.007-.283-.1 0-.2.008-.3.024l-1.414.222c-.297.047-.592-.075-.769-.319l-.841-1.157c-.27-.37-.663-.633-1.109-.741l-1.392-.337c-.292-.07-.517-.296-.588-.588l-.336-1.392c-.108-.445-.371-.839-.742-1.108l-1.157-.842c-.243-.177-.365-.472-.318-.769l.222-1.414c.071-.451-.02-.915-.259-1.306l-.746-1.224c-.156-.256-.156-.574 0-.83l.746-1.225c.238-.39.33-.854.26-1.306l-.223-1.414c-.047-.297.075-.592.319-.769l1.157-.842c.37-.27.633-.663.741-1.108l.337-1.392c.07-.292.296-.517.588-.588l1.392-.337c.445-.107.839-.37 1.108-.741l.842-1.157c.177-.243.471-.365.769-.319l1.413.223c.452.071.916-.021 1.307-.26l1.224-.746c.256-.156.574-.156.83 0L19.64 2c.391.238.855.33 1.307.259l1.414-.222c.297-.047.592.075.769.318l.841 1.157c.27.37.664.634 1.109.742l1.392.337c.292.07.517.296.588.587l.336 1.393c.108.445.372.838.742 1.108l1.157.841c.243.177.365.472.318.77l-.222 1.413c-.071.452.02.916.259 1.306l.746 1.225c.157.256.157.574 0 .83z"
  }), React.createElement("path", {
    fill: "url(#prefix__paint3_linear)",
    d: "M31.364 14.654c.378-.62.378-1.392 0-2.012l-.746-1.224c-.099-.161-.137-.353-.107-.54l.222-1.413c.114-.72-.182-1.434-.772-1.863l-1.157-.841c-.153-.112-.261-.274-.306-.458l-.337-1.392c-.17-.707-.716-1.253-1.423-1.424l-1.392-.337c-.184-.044-.347-.153-.458-.306l-.841-1.157c-.43-.59-1.143-.886-1.864-.772l-1.413.222c-.187.03-.379-.008-.54-.107L19.006.284c-.62-.379-1.391-.379-2.012 0l-1.224.746c-.161.099-.352.136-.54.107L13.818.915c-.72-.114-1.434.182-1.863.772l-.841 1.157c-.111.153-.274.261-.458.306l-1.392.337c-.707.17-1.253.716-1.424 1.423l-.337 1.392c-.044.184-.153.347-.306.458L6.04 7.6c-.59.43-.885 1.143-.772 1.863l.222 1.414c.03.187-.008.379-.106.54l-.747 1.224c-.378.62-.378 1.391 0 2.012l.746 1.224c.099.161.137.353.107.54l-.222 1.413c-.114.72.182 1.434.772 1.863l1.157.841c.153.111.261.274.306.458l.337 1.392c.17.707.716 1.252 1.423 1.424l.582.14-3.934 8.776c-.084.187-.061.404.06.569.121.164.321.251.525.227l3.165-.379 1.824 2.615c.107.153.28.243.465.243.018 0 .035 0 .053-.002.204-.02.381-.147.465-.333l4.018-8.964.509.31c.31.19.658.285 1.006.285s.696-.095 1.006-.284l.527-.322 4.024 8.975c.083.186.26.313.464.333l.053.002c.185 0 .359-.09.466-.243l1.823-2.615 3.166.379c.203.024.403-.063.524-.227.121-.165.145-.382.06-.569l-3.936-8.78.56-.136c.707-.17 1.253-.716 1.424-1.424l.337-1.392c.044-.183.153-.346.306-.457l1.157-.842c.59-.428.885-1.142.772-1.863l-.222-1.414c-.03-.186.008-.378.107-.539l.746-1.224zM11.841 34.286l-1.445-2.072c-.12-.172-.325-.264-.533-.239l-2.508.3 3.584-7.996c.066.048.124.106.173.173l.841 1.157c.08.11.17.21.268.298l-1.886 4.209c-.129.285 0 .621.285.75.075.033.154.05.232.05.216 0 .423-.126.518-.336l1.88-4.194c.185.025.375.025.566-.005l1.414-.223c.085-.013.17-.012.254.002l-3.643 8.126zm16.828-2.011l-2.509-.3c-.208-.025-.413.067-.533.239l-1.445 2.072-3.644-8.13c.076-.01.154-.01.231.003l1.414.222c.199.031.397.03.59.002l1.88 4.197c.095.21.302.335.519.335.077 0 .156-.016.231-.05.286-.128.414-.463.286-.75l-1.894-4.224c.091-.085.176-.179.251-.282l.841-1.157c.053-.073.118-.135.191-.186l3.59 8.009zm1.726-18.212l-.746 1.224c-.238.39-.33.855-.26 1.307l.223 1.414c.047.297-.075.592-.319.769l-1.157.841c-.37.27-.633.663-.741 1.108l-.337 1.393c-.07.291-.296.517-.588.587l-1.392.337c-.445.108-.839.371-1.108.742l-.842 1.156c-.177.244-.471.366-.769.32l-1.413-.223c-.452-.072-.916.02-1.307.259l-1.224.746c-.256.156-.574.156-.83 0l-1.224-.746c-.305-.186-.654-.283-1.007-.283-.1 0-.2.008-.3.024l-1.414.222c-.297.047-.592-.075-.769-.319l-.841-1.157c-.27-.37-.663-.633-1.109-.741l-1.392-.337c-.292-.07-.517-.296-.588-.588l-.336-1.392c-.108-.445-.371-.839-.742-1.108l-1.157-.842c-.243-.177-.365-.472-.318-.769l.222-1.414c.071-.451-.02-.915-.259-1.306l-.746-1.224c-.156-.256-.156-.574 0-.83l.746-1.225c.238-.39.33-.854.26-1.306l-.223-1.414c-.047-.297.075-.592.319-.769l1.157-.842c.37-.27.633-.663.741-1.108l.337-1.392c.07-.292.296-.517.588-.588l1.392-.337c.445-.107.839-.37 1.108-.741l.842-1.157c.177-.243.471-.365.769-.319l1.413.223c.452.071.916-.021 1.307-.26l1.224-.746c.256-.156.574-.156.83 0L19.64 2c.391.238.855.33 1.307.259l1.414-.222c.297-.047.592.075.769.318l.841 1.157c.27.37.664.634 1.109.742l1.392.337c.292.07.517.296.588.587l.336 1.393c.108.445.372.838.742 1.108l1.157.841c.243.177.365.472.318.77l-.222 1.413c-.071.452.02.916.259 1.306l.746 1.225c.157.256.157.574 0 .83z"
  }), React.createElement("path", {
    fill: "#0675CE",
    d: "M24.639 11.883c-.125-.385-.453-.654-.855-.701l-3.413-.405-1.44-3.122c-.17-.367-.526-.596-.931-.596s-.762.229-.931.596l-1.44 3.122-3.414.405c-.402.047-.729.316-.854.7-.125.386-.018.795.279 1.07l2.524 2.334-.67 3.372c-.079.397.075.791.403 1.029.18.131.39.198.601.198.172 0 .344-.044.502-.133l3-1.679 3 1.68c.353.197.775.172 1.103-.066.327-.238.482-.632.403-1.03l-.67-3.37 2.524-2.335c.297-.274.404-.684.279-1.07zm-3.807 2.786c-.145.134-.21.333-.17.527l.685 3.45-3.07-1.718c-.086-.048-.182-.072-.277-.072-.096 0-.191.024-.277.072l-3.07 1.718.685-3.45c.04-.194-.026-.393-.17-.527l-2.583-2.389 3.493-.414c.196-.023.366-.146.448-.326L18 8.346l1.473 3.194c.083.18.253.303.449.326l3.493.414-2.583 2.389z"
  }), React.createElement("path", {
    fill: "url(#prefix__paint4_linear)",
    d: "M24.639 11.883c-.125-.385-.453-.654-.855-.701l-3.413-.405-1.44-3.122c-.17-.367-.526-.596-.931-.596s-.762.229-.931.596l-1.44 3.122-3.414.405c-.402.047-.729.316-.854.7-.125.386-.018.795.279 1.07l2.524 2.334-.67 3.372c-.079.397.075.791.403 1.029.18.131.39.198.601.198.172 0 .344-.044.502-.133l3-1.679 3 1.68c.353.197.775.172 1.103-.066.327-.238.482-.632.403-1.03l-.67-3.37 2.524-2.335c.297-.274.404-.684.279-1.07zm-3.807 2.786c-.145.134-.21.333-.17.527l.685 3.45-3.07-1.718c-.086-.048-.182-.072-.277-.072-.096 0-.191.024-.277.072l-3.07 1.718.685-3.45c.04-.194-.026-.393-.17-.527l-2.583-2.389 3.493-.414c.196-.023.366-.146.448-.326L18 8.346l1.473 3.194c.083.18.253.303.449.326l3.493.414-2.583 2.389z"
  })), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__paint0_linear",
    x1: "8.237",
    x2: "20.313",
    y1: "4.527",
    y2: "9.337",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: ".084",
    stopColor: "#56CCF2"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), React.createElement("linearGradient", {
    id: "prefix__paint1_linear",
    x1: "12.033",
    x2: "24.533",
    y1: "9.743",
    y2: "15.814",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: ".084",
    stopColor: "#56CCF2"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), React.createElement("linearGradient", {
    id: "prefix__paint2_linear",
    x1: "23.878",
    x2: "25.416",
    y1: "5.944",
    y2: "6.621",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: ".084",
    stopColor: "#56CCF2"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), React.createElement("linearGradient", {
    id: "prefix__paint3_linear",
    x1: "5.271",
    x2: "27.911",
    y1: "2.461",
    y2: "10.011",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: ".084",
    stopColor: "#56CCF2"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), React.createElement("linearGradient", {
    id: "prefix__paint4_linear",
    x1: "11.76",
    x2: "21.947",
    y1: "7.936",
    y2: "12.611",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: ".084",
    stopColor: "#56CCF2"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0"
  })), React.createElement("clipPath", {
    id: "prefix__clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h36v36H0V0z"
  }))));
};

var _default = icon_medal;
exports.default = _default;