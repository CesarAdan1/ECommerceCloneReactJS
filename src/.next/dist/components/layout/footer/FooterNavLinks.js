'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _routes = require('../../../config/routes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FooterNavigationLink = function FooterNavigationLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      currentPath = _ref.currentPath,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'href', 'currentPath', 'className']);

  var classes = [];
  if (className) classes.push(className);

  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({ href: href }, props), _react2.default.createElement('a', { className: classes.join(' ') }, children));
};

FooterNavigationLink.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  currentPath: _propTypes.PropTypes.string.isRequired,
  className: _propTypes.PropTypes.node };

exports.default = FooterNavigationLink;