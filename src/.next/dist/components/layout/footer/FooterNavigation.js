'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavigation.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _FooterNavLinks = require('./FooterNavLinks');

var _FooterNavLinks2 = _interopRequireDefault(_FooterNavLinks);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FooterNavigation = function FooterNavigation(_ref) {
  var currentPath = _ref.currentPath,
      lang = _ref.lang;

  var lableData = require('../../../locale/' + lang + '/translation_label.json');
  return _react2.default.createElement('div', { className: 'footer-nav-links', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, lableData.NEED_HELP), _react2.default.createElement(_FooterNavLinks2.default, { route: 'support', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, lableData.CustomerSupport), _react2.default.createElement(_FooterNavLinks2.default, { route: 'shipping-returns', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, lableData.ShippingReturns), _react2.default.createElement(_FooterNavLinks2.default, { route: 'stores', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, lableData.Stores), _react2.default.createElement(_FooterNavLinks2.default, { route: 'login', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, lableData.LogIn_SignUp), _react2.default.createElement(_FooterNavLinks2.default, { route: 'career', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, lableData.Career));
};

FooterNavigation.propTypes = {
  currentPath: _propTypes.PropTypes.string,
  lang: _propTypes.PropTypes.string
};

FooterNavigation.defaultProps = {
  currentPath: '/',
  lang: 'ww'
};

exports.default = FooterNavigation;