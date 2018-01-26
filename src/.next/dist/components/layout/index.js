'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactSticky = require('react-sticky');

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _NewsletterEmail = require('./footer/NewsletterEmail');

var _NewsletterEmail2 = _interopRequireDefault(_NewsletterEmail);

var _FooterNavigation = require('./footer/FooterNavigation');

var _FooterNavigation2 = _interopRequireDefault(_FooterNavigation);

var _Social = require('./footer/Social');

var _Social2 = _interopRequireDefault(_Social);

var _CopyrightInfo = require('./footer/CopyrightInfo');

var _CopyrightInfo2 = _interopRequireDefault(_CopyrightInfo);

var _index = require('../../global_styles/index.css');

var _index2 = _interopRequireDefault(_index);

var _BurgerMenu = require('./BurgerMenu');

var _BurgerMenu2 = _interopRequireDefault(_BurgerMenu);

var _ImageWrapper = require('./ImageWrapper');

var _ImageWrapper2 = _interopRequireDefault(_ImageWrapper);

require('../../lib/progressbar');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      currentPath = _ref.currentPath,
      topBannerImage = _ref.topBannerImage,
      lang = _ref.lang;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_reactSticky.StickyContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('style', {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: { __html: _index2.default },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(_Head2.default, { title: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_BurgerMenu2.default, { lang: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('div', { id: 'page-wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_ImageWrapper2.default, { image: topBannerImage, lang: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_reactSticky.Sticky, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, function (_ref2) {
    var style = _ref2.style,
        distanceFromTop = _ref2.distanceFromTop;

    var classNames = [];

    if (distanceFromTop < -100) classNames.push('fixed');
    if (topBannerImage) classNames.push('has_banner');
    return _react2.default.createElement('header', { style: style, className: classNames.join(' '), __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, _react2.default.createElement(_Navigation2.default, { currentPath: currentPath, lang: lang, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }));
  })), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, children), _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_FooterNavigation2.default, { currentPath: currentPath, lang: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement(_NewsletterEmail2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('div', { className: 'social-copyright-main', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_Social2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), _react2.default.createElement(_CopyrightInfo2.default, { lang: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }))))));
};

Layout.propTypes = {
  children: _propTypes.PropTypes.node,
  title: _propTypes.PropTypes.string,
  topBannerImage: _propTypes.PropTypes.string,
  currentPath: _propTypes.PropTypes.string.isRequired,
  lang: _propTypes.PropTypes.string.isRequired
};

Layout.defaultProps = {
  title: 'Luxe dameshorloges – Officiële Online Shop van ROSEFIELD Watches',
  children: null,
  topBannerImage: null,
  lang: 'ww'
};

exports.default = Layout;