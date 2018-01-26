'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Head = function Head(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon/favicon.ico', type: 'image/x-icon' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }));
};

Head.propTypes = {
  title: _propTypes2.default.string
};

Head.defaultProps = {
  title: ''
};

exports.default = Head;