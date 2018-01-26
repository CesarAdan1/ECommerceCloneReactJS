'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _facebook = require('react-icons/lib/fa/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _pinterestP = require('react-icons/lib/fa/pinterest-p');

var _pinterestP2 = _interopRequireDefault(_pinterestP);

var _instagram = require('react-icons/lib/fa/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement('section', { className: 'icons' }, _react2.default.createElement('a', { href: 'https://www.facebook.com/Rosefieldwatches' }, _react2.default.createElement(_facebook2.default, null)), _react2.default.createElement('a', { href: 'https://www.pinterest.com/rosefieldwatch/' }, _react2.default.createElement(_pinterestP2.default, null)), _react2.default.createElement('a', { href: 'https://instagram.com/rosefieldwatches/' }, _react2.default.createElement(_instagram2.default, null)));
};