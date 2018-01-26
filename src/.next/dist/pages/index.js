'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexPage = undefined;
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/pages/index.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _PopulairProducts = require('../components/PopulairProducts');

var _PopulairProducts2 = _interopRequireDefault(_PopulairProducts);

var _PhotoSlurpSection = require('../components/home/PhotoSlurpSection');

var _PhotoSlurpSection2 = _interopRequireDefault(_PhotoSlurpSection);

var _BehindBrand = require('../components/home/BehindBrand');

var _BehindBrand2 = _interopRequireDefault(_BehindBrand);

var _MinWith = require('../components/home/15MinWith');

var _MinWith2 = _interopRequireDefault(_MinWith);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var IndexPage = exports.IndexPage = function IndexPage(_ref) {
  var url = _ref.url;
  return (// eslint-disable-line react/prop-types
    _react2.default.createElement(_layout2.default, { lang: url.query.lang, currentPath: url && url.pathname, topBannerImage: '/static/images/banner-bg.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_PopulairProducts2.default, { lang: url.query.lang, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), _react2.default.createElement(_BehindBrand2.default, { lang: url.query.lang, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }), _react2.default.createElement(_MinWith2.default, { lang: url.query.lang, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), _react2.default.createElement(_PhotoSlurpSection2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }))
  );
};

exports.default = (0, _withData2.default)(IndexPage);