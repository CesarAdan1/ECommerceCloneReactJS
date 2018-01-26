'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/home/BehindBrand.js';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Vimeo = require('react-vimeo');

/**
   * Behind Brand Class
 */

var BehindBrand = function (_React$Component) {
  (0, _inherits3.default)(BehindBrand, _React$Component);

  /**
  * variable declaration
  */
  function BehindBrand(props) {
    (0, _classCallCheck3.default)(this, BehindBrand);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BehindBrand.__proto__ || (0, _getPrototypeOf2.default)(BehindBrand)).call(this, props));

    var myData = require('../../locale/' + props.lang + '/home-behind-brand.json');
    _this.state = {
      url: props,
      lang: props.lang,
      res_data: myData
    };
    return _this;
  }
  /**
  * Renders "Text"!
  * @return JSX
  */

  (0, _createClass3.default)(BehindBrand, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 291882170,
        css: '\n\n        .info-box { \n          margin: 0 0 0 8%;\n          padding: 108px 0 0 0;\n          float: left;\n          position: absolute\n\n        }\n\n\n.info-box h2 { \n          color: #000; \n          text-transform: uppercase\n\n}\n\n\n.info-box h3 { \n          color: #000; \n          font-family: \'publico\'; \n          font-size: 46px; \n          padding: 14px 0 0 0; \n          margin: 0\n\n}\n\n\n.info-box p { \n          color: #000; \n          font-size: 15px; \n          padding: 0 0 16px 0; \n          width: 300px; \n          line-height: 170%\n\n}\n\n\n.info-box a { \n          float: left; \n          line-height: 120%; \n          clear: both; \n          background: url(/static/images/white-play-btn.svg) no-repeat 22px 12px; \n          color: #FFFFFF; \n          border: 2px solid #FFFFFF; \n          padding: 16px 30px 16px 50px; \n          text-transform: uppercase; \n          font-size: 12px; \n          letter-spacing: 4px; \n          font-weight: bold; \n          margin: 30px 0 0 0; \n          text-decoration: none\n\n}\n\n\n.vimeo {\n          width: 100%;\n          float: left;\n          height: 800px;\n        }\n\n\n.vimeo-image {\n          background-size: cover;\n          position: relative;\n        }\n\n\n.vimeo-loading { \n          display:none;\n        }\n\n\n.vimeo-play-button {\n          background: url(/static/images/video-play-button/video-play-button-w.png) no-repeat center;\n          left: 10%;\n          position: absolute;\n          height: 50px;\n          width: 200px;\n          border: 0;\n          outline: 0;\n          top: 79%;\n          cursor: pointer;\n        }\n\n\n.vimeo-embed iframe {\n          width: 100%;\n          height: 800px;\n        }\n\n\n.vimeo-play-button svg {\n          display: none;\n        }\n\n\n.player .video-wrapper video {\n          width: 100%;\n          height: 100%;\n          padding-right: 0;\n          overflow: hidden;\n          -o-object-fit: cover;\n             object-fit: cover;\n        }\n\n\n@media only screen and (max-width:1024px){\n          .info-box {\n            margin: 0 0 0 6%;\n          }        \n        }\n\n      '
      }), _react2.default.createElement('div', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(Vimeo, { videoId: 225838782, autoplay: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement('div', { className: 'info-box', 'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('hgroup', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('h2', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, this.state.res_data.AMSNYC), _react2.default.createElement('h3', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, this.state.res_data.Title)), _react2.default.createElement('p', {
        'data-jsx': 291882170,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, this.state.res_data.Description))));
    }
  }]);
  return BehindBrand;
}(_react2.default.Component);

exports.default = BehindBrand;