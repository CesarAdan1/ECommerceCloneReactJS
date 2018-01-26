"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _routes = require("../../../config/routes");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement("section", { className: "copyright" }, _react2.default.createElement("p", null, "\xA9 ", new Date().getFullYear(), " ROSEFIELD BV. Alle rechten voorbehouden.\xA0"), _react2.default.createElement("div", { className: "copyright-links" }, _react2.default.createElement(_routes.Link, { route: "privacy", params: { lang: lang } }, _react2.default.createElement("a", null, "Privacybeleid")), "\xA0|\xA0", _react2.default.createElement(_routes.Link, { route: "terms", params: { lang: lang } }, _react2.default.createElement("a", null, "Algemene voorwaarden"))));
};