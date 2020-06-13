"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StencilWrapper = exports.StencilList = exports.Stencil = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

require("./stencil.css");

var Stencil = function Stencil(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  var currentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    (0, _utils.mouldParagraph)(Array.prototype.slice.call(currentRef.current.querySelectorAll('.stensil-para')));
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    ref: currentRef,
    tabIndex: "-1",
    "aria-disabled": "true"
  }, rest, {
    className: ("enable-stensil " + (rest.className || '')).trim()
  }), children);
};

exports.Stencil = Stencil;

var StencilList = function StencilList(_ref2) {
  var data = _ref2.data,
      length = _ref2.length,
      schema = _ref2.schema,
      Component = _ref2.Component,
      children = _ref2.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["data", "length", "schema", "Component", "children"]);
  // Create dummy props if config is provided
  var dummyProps = data || (0, _utils.createObjectFromSchema)(schema); // Memoize fakeArray based on length

  var fakeArray = (0, _react.useMemo)(function () {
    return (0, _utils.createDummyArray)(length);
  }, [length]);
  return /*#__PURE__*/_react["default"].createElement(Stencil, rest, Component ? fakeArray.map(function (index) {
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
      key: index
    }, dummyProps, {
      stencilLoading: true
    }));
  }) : null);
};

exports.StencilList = StencilList;

var StencilWrapper = function StencilWrapper(_ref3) {
  var repeat = _ref3.repeat,
      children = _ref3.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, ["repeat", "children"]);
  // Memoize fakeArray based on length
  var fakeArray = (0, _react.useMemo)(function () {
    return (0, _utils.createDummyArray)(repeat);
  }, [repeat]);

  var isOnlyChild = _react["default"].Children.only(children);

  return /*#__PURE__*/_react["default"].createElement(Stencil, rest, fakeArray.map(function (key) {
    return _react["default"].cloneElement(children, {
      stencilLoading: true,
      key: key
    });
  }));
};

exports.StencilWrapper = StencilWrapper;