"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.StencilList = exports.Stencil = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

require("./stencil.css");

var Stencil = function Stencil(_ref) {
  var children = _ref.children;
  var currentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    (0, _utils.mouldParagraph)(Array.prototype.slice.call(currentRef.current.querySelectorAll('.stensil-para')));
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "enable-stensil",
    ref: currentRef
  }, children);
};

exports.Stencil = Stencil;

var StencilList = function StencilList(_ref2) {
  var data = _ref2.data,
      length = _ref2.length,
      schema = _ref2.schema,
      Component = _ref2.Component;
  // Create dummy props if config is provided
  var dummyProps = data || (0, _utils.createObjectFromSchema)(schema); // Memoize fakeArray based on length

  var fakeArray = (0, _react.useMemo)(function () {
    return Array.apply(null, Array(length));
  }, [length]);
  return fakeArray.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(Stencil, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(Component, dummyProps));
  });
};

exports.StencilList = StencilList;