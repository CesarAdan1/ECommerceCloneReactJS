"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement("div", { className: "footer-signup" }, _react2.default.createElement("h2", null, "Sign Up"), _react2.default.createElement("p", { className: "footer-signup-txt" }, "Sign up for our newsletter and be the first to know."), _react2.default.createElement("form", { action: "", method: "post", className: "frm-newsletter" }, _react2.default.createElement("div", { className: "footer-emailbg" }, _react2.default.createElement("input", { className: "footer-email", placeholder: "Email Address" }), _react2.default.createElement("input", { className: "footer-emailarow", type: "button" }))));
};