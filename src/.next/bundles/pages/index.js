
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nextRoutes = __webpack_require__(723);

var routes = nextRoutes();
module.exports = routes;

// argurments: name, url, name of file under page = name
var rootPath = '/:lang'; //  /:lang
routes.add('home', rootPath + '/', '/');

routes.add('show_watch', rootPath + '/watches/:id', '/products/show');
routes.add('show_strap', rootPath + '/straps/:id', '/products/show');

routes.add('watches', rootPath + '/watches', '/category/watches/show');
routes.add('straps', rootPath + '/straps', '/category/straps/show');
routes.add('jewelry', rootPath + '/jewelry', '/category/jewelry/show');

/* for temp link -> Pages are not created */
routes.add('inspiration', rootPath + '/inspiration', '/inspiration/index');
routes.add('service', rootPath + '/service', '/service/index');

routes.add('terms', rootPath + '/terms', '/terms/index');
routes.add('privacy', rootPath + '/privacy', '/privacy/index');
routes.add('shipping-returns', rootPath + '/shipping-returns', '/shipping-returns/index');
routes.add('login', rootPath + '/login', '/login/index');
routes.add('forgotpassword', rootPath + '/forgotpassword', '/forgotpassword/index');
routes.add('our-story', rootPath + '/our-story', '/our-story/index');
routes.add('register', rootPath + '/register', '/register/index');
routes.add('career', rootPath + '/career', '/career/index');
routes.add('checkout', rootPath + '/checkout', '/checkout/index');
routes.add('job-detail', rootPath + '/job-detail/:id', '/job-detail/index');
routes.add('my-account', rootPath + '/my-account', '/my-account/index');
routes.add('customer/account/edit', rootPath + '/customer/account/edit', '/my-account/edit');
routes.add('customer/address', rootPath + '/customer/address', '/my-account/address');
routes.add('customer/address/edit', rootPath + '/customer/address/edit', '/my-account/edit-address');
routes.add('customer/address/add', rootPath + '/customer/address/add', '/my-account/add-address');
routes.add('/customer/newsletter-edit', rootPath + '/customer/newsletter-edit', '/my-account/newsletter-edit');

routes.add('campaign', rootPath + '/campaign', '/campaign/index');
routes.add('a-day-with-aby', rootPath + '/a-day-with-aby', '/campaign/aby');
routes.add('a-day-with-ally', rootPath + '/a-day-with-ally', '/campaign/ally');

routes.add('downtown-chic', rootPath + '/downtown-chic', '/campaign/downtown-chic');
routes.add('upper-east-side', rootPath + '/upper-east-side', '/campaign/upper-east-side');
routes.add('west-village', rootPath + '/west-village', '/campaign/west-village');

routes.add('stores', rootPath + '/stores', '/stores/index');
routes.add('location-detail', rootPath + '/location-detail/:id', '/location-detail/index');
routes.add('customer/orders', rootPath + '/customer/orders', '/my-account/orders');
routes.add('/customer/order/view', rootPath + '/customer/order/view', '/my-account/view');
routes.add('support', rootPath + '/support', '/support/index');

routes.add('15-minutes-with-stephanie', rootPath + '/15-minutes-with-stephanie', '/15min/15-minutes-with-stephanie');
routes.add('15-minutes-with-virna-auvergne', rootPath + '/15-minutes-virna-auvergne', '/15min/15-minutes-with-virna-auvergne');
routes.add('15-minutes-with-esmee', rootPath + '/15-minutes-with-esmee', '/15min/15-minutes-with-esmee');
routes.add('15-minutes-with-nicole', rootPath + '/15-minutes-with-nicole', '/15min/15-minutes-with-nicole');
routes.add('15-minutes-with-lena', rootPath + '/15-minutes-with-lena', '/15min/15-minutes-with-lena');
routes.add('15-minutes-with-chloe', rootPath + '/15-minutes-with-chloe', '/15min/15-minutes-with-chloe');
routes.add('15-minutes-with-laurianne', rootPath + '/15-minutes-with-laurianne', '/15min/15-minutes-with-laurianne');
routes.add('15-minutes-with-yin', rootPath + '/15-minutes-with-yin', '/15min/15-minutes-with-yin');
routes.add('15-minutes-with-rebecca', rootPath + '/15-minutes-with-rebecca', '/15min/15-minutes-with-rebecca');
routes.add('15-minutes-with-caroline', rootPath + '/15-minutes-with-caroline', '/15min/15-minutes-with-caroline');
routes.add('15-minutes-with-annabel', rootPath + '/15-minutes-with-annabel', '/15min/15-minutes-with-annabel');
routes.add('15-minutes-with-barbara', rootPath + '/15-minutes-with-barbara', '/15min/15-minutes-with-barbara');
routes.add('15-minutes-with-cheyenne', rootPath + '/15-minutes-with-cheyenne', '/15min/15-minutes-with-cheyenne');
routes.add('15-minutes-with-jeanine', rootPath + '/15-minutes-with-jeanine', '/15min/15-minutes-with-jeanine');
routes.add('15-minutes-with-ludivine', rootPath + '/15-minutes-with-ludivine', '/15min/15-minutes-with-ludivine');
routes.add('15-minutes-with-laetitia', rootPath + '/15-minutes-with-laetitia', '/15min/15-minutes-with-laetitia');
routes.add('15-minutes-with-paulina', rootPath + '/15-minutes-with-paulina', '/15min/15-minutes-with-paulina');
routes.add('15-minutes-with-katja', rootPath + '/15-minutes-with-katja', '/15min/15-minutes-with-katja');
routes.add('tangerine-summer-set', rootPath + '/tangerine-summer-set', '/gift-set/tangerine-summer-set');
routes.add('myrosefieldmoment', rootPath + '/myrosefieldmoment', '/myrosefieldmoment/index');
routes.add('cart', rootPath + '/cart', '/cart/index');

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/config/routes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/config/routes.js"); } } })();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexPage = undefined;
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/pages/index.js?entry';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(760);

var _layout2 = _interopRequireDefault(_layout);

var _withData = __webpack_require__(767);

var _withData2 = _interopRequireDefault(_withData);

var _PopulairProducts = __webpack_require__(745);

var _PopulairProducts2 = _interopRequireDefault(_PopulairProducts);

var _PhotoSlurpSection = __webpack_require__(749);

var _PhotoSlurpSection2 = _interopRequireDefault(_PhotoSlurpSection);

var _BehindBrand = __webpack_require__(748);

var _BehindBrand2 = _interopRequireDefault(_BehindBrand);

var _MinWith = __webpack_require__(747);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"name": "The Gramercy",
		"short_description": "White - Black",
		"price": 8900,
		"image": "https://i.rosefieldwatches.com/products/watches/the-gramercy/The-Gramercy-White-black.png"
	},
	{
		"id": 2,
		"name": "The Gramercy",
		"short_description": "White - Rosegold",
		"price": 8900,
		"image": "https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png"
	},
	{
		"id": 3,
		"name": "The Bowery",
		"short_description": "White - Black",
		"price": 8900,
		"image": "https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-silver.png"
	},
	{
		"id": 4,
		"name": "The Bowery",
		"short_description": "White - Brown",
		"price": 8900,
		"image": "https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Brown.png"
	}
];

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = [
	{
		"websiteId": 1,
		"code": "us",
		"name": "USA",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/us.png",
		"stores": [
			{
				"storeId": 1,
				"code": "us",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 2,
		"code": "uk",
		"name": "UK",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/uk.png",
		"stores": [
			{
				"storeId": 3,
				"code": "uk",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 3,
		"code": "be",
		"name": "Belgium",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/be.png",
		"stores": [
			{
				"storeId": 4,
				"code": "be",
				"name": "Dutch"
			},
			{
				"storeId": 22,
				"code": "be_fr",
				"name": "French"
			},
			{
				"storeId": 23,
				"code": "be_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 4,
		"code": "de",
		"name": "Germany",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/de.png",
		"stores": [
			{
				"storeId": 5,
				"code": "de",
				"name": "German"
			},
			{
				"storeId": 26,
				"code": "de_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 7,
		"code": "nl",
		"name": "Netherlands",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/nl.png",
		"stores": [
			{
				"storeId": 8,
				"code": "nl",
				"name": "Dutch"
			},
			{
				"storeId": 20,
				"code": "nl_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 8,
		"code": "es",
		"name": "Spain",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/es.png",
		"stores": [
			{
				"storeId": 9,
				"code": "es",
				"name": "Spanish"
			},
			{
				"storeId": 29,
				"code": "es_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 9,
		"code": "au",
		"name": "Australia",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/au.png",
		"stores": [
			{
				"storeId": 10,
				"code": "au",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 10,
		"code": "at",
		"name": "Austria",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/at.png",
		"stores": [
			{
				"storeId": 11,
				"code": "at",
				"name": "German"
			},
			{
				"storeId": 21,
				"code": "at_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 11,
		"code": "ca",
		"name": "Canada",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ca.png",
		"stores": [
			{
				"storeId": 12,
				"code": "ca",
				"name": "English"
			},
			{
				"storeId": 24,
				"code": "ca_fr",
				"name": "French"
			}
		]
	},
	{
		"websiteId": 12,
		"code": "mx",
		"name": "Mexico",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/mx.png",
		"stores": [
			{
				"storeId": 13,
				"code": "mx",
				"name": "Spanish"
			},
			{
				"storeId": 28,
				"code": "mx_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 13,
		"code": "eu",
		"name": "EU",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/eu.png",
		"stores": [
			{
				"storeId": 14,
				"code": "eu",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 14,
		"code": "ww",
		"name": "Global",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ww.png",
		"stores": [
			{
				"storeId": 15,
				"code": "ww",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 17,
		"code": "it",
		"name": "Italy",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/it.png",
		"stores": [
			{
				"storeId": 18,
				"code": "it",
				"name": "Italian"
			},
			{
				"storeId": 27,
				"code": "it_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 18,
		"code": "fr",
		"name": "France",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/fr.png",
		"stores": [
			{
				"storeId": 19,
				"code": "fr",
				"name": "French"
			},
			{
				"storeId": 25,
				"code": "fr_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 19,
		"code": "ch",
		"name": "Switzerland",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ch.png",
		"stores": [
			{
				"storeId": 30,
				"code": "ch",
				"name": "German"
			},
			{
				"storeId": 31,
				"code": "ch_fr",
				"name": "French"
			},
			{
				"storeId": 32,
				"code": "ch_it",
				"name": "Italian"
			},
			{
				"storeId": 33,
				"code": "ch_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 20,
		"code": "pl",
		"name": "Poland",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/pl.png",
		"stores": [
			{
				"storeId": 34,
				"code": "pl",
				"name": "Polish"
			},
			{
				"storeId": 35,
				"code": "pl_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 21,
		"code": "dk",
		"name": "Denmark",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/dk.png",
		"stores": [
			{
				"storeId": 36,
				"code": "dk",
				"name": "Danish"
			},
			{
				"storeId": 37,
				"code": "dk_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 22,
		"code": "ie",
		"name": "Ireland",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ie.png",
		"stores": [
			{
				"storeId": 38,
				"code": "ie",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 23,
		"code": "nz",
		"name": "New Zealand",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/nz.png",
		"stores": [
			{
				"storeId": 39,
				"code": "nz",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 24,
		"code": "cz",
		"name": "Czech Republic",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/cz.png",
		"stores": [
			{
				"storeId": 40,
				"code": "cz",
				"name": "Czech"
			},
			{
				"storeId": 41,
				"code": "cz_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 25,
		"code": "za",
		"name": "South Africa",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/za.png",
		"stores": [
			{
				"storeId": 42,
				"code": "za",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 26,
		"code": "sg",
		"name": "Singapore",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/sg.png",
		"stores": [
			{
				"storeId": 43,
				"code": "sg",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 27,
		"code": "se",
		"name": "Sweden",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/se.png",
		"stores": [
			{
				"storeId": 44,
				"code": "se",
				"name": "Sweden"
			},
			{
				"storeId": 45,
				"code": "se_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 28,
		"code": "no",
		"name": "Norway",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/no.png",
		"stores": [
			{
				"storeId": 46,
				"code": "no",
				"name": "Norwegian"
			},
			{
				"storeId": 47,
				"code": "no_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 29,
		"code": "fi",
		"name": "Finland",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/fi.png",
		"stores": [
			{
				"storeId": 48,
				"code": "fi",
				"name": "Finnish"
			},
			{
				"storeId": 49,
				"code": "fi_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 30,
		"code": "hk",
		"name": "Hong Kong",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/hk.png",
		"stores": [
			{
				"storeId": 50,
				"code": "hk",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 31,
		"code": "sa",
		"name": "Saudi Arabia",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/sa.png",
		"stores": [
			{
				"storeId": 51,
				"code": "sa",
				"name": "Arabic"
			},
			{
				"storeId": 52,
				"code": "sa_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 32,
		"code": "ae",
		"name": "United Arabic Emirates",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ae.png",
		"stores": [
			{
				"storeId": 53,
				"code": "ae",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 33,
		"code": "kr",
		"name": "South Korea",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/kr.png",
		"stores": [
			{
				"storeId": 54,
				"code": "kr",
				"name": "Korean"
			},
			{
				"storeId": 55,
				"code": "kr_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 34,
		"code": "jp",
		"name": "Japan",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ww.png",
		"stores": [
			{
				"storeId": 56,
				"code": "jp",
				"name": "Japan"
			},
			{
				"storeId": 57,
				"code": "jp_en",
				"name": "English"
			}
		]
	},
	{
		"websiteId": 35,
		"code": "id",
		"name": "Indonesia",
		"flag": "https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/id.png",
		"stores": [
			{
				"storeId": 58,
				"code": "id",
				"name": "English"
			}
		]
	}
];

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "Voor de producetie van onze horloges werken we samen met een aantal toonaagevenda luxe horloges- fabrikanten die al tientallen jaren horloges met de hand maken.",
	"LinkText": "LEES MEER"
};

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introductie van",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Winkel nu"
};

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "導入",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "今すぐ購入"
};

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "Voor de producetie van onze horloges werken we samen met een aantal toonaagevenda luxe horloges- fabrikanten die al tientallen jaren horloges met de hand maken.",
	"LinkText": "LEES MEER"
};

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "Voor de producetie van onze horloges werken we samen met een aantal toonaagevenda luxe horloges- fabrikanten die al tientallen jaren horloges met de hand maken.Het resultaat is een uitgebreide collectie betaalbare premium quality horloges met twee jaar garantie,die er ook buitengewoon goed uitzien."
};

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introductie van",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Winkel nu"
};

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "OVER ONS",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Klantenservice",
	"Contact": "Contact",
	"Login": "Inloggen",
	"Watches": "Horloges",
	"Straps": "Bandjes",
	"View_The_Collection": "Bekijk De Collectie",
	"NEED_HELP": "HULP NODIG?",
	"CustomerSupport": "Klantenservice",
	"ShippingReturns": "Verzending & Retourneren",
	"Stores": "Winkels",
	"LogIn_SignUp": "Inloggen/Registreren",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Meld je aan voor onze nieuwsbrief en ben als eerste op de.",
	"Email_Address": "E-mailadres"
};

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = {
	"MainTitle": "15 Minutes With",
	"Name": "Stephanie / Fashion Features editor",
	"Description": "For the production of our watches we work together with a number of attractive watchers who are looking forward to making watches for decades of watches.",
	"LinkText": "Read More"
};

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = {
	"AMSNYC": "AMS | NYC",
	"Title": "Behind the brand",
	"Description": "For the production of our watches we work together with a number of luxury watches manufacturers who have been making watches for decades of watches. The result is an extensive collection of premium premium quality watches with two year warranty, which also looks very good."
};

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = {
	"IntroducingText": "Introducing",
	"Title": "The West Village",
	"Description": "For the production of our watches we work together with a number of luxury watches",
	"ShopNowBtn": "Shop Now"
};

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = {
	"Downtown_Chic": "Downtown Chic",
	"Upper_East_Side": "Upper East Side",
	"West_Village": "West Village",
	"Latest_Campaign": "Latest Campaign",
	"#Myrosefieldmoment": "#Myrosefieldmoment",
	"Our_story": "Our story",
	"World_Of_Rosefield": "World Of Rosefield",
	"Service": "Service",
	"Support": "Support",
	"Contact": "Contact",
	"Login": "Login",
	"Watches": "Watches",
	"Straps": "Straps",
	"View_The_Collection": "View The Collection",
	"NEED_HELP": "NEED HELP?",
	"CustomerSupport": "Customer Support",
	"ShippingReturns": "Shipping & Returns",
	"Stores": "Stores",
	"LogIn_SignUp": "Log In/Sign Up",
	"Career": "Career",
	"Sign_up_for_our_newsletter_and_be_the_first_to_know.": "Sign up for our newsletter and be the first to know.",
	"Email_Address": "Email Address"
};

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "/*! normalize.css v6.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\nheader {\n  transition: background-color 500ms ease;\n  z-index: 90\n}\n\nheader nav {\n  letter-spacing: 3.16px;\n  font-weight: lighter;\n  background-color: #ffffff;\n}\n\nheader nav .desktop-menu {\n  display: block;\n}\n\nheader nav .mobile-menu {\n  display: none;\n}\n\nheader nav ul {\n  width: calc(99.9% * 20/20 - (30px - 30px * 20/20));\n  margin: 0;\n  padding: 0;\n}\n\nheader nav ul:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav ul:last-child {\n  margin-right: 0;\n}\n\nheader nav ul:nth-child(20n) {\n  margin-right: 0;\n  float: right;\n}\n\nheader nav ul:nth-child(20n + 1) {\n  clear: both;\n}\n\nheader nav .left-nav {\n  width: calc(99.9% * 8/20 - (30px - 30px * 8/20));\n}\n\nheader nav .left-nav:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav .left-nav:last-child {\n  margin-right: 0;\n}\n\nheader nav .left-nav:nth-child(20n) {\n  margin-right: 0;\n  float: right;\n}\n\nheader nav .left-nav:nth-child(20n + 1) {\n  clear: both;\n}\n\nheader nav .left-nav li {\n  float: left;\n  padding: 0 20px;\n}\n\nheader nav .left-nav li:first-child {\n  padding-left: 35px;\n}\n\nheader nav .center-nav {\n  width: calc(99.9% * 4/20 - (30px - 30px * 4/20));\n}\n\nheader nav .center-nav:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav .center-nav:last-child {\n  margin-right: 0;\n}\n\nheader nav .center-nav:nth-child(20n) {\n  margin-right: 0;\n  float: right;\n}\n\nheader nav .center-nav:nth-child(20n + 1) {\n  clear: both;\n}\n\nheader nav .right-nav {\n  width: calc(99.9% * 8/20 - (30px - 30px * 8/20));\n  float: right;\n  text-align: right;\n}\n\nheader nav .right-nav:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav .right-nav:last-child {\n  margin-right: 0;\n}\n\nheader nav .right-nav:nth-child(20n) {\n  margin-right: 0;\n  float: right;\n}\n\nheader nav .right-nav:nth-child(20n + 1) {\n  clear: both;\n}\n\nheader nav .right-nav li {\n  float: right;\n  padding: 0 20px;\n}\n\nheader nav .right-nav .nav-cart {\n  background-color: #fed6cc;\n  min-height: 60px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  float: right;\n  left: 3px;\n}\n\nheader nav .right-nav .nav-cart span {\n  padding-left: 8px;\n}\n\nheader nav .right-nav .nav-login {\n  }\n\nheader nav .right-nav .nav-login a {\n  text-transform: none;\n  text-transform: initial;\n  letter-spacing: 1px;\n  font-size: 11px;\n}\n\nheader nav li {\n  position: relative;\n  border: 0;\n}\n\nheader nav li a {\n  color: #434343 !important;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 12px;\n  padding: 25px 0;\n  float: left;\n  position: relative;\n  white-space: nowrap;\n}\n\nheader nav li a:hover {\n  color: #dc9f8c !important;\n}\n\nheader nav li .home_logo {\n  width: calc(99.9% * 4/4 - (30px - 30px * 4/4));\n  background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n  background-size: 150px;/* text-hide */\n  overflow: hidden;\n  text-indent: 101%;\n  white-space: nowrap;\n}\n\nheader nav li .home_logo:nth-child(1n) {/* text-hide */\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav li .home_logo:last-child {/* text-hide */\n  margin-right: 0;\n}\n\nheader nav li .home_logo:nth-child(4n) {/* text-hide */\n  margin-right: 0;\n  float: right;\n}\n\nheader nav li .home_logo:nth-child(4n + 1) {/* text-hide */\n  clear: both;\n}\n\nheader nav li.cart {\n  width: calc(99.9% * 2/20 - (30px - 30px * 2/20));\n  background: #fed6cc;\n}\n\nheader nav li.cart:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nheader nav li.cart:last-child {\n  margin-right: 0;\n}\n\nheader nav li.cart:nth-child(20n) {\n  margin-right: 0;\n  float: right;\n}\n\nheader nav li.cart:nth-child(20n + 1) {\n  clear: both;\n}\n\nheader nav li.cart svg {\n  font-size: 18px;\n  position: relative;\n  top: -2px;\n}\n\nheader nav li svg.angle_down {\n  position: relative;\n  top: -1px;\n}\n\nheader nav li .sub-menu {\n  display: none;\n  background: #FFFFFF;\n  border-top: 1px solid #ecddd8;\n  position: absolute;\n  width: auto;\n  top: 63px;\n  z-index: 99;\n}\n\nheader nav li .sub-menu li {\n  text-transform: none;\n  text-transform: initial;\n  font-size: 12px;\n  float: left;\n  width: 100%;\n  text-align: left;\n  padding-left: 8px;\n  box-sizing: border-box;\n}\n\nheader nav li .sub-menu a {\n  padding: 12px 0;\n  text-transform: none;\n  text-transform: initial;\n  font-size: 12px;\n}\n\nheader nav li .switcher-sub-menu {\n  display: none;\n  background: #FFFFFF;\n  border-top: 1px solid #ecddd8;\n  position: absolute;\n  width: auto;\n  top: 63px;\n  z-index: 99;\n  width: 250px;\n  right: 0;\n  height: 300px;\n}\n\nheader nav li .switcher-sub-menu label {\n  float: left;\n}\n\nheader nav li .switcher-sub-menu select {\n  float: left;\n}\n\nheader.has_banner nav ul li a {\n  color: #fff;\n}\n\nheader.has_banner nav ul li a.home_logo {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n@media screen and (max-width: 1513px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 19px;\n  }    \n}\n\n@media screen and (max-width: 1498px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 15px;\n  }\n  header nav .right-nav a {\n    font-size: 10px;\n  }\n  header nav .nav-cart {\n    padding: 0 18px;\n  }\n  header {\n  }\n  header nav {\n  }\n  header nav .left-nav {\n  }\n  header nav .left-nav li {\n    padding: 0 15px;\n  }\n  header nav .left-nav li a {\n    font-size: 10px;\n  }\n}\n\n@media screen and (max-width: 1294px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 12px;\n  }\n}\n\n@media screen and (max-width: 1219px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n  }\n  header nav .right-nav li a {\n    font-size: 9px;\n  }\n  header nav .left-nav {\n  }\n  header nav .left-nav li {\n  }\n  header nav .left-nav li a {\n    font-size: 9px;\n  }\n}\n\n@media screen and (max-width: 1173px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 7px;\n  }\n  header nav .right-nav .nav-cart {\n    padding: 0 16px;\n  }\n}\n\n@media screen and (max-width: 1093px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 5px;\n  }\n  header nav .right-nav .nav-cart {\n    padding: 0 13px;\n  }\n}\n\n@media screen and (max-width: 1037px) {\n  header {\n  }\n  header nav {\n  }\n  header nav .right-nav {\n  }\n  header nav .right-nav li {\n    padding: 0 4px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n\n  header {\n    left: 0 !important\n  }\n\n  header.fixed {\n  }\n\n  header.fixed nav {\n    background-color: #fff;\n  }\n\n  header.fixed nav li {\n  }\n\n  header.fixed nav li .mobile_logo {\n    width: calc(99.9% * 3/4 - (30px - 30px * 3/4));\n    background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n    background-size: 150px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-indent: 101%;\n    margin: 0 auto !important;\n    float: none !important;\n    display: block;\n  }\n\n  header.fixed nav li .mobile_logo:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n\n  header.fixed nav li .mobile_logo:last-child {\n    margin-right: 0;\n  }\n\n  header.fixed nav li .mobile_logo:nth-child(4n) {\n    margin-right: 0;\n    float: right;\n  }\n\n  header.fixed nav li .mobile_logo:nth-child(4n + 1) {\n    clear: both;\n  }\n\n  header nav {\n    background-color: transparent;\n  }\n\n  header nav .desktop-menu {\n    display: none;\n  }\n\n  header nav .mobile-menu {\n    display: block;\n  }\n\n  header nav li {\n  }\n\n  header nav li .mobile_logo {\n    width: calc(99.9% * 3/4 - (30px - 30px * 3/4));\n    background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n    background-size: 150px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-indent: 101%;\n    margin: 0 auto !important;\n    float: none !important;\n    display: block;\n  }\n\n  header nav li .mobile_logo:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n\n  header nav li .mobile_logo:last-child {\n    margin-right: 0;\n  }\n\n  header nav li .mobile_logo:nth-child(4n) {\n    margin-right: 0;\n    float: right;\n  }\n\n  header nav li .mobile_logo:nth-child(4n + 1) {\n    clear: both;\n  }\n\n  header nav li.nav-cart {\n    background-color: #fed6cc;\n    min-height: 60px;\n    font-size: 12px;\n    letter-spacing: 1px;\n    float: right;\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 0 16px;\n  }\n\n  header nav li.nav-cart .cart-icon {\n    background: url(/static/images/nav-cart-black.png) no-repeat center center;\n  }\n\n  header nav li.nav-cart span {\n    margin-left: 30px;\n  }\n\n  header nav li.nav-cart a {\n    padding: 23px 0;\n  }\n\n  .has_image {\n  }\n\n  .has_image header {\n    left: 0 !important;\n  }\n\n  .has_image header.fixed {\n  }\n\n  .has_image header.fixed nav {\n    background-color: #fff;\n  }\n\n  .has_image header.fixed nav li {\n  }\n\n  .has_image header.fixed nav li .mobile_logo {\n    width: calc(99.9% * 3/4 - (30px - 30px * 3/4));\n    background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n    background-size: 150px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-indent: 101%;\n    margin: 0 auto !important;\n    float: none !important;\n    display: block;\n  }\n\n  .has_image header.fixed nav li .mobile_logo:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n\n  .has_image header.fixed nav li .mobile_logo:last-child {\n    margin-right: 0;\n  }\n\n  .has_image header.fixed nav li .mobile_logo:nth-child(4n) {\n    margin-right: 0;\n    float: right;\n  }\n\n  .has_image header.fixed nav li .mobile_logo:nth-child(4n + 1) {\n    clear: both;\n  }\n\n  .has_image header.fixed nav li.nav-cart {\n    background-color: #fed6cc;\n  }\n\n  .has_image header.fixed nav li.nav-cart span {\n    margin-left: 30px;\n    color: #000;\n  }\n\n  .has_image header.fixed nav li.nav-cart .cart-icon {\n    background: url(/static/images/nav-cart-black.png) no-repeat center center;\n  }\n\n  .has_image header nav {\n    background-color: transparent;\n  }\n\n  .has_image header nav .desktop-menu {\n    display: none;\n  }\n\n  .has_image header nav .mobile-menu {\n    display: block;\n  }\n\n  .has_image header nav li {\n  }\n\n  .has_image header nav li .mobile_logo {\n    width: calc(99.9% * 3/4 - (30px - 30px * 3/4));\n    background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 144' fill='%23fff'%3E%3Cg data-name='Homepage-+-bag'%3E%3Cpath d='M170.63 125.67h6.87l-3.46-8.67-3.42 8.67zm7.28 1h-7.67l-1.07 2.72a5.74 5.74 0 0 0-.42 2.18 2.8 2.8 0 0 0 .69 1.89 2.54 2.54 0 0 0 1.92.87v.88h-7.5v-.88c1.67-.24 3-1.67 4.06-4.29l5.61-14.24a2.55 2.55 0 0 0-.93-1 3.62 3.62 0 0 0-1.43-.38v-.76l3.89-1.31h1.49l7.5 19a6 6 0 0 0 1.3 2.18 4.44 4.44 0 0 0 2 .86v.88h-9.64v-.88c1.67-.18 2.49-.4 2.49-1.39a4.42 4.42 0 0 0-.47-1.68l-1.78-4.63zM214.14 129.75l7.09-17.17h7v.87a4.85 4.85 0 0 0-2.3.42 1.62 1.62 0 0 0-.78 1.15 21.66 21.66 0 0 0-.12 2.78v13.88a3.75 3.75 0 0 0 .28 1.6 1.55 1.55 0 0 0 .92.77 8.54 8.54 0 0 0 2 .3v.88h-10.46v-.88a5.7 5.7 0 0 0 2.26-.39 1.45 1.45 0 0 0 .82-1 11.36 11.36 0 0 0 .13-2.06v-15.5l-8.03 19.83h-1l-8-19.18v13.17c0 2.95 1 4.55 3.69 5.14v.88h-8.21v-.88c2.32-.24 3.62-1.8 3.62-4.61v-14.9a4.5 4.5 0 0 0-3.62-1.4v-.87h7.52zM244.06 127.07h1.08c1.8 5.14 4.76 7.66 8 7.66a5.13 5.13 0 0 0 3.47-1.25 4.08 4.08 0 0 0 1.44-3.21 4 4 0 0 0-1-2.84 5 5 0 0 0-2.29-1.43 27.79 27.79 0 0 0-3.5-.77 21.06 21.06 0 0 1-3.08-.67 6 6 0 0 1-4.41-5.86 6.35 6.35 0 0 1 6.43-6.54 13.14 13.14 0 0 1 2.58.3 13 13 0 0 0 2.24.29 3.69 3.69 0 0 0 1.66-.38h1.27l.7 6.61h-1.13a15.82 15.82 0 0 0-3.35-4.51 5.85 5.85 0 0 0-4.08-1.56 4.27 4.27 0 0 0-4.4 4.11c0 2.14 1.49 3.16 4.36 3.75s5.26.88 6.6 1.52a6.59 6.59 0 0 1 3.9 6.08 7.29 7.29 0 0 1-7.38 7.29 7.4 7.4 0 0 1-1.78-.18c-.41-.13-1.09-.35-2.06-.69a7.76 7.76 0 0 0-2.24-.52 2.44 2.44 0 0 0-2.06 1h-.93v-8.16zM275.82 144h2.36v-36.28h-2.36V144zM315.65 112.57h8.68v.87a3.56 3.56 0 0 0-3.66 3.86l.28 18.43h-1l-16.55-19.19.23 12.91c.1 3.1.66 4.55 4 4.9v.88h-8.58v-.88a4 4 0 0 0 2.49-.9 3.29 3.29 0 0 0 1-1.91 13.75 13.75 0 0 0 .13-2.9l-.22-13.15c-1.24-1.33-2.37-2-3.62-2h-.19v-.87h6.7l14.61 16.84-.21-11.3c0-1.74-.33-2.94-1.17-3.69a3.53 3.53 0 0 0-1.31-.75 4.72 4.72 0 0 0-1.61-.29v-.87zM350.58 113.44v-.87h7.24v.87c-1.45.2-2.89 1.68-4.57 4.55l-4.79 8.17v5.78a2 2 0 0 0 .76 1.93 7.9 7.9 0 0 0 2.69.51v.88h-10.96v-.88h.29a4.61 4.61 0 0 0 2.09-.36c.93-.5 1-1.17 1-2.4v-4.68l-6.9-11.49a7 7 0 0 0-1.14-1.52 2.58 2.58 0 0 0-1.85-.45v-.87h10.68v.87a10.37 10.37 0 0 0-2.25.24 1 1 0 0 0-.79 1.07 6.72 6.72 0 0 0 1.15 2.57l4.72 7.7 3.14-5.22c1.15-1.91 1.69-3.17 1.69-4.35a2 2 0 0 0-.59-1.4 1.88 1.88 0 0 0-1.47-.64h-.17zM389.21 112.27v7.11h-1c-2-4.24-4.67-6.33-7.93-6.33a6.4 6.4 0 0 0-5.42 2.89 13.6 13.6 0 0 0-2.06 7.64c-.06 6.29 3.55 10.9 8.43 10.82 3 0 5.75-1.48 8-4.49l1 .53a11.83 11.83 0 0 1-10.29 5.28 11.5 11.5 0 0 1-11.85-11.68 11.93 11.93 0 0 1 3.47-8.57 11.88 11.88 0 0 1 8.27-3.31 8.72 8.72 0 0 1 1.69.15c.53.08 1.15.23 1.88.41l1.46.4a5.38 5.38 0 0 0 .89.07 2.8 2.8 0 0 0 2.12-.89h1.34zM26.17 45.6L9.79 26.07v-2.06h5.93c6.83 0 10.44-4.94 10.44-9.52s-3.42-9.47-10-9.47H4.32V45.6H0V.6h16.2c9.85 0 14.34 7.2 14.34 13.88 0 6.86-4.46 12.09-11.35 13.27l-2.16.38 14.8 17.46h-5.66zm192.58 0V.67h26.64v4.35H223.2v15.87h21.75v4.42H223.2v15.93h22.26v4.36h-26.71zm69.27 0V.67h26v4.35h-21.61v15.87h19.18v4.42h-19.18V45.6h-4.38zm63.29 0h4.39V.67h-4.39V45.6zm44.75 0V.67h26.64v4.35h-22.17v15.87h21.7v4.42h-21.7v15.93h22.25v4.36h-26.72zm62.36 0V.67h4.4v40.57h22.52v4.36h-26.92zm61.76-4.36h11.54c11.79 0 18-9.1 18-18.08s-6.16-18.14-18-18.14h-11.54v36.22zm-4.4 4.36V.67h15.94c15.31 0 22.29 11.65 22.29 22.49s-7 22.43-22.29 22.43h-15.94zm-354.15.41c-7.14 0-15.15-4.1-16-11.66l4.47-.06h.06c.84 4.81 6.53 7.4 11.53 7.4 5.91 0 12-3.37 12-9a8.49 8.49 0 0 0-.24-1.92c-1-4.6-6.92-5.17-11.64-5.64-7.66-.78-15.18-2.27-15.86-11.14a11.45 11.45 0 0 1 2.36-8.09c2.79-3.6 8-5.84 13.51-5.84 5.78 0 13 2.66 14.78 10l-4.4.18c-1.53-4.14-6.32-6-10.49-6-4.34.1-8 1.6-9.92 4.1a7.33 7.33 0 0 0-1.43 5.27c.42 6 7.13 6.69 12 7.14 6.74.81 13.86 2.57 15.46 9.13a16.43 16.43 0 0 1 .31 2.84c0 8.25-8.41 13.2-16.53 13.2zM88.14 4.42a18.61 18.61 0 0 0-13.19 5.52 18.33 18.33 0 0 0-5.5 13.16 18.37 18.37 0 0 0 5.5 13.15 18.66 18.66 0 0 0 13.16 5.52 19.06 19.06 0 0 0 13.28-5.52 18.62 18.62 0 0 0 5.44-13.15 18.65 18.65 0 0 0-5.43-13.16 19.07 19.07 0 0 0-13.3-5.53zm0 41.78a23 23 0 0 1-16.35-6.82 23.2 23.2 0 0 1-6.77-16.28 23.27 23.27 0 0 1 6.77-16.3A23.22 23.22 0 0 1 88.14 0a23.33 23.33 0 0 1 16.43 6.8 23.32 23.32 0 0 1 6.74 16.3 23.22 23.22 0 0 1-6.76 16.28 23 23 0 0 1-16.41 6.78z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n    background-size: 150px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-indent: 101%;\n    margin: 0 auto !important;\n    float: none !important;\n    display: block;\n  }\n\n  .has_image header nav li .mobile_logo:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n\n  .has_image header nav li .mobile_logo:last-child {\n    margin-right: 0;\n  }\n\n  .has_image header nav li .mobile_logo:nth-child(4n) {\n    margin-right: 0;\n    float: right;\n  }\n\n  .has_image header nav li .mobile_logo:nth-child(4n + 1) {\n    clear: both;\n  }\n\n  .has_image header nav li.nav-cart {\n    background-color: transparent;\n    min-height: 60px;\n    font-size: 12px;\n    letter-spacing: 1px;\n    float: right;\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 0 16px;\n  }\n\n  .has_image header nav li.nav-cart .cart-icon {\n    background: url(/static/images/nav-cart-white.png) no-repeat center center;\n  }\n\n  .has_image header nav li.nav-cart span {\n    margin-left: 30px;\n    color: #fff;\n  }\n\n  .has_image header nav li.nav-cart a {\n    padding: 23px 0;\n  }\n}\n\nheader nav li:hover > ul.sub-menu {\n  display:block;\n}\n\nheader nav li:hover > ul.sub-menu li:hover {\n  background-color: #fed6cc;\n}\n\nheader nav li:hover > ul.sub-menu li a:hover {\n  color: #ffffff !important;\n}\n\nheader nav li:hover > div.switcher-sub-menu {\n  display:block;\n}\n\n/* Navigation Country and Language*/\n\n.rf-mod-languageBar__innerWrapper {float: left;padding: 15px;width: auto;}\n\n.rf-mod-locationSelector {background:#f8f8f8 url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2068%2040%22%3E%3Ctitle%3Erf-select-arrow-w%3C%2Ftitle%3E%3Cg%20id%3D%22Homepage-_-bag%22%20data-name%3D%22Homepage-%2B-bag%22%3E%3Cg%20id%3D%22Home-iphone%22%3E%3Cg%20id%3D%22Footer%22%3E%3Cg%20id%3D%22Path-680%22%3E%3Cpolygon%20points%3D%220%204.54%204.83%200.01%2033.91%2030.43%2063.19%200%2068%204.55%2033.89%2040%200%204.54%22%20style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat scroll 94% center / 10px auto; \nborder: 1px solid #9f9d9e;color: #000000;float: none;height: 40px;margin: 0 auto;outline: 0 none;overflow: hidden;width: 220px;}\n\n.country-img {float: left;margin: 0;outline: none;padding: 9px 0 11px 0;position: absolute;width: 25px;}\n\n.country-select {-moz-appearance:none; /* Firefox */ -webkit-appearance:none; /* Safari and Chrome */\nbackground: rgba(0, 0, 0, 0) url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2068%2040%22%3E%3Ctitle%3Erf-select-arrow%3C%2Ftitle%3E%3Cg%20id%3D%22Homepage-_-bag%22%20data-name%3D%22Homepage-%2B-bag%22%3E%3Cg%20id%3D%22Home-iphone%22%3E%3Cg%20id%3D%22Footer%22%3E%3Cg%20id%3D%22Path-680%22%3E%3Cpolygon%20points%3D%220%204.54%204.83%200.01%2033.91%2030.43%2063.19%200%2068%204.55%2033.89%2040%200%204.54%22%20style%3D%22fill%3A%23686969%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat scroll 94% center / 10px auto; border: 0px solid #9f9d9e;color: #000;float: left;font-size: 10px;height: 40px;letter-spacing: 3px;outline: medium none;padding-left: 35px;text-transform: uppercase;width: 220px;}\n\n.country-select option, .language-select option {color: #000000;padding: 5px;}\n\n.rf-mod-languageSelector {background:#f8f8f8 url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2068%2040%22%3E%3Ctitle%3Erf-select-arrow-w%3C%2Ftitle%3E%3Cg%20id%3D%22Homepage-_-bag%22%20data-name%3D%22Homepage-%2B-bag%22%3E%3Cg%20id%3D%22Home-iphone%22%3E%3Cg%20id%3D%22Footer%22%3E%3Cg%20id%3D%22Path-680%22%3E%3Cpolygon%20points%3D%220%204.54%204.83%200.01%2033.91%2030.43%2063.19%200%2068%204.55%2033.89%2040%200%204.54%22%20style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat scroll 94% center / 10px auto; border: 1px solid #9f9d9e;color: #000000;float: none;height: 40px;letter-spacing: 3px;margin: 20px auto;outline: 0 none;overflow: hidden;width: 220px;}\n\n.language-select {-moz-appearance:none; /* Firefox */ -webkit-appearance:none; /* Safari and Chrome */\n background: rgba(0, 0, 0, 0) url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2068%2040%22%3E%3Ctitle%3Erf-select-arrow%3C%2Ftitle%3E%3Cg%20id%3D%22Homepage-_-bag%22%20data-name%3D%22Homepage-%2B-bag%22%3E%3Cg%20id%3D%22Home-iphone%22%3E%3Cg%20id%3D%22Footer%22%3E%3Cg%20id%3D%22Path-680%22%3E%3Cpolygon%20points%3D%220%204.54%204.83%200.01%2033.91%2030.43%2063.19%200%2068%204.55%2033.89%2040%200%204.54%22%20style%3D%22fill%3A%23686969%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat scroll 94% center / 10px auto; color: #000;border: 0px solid #9f9d9e;float: left;font-size: 10px;height: 40px;letter-spacing: 1px;margin: 0;outline: medium none;padding-left: 15px;text-transform: uppercase;width: 220px;}\n\n.select-button {background: transparent;border: 0 none;color: #000000;cursor: pointer;float: right;margin: 0;padding: 15px;position: relative;width: 120px;z-index: 0;}\n\n.select-button:before{content: \"\";position: absolute;z-index: -1;top: 0;left: 0;right: 0;bottom: 0;background: #ffd6cc;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);-webkit-transform-origin: 0 50%;transform-origin: 0 50%;transition: -webkit-transform .3s ease-out;transition: transform .3s ease-out;transition: transform .3s ease-out, -webkit-transform .3s ease-out;}\n\n.select-button:hover:before{-webkit-transform: scaleX(1);transform: scaleX(1);}\n\n.select-button:after{bottom: 10px;position: absolute;height: 4px;width: calc(1 - $letterSpacing); right: 15px;left: 15px;margin-top: 4px;content: ' ';display: block;background: #393939;}\n\n.select-button:hover:after {position: absolute;display: block;height: 4px;margin: 04px auto 0; -webkit-animation: lineWidth 0.4s;animation: lineWidth 0.4s;-webkit-animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);background: #181818;}\n\n.select-button a {width: auto;font-size: 11px;color: #000; letter-spacing: 4px;text-transform: uppercase; padding: 0px;}\n\n/* Position and sizing of burger button */\n\n.bm-burger-button {\n  position: fixed;\n  width: 23px;\n  height: 23px;\n  left: 17px;\n  top: 17px;\n  display: none;\n  background: transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384.97 384.97' width='28' height='22'%3E%3Cg fill='%23FFF'%3E%3Cpath d='M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%;\n  z-index: 91 !important;\n}\n\n/* Color/shape of burger icon bars */\n\n.bm-burger-bars {\n  background: #fff;\n}\n\n/* Color/shape of close button cross */\n\n.bm-cross {\n  background: #bdc3c7;\n}\n\n/* General sidebar styles */\n\n.bm-menu {\n  background: #181818;\n  /*padding: 2.5em 1.5em 0;*/\n  /*font-size: 1.15em;*/\n}\n\n/* Morph shape necessary with bubble or elastic */\n\n.bm-morph-shape {\n  fill: #373a47;\n}\n\n/* Wrapper for item list */\n\n.bm-item-list {\n  color: #b8b7ad;\n}\n\n/* Styling of overlay */\n\n.bm-overlay {\n  background: rgba(0, 0, 0, .7) !important;\n}\n\n.bm-menu-wrap {\n  z-index: 92 !important;\n}\n\n@media screen and (max-width: 1024px) {\n  .bm-burger-bars, .bm-burger-button {\n    display: block;\n  }\n}\n\nbody {\n\tmargin: 0px !important;\n}\n\nmain {\n\t/*temp*/\n\t/*min-height: 400px;*/\n}\n\nmain, nav {\n\t/*lost-center: 1278px;*/\n}\n\nmain:before, nav:before {/*lost-center: 1278px;*/\n  content: '';\n  display: table;\n}\n\nmain:after, nav:after {/*lost-center: 1278px;*/\n  content: '';\n  display: table;\n  clear: both;\n}\n\nfooter {\n  font-size: 12px;\n  padding: 0 0 3em 0;\n  border-top: 1px solid #eee;\n  width: auto;\n  float: left;\n}\n\nfooter section.icons {\n  float: left;\n  width: calc(99.9% * 4/12 - (30px - 30px * 4/12));\n  padding: 36px 0 38px 10px;\n  text-align:center\n}\n\nfooter section.icons:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\nfooter section.icons:last-child {\n  margin-right: 0;\n}\n\nfooter section.icons:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\nfooter section.icons:nth-child(12n + 1) {\n  clear: both;\n}\n\nfooter section.icons img {\n  margin-right: 40px;\n}\n\nfooter .social-copyright-main {\n  border-top: 1px solid #F4F4F4;\n  color: #000;\n  float: left;\n  width: 100%;\n  position: relative;\n  background-color: #fff;\n}\n\n.footer-nav-links {\n  width: calc(99.9% * 2/12 - (30px - 30px * 2/12));\n  border-right: 1px solid #F4F4F4;\n  height: auto;\n  margin-top: 0;\n  float: left;\n  padding: 70px 50px 28px 0;\n  margin-left: 8%\n}\n\n.footer-nav-links:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\n.footer-nav-links:last-child {\n  margin-right: 0;\n}\n\n.footer-nav-links:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\n.footer-nav-links:nth-child(12n + 1) {\n  clear: both;\n}\n\n.footer-nav-links h2 {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 6.33px;\n  margin: 0 0 38px;\n  color: #3c3c3c;\n}\n\n.footer-nav-links a {\n  float: left;\n  font-size: 13px;\n  color: #3c3c3c;\n  text-decoration: none;\n  letter-spacing: 1.04px;\n  line-height: 20px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.footer-signup {\n  float: left;\n  height: 50%;\n  box-sizing: border-box;\n  padding:70px 50px 44px 0px;\n  margin-left:8%;\n  width: calc(99.9% * 5/12 - (30px - 30px * 5/12))\n}\n\n.footer-signup:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\n.footer-signup:last-child {\n  margin-right: 0;\n}\n\n.footer-signup:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\n.footer-signup:nth-child(12n + 1) {\n  clear: both;\n}\n\n.footer-signup h2 {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 6.33px;\n  margin: 0 0 38px;\n  color: #3c3c3c;\n}\n\n.footer-signup p {\n  float: left;\n  font-weight: normal;\n  margin-bottom: 20px;\n  color: #3c3c3c;\n  font-size: 15px;\n  line-height: 160%;\n  width: 90%;\n}\n\n.footer-signup form {\n  margin-left: 3%;\n  float: left;\n}\n\n.footer-emailbg {\n  width: 285px;\n  height: 55px;\n  background-color: #ffeeea;\n  margin-top: 6px;\n  margin-left: -30px;\n  position: relative;\n  float: left\n}\n\n.footer-emailbg input.footer-email {\n  background-color: transparent;\n  font-weight: lighter;\n  border: 0;\n  width: 238px;\n  height: 41px;\n  padding-left: 12px;\n  margin-left: 20px;\n  padding-right: 50px;\n  color: #5a5859;\n  font-style: italic;\n  padding-left: 18px;\n  font-size: 13px;\n  letter-spacing: 1.2px;\n  line-height: 1;\n  border-bottom: 1px solid #5a5859;\n  position: absolute;\n}\n\n.footer-emailbg input.footer-email:focus {\n  outline: 0;\n  border: transparent;\n  border-bottom: 1px solid #5a5859;\n}\n\n.footer-emailbg input.footer-emailarow {\n  background: url(/static/images/rf-email-arrow.svg) no-repeat center center;\n  width: 5px;\n  height: 9px;\n  background-size: 20%;\n  background-position: center;\n  padding: 12px;\n  margin-top: 12px;\n  margin-left: 280px;\n  position: absolute;\n  z-index: 9;\n  right: -34px;\n  border: 0;\n}\n\n.copyright {\n  width: calc(99.9% * 7/12 - (30px - 30px * 7/12));\n  float: right;\n  padding: 0 10px 0 0;\n  text-align: center;\n  margin-top: 36px\n}\n\n.copyright:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\n.copyright:last-child {\n  margin-right: 0;\n}\n\n.copyright:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\n.copyright:nth-child(12n + 1) {\n  clear: both;\n}\n\n.copyright p {\n  float: left;\n  font-weight: lighter;\n  font-size: 11px;\n  letter-spacing: 1px;\n  line-height: 8px;\n  text-align: center;\n  padding-left: 140px;\n}\n\n.copyright-links {\n  float: left;\n  padding-top:8px;\n  text-align:center\n}\n\n.copyright-links a {\n  letter-spacing: 1px;\n  line-height: 12px;\n  color: #e3a797;\n  font-size: 11px;\n  text-decoration: none;\n}\n\n.copyright-links a:hover {\n  color: #e3a797;\n  transition: 0.4s;\n}\n\n@media only screen and (max-width:1024px) {\n  .footer-nav-links {\n    width: calc(99.9% * 9/12 - (30px - 30px * 9/12));\n    border-right: 1px solid transparent;\n  }\n  .footer-nav-links:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n  .footer-nav-links:last-child {\n    margin-right: 0;\n  }\n  .footer-nav-links:nth-child(12n) {\n    margin-right: 0;\n    float: right;\n  }\n  .footer-nav-links:nth-child(12n + 1) {\n    clear: both;\n  }\n  .footer-signup {\n    width: calc(99.9% * 11/12 - (30px - 30px * 11/12));\n    padding-top: 20px;\n  }\n  .footer-signup:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n  .footer-signup:last-child {\n    margin-right: 0;\n  }\n  .footer-signup:nth-child(12n) {\n    margin-right: 0;\n    float: right;\n  }\n  .footer-signup:nth-child(12n + 1) {\n    clear: both;\n  }\n  footer section.icons {\n    width: calc(99.9% * 11/12 - (30px - 30px * 11/12));\n    padding-bottom:18px;\n  }\n  footer section.icons:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n  footer section.icons:last-child {\n    margin-right: 0;\n  }\n  footer section.icons:nth-child(12n) {\n    margin-right: 0;\n    float: right;\n  }\n  footer section.icons:nth-child(12n + 1) {\n    clear: both;\n  }\n  .copyright p {\n    padding-left: 0;\n    width: 100%;\n  }\n  .copyright {\n    width: calc(99.9% * 11/12 - (30px - 30px * 11/12));\n    margin-top: 0;\n  }\n  .copyright:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none;\n  }\n  .copyright:last-child {\n    margin-right: 0;\n  }\n  .copyright:nth-child(12n) {\n    margin-right: 0;\n    float: right;\n  }\n  .copyright:nth-child(12n + 1) {\n    clear: both;\n  }\n  .copyright-links {\n    width: 100%;\n  }\n  .footer-emailbg {\n    width: 250px;\n  }\n  .footer-emailbg input.footer-email {\n    width: 200px;\n  }\n}\n\n/* Make clicks pass-through */\n\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@font-face {\n  font-family: 'GT Walsheim';\n  src: url(\"/static/fonts/gt-walsheim/gt-walsheim-web.eot\");\n  src: url(\"/static/fonts/gt-walsheim/gt-walsheim-web.eot?#iefix\") format('embedded-opentype'),\n       url(\"/static/fonts/gt-walsheim/gt-walsheim-web.woff\") format('woff'),\n       url(\"/static/fonts/gt-walsheim/gt-walsheim-web.ttf\") format('truetype'),\n       url(\"/static/fonts/gt-walsheim/gt-walsheim-web.svg\") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'publico';\n  src: url(\"/static/fonts/publico/Publico-Bold.eot\");\n  src: url(\"/static/fonts/publico/Publico-Bold.eot?#iefix\") format('embedded-opentype'),\n       url(\"/static/fonts/publico/Publico-Bold.woff\") format('woff'),\n       url(\"/static/fonts/publico/Publico-Bold.ttf\") format('truetype'),\n       url(\"/static/fonts/publico/Publico-Bold.svg\") format('svg');\n  font-weight: bold;\n}\n\nbody {\n\tfont-family: 'GT Walsheim';\n  color: #666;\n}\n\nh1 {\n  float: left;\n  width: 100%;  \n  font-weight: bold;\n}\n\nh2 {\n  float:left;width:100%;\n  font-weight: bold;\n  letter-spacing: 4px;\n  font-size: 12px;\n  color:#161616;\n}\n\nh3 {\n  float:left;\n  width: 100%;\n  font-weight: bold;\n  color:#181818;\n  font-size:36px;\n  letter-spacing:1px;\n  box-sizing:border-box;\n  line-height:120%;\n}\n\nh4 {\n  float:left;\n  width: 100%;\n  font-weight: bold;\n  color: #3c3c3c;\n  font-size: 17px;\n  letter-spacing: 3px;\n}\n\nh5 {\n  float:left;width: 100%;\n  font-weight: bold;\n  font-size: 14px;\n  color: #3c3c3c;\n}\n\nh6 {\n  float:left;\n  width: 100%;\n  font-weight: bold;\n  font-size: 12px;\n  color: #3c3c3c;\n}\n\na {\n\tcolor: #222;\n  text-decoration: none;\n}\n\np {\n\tfont-size: 12px;\n\tline-height: 2;\n\tletter-spacing: 1px;\n  float: left;\n}\n\nimg {\n  max-width: 100%;\n}\n\nfooter svg {\n\tfont-size: 20px;\n\tmargin-right: 2em;\n}\n\nul li {\n  list-style: none;\n}\n\n.required {\n  color: red;\n}\n\ninput[type=text],input[type=password] {\n  float: left;\n  margin: 10px 0 20px;\n  height: 52px;\n  background-color: #FBFBFB;\n  border: 2px solid #E6E6E6 !important;\n  border-radius: 2px;\n  width: 98%;\n  padding: 0 8px;\n  color: #5a5859;\n  font-size: 15px;\n}\n\ninput[type=checkbox] {\n  float: left;\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n\nlabel {\n  color: #5a5859;\n  font-weight: normal;\n  letter-spacing: 1px;\n  font-size: 14px;\n  text-transform: none;\n  text-transform: initial;\n  white-space: nowrap;\n}\n\n.pink-black-button {\n  text-align: center;\n  background-color: #ffd6cc;\n  padding: 16px 40px;\n  margin: 20px 0;\n  color: #3c3c3c;\n  border: 0;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 12px;\n  float: left;\n  cursor: pointer;\n}\n\n.white-black-border-button {\n  font-weight: bold;\n  font-size: 12px;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  border: 2px solid #181818;\n  box-sizing: border-box;\n  float: left;\n  padding: 14px 26px;\n  margin: 25px 0 10px 0;\n  cursor:pointer;\n}\n\n.white-border-button {\n  font-weight: bold;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  border: 2px solid #fff;\n  box-sizing: border-box;\n  float: left;\n  padding: 14px 26px;\n  margin: 25px 0 10px 0;\n  cursor:pointer; \n}\n\n.back-button{\n  color: #000000;\n  font-weight: bold;\n  letter-spacing: 3px;\n  font-size: 12px;\n  text-transform:uppercase; \n  float: left;\n  margin: 20px 0;\n  text-align: left;\n  padding: 16px 40px;\n}\n\n.white-play-video-button {\n  float: left;\n  line-height: 120%;\n  clear: both;\n  background: url(/static/images/white-play-btn.svg) no-repeat 22px 12px;\n  color: #FFFFFF;\n  border: 2px solid #FFFFFF;\n  padding: 16px 30px 16px 50px;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 4px;\n  font-weight: bold;\n  margin: 30px 0 0 0;\n  text-decoration: none;\n  background-size: 16px;\n}\n\n.black-play-video-button {\n  float: left;\n  line-height: 120%;\n  clear: both;\n  background: url(/static/images/black-play-btn.svg) no-repeat 22px 12px;\n  color: #000000;\n  border: 2px solid #000000;\n  padding: 16px 30px 16px 50px;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 4px;\n  font-weight: bold;\n  margin: 30px 0 0 0;\n  text-decoration: none;\n  background-size: 16px;\n}\n\n.common-row {\n  float: left;\n  width: 100%;\n}\n\n.theme-bg {\n  background-color: #fffbfa;\n}\n\n.main-container {\n  max-width: 1386px;\n  margin: 0 auto;\n  padding:15px;\n}\n\n.background-header-banner {\n  float: left;\n  height: 667px;\n  position: relative;\n}\n\n.banner-overlay {\n  background-color: rgba(3, 3, 5, .6);\n  height: 667px;\n}\n\n.intro-title {\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 4px;\n  font-size: 12px;\n  color: #161616;\n  width: calc(99.9% * 12/12 - (30px - 30px * 12/12));\n}\n\n.intro-title:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\n.intro-title:last-child {\n  margin-right: 0;\n}\n\n.intro-title:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\n.intro-title:nth-child(12n + 1) {\n  clear: both;\n}\n\n.section-title {\n  padding: 14px 0 0 0;\n  line-height: 120%;\n  font-weight: bold;\n  color: #161616;\n  font-size: 2.8em;\n  letter-spacing: 1px;\n  width: calc(99.9% * 12/12 - (30px - 30px * 12/12));\n}\n\n.section-title:nth-child(1n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}\n\n.section-title:last-child {\n  margin-right: 0;\n}\n\n.section-title:nth-child(12n) {\n  margin-right: 0;\n  float: right;\n}\n\n.section-title:nth-child(12n + 1) {\n  clear: both;\n}\n\n/*=============== Terms and Privacy css start here ===============*/\n\n.common-row.terms-privacy-main {\n  margin: 30px 0;\n  width: 53%\n}\n\n.common-row.terms-privacy-main h1 {\n  font-family: 'publico';\n  font-size: 40px;\n  color: #000;\n  text-transform: capitalize;\n}\n\n.common-row.terms-privacy-main h3 {\n  font-size: 32px;\n  margin: 0;\n}\n\n.common-row.terms-privacy-main p span {\n  margin: 0 0 15px;\n  color: #181818;\n  line-height: 160%;\n  letter-spacing: 1px;\n  font-size: 18px;\n  text-transform: capitalize;\n  font-weight: bold;\n}\n\n.common-row.terms-privacy-main ul {\n  float: left;\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.common-row.terms-privacy-main ul li {\n  float: left;\n  width: 100%;\n  line-height: 160%;\n  font-weight: lighter;\n  color: #181818;\n  letter-spacing: 1px;\n  font-size: 15px;\n}\n\n.common-row.terms-privacy-main ul li p {\n  float: left;\n  width: 100%;\n  line-height: 160%;\n  font-weight: lighter;\n  color: #181818;\n  letter-spacing: 1px;\n  font-size: 15px;\n  margin-bottom: 20px;\n  margin-top: 0;\n}\n\n@media only screen and (max-width:1024px){\n  .common-row.terms-privacy-main {\n    width: 96%;\n    float: none;\n    margin: 0 auto;\n  }\n}\n\n/*=============== Terms and Privacy css start here ===============*/\n\n.slick-slide {\n  text-align: center\n}\n\n.slick-slide img {\n  margin: 0 auto;\n}\n\n.slick-dots {\n  bottom: -55px;\n}\n\n/* Slider */\n\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n\n.slick-list:focus\n{\n    outline: none;\n}\n\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n}\n\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after\n{\n    clear: both;\n}\n\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n@charset 'UTF-8';\n\n/* Slider */\n\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n\n@font-face {\n  font-family: 'slick';\n  src: url(\"/static/fonts/slick/slick.eot\");\n  src: url(\"/static/fonts/slick/slick.eot?#iefix\") format('embedded-opentype'),\n       url(\"/static/fonts/slick/slick.woff\") format('woff'),\n       url(\"/static/fonts/slick/slick.ttf\") format('truetype'),\n       url(\"/static/fonts/slick/slick.svg\") format('svg');\n}\n\n/* Arrows */\n\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 33%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n    opacity: .75;\n    color: black;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -60px;\n    float: left;\n}\n\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n\n.slick-prev:before\n{\n    content: '';\n    background:url(/static/images/pre-arrow.png) no-repeat;\n    height: 29px;\n    width: 29px;\n    float: left;\n}\n\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -60px;\n    float: left;\n}\n\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n\n.slick-next:before\n{\n    content: '';\n    background:url(/static/images/next-arrow.png) no-repeat;\n    height: 29px;\n    width: 29px;\n    float: left;\n}\n\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 8px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before\n{\n    opacity: 1;\n    color: #c7735c;\n}\n\n.popupbox{\n  width:100%;\n  height:100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1000;\n}\n\n.popupbox[hidden]{\n  display: none;\n}\n\n.popupbox-overlay{\n  position:fixed;\n  top: 0;\n  left: 0;\n  width:100%;\n  height:100%;\n  z-index:1002;\n  background: none repeat scroll 0% 0% #000;\n}\n\n.popupbox-content {\n  overflow: hidden;\n}\n\n.popupbox-wrapper {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -o-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1003;\n  position: relative;\n}\n\n.popupbox-titleBar {\n  overflow: hidden;\n  display: block;\n  position: relative;\n}\n\n.popupbox-btn--close {\n  z-index: 1004;\n}\n\n.popupbox[data-title='bottom'] .popupbox-content { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1 }\n\n.popupbox[data-title='bottom'] .popupbox-titleBar { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2 }\n\n/* ----- default theme ----- */\n\n.popupbox-wrapper {\n  border-radius: 3px;\n  overflow: hidden;\n  max-width: 80%;\n  min-width: 300px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, .9);\n  background-color: white;\n}\n\n.popupbox-content {\n  padding: 20px 24px 30px;\n}\n\n.popupbox-titleBar {\n  font-weight: bold;\n  font-size: 18px;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, .2);\n  padding: 11px 37px 11px 24px;\n  border-bottom: 1px #ccc solid;\n}\n\n.popupbox-btn--close {\n  transition: all .5s;\n  position: absolute;\n  right: 11px;\n  top: 11px;\n  color: #c1c1c1;\n  background: none;\n  border: none;\n  outline: none;\n}\n\n.popupbox-btn--close:hover {\n  color: #000;\n}\n\n.popupbox.is-active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.popupbox[data-title='bottom'] .popupbox-content { box-shadow: 0 1px 1px rgba(0, 0, 0, .3) }\n\n.popupbox[data-title='bottom'] .popupbox-titleBar { box-shadow: none; border-top: 1px #ccc solid }\n\n/* iCheck plugin Minimal skin\n----------------------------------- */\n\n/* red */\n\n.icheckbox_minimal-red,\n.iradio_minimal-red {\n    display: inline-block;\n    *display: inline;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 18px;\n    height: 18px;\n    background: url(/static/images/iCheck/red.png) no-repeat;\n    border: none;\n    cursor: pointer;\n}\n\n.icheckbox_minimal-red {\n    background-position: 0 0;\n}\n\n.icheckbox_minimal-red.hover {\n        background-position: -20px 0;\n    }\n\n.icheckbox_minimal-red.checked {\n        background-position: -40px 0;\n    }\n\n.icheckbox_minimal-red.disabled {\n        background-position: -60px 0;\n        cursor: default;\n    }\n\n.icheckbox_minimal-red.checked.disabled {\n        background-position: -80px 0;\n    }\n\n.iradio_minimal-red {\n    background-position: -100px 0;\n}\n\n.iradio_minimal-red.hover {\n        background-position: -120px 0;\n    }\n\n.iradio_minimal-red.checked {\n        background-position: -140px 0;\n    }\n\n.iradio_minimal-red.disabled {\n        background-position: -160px 0;\n        cursor: default;\n    }\n\n.iradio_minimal-red.checked.disabled {\n        background-position: -180px 0;\n    }\n\n/* HiDPI support */\n\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\n    .icheckbox_minimal-red,\n    .iradio_minimal-red {\n        background-image: url(/static/images/iCheck/red@2x.png);\n        background-size: 200px 20px;\n    }\n}\n\n/* green */\n\n.icheckbox_minimal-green,\n.iradio_minimal-green {\n    display: inline-block;\n    *display: inline;\n    vertical-align: middle;\n    margin-top: -4px;\n    padding: 0;\n    width: 18px;\n    height: 18px;\n    background: url(/static/images/iCheck/green.png) no-repeat;\n    border: none;\n    cursor: pointer;\n}\n\n.icheckbox_minimal-green {\n    background-position: 0 0;\n}\n\n.icheckbox_minimal-green.hover {\n        background-position: -20px 0;\n    }\n\n.icheckbox_minimal-green.checked {\n        background-position: -40px 0;\n    }\n\n.icheckbox_minimal-green.disabled {\n        background-position: -60px 0;\n        cursor: default;\n    }\n\n.icheckbox_minimal-green.checked.disabled {\n        background-position: -80px 0;\n    }\n\n.iradio_minimal-green {\n    background-position: -100px 0;\n}\n\n.iradio_minimal-green.hover {\n        background-position: -120px 0;\n    }\n\n.iradio_minimal-green.checked {\n        background-position: -140px 0;\n    }\n\n.iradio_minimal-green.disabled {\n        background-position: -160px 0;\n        cursor: default;\n    }\n\n.iradio_minimal-green.checked.disabled {\n        background-position: -180px 0;\n    }\n\n/* HiDPI support */\n\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\n    .icheckbox_minimal-green,\n    .iradio_minimal-green {\n        background-image: url(/static/images/iCheck/green@2x.png);\n        background-size: 200px 20px;\n    }\n}\n\n/* grey */\n\n.icheckbox_minimal-grey,\n.iradio_minimal-grey {\n    display: inline-block;\n    *display: inline;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 18px;\n    height: 18px;\n    background: url(/static/images/iCheck/grey.png) no-repeat;\n    border: none;\n    cursor: pointer;\n}\n\n.icheckbox_minimal-grey {\n    background-position: 0 0;\n}\n\n.icheckbox_minimal-grey.hover {\n        background-position: -20px 0;\n    }\n\n.icheckbox_minimal-grey.checked {\n        background-position: -40px 0;\n    }\n\n.icheckbox_minimal-grey.disabled {\n        background-position: -60px 0;\n        cursor: default;\n    }\n\n.icheckbox_minimal-grey.checked.disabled {\n        background-position: -80px 0;\n    }\n\n.iradio_minimal-grey {\n    background-position: -100px 0;\n}\n\n.iradio_minimal-grey.hover {\n        background-position: -120px 0;\n    }\n\n.iradio_minimal-grey.checked {\n        background-position: -140px 0;\n    }\n\n.iradio_minimal-grey.disabled {\n        background-position: -160px 0;\n        cursor: default;\n    }\n\n.iradio_minimal-grey.checked.disabled {\n        background-position: -180px 0;\n    }\n\n/* HiDPI support */\n\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\n    .icheckbox_minimal-grey,\n    .iradio_minimal-grey {\n        background-image: url(/static/images/iCheck/grey@2x.png);\n        background-size: 200px 20px;\n    }\n}\n\n/* iCheck plugin Line skin\n----------------------------------- */\n\n/* grey */\n\n.icheckbox_line-grey,\n.iradio_line-grey {\n    position: relative;\n    display: block;\n    margin: 0;\n    padding: 5px 15px 5px 38px;\n    font-size: 13px;\n    line-height: 17px;\n    color: #fff;\n    background: #73716e;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n}\n\n.icheckbox_line-grey .icheck_line-icon,\n    .iradio_line-grey .icheck_line-icon {\n        position: absolute;\n        top: 50%;\n        left: 13px;\n        width: 13px;\n        height: 11px;\n        margin: -5px 0 0 0;\n        padding: 0;\n        overflow: hidden;\n        background: url(/static/images/iCheck/line.png) no-repeat;\n        border: none;\n    }\n\n.icheckbox_line-grey.hover,\n    .icheckbox_line-grey.checked.hover,\n    .iradio_line-grey.hover {\n        background: #8B8986;\n    }\n\n.icheckbox_line-grey.checked,\n    .iradio_line-grey.checked {\n        background: #73716e;\n    }\n\n.icheckbox_line-grey.checked .icheck_line-icon,\n        .iradio_line-grey.checked .icheck_line-icon {\n            background-position: -15px 0;\n        }\n\n.icheckbox_line-grey.disabled,\n    .iradio_line-grey.disabled {\n        background: #D5D4D3;\n        cursor: default;\n    }\n\n.icheckbox_line-grey.disabled .icheck_line-icon,\n        .iradio_line-grey.disabled .icheck_line-icon {\n            background-position: -30px 0;\n        }\n\n.icheckbox_line-grey.checked.disabled,\n    .iradio_line-grey.checked.disabled {\n        background: #D5D4D3;\n    }\n\n.icheckbox_line-grey.checked.disabled .icheck_line-icon,\n        .iradio_line-grey.checked.disabled .icheck_line-icon {\n            background-position: -45px 0;\n        }\n\n/* HiDPI support */\n\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\n    .icheckbox_line-grey .icheck_line-icon,\n    .iradio_line-grey .icheck_line-icon {\n        background-image: url(/static/images/iCheck/line@2x.png);\n        background-size: 60px 13px;\n    }\n}\n\n/*@import \"forms\"*/\n\n/*@import \"dev-utils\";*/\n";

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _populair_products = __webpack_require__(648);

var _populair_products2 = _interopRequireDefault(_populair_products);

var _Product = __webpack_require__(746);

var _Product2 = _interopRequireDefault(_Product);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Element = function Element(_ref) {
  var lang = _ref.lang;

  return _react2.default.createElement('div', { className: 'featured', 'data-jsx': 4289420217
  }, _react2.default.createElement(_style2.default, {
    styleId: 4289420217,
    css: '.featured[data-jsx="4289420217"] {padding-top: 4em;padding-bottom: 2em;}.featured[data-jsx="4289420217"]:before {content: \'\';display: table;}.featured[data-jsx="4289420217"]:after {content: \'\';display: table;clear: both;}h1[data-jsx="4289420217"] {text-align: center;color: #de9c8c;margin-bottom: 1.5em;}a.fancy_button[data-jsx="4289420217"] {color: #222;border: 2px solid #181818;margin: 2em;padding: 1em;text-decoration: none;text-transform:uppercase;font-weight:bold;font-size:11px;letter-spacing: 3px;padding: 15px 20px 15px 22px;cursor:pointer;}.more[data-jsx="4289420217"] {padding-top: 4em;padding-bottom: 3em;clear: both;text-align: center;}/*@ sourceURL=src/components/PopulairProducts.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvUG9wdWxhaXJQcm9kdWN0cy5qcyIsInNyYy9jb21wb25lbnRzL1BvcHVsYWlyUHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLGtDQUdTLGlCQUNHLG9CQUNyQixDQUxTLHlDQUVlLFlBQUEsZUFDTixDQUhULHdDQUVlLFlBQUEsZUFBQSxZQUNOLENBSWYsMkJBQ2lCLG1CQUNKLGVBQ00scUJBQ3RCLENBRWUsdUNBQ0YsWUFDYywwQkFDZCxZQUNDLGFBQ1Msc0JBQ0cseUJBQ1IsaUJBQ0YsZUFDSyxvQkFDUyw2QkFDZCxlQUNoQixDQUVNLDhCQUNZLGlCQUNHLG9CQUNSLFlBQ08sbUJBQ3BCLENBQUEsbURDckM0QyIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9wdWxhaXJQcm9kdWN0c0RhdGEgZnJvbSAnLi9kdW1teV9kYXRhL3BvcHVsYWlyX3Byb2R1Y3RzLmpzb24nO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVsZW1lbnQgPSAoe2xhbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkXCI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZlYXR1cmVkIHtcbiAgICAgICAgbG9zdC11dGlsaXR5OiBjbGVhcmZpeDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZGU5YzhjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgIH1cblxuICAgICAgYS5mYW5jeV9idXR0b24ge1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4MTgxODtcbiAgICAgICAgbWFyZ2luOiAyZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZToxMXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMnB4O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1vcmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuXG4gICAgPGgxPk9uemUgcG9wdWxhaXJzdGUgaG9ybG9nZXM8L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxuICAgICAgeyBwb3B1bGFpclByb2R1Y3RzRGF0YS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiA8UHJvZHVjdCBrZXk9e2luZGV4fSB7Li4ucHJvZHVjdH0gbGFuZz17bGFuZ30gLz4pIH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImZhbmN5X2J1dHRvblwiPkJla2lqayBhbGxlIGhvcmxvZ2VzPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG59O1xuXG5FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgbGFuZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDsiLCIuZmVhdHVyZWRbZGF0YS1qc3g9XCI0Mjg5NDIwMjE3XCJdIHtsb3N0LXV0aWxpdHk6IGNsZWFyZml4O3BhZGRpbmctdG9wOiA0ZW07cGFkZGluZy1ib3R0b206IDJlbTt9aDFbZGF0YS1qc3g9XCI0Mjg5NDIwMjE3XCJdIHt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICNkZTljOGM7bWFyZ2luLWJvdHRvbTogMS41ZW07fWEuZmFuY3lfYnV0dG9uW2RhdGEtanN4PVwiNDI4OTQyMDIxN1wiXSB7Y29sb3I6ICMyMjI7Ym9yZGVyOiAycHggc29saWQgIzE4MTgxODttYXJnaW46IDJlbTtwYWRkaW5nOiAxZW07dGV4dC1kZWNvcmF0aW9uOiBub25lO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOiAzcHg7cGFkZGluZzogMTVweCAyMHB4IDE1cHggMjJweDtjdXJzb3I6cG9pbnRlcjt9Lm1vcmVbZGF0YS1qc3g9XCI0Mjg5NDIwMjE3XCJdIHtwYWRkaW5nLXRvcDogNGVtO3BhZGRpbmctYm90dG9tOiAzZW07Y2xlYXI6IGJvdGg7dGV4dC1hbGlnbjogY2VudGVyO31cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwxQnZjSFZzWVdseVVISnZaSFZqZEhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJUMmRDTEVGQlEwTXNhME5CUTJNc2RVSkJRMDRzYVVKQlEwY3NiMEpCUTNKQ0xFTkJSVWNzTWtKQlEybENMRzFDUVVOS0xHVkJRMDBzY1VKQlEzUkNMRU5CUldVc2RVTkJRMFlzV1VGRFl5d3dRa0ZEWkN4WlFVTkRMR0ZCUTFNc2MwSkJRMGNzZVVKQlExSXNhVUpCUTBZc1pVRkRTeXh2UWtGRFV5dzJRa0ZEWkN4bFFVTm9RaXhEUVVWTkxEaENRVU5aTEdsQ1FVTkhMRzlDUVVOU0xGbEJRMDhzYlVKQlEzQkNJaXdpWm1sc1pTSTZJbk55WXk5amIyMXdiMjVsYm5SekwxQnZjSFZzWVdseVVISnZaSFZqZEhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwyaHZiV1V2Y0hKaFpHbHdMWE5sY25abGNpOXlaV0ZqZEMxamIyUmxMVzVsZHk5d2NtOWtkV04wTFdSbGRHRnBiQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J3YjNCMWJHRnBjbEJ5YjJSMVkzUnpSR0YwWVNCbWNtOXRJQ2N1TDJSMWJXMTVYMlJoZEdFdmNHOXdkV3hoYVhKZmNISnZaSFZqZEhNdWFuTnZiaWM3WEc1cGJYQnZjblFnVUhKdlpIVmpkQ0JtY205dElDY3VMMUJ5YjJSMVkzUW5PMXh1YVcxd2IzSjBJRkJ5YjNCVWVYQmxjeUJtY205dElDZHdjbTl3TFhSNWNHVnpKenRjYmx4dVkyOXVjM1FnUld4bGJXVnVkQ0E5SUNoN2JHRnVaeUI5S1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvWEc0Z0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVptVmhkSFZ5WldSY0lqNWNiaUFnSUNBOGMzUjViR1VnYW5ONFBudGdYRzRnSUNBZ0lDQXVabVZoZEhWeVpXUWdlMXh1SUNBZ0lDQWdJQ0JzYjNOMExYVjBhV3hwZEhrNklHTnNaV0Z5Wm1sNE8xeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bkxYUnZjRG9nTkdWdE8xeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bkxXSnZkSFJ2YlRvZ01tVnRPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JvTVNCN1hHNGdJQ0FnSUNBZ0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklDTmtaVGxqT0dNN1hHNGdJQ0FnSUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFdU5XVnRPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JoTG1aaGJtTjVYMkoxZEhSdmJpQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQWpNakl5TzF4dUlDQWdJQ0FnSUNCaWIzSmtaWEk2SURKd2VDQnpiMnhwWkNBak1UZ3hPREU0TzF4dUlDQWdJQ0FnSUNCdFlYSm5hVzQ2SURKbGJUdGNiaUFnSUNBZ0lDQWdjR0ZrWkdsdVp6b2dNV1Z0TzF4dUlDQWdJQ0FnSUNCMFpYaDBMV1JsWTI5eVlYUnBiMjQ2SUc1dmJtVTdYRzRnSUNBZ0lDQWdJSFJsZUhRdGRISmhibk5tYjNKdE9uVndjR1Z5WTJGelpUdGNiaUFnSUNBZ0lDQWdabTl1ZEMxM1pXbG5hSFE2WW05c1pEdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPakV4Y0hnN1hHNGdJQ0FnSUNBZ0lHeGxkSFJsY2kxemNHRmphVzVuT2lBemNIZzdYRzRnSUNBZ0lDQWdJSEJoWkdScGJtYzZJREUxY0hnZ01qQndlQ0F4TlhCNElESXljSGc3WEc0Z0lDQWdJQ0FnSUdOMWNuTnZjanB3YjJsdWRHVnlPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F1Ylc5eVpTQjdYRzRnSUNBZ0lDQWdJSEJoWkdScGJtY3RkRzl3T2lBMFpXMDdYRzRnSUNBZ0lDQWdJSEJoWkdScGJtY3RZbTkwZEc5dE9pQXpaVzA3WEc0Z0lDQWdJQ0FnSUdOc1pXRnlPaUJpYjNSb08xeHVJQ0FnSUNBZ0lDQjBaWGgwTFdGc2FXZHVPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ1lIMDhMM04wZVd4bFBseHVYRzVjYmlBZ0lDQThhREUrVDI1NlpTQndiM0IxYkdGcGNuTjBaU0JvYjNKc2IyZGxjend2YURFK1hHNWNiaUFnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5CeWIyUjFZM1J6WENJK1hHNGdJQ0FnSUNCN0lIQnZjSFZzWVdseVVISnZaSFZqZEhORVlYUmhMbTFoY0Nnb2NISnZaSFZqZEN3Z2FXNWtaWGdwSUQwK0lEeFFjbTlrZFdOMElHdGxlVDE3YVc1a1pYaDlJSHN1TGk1d2NtOWtkV04wZlNCc1lXNW5QWHRzWVc1bmZTQXZQaWtnZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpYlc5eVpWd2lQbHh1SUNBZ0lDQWdQR0VnWTJ4aGMzTk9ZVzFsUFZ3aVptRnVZM2xmWW5WMGRHOXVYQ0krUW1WcmFXcHJJR0ZzYkdVZ2FHOXliRzluWlhNOEwyRStYRzRnSUNBZ1BDOWthWFkrWEc0Z0lEd3ZaR2wyUGx4dUtUdGNibjA3WEc1Y2JrVnNaVzFsYm5RdWNISnZjRlI1Y0dWeklEMGdlMXh1SUNCc1lXNW5PaUJRY205d1ZIbHdaWE11Ym5WdFltVnlMbWx6VW1WeGRXbHlaV1FzWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkZiR1Z0Wlc1ME95SmRmUT09ICovXG4vKkAgc291cmNlVVJMPXNyYy9jb21wb25lbnRzL1BvcHVsYWlyUHJvZHVjdHMuanMgKi8iXX0= */'
  }), _react2.default.createElement('h1', {
    'data-jsx': 4289420217
  }, 'Onze populairste horloges'), _react2.default.createElement('div', { className: 'products', 'data-jsx': 4289420217
  }, _populair_products2.default.map(function (product, index) {
    return _react2.default.createElement(_Product2.default, (0, _extends3.default)({ key: index }, product, { lang: lang }));
  })), _react2.default.createElement('div', { className: 'more', 'data-jsx': 4289420217
  }, _react2.default.createElement('a', { className: 'fancy_button', 'data-jsx': 4289420217
  }, 'Bekijk alle horloges')));
};

Element.propTypes = {
  lang: _propTypes2.default.number.isRequired
};

exports.default = Element;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/PopulairProducts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/PopulairProducts.js"); } } })();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactImgix = __webpack_require__(774);

var _reactImgix2 = _interopRequireDefault(_reactImgix);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(565);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Element = function Element(_ref) {
  var id = _ref.id,
      price = _ref.price,
      image = _ref.image,
      lang = _ref.lang;

  var src = image;
  console.log(lang);

  return _react2.default.createElement('div', { className: 'product', 'data-jsx': 1764745721
  }, _react2.default.createElement(_style2.default, {
    styleId: 1764745721,
    css: 'a[data-jsx="1764745721"] {text-align: center;text-decoration: none;color: #333;}h4[data-jsx="1764745721"] {font-weight:normal;}.product[data-jsx="1764745721"] {width: calc(99.9% * 1/4 - 22.5px);height: calc(99.9% * 1/4 - 22.5px);text-align: center;}.product[data-jsx="1764745721"]:nth-child(1n) {float: left;margin-right: 30px;margin-bottom: 30px;clear: none;}.product[data-jsx="1764745721"]:last-child {margin-right: 0;margin-bottom: 0;}.product[data-jsx="1764745721"]:nth-child(4n) {margin-right: 0;}.product[data-jsx="1764745721"]:nth-child(4n + 1) {clear: both;}.product[data-jsx="1764745721"]:nth-last-child(-n + 4) {margin-bottom: 0;}@media screen and (max-width: 1024px) {.product[data-jsx="1764745721"] {width: calc(99.9% * 1/2 - 15px);height: calc(99.9% * 1/2 - 15px)}.product[data-jsx="1764745721"]:nth-child(1n) {float: left;margin-right: 30px;margin-bottom: 30px;clear: none;}.product[data-jsx="1764745721"]:last-child {margin-right: 0;margin-bottom: 0;}.product[data-jsx="1764745721"]:nth-child(2n) {margin-right: 0;}.product[data-jsx="1764745721"]:nth-child(2n + 1) {clear: both;}.product[data-jsx="1764745721"]:nth-last-child(-n + 2) {margin-bottom: 0;}.product[data-jsx="1764745721"][data-jsx="1764745721"] img[data-jsx="1764745721"] {width: 100%;}}/*@ sourceURL=src/components/Product.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsInNyYy9jb21wb25lbnRzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLDBCQUVXLG1CQUNHLHNCQUNWLFlBQ2IsQ0FFRywyQkFDaUIsbUJBQ3BCLENBRVMsaUNBQ1Msa0NBQUEsbUNBQ0UsbUJBQ3BCLENBSFMsK0NBQ1MsWUFBQSxtQkFBQSxvQkFBQSxZQUNFLENBRlgsNENBQ1MsZ0JBQUEsaUJBQ0UsQ0FGWCwrQ0FDUyxnQkFDRSxDQUZYLG1EQUNTLFlBQ0UsQ0FGWCx3REFDUyxpQkFDRSxDQUdrQix1Q0FDM0IsaUNBQ1MsZ0NBQUEsZ0NBRVYsQ0FIQywrQ0FDUyxZQUFBLG1CQUFBLG9CQUFBLFlBRVYsQ0FIQyw0Q0FDUyxnQkFBQSxpQkFFVixDQUhDLCtDQUNTLGdCQUVWLENBSEMsbURBQ1MsWUFFVixDQUhDLHdEQUNTLGlCQUVWLENBQUEsbUZBQ00sWUFDWixDQUNGLENBQ0YsMENDaENpQyIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1naXggZnJvbSAncmVhY3QtaW1naXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbmZpZy9yb3V0ZXMnO1xuY29uc3QgRWxlbWVudCA9ICh7IGlkLCBwcmljZSwgaW1hZ2UsIGxhbmcgfSkgPT4ge1xuICBjb25zdCBzcmMgPSBpbWFnZTtcbiAgY29uc29sZS5sb2cobGFuZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgbG9zdC13YWZmbGU6IDEvNDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgIGxvc3Qtd2FmZmxlOiAxLzI7XG5cbiAgICAgICAgICAgICYgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8TGluayByb3V0ZT1cInNob3dfd2F0Y2hcIiBwYXJhbXM9e3sgbGFuZywgaWQgfX0+XG4gICAgICAgIDxhIHdpZHRoPVwiMzAwcHhcIj5cbiAgICAgICAgICB7IC8qIDxoMz57bmFtZX08L2gzPiAqLyB9XG4gICAgICAgICAgPEltZ2l4IHNyYz17c3JjfSB0eXBlPVwicGljdHVyZVwiPlxuICAgICAgICAgICAgPEltZ2l4IHNyYz17c3JjfSB3aWR0aD17MzAwfSBhdXRvPXtbJ2NvbXByZXNzJywgJ2Zvcm1hdCddfSB0eXBlPVwic291cmNlXCIgaW1nUHJvcHM9e3sgbWVkaWE6ICcobWluLXdpZHRoOiA3NjhweCknIH19IGZpdD1cImNsaXBcIiBmYWNlcz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8SW1naXggc3JjPXtzcmN9IHdpZHRoPXsyMDB9IGF1dG89e1snY29tcHJlc3MnLCAnZm9ybWF0J119IHR5cGU9XCJzb3VyY2VcIiBpbWdQcm9wcz17eyBtZWRpYTogJyhtaW4td2lkdGg6IDMyMHB4KScgfX0gZml0PVwiY2xpcFwiIGZhY2VzPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDxJbWdpeCBzcmM9e3NyY30gd2lkdGg9ezI2MH0gYXV0bz17Wydjb21wcmVzcycsICdmb3JtYXQnXX0gZml0PVwiY2xpcFwiIGZhY2VzPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L0ltZ2l4PlxuXG4gICAgICAgICAgPGg0PiZldXJvO3twcmljZX08L2g0PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcHJpY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwiYVtkYXRhLWpzeD1cIjE3NjQ3NDU3MjFcIl0ge3RleHQtYWxpZ246IGNlbnRlcjt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICMzMzM7fWg0W2RhdGEtanN4PVwiMTc2NDc0NTcyMVwiXSB7Zm9udC13ZWlnaHQ6bm9ybWFsO30ucHJvZHVjdFtkYXRhLWpzeD1cIjE3NjQ3NDU3MjFcIl0ge2xvc3Qtd2FmZmxlOiAxLzQ7dGV4dC1hbGlnbjogY2VudGVyO31AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsucHJvZHVjdFtkYXRhLWpzeD1cIjE3NjQ3NDU3MjFcIl0ge2xvc3Qtd2FmZmxlOiAxLzI7JltkYXRhLWpzeD1cIjE3NjQ3NDU3MjFcIl0gaW1nW2RhdGEtanN4PVwiMTc2NDc0NTcyMVwiXSB7d2lkdGg6MTAwJTt9fX1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwxQnliMlIxWTNRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJWV3RDTEVGQlExQXNNRUpCUTJ0Q0xHMUNRVU5ITEhOQ1FVTldMRmxCUTJJc1EwRkZSeXd5UWtGRGFVSXNiVUpCUTNCQ0xFTkJSVk1zYVVOQlExTXNhVUpCUTBVc2JVSkJRM0JDTEVOQlJYTkRMSFZEUVVNelFpeHBRMEZEVXl4cFFrRkZWaXh4UkVGRFRTeFhRVU5hTEVOQlEwWXNRMEZEUmlJc0ltWnBiR1VpT2lKemNtTXZZMjl0Y0c5dVpXNTBjeTlRY205a2RXTjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlvYjIxbEwzQnlZV1JwY0MxelpYSjJaWEl2Y21WaFkzUXRZMjlrWlMxdVpYY3ZjSEp2WkhWamRDMWtaWFJoYVd3aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1NXMW5hWGdnWm5KdmJTQW5jbVZoWTNRdGFXMW5hWGduTzF4dWFXMXdiM0owSUZCeWIzQlVlWEJsY3lCbWNtOXRJQ2R3Y205d0xYUjVjR1Z6Snp0Y2JseHVhVzF3YjNKMElIc2dUR2x1YXlCOUlHWnliMjBnSnk0dUwyTnZibVpwWnk5eWIzVjBaWE1uTzF4dVkyOXVjM1FnUld4bGJXVnVkQ0E5SUNoN0lHbGtMQ0J3Y21salpTd2dhVzFoWjJVc0lHeGhibWNnZlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6Y21NZ1BTQnBiV0ZuWlR0Y2JpQWdZMjl1YzI5c1pTNXNiMmNvYkdGdVp5azdYRzVjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbkJ5YjJSMVkzUmNJajVjYmlBZ0lDQWdJRHh6ZEhsc1pTQnFjM2crZTJCY2JpQWdJQ0FnSUNBZ1lTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lIUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSXpNek16dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdnMElIdGNiaUFnSUNBZ0lDQWdJQ0JtYjI1MExYZGxhV2RvZERwdWIzSnRZV3c3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXVjSEp2WkhWamRDQjdYRzRnSUNBZ0lDQWdJQ0FnYkc5emRDMTNZV1ptYkdVNklERXZORHRjYmlBZ0lDQWdJQ0FnSUNCMFpYaDBMV0ZzYVdkdU9pQmpaVzUwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ0WldScFlTQnpZM0psWlc0Z1lXNWtJQ2h0WVhndGQybGtkR2c2SURFd01qUndlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDNXdjbTlrZFdOMElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4dmMzUXRkMkZtWm14bE9pQXhMekk3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ1lnYVcxbklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2QybGtkR2c2TVRBd0pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWUgwOEwzTjBlV3hsUGx4dVhHNGdJQ0FnSUNBOFRHbHVheUJ5YjNWMFpUMWNJbk5vYjNkZmQyRjBZMmhjSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeXdnYVdRZ2ZYMCtYRzRnSUNBZ0lDQWdJRHhoSUhkcFpIUm9QVndpTXpBd2NIaGNJajVjYmlBZ0lDQWdJQ0FnSUNCN0lDOHFJRHhvTXo1N2JtRnRaWDA4TDJnelBpQXFMeUI5WEc0Z0lDQWdJQ0FnSUNBZ1BFbHRaMmw0SUhOeVl6MTdjM0pqZlNCMGVYQmxQVndpY0dsamRIVnlaVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQRWx0WjJsNElITnlZejE3YzNKamZTQjNhV1IwYUQxN016QXdmU0JoZFhSdlBYdGJKMk52YlhCeVpYTnpKeXdnSjJadmNtMWhkQ2RkZlNCMGVYQmxQVndpYzI5MWNtTmxYQ0lnYVcxblVISnZjSE05ZTNzZ2JXVmthV0U2SUNjb2JXbHVMWGRwWkhSb09pQTNOamh3ZUNrbklIMTlJR1pwZEQxY0ltTnNhWEJjSWlCbVlXTmxjejE3Wm1Gc2MyVjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThTVzFuYVhnZ2MzSmpQWHR6Y21OOUlIZHBaSFJvUFhzeU1EQjlJR0YxZEc4OWUxc25ZMjl0Y0hKbGMzTW5MQ0FuWm05eWJXRjBKMTE5SUhSNWNHVTlYQ0p6YjNWeVkyVmNJaUJwYldkUWNtOXdjejE3ZXlCdFpXUnBZVG9nSnlodGFXNHRkMmxrZEdnNklETXlNSEI0S1NjZ2ZYMGdabWwwUFZ3aVkyeHBjRndpSUdaaFkyVnpQWHRtWVd4elpYMGdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeEpiV2RwZUNCemNtTTllM055WTMwZ2QybGtkR2c5ZXpJMk1IMGdZWFYwYnoxN1d5ZGpiMjF3Y21WemN5Y3NJQ2RtYjNKdFlYUW5YWDBnWm1sMFBWd2lZMnhwY0Z3aUlHWmhZMlZ6UFh0bVlXeHpaWDBnTHo1Y2JpQWdJQ0FnSUNBZ0lDQThMMGx0WjJsNFBseHVYRzRnSUNBZ0lDQWdJQ0FnUEdnMFBpWmxkWEp2TzN0d2NtbGpaWDA4TDJnMFBseHVJQ0FnSUNBZ0lDQThMMkUrWEc0Z0lDQWdJQ0E4TDB4cGJtcytYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNUZiR1Z0Wlc1MExuQnliM0JVZVhCbGN5QTlJSHRjYmlBZ2FXUTZJRkJ5YjNCVWVYQmxjeTV1ZFcxaVpYSXVhWE5TWlhGMWFYSmxaQ3hjYmlBZ2NISnBZMlU2SUZCeWIzQlVlWEJsY3k1emRISnBibWN1YVhOU1pYRjFhWEpsWkN4Y2JpQWdhVzFoWjJVNklGQnliM0JVZVhCbGN5NXpkSEpwYm1jdWFYTlNaWEYxYVhKbFpDeGNiaUFnZFhKc09pQlFjbTl3Vkhsd1pYTXVjM1J5YVc1bkxtbHpVbVZ4ZFdseVpXUXNYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRmJHVnRaVzUwTzF4dUlsMTkgKi9cbi8qQCBzb3VyY2VVUkw9c3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyAqLyJdfQ== */'
  }), _react2.default.createElement(_routes.Link, { route: 'show_watch', params: { lang: lang, id: id } }, _react2.default.createElement('a', { width: '300px', 'data-jsx': 1764745721
  }, _react2.default.createElement(_reactImgix2.default, { src: src, type: 'picture' }, _react2.default.createElement(_reactImgix2.default, { src: src, width: 300, auto: ['compress', 'format'], type: 'source', imgProps: { media: '(min-width: 768px)' }, fit: 'clip', faces: false }), _react2.default.createElement(_reactImgix2.default, { src: src, width: 200, auto: ['compress', 'format'], type: 'source', imgProps: { media: '(min-width: 320px)' }, fit: 'clip', faces: false }), _react2.default.createElement(_reactImgix2.default, { src: src, width: 260, auto: ['compress', 'format'], fit: 'clip', faces: false })), _react2.default.createElement('h4', {
    'data-jsx': 1764745721
  }, '\u20AC', price))));
};

Element.propTypes = {
  id: _propTypes2.default.number.isRequired,
  price: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string.isRequired
};

exports.default = Element;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/Product.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/Product.js"); } } })();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/home/15MinWith.js';

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(565);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
   * Home 15 Min with Class
 */
var Home15minWith = function (_React$Component) {
  (0, _inherits3.default)(Home15minWith, _React$Component);

  /**
  * variable declaration
  */
  function Home15minWith(props) {
    (0, _classCallCheck3.default)(this, Home15minWith);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home15minWith.__proto__ || (0, _getPrototypeOf2.default)(Home15minWith)).call(this, props));

    var myData = __webpack_require__(799)("./" + props.lang + '/home-15min-with.json');
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

  (0, _createClass3.default)(Home15minWith, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2671832989,
        css: '.main-wrapper[data-jsx="2671832989"] {margin-left: 5%;}.left-info[data-jsx="2671832989"] {width:376px;padding:25px 0 50px 0;margin:0 0 0 5%}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] h2[data-jsx="2671832989"] {text-transform: uppercase;letter-spacing: 4px;color: #161616;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] h3[data-jsx="2671832989"] {color: #161616;font-size: 2.225em;padding: 14px 0 0 0;margin: 0;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] p[data-jsx="2671832989"] {font-size: 15px;box-sizing: border-box;padding: 18px 0 0 0;margin: 0;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] a[data-jsx="2671832989"] {clear: both;font-weight: bold;text-transform: uppercase;letter-spacing: 3px;color: #181818;font-size: 12px;margin: 20px 0 0 0;border-bottom: 2px solid #9e9e9e;padding: 0 0 6px 0;cursor: pointer;float: left;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] a[data-jsx="2671832989"][data-jsx="2671832989"] a[data-jsx="2671832989"]:hover {border-bottom: none;}.common-row[data-jsx="2671832989"]{text-align:left}.common-row[data-jsx="2671832989"][data-jsx="2671832989"] span[data-jsx="2671832989"] {float: left;width: 100%;background: url(/static/temp_images/home-15min.png) no-repeat;background-size: cover;height: 805px;}.left-row[data-jsx="2671832989"]{width: 50%;padding: 250px 0 0;float:left;}.right-row[data-jsx="2671832989"] {width: 50%;float:right;}@media only screen and (max-width:1024px){.left-row[data-jsx="2671832989"] {width: 100%;padding: 25px 0 0;margin:0;}.right-row[data-jsx="2671832989"] {width: 96%;margin-top: 5%;float: left;}.common-row[data-jsx="2671832989"]{}.common-row[data-jsx="2671832989"][data-jsx="2671832989"] span[data-jsx="2671832989"] {min-height: 380px;height: auto;}.left-info[data-jsx="2671832989"] {width: auto}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] h3[data-jsx="2671832989"] {margin: 0;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] p[data-jsx="2671832989"] {margin: 0;width: 93%;}.left-info[data-jsx="2671832989"][data-jsx="2671832989"] a[data-jsx="2671832989"] {margin: 30px 0 30px 0;float: left;}}/*@ sourceURL=src/components/home/15MinWith.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvaG9tZS8xNU1pbldpdGguanMiLCJzcmMvY29tcG9uZW50cy9ob21lLzE1TWluV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLHNDQUdNLGdCQUNqQixDQUVXLG1DQUNFLFlBQ1Usc0JBQ04sZUFFVixDQUFBLG9GQUNzQiwwQkFDTixvQkFDTixlQUNmLENBRUssb0ZBQ1UsZUFDSSxtQkFDQyxvQkFDVixVQUNWLENBRUksbUZBQ2EsZ0JBQ08sdUJBQ0gsb0JBQ1gsVUFDVixDQUVJLG1GQUNRLFlBQ08sa0JBQ08sMEJBQ0wsb0JBQ0wsZUFDQSxnQkFDRyxtQkFDYyxpQ0FDZCxtQkFDSCxnQkFDSixZQUVBLENBQUEseUlBQ1Usb0JBQ3BCLENBQ0YsbUNBSWUsZUFFUixDQUFBLHVGQUNLLFlBQ0EsWUFDa0QsOERBQ3ZDLHVCQUNULGNBQ2QsQ0FDRixpQ0FHWSxXQUNRLG1CQUNSLFdBQ1osQ0FFVyxtQ0FDQyxXQUNDLFlBQ2IsQ0FFeUMsMENBRTdCLGtDQUNHLFlBQ00sa0JBQ1QsU0FDVixDQUVXLG1DQUNDLFdBQ0ksZUFDSCxZQUNiLENBRVcsb0NBQ0YsdUZBQ1csa0JBQ0wsYUFDYixDQUNGLG1DQUdhLFdBRU4sQ0FBQSxvRkFDSyxVQUNWLENBRUksbUZBQ00sVUFDRSxXQUNaLENBRUksbUZBQ2tCLHNCQUNWLFlBQ1osQ0FDRixDQUVGLGlEQ3hJd0MiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzJztcblxuLyoqXG4gICAqIEhvbWUgMTUgTWluIHdpdGggQ2xhc3NcbiAqL1xuY2xhc3MgSG9tZTE1bWluV2l0aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAqIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IG15RGF0YSA9IHJlcXVpcmUoJy4uLy4uL2xvY2FsZS8nK3Byb3BzLmxhbmcrJy9ob21lLTE1bWluLXdpdGguanNvbicpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLFxuICAgICAgbGFuZzogcHJvcHMubGFuZyxcbiAgICAgIHJlc19kYXRhOiBteURhdGEsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgKiBSZW5kZXJzIFwiVGV4dFwiIVxuICAqIEByZXR1cm4gSlNYXG4gICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAubWFpbi13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIH0gIFxuICAgICAgICAgIFxuICAgICAgICAubGVmdC1pbmZvIHtcbiAgICAgICAgICB3aWR0aDozNzZweDtcbiAgICAgICAgICBwYWRkaW5nOjI1cHggMCA1MHB4IDA7XG4gICAgICAgICAgbWFyZ2luOjAgMCAwIDUlO1xuXG4gICAgICAgICAgJiBoMiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiMxNjE2MTY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBoMyB7XG4gICAgICAgICAgICBjb2xvcjojMTYxNjE2O1xuICAgICAgICAgICAgZm9udC1zaXplOjIuMjI1ZW07XG4gICAgICAgICAgICBwYWRkaW5nOjE0cHggMCAwIDA7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDAgMCAwO1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzE4MTgxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgbWFyZ2luOjIwcHggMCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjOWU5ZTllO1xuICAgICAgICAgICAgcGFkZGluZzowIDAgNnB4IDA7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG5cbiAgICAgICAgICAgICYgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbW9uLXJvd3tcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG5cbiAgICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnVybCgvc3RhdGljL3RlbXBfaW1hZ2VzL2hvbWUtMTVtaW4ucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6ODA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQtcm93e1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZzogMjUwcHggMCAwO1xuICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtcm93IHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XG4gICAgICAgICAgXG4gICAgICAgICAgLmxlZnQtcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwIDA7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmlnaHQtcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIC5jb21tb24tcm93e1xuICAgICAgICAgICAgJiBzcGFuIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDozODBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZWZ0LWluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYgaDMge1xuICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBwIHtcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgYSB7XG4gICAgICAgICAgICAgIG1hcmdpbjozMHB4IDAgMzBweCAwO1xuICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1yb3cgcmlnaHQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXJvd1wiPjxzcGFuPiZuYnNwOzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1yb3cgbGVmdC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxoZ3JvdXA+XG4gICAgICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnJlc19kYXRhLk1haW5UaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5yZXNfZGF0YS5OYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDwvaGdyb3VwPlxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXNfZGF0YS5EZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiMTUtbWludXRlcy13aXRoLXN0ZXBoYW5pZVwiIHBhcmFtcz17eyBsYW5nOnRoaXMuc3RhdGUubGFuZyB9fT5cbiAgICAgICAgICAgICAgICA8YT57dGhpcy5zdGF0ZS5yZXNfZGF0YS5MaW5rVGV4dH08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUxNW1pbldpdGg7XG4iLCIubWFpbi13cmFwcGVyW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7bWFyZ2luLWxlZnQ6IDUlO30ubGVmdC1pbmZvW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7d2lkdGg6Mzc2cHg7cGFkZGluZzoyNXB4IDAgNTBweCAwO21hcmdpbjowIDAgMCA1JTsmW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSBoMltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0ge3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6IDRweDtjb2xvcjojMTYxNjE2O30mW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSBoM1tkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0ge2NvbG9yOiMxNjE2MTY7Zm9udC1zaXplOjIuMjI1ZW07cGFkZGluZzoxNHB4IDAgMCAwO21hcmdpbjowO30mW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSBwW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7Zm9udC1zaXplOiAxNXB4O2JveC1zaXppbmc6IGJvcmRlci1ib3g7cGFkZGluZzogMThweCAwIDAgMDttYXJnaW46MDt9JltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0gYVtkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0ge2NsZWFyOmJvdGg7Zm9udC13ZWlnaHQ6IGJvbGQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOiAzcHg7Y29sb3I6ICMxODE4MTg7Zm9udC1zaXplOjEycHg7bWFyZ2luOjIwcHggMCAwIDA7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzllOWU5ZTtwYWRkaW5nOjAgMCA2cHggMDtjdXJzb3I6cG9pbnRlcjtmbG9hdDpsZWZ0OyZbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdIGFbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdOmhvdmVyIHtib3JkZXItYm90dG9tOm5vbmU7fX19LmNvbW1vbi1yb3dbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJde3RleHQtYWxpZ246bGVmdDsmW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSBzcGFuW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dXJsKC9zdGF0aWMvdGVtcF9pbWFnZXMvaG9tZS0xNW1pbi5wbmcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7aGVpZ2h0OjgwNXB4O319LmxlZnQtcm93W2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXXt3aWR0aDogNTAlO3BhZGRpbmc6IDI1MHB4IDAgMDtmbG9hdDpsZWZ0O30ucmlnaHQtcm93W2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7d2lkdGg6IDUwJTtmbG9hdDpyaWdodDt9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7LmxlZnQtcm93W2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7d2lkdGg6IDEwMCU7cGFkZGluZzogMjVweCAwIDA7bWFyZ2luOjA7fS5yaWdodC1yb3dbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdIHt3aWR0aDogOTYlO21hcmdpbi10b3A6IDUlO2Zsb2F0OiBsZWZ0O30uY29tbW9uLXJvd1tkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl17JltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0gc3BhbltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0ge21pbi1oZWlnaHQ6MzgwcHg7aGVpZ2h0OmF1dG87fX0ubGVmdC1pbmZvW2RhdGEtanN4PVwiMjY3MTgzMjk4OVwiXSB7d2lkdGg6IGF1dG87JltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0gaDNbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdIHttYXJnaW46MDt9JltkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0gcFtkYXRhLWpzeD1cIjI2NzE4MzI5ODlcIl0ge21hcmdpbjowO3dpZHRoOiA5MyU7fSZbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdIGFbZGF0YS1qc3g9XCIyNjcxODMyOTg5XCJdIHttYXJnaW46MzBweCAwIDMwcHggMDtmbG9hdDpsZWZ0O319fVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqYjIxd2IyNWxiblJ6TDJodmJXVXZNVFZOYVc1WGFYUm9MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVRCQ2IwSXNRVUZGUnl4elEwRkRSeXhuUWtGRGFrSXNRMEZGVnl4dFEwRkRSU3haUVVOVkxITkNRVU5PTEdkQ1FVVldMRzlFUVVOelFpd3dRa0ZEVGl4dlFrRkRUaXhqUVVObUxFTkJSVXNzYjBSQlExVXNZMEZEU1N4clFrRkRReXh0UWtGRFZpeFRRVU5XTEVOQlJVa3NiVVJCUTJFc1owSkJRMDhzZFVKQlEwZ3NiMEpCUTFnc1UwRkRWaXhEUVVWSkxHMUVRVU5STEZkQlEwOHNhMEpCUTA4c2VVSkJRMHdzYjBKQlEwd3NaVUZEUVN4bFFVTkhMR3RDUVVOakxHZERRVU5rTEd0Q1FVTklMR1ZCUTBvc1YwRkZRU3g1UkVGRFZTeHRRa0ZEY0VJc1EwRkRSaXhEUVVOR0xFTkJSVmNzYlVOQlEwMHNaMEpCUlZJc2MwUkJRMHNzVjBGRFFTeFhRVU5yUkN3MlJFRkRka01zYzBKQlExUXNZVUZEWkN4RFFVTkdMRU5CUlZNc2FVTkJRMGNzVjBGRFVTeHRRa0ZEVWl4WFFVTmFMRU5CUlZjc2JVTkJRME1zVjBGRFF5eFpRVU5pTEVOQlJYbERMREJEUVVVM1FpeHJRMEZEUnl4WlFVTk5MR3RDUVVOVUxGTkJRMVlzUTBGRlZ5eHRRMEZEUXl4WFFVTkpMR1ZCUTBnc1dVRkRZaXhEUVVWWExHMURRVU5HTEhORVFVTlhMR2xDUVVOTUxGbEJRMklzUTBGRFJpeERRVVZYTEcxRFFVTkZMRmxCUlU0c2IwUkJRMHNzVTBGRFZpeERRVVZKTEcxRVFVTk5MRk5CUTBVc1YwRkRXaXhEUVVWSkxHMUVRVU5yUWl4eFFrRkRWaXhYUVVOYUxFTkJRMFlzUTBGRlJpSXNJbVpwYkdVaU9pSnpjbU12WTI5dGNHOXVaVzUwY3k5b2IyMWxMekUxVFdsdVYybDBhQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2YUc5dFpTOXdjbUZrYVhBdGMyVnlkbVZ5TDNKbFlXTjBMV052WkdVdGJtVjNMM0J5YjJSMVkzUXRaR1YwWVdsc0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJRXhwYm1zZ2ZTQm1jbTl0SUNjdUxpOHVMaTlqYjI1bWFXY3ZjbTkxZEdWekp6dGNibHh1THlvcVhHNGdJQ0FxSUVodmJXVWdNVFVnVFdsdUlIZHBkR2dnUTJ4aGMzTmNiaUFxTDF4dVkyeGhjM01nU0c5dFpURTFiV2x1VjJsMGFDQmxlSFJsYm1SeklGSmxZV04wTGtOdmJYQnZibVZ1ZENCN1hHNGdJQzhxS2x4dUlDQXFJSFpoY21saFlteGxJR1JsWTJ4aGNtRjBhVzl1WEc0Z0lDb3ZYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0FnSUdOdmJuTjBJRzE1UkdGMFlTQTlJSEpsY1hWcGNtVW9KeTR1THk0dUwyeHZZMkZzWlM4bkszQnliM0J6TG14aGJtY3JKeTlvYjIxbExURTFiV2x1TFhkcGRHZ3Vhbk52YmljcE8xeHVJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQjdYRzRnSUNBZ0lDQjFjbXc2SUhCeWIzQnpMRnh1SUNBZ0lDQWdiR0Z1WnpvZ2NISnZjSE11YkdGdVp5eGNiaUFnSUNBZ0lISmxjMTlrWVhSaE9pQnRlVVJoZEdFc1hHNGdJQ0FnZlR0Y2JpQWdmVnh1SUNBdktpcGNiaUFnS2lCU1pXNWtaWEp6SUZ3aVZHVjRkRndpSVZ4dUlDQXFJRUJ5WlhSMWNtNGdTbE5ZWEc0Z0lDb3ZYRzRnSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdQSE5sWTNScGIyNCtYRzRnSUNBZ0lDQWdJRHh6ZEhsc1pTQnFjM2crZTJCY2JseHVJQ0FnSUNBZ0lDQXViV0ZwYmkxM2NtRndjR1Z5SUh0Y2JpQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0dGJHVm1kRG9nTlNVN1hHNGdJQ0FnSUNBZ0lIMGdJRnh1SUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdWJHVm1kQzFwYm1adklIdGNiaUFnSUNBZ0lDQWdJQ0IzYVdSMGFEb3pOelp3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQndZV1JrYVc1bk9qSTFjSGdnTUNBMU1IQjRJREE3WEc0Z0lDQWdJQ0FnSUNBZ2JXRnlaMmx1T2pBZ01DQXdJRFVsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdKaUJvTWlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMExYUnlZVzV6Wm05eWJUb2dkWEJ3WlhKallYTmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBkR1Z5TFhOd1lXTnBibWM2SURSd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaU14TmpFMk1UWTdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdKaUJvTXlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2pNVFl4TmpFMk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2pJdU1qSTFaVzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZV1JrYVc1bk9qRTBjSGdnTUNBd0lEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYSm5hVzQ2TUR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBbUlIQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOWEI0T3lCY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2ZUMxemFYcHBibWM2SUdKdmNtUmxjaTFpYjNnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUF4T0hCNElEQWdNQ0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9qQTdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdKaUJoSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05zWldGeU9tSnZkR2c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nWW05c1pEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGVIUXRkSEpoYm5ObWIzSnRPblZ3Y0dWeVkyRnpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkSFJsY2kxemNHRmphVzVuT2lBemNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSXpFNE1UZ3hPRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb3hNbkI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9qSXdjSGdnTUNBd0lEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIzSmtaWEl0WW05MGRHOXRPakp3ZUNCemIyeHBaQ0FqT1dVNVpUbGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRmtaR2x1Wnpvd0lEQWdObkI0SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKemIzSTZjRzlwYm5SbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUdac2IyRjBPbXhsWm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNZZ1lUcG9iM1psY2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKdmNtUmxjaTFpYjNSMGIyMDZibTl1WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F1WTI5dGJXOXVMWEp2ZDN0Y2JpQWdJQ0FnSUNBZ0lDQjBaWGgwTFdGc2FXZHVPbXhsWm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FtSUhOd1lXNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pteHZZWFE2YkdWbWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PakV3TUNVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrT25WeWJDZ3ZjM1JoZEdsakwzUmxiWEJmYVcxaFoyVnpMMmh2YldVdE1UVnRhVzR1Y0c1bktTQnVieTF5WlhCbFlYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xYTnBlbVU2WTI5MlpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXbG5hSFE2T0RBMWNIZzdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMbXhsWm5RdGNtOTNlMXh1SUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUExTUNVN1hHNGdJQ0FnSUNBZ0lDQWdjR0ZrWkdsdVp6b2dNalV3Y0hnZ01DQXdPMXh1SUNBZ0lDQWdJQ0FnSUdac2IyRjBPbXhsWm5RN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F1Y21sbmFIUXRjbTkzSUh0Y2JpQWdJQ0FnSUNBZ0lDQjNhV1IwYURvZ05UQWxPMXh1SUNBZ0lDQWdJQ0FnSUdac2IyRjBPbkpwWjJoME8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnUUcxbFpHbGhJRzl1YkhrZ2MyTnlaV1Z1SUdGdVpDQW9iV0Y0TFhkcFpIUm9PakV3TWpSd2VDbDdYRzRnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0xteGxablF0Y205M0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUF4TURBbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGa1pHbHVaem9nTWpWd2VDQXdJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0Nk1EdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQXVjbWxuYUhRdGNtOTNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBaSFJvT2lBNU5pVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYSm5hVzR0ZEc5d09pQTFKVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnNiMkYwT2lCc1pXWjBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUM1amIyMXRiMjR0Y205M2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSmlCemNHRnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdiV2x1TFdobGFXZG9kRG96T0RCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FHVnBaMmgwT21GMWRHODdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQzVzWldaMExXbHVabThnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklHRjFkRzg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNZZ2FETWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0Nk1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSmlCd0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1T2pBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUE1TXlVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ1lnWVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGNtZHBiam96TUhCNElEQWdNekJ3ZUNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHOWhkRHBzWldaME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNBZ1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJR0I5UEM5emRIbHNaVDVjYmlBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0p0WVdsdUxYZHlZWEJ3WlhKY0lqNWNiaUFnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YlcxdmJpMXliM2NnY21sbmFIUXRjbTkzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbWx0WVdkbExYSnZkMXdpUGp4emNHRnVQaVp1WW5Od096d3ZjM0JoYmo0OEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJXMXZiaTF5YjNjZ2JHVm1kQzF5YjNkY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpYkdWbWRDMXBibVp2WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b1ozSnZkWEErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdneVBudDBhR2x6TG5OMFlYUmxMbkpsYzE5a1lYUmhMazFoYVc1VWFYUnNaWDA4TDJneVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG9NejU3ZEdocGN5NXpkR0YwWlM1eVpYTmZaR0YwWVM1T1lXMWxmVHd2YURNK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmFHZHliM1Z3UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0Q1N2RHaHBjeTV6ZEdGMFpTNXlaWE5mWkdGMFlTNUVaWE5qY21sd2RHbHZibjA4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4TWFXNXJJSEp2ZFhSbFBWd2lNVFV0YldsdWRYUmxjeTEzYVhSb0xYTjBaWEJvWVc1cFpWd2lJSEJoY21GdGN6MTdleUJzWVc1bk9uUm9hWE11YzNSaGRHVXViR0Z1WnlCOWZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZVDU3ZEdocGN5NXpkR0YwWlM1eVpYTmZaR0YwWVM1TWFXNXJWR1Y0ZEgwOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZUR2x1YXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUR3dmMyVmpkR2x2Ymo1Y2JpQWdJQ0FwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVodmJXVXhOVzFwYmxkcGRHZzdYRzRpWFgwPSAqL1xuLypAIHNvdXJjZVVSTD1zcmMvY29tcG9uZW50cy9ob21lLzE1TWluV2l0aC5qcyAqLyJdfQ== */'
      }), _react2.default.createElement('div', { className: 'main-wrapper', 'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('div', { className: 'common-row right-row', 'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement('div', { className: 'image-row', 'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, '\xA0'))), _react2.default.createElement('div', { className: 'common-row left-row', 'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('div', { className: 'left-info', 'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('hgroup', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('h2', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, this.state.res_data.MainTitle), _react2.default.createElement('h3', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, this.state.res_data.Name)), _react2.default.createElement('p', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, this.state.res_data.Description), _react2.default.createElement(_routes.Link, { route: '15-minutes-with-stephanie', params: { lang: this.state.lang }, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement('a', {
        'data-jsx': 2671832989,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, this.state.res_data.LinkText))))));
    }
  }]);
  return Home15minWith;
}(_react2.default.Component);

exports.default = Home15minWith;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/home/15MinWith.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/home/15MinWith.js"); } } })();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/home/BehindBrand.js';

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Vimeo = __webpack_require__(791);

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

    var myData = __webpack_require__(800)("./" + props.lang + '/home-behind-brand.json');
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/home/BehindBrand.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/home/BehindBrand.js"); } } })();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement("section", { className: "common-row theme-bg photoslurpbg", "data-jsx": 2110740461
  }, _react2.default.createElement(_style2.default, {
    styleId: 2110740461,
    css: "@font-face {font-family: 'publico italic';src: url(\"/static/fonts/publico/Publico-Italic-Webfont.eot\");src: url(\"/static/fonts/publico/Publico-Italic-Webfont.eot?#iefix\") format('embedded-opentype'),\n       url(\"/static/fonts/publico/Publico-Italic-Webfont.woff\") format('woff'),\n       url(\"/static/fonts/publico/Publico-Italic-Webfont.ttf\") format('truetype'),\n       url(\"/static/fonts/publico/Publico-Italic-Webfont.svg\") format('svg');}.photoslurpbg[data-jsx=\"2110740461\"] {padding-bottom:60px}.photoslurpbg[data-jsx=\"2110740461\"][data-jsx=\"2110740461\"] h3[data-jsx=\"2110740461\"] {font-family: 'Georgia,Times, Times New Roman,sans-serif';padding: 28px 0 28px 0;font-style: italic;font-size: 21px;margin-left: 7%;color: #3c3c3c;font-weight: normal;width: auto;}.photoslurp-img-wrap[data-jsx=\"2110740461\"] {float:left;width:100%;}.img-box[data-jsx=\"2110740461\"] {float:left;width:25%}.img-box[data-jsx=\"2110740461\"][data-jsx=\"2110740461\"] img[data-jsx=\"2110740461\"] {max-width: 100%;}@media only screen and (max-width:1024px) {.img-box[data-jsx=\"2110740461\"] {width:50%;}.img-box.desktop[data-jsx=\"2110740461\"] {display:none;}}/*@ sourceURL=src/components/home/PhotoSlurpSection.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvaG9tZS9QaG90b1NsdXJwU2VjdGlvbi5qcyIsInNyYy9jb21wb25lbnRzL2hvbWUvUGhvdG9TbHVycFNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWdCLFlBR29CLDhCQUM0Qiw2REFBQTs7OzZFQUMzRCxDQUNjLHNDQUNPLG1CQUNkLENBQUEsdUZBQ3FELHlEQUNuQyx1QkFDSCxtQkFDSixnQkFDQSxnQkFDQSxlQUNJLG9CQUNQLFlBQ2IsQ0FDRiw2Q0FHWSxXQUNBLFdBQ1osQ0FFUyxpQ0FDRyxXQUNELFNBQ0gsQ0FBQSxtRkFDWSxnQkFDbEIsQ0FDRiwyQ0FHVyxpQ0FDRSxVQUNYLENBQ2lCLHlDQUNILGFBQ2QsQ0FDRixDQUFBLHlEQ3hDb0QiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tb24tcm93IHRoZW1lLWJnIHBob3Rvc2x1cnBiZ1wiPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAncHVibGljbyBpdGFsaWMnO1xuICAgICAgZm9udC1wYXRoOiAnL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tSXRhbGljLVdlYmZvbnQnO1xuICAgIH1cbiAgICAucGhvdG9zbHVycGJnIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOjYwcHg7XG4gICAgICAmIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9yZ2lhLFRpbWVzLCBUaW1lcyBOZXcgUm9tYW4sc2Fucy1zZXJpZic7XG4gICAgICAgIHBhZGRpbmc6MjhweCAwIDI4cHggMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6MjFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NyU7XG4gICAgICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIHdpZHRoOiBhdXRvOyAgXG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucGhvdG9zbHVycC1pbWctd3JhcCB7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICAuaW1nLWJveCB7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgd2lkdGg6MjUlO1xuICAgICAgJiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAgIC5pbWctYm94IHtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgfVxuICAgICAgLmltZy1ib3guZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgPGgzPkhvZSBkcmFhZyBqaWogamUgUm9zZWZpZWxkPzwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NsdXJwLWltZy13cmFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdGVtcF9pbWFnZXMvcGhvdG8tc2x1cnAtMS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdGVtcF9pbWFnZXMvcGhvdG8tc2x1cnAtMi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3ggZGVza3RvcFwiPlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy90ZW1wX2ltYWdlcy9waG90by1zbHVycC0zLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJveCBkZXNrdG9wXCI+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3RlbXBfaW1hZ2VzL3Bob3RvLXNsdXJwLTIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuIiwiQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6ICdwdWJsaWNvIGl0YWxpYyc7Zm9udC1wYXRoOiAnL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tSXRhbGljLVdlYmZvbnQnO30ucGhvdG9zbHVycGJnW2RhdGEtanN4PVwiMjExMDc0MDQ2MVwiXSB7cGFkZGluZy1ib3R0b206NjBweDsmW2RhdGEtanN4PVwiMjExMDc0MDQ2MVwiXSBoM1tkYXRhLWpzeD1cIjIxMTA3NDA0NjFcIl0ge2ZvbnQtZmFtaWx5OiAnR2VvcmdpYSxUaW1lcywgVGltZXMgTmV3IFJvbWFuLHNhbnMtc2VyaWYnO3BhZGRpbmc6MjhweCAwIDI4cHggMDtmb250LXN0eWxlOiBpdGFsaWM7Zm9udC1zaXplOjIxcHg7bWFyZ2luLWxlZnQ6NyU7Y29sb3I6ICMzYzNjM2M7Zm9udC13ZWlnaHQ6bm9ybWFsO3dpZHRoOiBhdXRvO319LnBob3Rvc2x1cnAtaW1nLXdyYXBbZGF0YS1qc3g9XCIyMTEwNzQwNDYxXCJdIHtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7fS5pbWctYm94W2RhdGEtanN4PVwiMjExMDc0MDQ2MVwiXSB7ZmxvYXQ6bGVmdDt3aWR0aDoyNSU7JltkYXRhLWpzeD1cIjIxMTA3NDA0NjFcIl0gaW1nW2RhdGEtanN4PVwiMjExMDc0MDQ2MVwiXSB7bWF4LXdpZHRoOjEwMCU7fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7LmltZy1ib3hbZGF0YS1qc3g9XCIyMTEwNzQwNDYxXCJdIHt3aWR0aDo1MCU7fS5pbWctYm94LmRlc2t0b3BbZGF0YS1qc3g9XCIyMTEwNzQwNDYxXCJdIHtkaXNwbGF5Om5vbmU7fX1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyaHZiV1V2VUdodmRHOVRiSFZ5Y0ZObFkzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlJXZENMRUZCUlVFc1dVRkRiMElzT0VKQlF6UkNMREJFUVVNelJDeERRVU5qTEhORFFVTlBMRzlDUVVOa0xHOUVRVU54UkN4NVJFRkRia01zYzBKQlEwZ3NiVUpCUTBvc1pVRkRRU3hsUVVOQkxHVkJRMGtzYlVKQlExQXNXVUZEWWl4RFFVTkdMRU5CUlhGQ0xEWkRRVU5VTEZkQlEwRXNWMEZEV2l4RFFVVlRMR2xEUVVOSExGZEJRMFFzVlVGRFNDeHhSRUZEV1N4bFFVTnNRaXhEUVVOR0xFTkJSVEJETERKRFFVTXZRaXhwUTBGRFJTeFZRVU5ZTEVOQlEybENMSGxEUVVOSUxHRkJRMlFzUTBGRFJpSXNJbVpwYkdVaU9pSnpjbU12WTI5dGNHOXVaVzUwY3k5b2IyMWxMMUJvYjNSdlUyeDFjbkJUWldOMGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlvYjIxbEwzQnlZV1JwY0MxelpYSjJaWEl2Y21WaFkzUXRZMjlrWlMxdVpYY3ZjSEp2WkhWamRDMWtaWFJoYVd3aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENBb0tTQTlQaUFvWEc0Z0lEeHpaV04wYVc5dUlHTnNZWE56VG1GdFpUMWNJbU52YlcxdmJpMXliM2NnZEdobGJXVXRZbWNnY0dodmRHOXpiSFZ5Y0dKblhDSStYRzRnSUNBZ1BITjBlV3hsSUdwemVENTdZRnh1SUNBZ0lGeHVJQ0FnSUVCbWIyNTBMV1poWTJVZ2UxeHVJQ0FnSUNBZ1ptOXVkQzFtWVcxcGJIazZJQ2R3ZFdKc2FXTnZJR2wwWVd4cFl5YzdYRzRnSUNBZ0lDQm1iMjUwTFhCaGRHZzZJQ2N2YzNSaGRHbGpMMlp2Ym5SekwzQjFZbXhwWTI4dlVIVmliR2xqYnkxSmRHRnNhV010VjJWaVptOXVkQ2M3WEc0Z0lDQWdmVnh1SUNBZ0lDNXdhRzkwYjNOc2RYSndZbWNnZTF4dUlDQWdJQ0FnY0dGa1pHbHVaeTFpYjNSMGIyMDZOakJ3ZUR0Y2JpQWdJQ0FnSUNZZ2FETWdlMXh1SUNBZ0lDQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ0owZGxiM0puYVdFc1ZHbHRaWE1zSUZScGJXVnpJRTVsZHlCU2IyMWhiaXh6WVc1ekxYTmxjbWxtSnp0Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpveU9IQjRJREFnTWpod2VDQXdPMXh1SUNBZ0lDQWdJQ0JtYjI1MExYTjBlV3hsT2lCcGRHRnNhV003WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRveU1YQjRPMXh1SUNBZ0lDQWdJQ0J0WVhKbmFXNHRiR1ZtZERvM0pUdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklDTXpZek5qTTJNN1hHNGdJQ0FnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPbTV2Y20xaGJEdGNiaUFnSUNBZ0lDQWdkMmxrZEdnNklHRjFkRzg3SUNCY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lGeHVJQ0FnSUM1d2FHOTBiM05zZFhKd0xXbHRaeTEzY21Gd0lIdGNiaUFnSUNBZ0lHWnNiMkYwT214bFpuUTdYRzRnSUNBZ0lDQjNhV1IwYURveE1EQWxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDNXBiV2N0WW05NElIdGNiaUFnSUNBZ0lHWnNiMkYwT214bFpuUTdYRzRnSUNBZ0lDQjNhV1IwYURveU5TVTdYRzRnSUNBZ0lDQW1JR2x0WnlCN1hHNGdJQ0FnSUNBZ0lDQWdiV0Y0TFhkcFpIUm9PakV3TUNVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnUUcxbFpHbGhJRzl1YkhrZ2MyTnlaV1Z1SUdGdVpDQW9iV0Y0TFhkcFpIUm9PakV3TWpSd2VDa2dlMXh1SUNBZ0lDQWdMbWx0WnkxaWIzZ2dlMXh1SUNBZ0lDQWdJQ0IzYVdSMGFEbzFNQ1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0F1YVcxbkxXSnZlQzVrWlhOcmRHOXdJSHRjYmlBZ0lDQWdJQ0FnWkdsemNHeGhlVHB1YjI1bE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzRnSUdCOVBDOXpkSGxzWlQ1Y2JpQWdJQ0E4YURNK1NHOWxJR1J5WVdGbklHcHBhaUJxWlNCU2IzTmxabWxsYkdRL1BDOW9NejVjYmlBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0luQm9iM1J2YzJ4MWNuQXRhVzFuTFhkeVlYQmNJajVjYmlBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lhVzFuTFdKdmVGd2lQbHh1SUNBZ0lDQWdJQ0E4YVcxbklITnlZejFjSW5OMFlYUnBZeTkwWlcxd1gybHRZV2RsY3k5d2FHOTBieTF6YkhWeWNDMHhMbkJ1WjF3aUlHRnNkRDFjSWx3aUlDOCtYRzRnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpYVcxbkxXSnZlRndpUGx4dUlDQWdJQ0FnSUNBOGFXMW5JSE55WXoxY0luTjBZWFJwWXk5MFpXMXdYMmx0WVdkbGN5OXdhRzkwYnkxemJIVnljQzB5TG5CdVoxd2lJR0ZzZEQxY0lsd2lJQzgrWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWFXMW5MV0p2ZUNCa1pYTnJkRzl3WENJK1hHNGdJQ0FnSUNBZ0lEeHBiV2NnYzNKalBWd2ljM1JoZEdsakwzUmxiWEJmYVcxaFoyVnpMM0JvYjNSdkxYTnNkWEp3TFRNdWNHNW5YQ0lnWVd4MFBWd2lYQ0lnTHo1Y2JpQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnBiV2N0WW05NElHUmxjMnQwYjNCY0lqNWNiaUFnSUNBZ0lDQWdQR2x0WnlCemNtTTlYQ0p6ZEdGMGFXTXZkR1Z0Y0Y5cGJXRm5aWE12Y0dodmRHOHRjMngxY25BdE1pNXdibWRjSWlCaGJIUTlYQ0pjSWlBdlBseHVJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQQzlrYVhZK1hHNGdJRHd2YzJWamRHbHZiajVjYmlrN1hHNGlYWDA9ICovXG4vKkAgc291cmNlVVJMPXNyYy9jb21wb25lbnRzL2hvbWUvUGhvdG9TbHVycFNlY3Rpb24uanMgKi8iXX0= */"
  }), _react2.default.createElement("h3", {
    "data-jsx": 2110740461
  }, "Hoe draag jij je Rosefield?"), _react2.default.createElement("div", { className: "photoslurp-img-wrap", "data-jsx": 2110740461
  }, _react2.default.createElement("div", { className: "img-box", "data-jsx": 2110740461
  }, _react2.default.createElement("img", { src: "static/temp_images/photo-slurp-1.png", alt: "", "data-jsx": 2110740461
  })), _react2.default.createElement("div", { className: "img-box", "data-jsx": 2110740461
  }, _react2.default.createElement("img", { src: "static/temp_images/photo-slurp-2.png", alt: "", "data-jsx": 2110740461
  })), _react2.default.createElement("div", { className: "img-box desktop", "data-jsx": 2110740461
  }, _react2.default.createElement("img", { src: "static/temp_images/photo-slurp-3.png", alt: "", "data-jsx": 2110740461
  })), _react2.default.createElement("div", { className: "img-box desktop", "data-jsx": 2110740461
  }, _react2.default.createElement("img", { src: "static/temp_images/photo-slurp-2.png", alt: "", "data-jsx": 2110740461
  }))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/home/PhotoSlurpSection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/home/PhotoSlurpSection.js"); } } })();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/BurgerMenu.js';

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _push = __webpack_require__(743);

var _push2 = _interopRequireDefault(_push);

var _reduxBurgerMenu = __webpack_require__(604);

var _cartArrowDown = __webpack_require__(769);

var _cartArrowDown2 = _interopRequireDefault(_cartArrowDown);

var _routes = __webpack_require__(565);

var _reactCollapsible = __webpack_require__(744);

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Component = function Component(_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement(_push2.default, { pageWrapId: 'page-wrap', outerContainerId: '__next', customBurgerIcon: _react2.default.createElement('div', {
      'data-jsx': 2399979545,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 187699793,
    css: '.sldebar-login-main[data-jsx="2399979545"] {width: 99.3%;height:41px;border: 1px solid #3f3f3f;}.login[data-jsx="2399979545"],.cart[data-jsx="2399979545"] {width: calc(99.9% * 1/2 - 15px);box-sizing: border-box;padding: 18px 0;text-align: center;font-size: 9px;color: #fff;text-transform: uppercase;border-right: 1px solid #3f3f3f;letter-spacing:3px}.login[data-jsx="2399979545"]:nth-child(1n),.cart[data-jsx="2399979545"]:nth-child(1n) {float: left;margin-right: 30px;clear: none;}.login[data-jsx="2399979545"]:last-child,.cart[data-jsx="2399979545"]:last-child {margin-right: 0;}.login[data-jsx="2399979545"]:nth-child(2n),.cart[data-jsx="2399979545"]:nth-child(2n) {margin-right: 0;float: right;}.login[data-jsx="2399979545"]:nth-child(2n + 1),.cart[data-jsx="2399979545"]:nth-child(2n + 1) {clear: both;}.login[data-jsx="2399979545"][data-jsx="2399979545"] a[data-jsx="2399979545"], .cart[data-jsx="2399979545"][data-jsx="2399979545"] a[data-jsx="2399979545"] {color: white;text-decoration: none;}.login[data-jsx="2399979545"][data-jsx="2399979545"] a[data-jsx="2399979545"][data-jsx="2399979545"] span[data-jsx="2399979545"], .cart[data-jsx="2399979545"][data-jsx="2399979545"] a[data-jsx="2399979545"][data-jsx="2399979545"] span[data-jsx="2399979545"] {margin-left: 10px;}ul[data-jsx="2399979545"] {list-style: none;}.flypanels-treemenu[data-jsx="2399979545"] a {padding: 18px 8px 6px 32px;text-decoration: none;font-size: 20px;color: #fff;display: block;transition: 0.3s;letter-spacing: 2px;font-family: \'publico\';font-weight: bold;}.flypanels-treemenu[data-jsx="2399979545"]{padding: 20px 20px 20px 0;box-sizing: border-box;}/*@ sourceURL=src/components/layout/BurgerMenu.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0J1cmdlck1lbnUuanMiLCJzcmMvY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsNENBRUssYUFDRCxZQUNjLDBCQUMzQixDQUVjLDREQUNJLGdDQUNNLHVCQUNQLGdCQUNHLG1CQUNKLGVBQ0gsWUFDYywwQkFDTSxnQ0FDYixrQkFHZCxDQVpRLHdGQUNJLFlBQUEsbUJBQUEsWUFDTSxDQUZWLGtGQUNJLGdCQUNNLENBRlYsd0ZBQ0ksZ0JBQUEsYUFDTSxDQUZWLGdHQUNJLFlBQ00sQ0FVbEIsNkpBQ1UsYUFDUyxzQkFFZCxDQUFBLG1RQUNZLGtCQUNuQixDQUNGLDJCQUlnQixpQkFDbEIsQ0FFK0IsOENBQ0gsMkJBQ0wsc0JBQ04sZ0JBQ0osWUFDRyxlQUFpQixpQkFDWixvQkFDRyx1QkFDTCxrQkFDbkIsQ0FFbUIsMkNBQ1EsMEJBQ0gsdUJBQ3hCLENBQUEsb0RDdEQ2QyIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudSBmcm9tICdyZWFjdC1idXJnZXItbWVudS9saWIvbWVudXMvcHVzaCc7XG5pbXBvcnQgeyBkZWNvcmF0b3IgYXMgcmVkdXhCdXJnZXJNZW51IH0gZnJvbSAncmVkdXgtYnVyZ2VyLW1lbnUnO1xuXG5pbXBvcnQgQ2FydEljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcnQtYXJyb3ctZG93bic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcyc7XG5pbXBvcnQgQ29sbGFwc2libGUgZnJvbSAncmVhY3QtY29sbGFwc2libGUnO1xuXG5jb25zdCBDb21wb25lbnQgPSAoeyBsYW5nIH0pID0+IChcbiAgPE1lbnUgcGFnZVdyYXBJZD17J3BhZ2Utd3JhcCd9IG91dGVyQ29udGFpbmVySWQ9eydfX25leHQnfSBjdXN0b21CdXJnZXJJY29uPXs8ZGl2IC8+fT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2xkZWJhci1sb2dpbi1tYWluIHtcbiAgICAgICAgd2lkdGg6IDk5LjMlO1xuICAgICAgICBoZWlnaHQ6NDFweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNmM2YzZjtcbiAgICAgIH1cblxuICAgICAgLmxvZ2luLCAuY2FydCB7XG4gICAgICAgIGxvc3QtY29sdW1uOiAxLzI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzZjNmM2Y7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOjNweDtcblxuXG4gICAgICAgICYgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICYgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuZmx5cGFuZWxzLXRyZWVtZW51IDpnbG9iYWwoYSkge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDhweCA2cHggMzJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jazt0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3B1YmxpY28nO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmZseXBhbmVscy10cmVlbWVudXtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLm1vYmlsZS1zdWJtZW51LW1haW4gLkNvbGxhcHNpYmxlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLXN1Ym1lbnUtbWFpbiAuQ29sbGFwc2libGVfX3RyaWdnZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggOHB4IDZweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgNSU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncHVibGljbyc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLXN1Ym1lbnUtbWFpbiAuQ29sbGFwc2libGVfX3RyaWdnZXIuaXMtb3BlbjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kOnVybCgvc3RhdGljL2ltYWdlcy9tb2JpbGUtbWVudS11cC1hcnJvdy5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuXG4gICAgICAubW9iaWxlLXN1Ym1lbnUtbWFpbiAuQ29sbGFwc2libGVfX3RyaWdnZXIuaXMtY2xvc2VkOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQ6dXJsKC9zdGF0aWMvaW1hZ2VzL21vYmlsZS1tZW51LWRvd24tYXJyb3cuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1zdWJtZW51LW1haW4gLmNvbGxhcHNhYmxlLXRleHQge1xuICAgICAgICBjb2xvcjogIzVhNTg1OTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcblxuICAgICAgICAmIC5tb2JpbGUtc3VibWVudSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICAgICAgJiBsaSB7XG4gICAgICAgICAgICAmIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggOHB4IDZweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGRlYmFyLWxvZ2luLW1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5sb2dpbjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICA8Q2FydEljb24gY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCIxNnB4XCIgLz48c3Bhbj4wPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmx5cGFuZWxzLXRyZWVtZW51XCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhhc2NoaWxkcmVuXCI+XG4gICAgICAgICAgPGRpdj48TGluayByb3V0ZT1cIndhdGNoZXNcIiBwYXJhbXM9e3sgbGFuZyB9fT48YT5XYXRjaGVzPC9hPjwvTGluaz48L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhhc2NoaWxkcmVuXCI+XG4gICAgICAgICAgPGRpdj48TGluayByb3V0ZT1cInN0cmFwc1wiIHBhcmFtcz17eyBsYW5nIH19PjxhPlN0cmFwczwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXNjaGlsZHJlblwiPlxuICAgICAgICAgIDxkaXY+PExpbmsgcm91dGU9XCJqZXdlbHJ5XCIgcGFyYW1zPXt7IGxhbmcgfX0+PGE+SmV3ZWxyeTwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXNjaGlsZHJlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXN1Ym1lbnUtbWFpblwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlIHRyaWdnZXI9XCJXb3JsZCBPZiBSb3NlZmllbGRcIiB0cmFuc2l0aW9uVGltZT17MTYwfSBlYXNpbmc9XCJlYXNlLWluLW91dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNhYmxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW9iaWxlLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cImRvd250b3duLWNoaWNcIiBwYXJhbXM9e3sgbGFuZyB9fT5Eb3dudG93biBDaGljPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJ1cHBlci1lYXN0LXNpZGVcIiBwYXJhbXM9e3sgbGFuZyB9fT5VcHBlciBFYXN0IFNpZGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIndlc3QtdmlsbGFnZVwiIHBhcmFtcz17eyBsYW5nIH19Pldlc3QgVmlsbGFnZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwiY2FtcGFpZ25cIiBwYXJhbXM9e3sgbGFuZyB9fT5MYXRlc3QgQ2FtcGFpZ248L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIjE1LW1pbnV0ZXMtd2l0aC1zdGVwaGFuaWVcIiBwYXJhbXM9e3sgbGFuZyB9fT4xNSBNaW51dGVzIFdpdGg8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIm15cm9zZWZpZWxkbW9tZW50XCIgcGFyYW1zPXt7IGxhbmcgfX0+I015cm9zZWZpZWxkbW9tZW50PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJvdXItc3RvcnlcIiBwYXJhbXM9e3sgbGFuZyB9fT5PdXIgc3Rvcnk8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2libGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXNjaGlsZHJlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXN1Ym1lbnUtbWFpblwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlIHRyaWdnZXI9XCJTZXJ2aWNlXCIgdHJhbnNpdGlvblRpbWU9ezE2MH0gZWFzaW5nPVwiZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzYWJsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJzdXBwb3J0XCIgcGFyYW1zPXt7IGxhbmcgfX0+U3VwcG9ydDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJcIiA+Q29udGFjdDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwic3RvcmVzXCIgcGFyYW1zPXt7IGxhbmcgfX0+U3RvcmVzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgPC9NZW51PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhCdXJnZXJNZW51KENvbXBvbmVudCk7XG4iLCIuc2xkZWJhci1sb2dpbi1tYWluW2RhdGEtanN4PVwiMjM5OTk3OTU0NVwiXSB7d2lkdGg6IDk5LjMlO2hlaWdodDo0MXB4O2JvcmRlcjogMXB4IHNvbGlkICMzZjNmM2Y7fS5sb2dpbltkYXRhLWpzeD1cIjIzOTk5Nzk1NDVcIl0sLmNhcnRbZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIHtsb3N0LWNvbHVtbjogMS8yO2JveC1zaXppbmc6IGJvcmRlci1ib3g7cGFkZGluZzogMThweCAwO3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDlweDtjb2xvcjogI2ZmZjt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2JvcmRlci1yaWdodDogMXB4IHNvbGlkICMzZjNmM2Y7bGV0dGVyLXNwYWNpbmc6M3B4OyZbZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIGFbZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIHtjb2xvcjogd2hpdGU7dGV4dC1kZWNvcmF0aW9uOiBub25lOyZbZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIHNwYW5bZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIHttYXJnaW4tbGVmdDogMTBweDt9fX11bFtkYXRhLWpzeD1cIjIzOTk5Nzk1NDVcIl0ge2xpc3Qtc3R5bGU6IG5vbmU7fS5mbHlwYW5lbHMtdHJlZW1lbnVbZGF0YS1qc3g9XCIyMzk5OTc5NTQ1XCJdIGEge3BhZGRpbmc6IDE4cHggOHB4IDZweCAzMnB4O3RleHQtZGVjb3JhdGlvbjogbm9uZTtmb250LXNpemU6IDIwcHg7Y29sb3I6ICNmZmY7ZGlzcGxheTogYmxvY2s7LXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzOy1tb3otdHJhbnNpdGlvbjogMC4zczstbXMtdHJhbnNpdGlvbjogMC4zczt0cmFuc2l0aW9uOiAwLjNzO2xldHRlci1zcGFjaW5nOiAycHg7Zm9udC1mYW1pbHk6ICdwdWJsaWNvJztmb250LXdlaWdodDogYm9sZDt9LmZseXBhbmVscy10cmVlbWVudVtkYXRhLWpzeD1cIjIzOTk5Nzk1NDVcIl17cGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtib3gtc2l6aW5nOiBib3JkZXItYm94O31cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyeGhlVzkxZEM5Q2RYSm5aWEpOWlc1MUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVk5uUWl4QlFVTlhMRFJEUVVOT0xHRkJRMFFzV1VGRFl5d3dRa0ZETTBJc1EwRkZZeXcwUkVGRFNTeHBRa0ZEVFN4MVFrRkRVQ3huUWtGRFJ5eHRRa0ZEU2l4bFFVTklMRmxCUTJNc01FSkJRMDBzWjBOQlEySXNiVUpCUjJRc2JVUkJRMVVzWVVGRFV5eHpRa0ZGWkN4elJFRkRXU3hyUWtGRGJrSXNRMEZEUml4RFFVTkdMRU5CUlVjc01rSkJRMlVzYVVKQlEyeENMRU5CUlN0Q0xEaERRVU5JTERKQ1FVTk1MSE5DUVVOT0xHZENRVU5LTEZsQlEwY3NaVUZCYVVJc2NVWkJRMW9zYjBKQlEwY3NkVUpCUTB3c2EwSkJRMjVDTEVOQlJXMUNMREpEUVVOUkxEQkNRVU5JTEhWQ1FVTjRRaUlzSW1acGJHVWlPaUp6Y21NdlkyOXRjRzl1Wlc1MGN5OXNZWGx2ZFhRdlFuVnlaMlZ5VFdWdWRTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZhRzl0WlM5d2NtRmthWEF0YzJWeWRtVnlMM0psWVdOMExXTnZaR1V0Ym1WM0wzQnliMlIxWTNRdFpHVjBZV2xzSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUUxbGJuVWdabkp2YlNBbmNtVmhZM1F0WW5WeVoyVnlMVzFsYm5VdmJHbGlMMjFsYm5WekwzQjFjMmduTzF4dWFXMXdiM0owSUhzZ1pHVmpiM0poZEc5eUlHRnpJSEpsWkhWNFFuVnlaMlZ5VFdWdWRTQjlJR1p5YjIwZ0ozSmxaSFY0TFdKMWNtZGxjaTF0Wlc1MUp6dGNibHh1YVcxd2IzSjBJRU5oY25SSlkyOXVJR1p5YjIwZ0ozSmxZV04wTFdsamIyNXpMMnhwWWk5bVlTOWpZWEowTFdGeWNtOTNMV1J2ZDI0bk8xeHVhVzF3YjNKMElIc2dUR2x1YXlCOUlHWnliMjBnSnk0dUx5NHVMMk52Ym1acFp5OXliM1YwWlhNbk8xeHVhVzF3YjNKMElFTnZiR3hoY0hOcFlteGxJR1p5YjIwZ0ozSmxZV04wTFdOdmJHeGhjSE5wWW14bEp6dGNibHh1WTI5dWMzUWdRMjl0Y0c5dVpXNTBJRDBnS0hzZ2JHRnVaeUI5S1NBOVBpQW9YRzRnSUR4TlpXNTFJSEJoWjJWWGNtRndTV1E5ZXlkd1lXZGxMWGR5WVhBbmZTQnZkWFJsY2tOdmJuUmhhVzVsY2tsa1BYc25YMTl1WlhoMEozMGdZM1Z6ZEc5dFFuVnlaMlZ5U1dOdmJqMTdQR1JwZGlBdlBuMCtYRzRnSUNBZ1BITjBlV3hsSUdwemVENTdZRnh1SUNBZ0lDQWdMbk5zWkdWaVlYSXRiRzluYVc0dGJXRnBiaUI3WEc0Z0lDQWdJQ0FnSUhkcFpIUm9PaUE1T1M0ekpUdGNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9qUXhjSGc3WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNNelpqTm1NMlk3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1c2IyZHBiaXdnTG1OaGNuUWdlMXh1SUNBZ0lDQWdJQ0JzYjNOMExXTnZiSFZ0YmpvZ01TOHlPMXh1SUNBZ0lDQWdJQ0JpYjNndGMybDZhVzVuT2lCaWIzSmtaWEl0WW05NE8xeHVJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQXhPSEI0SURBN1hHNGdJQ0FnSUNBZ0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUE1Y0hnN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lBalptWm1PMXh1SUNBZ0lDQWdJQ0IwWlhoMExYUnlZVzV6Wm05eWJUb2dkWEJ3WlhKallYTmxPMXh1SUNBZ0lDQWdJQ0JpYjNKa1pYSXRjbWxuYUhRNklERndlQ0J6YjJ4cFpDQWpNMll6WmpObU8xeHVJQ0FnSUNBZ0lDQnNaWFIwWlhJdGMzQmhZMmx1WnpvemNIZzdYRzVjYmx4dUlDQWdJQ0FnSUNBbUlHRWdlMXh1SUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUIzYUdsMFpUdGNiaUFnSUNBZ0lDQWdJQ0IwWlhoMExXUmxZMjl5WVhScGIyNDZJRzV2Ym1VN1hHNWNiaUFnSUNBZ0lDQWdJQ0FtSUhOd1lXNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1TFd4bFpuUTZJREV3Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhWc0lIdGNiaUFnSUNBZ0lDQWdiR2x6ZEMxemRIbHNaVG9nYm05dVpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbVpzZVhCaGJtVnNjeTEwY21WbGJXVnVkU0E2WjJ4dlltRnNLR0VwSUh0Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01UaHdlQ0E0Y0hnZ05uQjRJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lIUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeU1IQjRPMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmp0Y2JpQWdJQ0FnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3ZEhKaGJuTnBkR2x2YmpvZ01DNHpjenRjYmlBZ0lDQWdJQ0FnYkdWMGRHVnlMWE53WVdOcGJtYzZJREp3ZUR0Y2JpQWdJQ0FnSUNBZ1ptOXVkQzFtWVcxcGJIazZJQ2R3ZFdKc2FXTnZKenRjYmlBZ0lDQWdJQ0FnWm05dWRDMTNaV2xuYUhRNklHSnZiR1E3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1bWJIbHdZVzVsYkhNdGRISmxaVzFsYm5WN1hHNGdJQ0FnSUNBZ0lIQmhaR1JwYm1jNklESXdjSGdnTWpCd2VDQXlNSEI0SURBN1hHNGdJQ0FnSUNBZ0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0JnZlR3dmMzUjViR1UrWEc0Z0lDQWdQSE4wZVd4bElHcHplQ0JuYkc5aVlXdytlMkJjYmlBZ0lDQWdJQzV0YjJKcGJHVXRjM1ZpYldWdWRTMXRZV2x1SUM1RGIyeHNZWEJ6YVdKc1pTQjdYRzRnSUNBZ0lDQWdJR0p2Y21SbGNpMTBiM0E2SURGd2VDQnpiMnhwWkNCMGNtRnVjM0JoY21WdWREdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbTF2WW1sc1pTMXpkV0p0Wlc1MUxXMWhhVzRnTGtOdmJHeGhjSE5wWW14bFgxOTBjbWxuWjJWeUlIdGNiaUFnSUNBZ0lDQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN1hHNGdJQ0FnSUNBZ0lIUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4dUlDQWdJQ0FnSUNCd1lXUmthVzVuT2lBeE9IQjRJRGh3ZUNBMmNIZ2dNakJ3ZUR0Y2JpQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBd0lEVWxPMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMlptWm1abVpqdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TUhCNE8xeHVJQ0FnSUNBZ0lDQnNaWFIwWlhJdGMzQmhZMmx1WnpvZ01uQjRPMXh1SUNBZ0lDQWdJQ0JtYjI1MExYZGxhV2RvZERvZ1ltOXNaRHRjYmlBZ0lDQWdJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPMXh1SUNBZ0lDQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ0ozQjFZbXhwWTI4bk8xeHVJQ0FnSUNBZ0lDQjBaWGgwTFhSeVlXNXpabTl5YlRvZ2FXNXBkR2xoYkR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtMXZZbWxzWlMxemRXSnRaVzUxTFcxaGFXNGdMa052Ykd4aGNITnBZbXhsWDE5MGNtbG5aMlZ5TG1sekxXOXdaVzQ2WW1WbWIzSmxJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nWENKY0lqdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRHAxY213b0wzTjBZWFJwWXk5cGJXRm5aWE12Ylc5aWFXeGxMVzFsYm5VdGRYQXRZWEp5YjNjdWMzWm5LU0J1YnkxeVpYQmxZWFE3WEc0Z0lDQWdJQ0FnSUdobGFXZG9kRG9nTVROd2VEdGNiaUFnSUNBZ0lDQWdkMmxrZEdnNklESXdjSGc3WEc0Z0lDQWdJQ0FnSUdac2IyRjBPaUJ5YVdkb2REdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzF6YVhwbE9pQTJNQ1U3WEc0Z0lDQWdJQ0FnSUcxaGNtZHBiaTEwYjNBNklEUndlRHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTG0xdlltbHNaUzF6ZFdKdFpXNTFMVzFoYVc0Z0xrTnZiR3hoY0hOcFlteGxYMTkwY21sbloyVnlMbWx6TFdOc2IzTmxaRHBpWldadmNtVWdlMXh1SUNBZ0lDQWdJQ0JqYjI1MFpXNTBPaUJjSWx3aU8xeHVJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtPblZ5YkNndmMzUmhkR2xqTDJsdFlXZGxjeTl0YjJKcGJHVXRiV1Z1ZFMxa2IzZHVMV0Z5Y205M0xuTjJaeWtnYm04dGNtVndaV0YwTzF4dUlDQWdJQ0FnSUNCb1pXbG5hSFE2SURFemNIZzdYRzRnSUNBZ0lDQWdJSGRwWkhSb09pQXlNSEI0TzF4dUlDQWdJQ0FnSUNCbWJHOWhkRG9nY21sbmFIUTdYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0YzJsNlpUb2dOakFsTzF4dUlDQWdJQ0FnSUNCdFlYSm5hVzR0ZEc5d09pQTBjSGc3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1dGIySnBiR1V0YzNWaWJXVnVkUzF0WVdsdUlDNWpiMnhzWVhCellXSnNaUzEwWlhoMElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklDTTFZVFU0TlRrN1hHNGdJQ0FnSUNBZ0lHeGxkSFJsY2kxemNHRmphVzVuT2lBeGNIZzdYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEdGNiaUFnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURJeWNIZzdYRzVjYmlBZ0lDQWdJQ0FnSmlBdWJXOWlhV3hsTFhOMVltMWxiblVnZTF4dUlDQWdJQ0FnSUNBZ0lIQmhaR1JwYm1jdGJHVm1kRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ1lnYkdrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSmlCaElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhNM0I0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUF4TUhCNElEaHdlQ0EyY0hnZ01qQndlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVYRzRnSUNBZ0lDQjlYRzRnSUNBZ1lIMDhMM04wZVd4bFBseHVJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpYzJ4a1pXSmhjaTFzYjJkcGJpMXRZV2x1WENJK1hHNGdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW14dloybHVYQ0krYkc5bmFXNDhMMlJwZGo1Y2JpQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpWTJGeWRGd2lQbHh1SUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpWENJK1hHNGdJQ0FnSUNBZ0lDQWdQRU5oY25SSlkyOXVJR052Ykc5eVBWd2lkMmhwZEdWY0lpQnphWHBsUFZ3aU1UWndlRndpSUM4K1BITndZVzQrTUR3dmMzQmhiajVjYmlBZ0lDQWdJQ0FnUEM5aFBseHVJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQQzlrYVhZK1hHNWNiaUFnSUNBOGJtRjJJR05zWVhOelRtRnRaVDFjSW1ac2VYQmhibVZzY3kxMGNtVmxiV1Z1ZFZ3aUlISnZiR1U5WENKdVlYWnBaMkYwYVc5dVhDSStYRzRnSUNBZ0lDQThkV3crWEc0Z0lDQWdJQ0FnSUR4c2FTQmpiR0Z6YzA1aGJXVTlYQ0pvWVhOamFHbHNaSEpsYmx3aVBseHVJQ0FnSUNBZ0lDQWdJRHhrYVhZK1BFeHBibXNnY205MWRHVTlYQ0ozWVhSamFHVnpYQ0lnY0dGeVlXMXpQWHQ3SUd4aGJtY2dmWDArUEdFK1YyRjBZMmhsY3p3dllUNDhMMHhwYm1zK1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJRHhzYVNCamJHRnpjMDVoYldVOVhDSm9ZWE5qYUdsc1pISmxibHdpUGx4dUlDQWdJQ0FnSUNBZ0lEeGthWFkrUEV4cGJtc2djbTkxZEdVOVhDSnpkSEpoY0hOY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZUNDhZVDVUZEhKaGNITThMMkUrUEM5TWFXNXJQand2WkdsMlBseHVJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBOGJHa2dZMnhoYzNOT1lXMWxQVndpYUdGelkyaHBiR1J5Wlc1Y0lqNWNiaUFnSUNBZ0lDQWdJQ0E4WkdsMlBqeE1hVzVySUhKdmRYUmxQVndpYW1WM1pXeHllVndpSUhCaGNtRnRjejE3ZXlCc1lXNW5JSDE5UGp4aFBrcGxkMlZzY25rOEwyRStQQzlNYVc1clBqd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2lhR0Z6WTJocGJHUnlaVzVjSWo1Y2JpQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltMXZZbWxzWlMxemRXSnRaVzUxTFcxaGFXNWNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeERiMnhzWVhCemFXSnNaU0IwY21sbloyVnlQVndpVjI5eWJHUWdUMllnVW05elpXWnBaV3hrWENJZ2RISmhibk5wZEdsdmJsUnBiV1U5ZXpFMk1IMGdaV0Z6YVc1blBWd2laV0Z6WlMxcGJpMXZkWFJjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ4c1lYQnpZV0pzWlMxMFpYaDBYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWc0lHTnNZWE56VG1GdFpUMWNJbTF2WW1sc1pTMXpkV0p0Wlc1MVhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0prYjNkdWRHOTNiaTFqYUdsalhDSWdjR0Z5WVcxelBYdDdJR3hoYm1jZ2ZYMCtSRzkzYm5SdmQyNGdRMmhwWXp3dlRHbHVhejQ4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUGp4TWFXNXJJSEp2ZFhSbFBWd2lkWEJ3WlhJdFpXRnpkQzF6YVdSbFhDSWdjR0Z5WVcxelBYdDdJR3hoYm1jZ2ZYMCtWWEJ3WlhJZ1JXRnpkQ0JUYVdSbFBDOU1hVzVyUGp3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0ozWlhOMExYWnBiR3hoWjJWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZUNVhaWE4wSUZacGJHeGhaMlU4TDB4cGJtcytQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0ltTmhiWEJoYVdkdVhDSWdjR0Z5WVcxelBYdDdJR3hoYm1jZ2ZYMCtUR0YwWlhOMElFTmhiWEJoYVdkdVBDOU1hVzVyUGp3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0l4TlMxdGFXNTFkR1Z6TFhkcGRHZ3RjM1JsY0doaGJtbGxYQ0lnY0dGeVlXMXpQWHQ3SUd4aGJtY2dmWDArTVRVZ1RXbHVkWFJsY3lCWGFYUm9QQzlNYVc1clBqd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHaytQRXhwYm1zZ2NtOTFkR1U5WENKdGVYSnZjMlZtYVdWc1pHMXZiV1Z1ZEZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOVBpTk5lWEp2YzJWbWFXVnNaRzF2YldWdWREd3ZUR2x1YXo0OEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBqeE1hVzVySUhKdmRYUmxQVndpYjNWeUxYTjBiM0o1WENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwK1QzVnlJSE4wYjNKNVBDOU1hVzVyUGp3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwwTnZiR3hoY0hOcFlteGxQbHh1SUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTk9ZVzFsUFZ3aWFHRnpZMmhwYkdSeVpXNWNJajVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW0xdlltbHNaUzF6ZFdKdFpXNTFMVzFoYVc1Y0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4RGIyeHNZWEJ6YVdKc1pTQjBjbWxuWjJWeVBWd2lVMlZ5ZG1salpWd2lJSFJ5WVc1emFYUnBiMjVVYVcxbFBYc3hOakI5SUdWaGMybHVaejFjSW1WaGMyVXRhVzR0YjNWMFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNiR0Z3YzJGaWJHVXRkR1Y0ZEZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemMwNWhiV1U5WENKdGIySnBiR1V0YzNWaWJXVnVkVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanhNYVc1cklISnZkWFJsUFZ3aWMzVndjRzl5ZEZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOVBsTjFjSEJ2Y25ROEwweHBibXMrUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ0OFRHbHVheUJvY21WbVBWd2lYQ0lnUGtOdmJuUmhZM1E4TDB4cGJtcytQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0luTjBiM0psYzF3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOVBsTjBiM0psY3p3dlRHbHVhejQ4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5RGIyeHNZWEJ6YVdKc1pUNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUR3dmRXdytYRzRnSUNBZ1BDOXVZWFkrWEc0Z0lEd3ZUV1Z1ZFQ1Y2JpazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSEpsWkhWNFFuVnlaMlZ5VFdWdWRTaERiMjF3YjI1bGJuUXBPMXh1SWwxOSAqL1xuLypAIHNvdXJjZVVSTD1zcmMvY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyTWVudS5qcyAqLyJdfQ== */'
  }), _react2.default.createElement(_style2.default, {
    styleId: 2119552717,
    css: '\n      .mobile-submenu-main .Collapsible {\n        border-top: 1px solid transparent;\n      }\n\n      .mobile-submenu-main .Collapsible__trigger {\n        display: block;\n        text-decoration: none;\n        position: relative;\n        padding: 18px 8px 6px 20px;\n        margin: 0 5%;\n        color: #ffffff;\n        font-size: 20px;\n        letter-spacing: 2px;\n        font-weight: bold;\n        cursor: pointer;\n        font-family: \'publico\';\n        text-transform: none;\n        text-transform: initial;\n      }\n\n      .mobile-submenu-main .Collapsible__trigger.is-open:before {\n        content: "";\n        background:url(/static/images/mobile-menu-up-arrow.svg) no-repeat;\n        height: 13px;\n        width: 20px;\n        float: right;\n        background-size: 60%;\n        margin-top: 4px;\n      }\n\n      .mobile-submenu-main .Collapsible__trigger.is-closed:before {\n        content: "";\n        background:url(/static/images/mobile-menu-down-arrow.svg) no-repeat;\n        height: 13px;\n        width: 20px;\n        float: right;\n        background-size: 60%;\n        margin-top: 4px;\n      }\n\n      .mobile-submenu-main .collapsable-text {\n        color: #5a5859;\n        letter-spacing: 1px;\n        font-size: 14px;\n        line-height: 22px\n\n\n      }\n\n      .mobile-submenu-main .collapsable-text .mobile-submenu {\n        padding-left: 0;\n}\n\n      .mobile-submenu-main .collapsable-text .mobile-submenu li {}\n\n      .mobile-submenu-main .collapsable-text .mobile-submenu li a {\n        font-size: 13px;\n        padding: 10px 8px 6px 20px;\n}\n    '
  }), _react2.default.createElement('div', { className: 'sldebar-login-main', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, _react2.default.createElement('div', { className: 'login', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, 'login'), _react2.default.createElement('div', { className: 'cart', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, _react2.default.createElement('a', { href: '', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, _react2.default.createElement(_cartArrowDown2.default, { color: 'white', size: '16px', __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }), _react2.default.createElement('span', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, '0')))), _react2.default.createElement('nav', { className: 'flypanels-treemenu', role: 'navigation', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, _react2.default.createElement('ul', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, _react2.default.createElement('li', { className: 'haschildren', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, _react2.default.createElement(_routes.Link, { route: 'watches', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, 'Watches')))), _react2.default.createElement('li', { className: 'haschildren', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, _react2.default.createElement(_routes.Link, { route: 'straps', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, 'Straps')))), _react2.default.createElement('li', { className: 'haschildren', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, _react2.default.createElement(_routes.Link, { route: 'jewelry', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, 'Jewelry')))), _react2.default.createElement('li', { className: 'haschildren', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, _react2.default.createElement('div', { className: 'mobile-submenu-main', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, _react2.default.createElement(_reactCollapsible2.default, { trigger: 'World Of Rosefield', transitionTime: 160, easing: 'ease-in-out', __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, _react2.default.createElement('div', { className: 'collapsable-text', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, _react2.default.createElement('ul', { className: 'mobile-submenu', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, _react2.default.createElement(_routes.Link, { route: 'downtown-chic', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, 'Downtown Chic')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }, _react2.default.createElement(_routes.Link, { route: 'upper-east-side', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }, 'Upper East Side')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, _react2.default.createElement(_routes.Link, { route: 'west-village', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, 'West Village')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, _react2.default.createElement(_routes.Link, { route: 'campaign', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, 'Latest Campaign')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, _react2.default.createElement(_routes.Link, { route: '15-minutes-with-stephanie', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, '15 Minutes With')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, _react2.default.createElement(_routes.Link, { route: 'myrosefieldmoment', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, '#Myrosefieldmoment')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, _react2.default.createElement(_routes.Link, { route: 'our-story', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, 'Our story'))))))), _react2.default.createElement('li', { className: 'haschildren', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, _react2.default.createElement('div', { className: 'mobile-submenu-main', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, _react2.default.createElement(_reactCollapsible2.default, { trigger: 'Service', transitionTime: 160, easing: 'ease-in-out', __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    }
  }, _react2.default.createElement('div', { className: 'collapsable-text', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }, _react2.default.createElement('ul', { className: 'mobile-submenu', 'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  }, _react2.default.createElement(_routes.Link, { route: 'support', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  }, 'Support')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, _react2.default.createElement(_routes.Link, { href: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, 'Contact')), _react2.default.createElement('li', {
    'data-jsx': 2399979545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, _react2.default.createElement(_routes.Link, { route: 'stores', params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, 'Stores'))))))))));
};

exports.default = (0, _reduxBurgerMenu.decorator)(Component);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/BurgerMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/BurgerMenu.js"); } } })();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _propTypes = __webpack_require__(82);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/Head.js"); } } })();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/ImageWrapper.js';

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var image = _ref.image,
      children = _ref.children,
      lang = _ref.lang;

  var className = '';
  var styles = {};
  var hideclass = '';
  var jsData = __webpack_require__(801)("./" + lang + '/home-main-banner.json');

  if (image) {
    className = 'has_image';
    styles = { backgroundImage: 'url(\'' + image + '\')' };
  } else {
    hideclass = 'hide-banner-text';
  }

  return _react2.default.createElement('section', { className: className, style: styles, 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 4006462867,
    css: '.hide-banner-text[data-jsx="4006462867"] {display: none;}.has_image[data-jsx="4006462867"] {background-repeat: no-repeat;background-position:  50% 50%;height: 667px;width: 100%;background-size: cover;position: relative;overflow: hidden;}.banner-info-box[data-jsx="4006462867"] {width: calc(99.9% * 4/12 - 20px);padding: 0 0 0 10%;position: absolute;bottom: 17%}.banner-info-box[data-jsx="4006462867"]:nth-child(1n) {float: left;margin-right: 30px;clear: none;}.banner-info-box[data-jsx="4006462867"]:last-child {margin-right: 0;}.banner-info-box[data-jsx="4006462867"]:nth-child(12n) {margin-right: 0;float: right;}.banner-info-box[data-jsx="4006462867"]:nth-child(12n + 1) {clear: both;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] h2[data-jsx="4006462867"] {font-weight: bold;letter-spacing: 4px;text-transform: uppercase;color: #ffffff;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] h3[data-jsx="4006462867"] {color: #FFFFFF;font-size: 55px;font-family: \'publico\';font-weight: bold;padding: 10px 0 0 0;margin: 0;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"] {width: calc(99.9% * 10/12 - 5px);color: #FFFFFF;font-size: 15px;line-height: 180%;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(1n) {float: left;margin-right: 30px;clear: none;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:last-child {margin-right: 0;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(12n) {margin-right: 0;float: right;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(12n + 1) {clear: both;}/*@ sourceURL=src/components/layout/ImageWrapper.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0ltYWdlV3JhcHBlci5qcyIsInNyYy9jb21wb25lbnRzL2xheW91dC9JbWFnZVdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLDBDQUdNLGNBQ2YsQ0FFVyxtQ0FDbUIsNkJBQ0MsOEJBQ2hCLGNBQ0YsWUFDVyx1QkFDSixtQkFDRixpQkFDbEIsQ0FFaUIseUNBQ0UsaUNBQ0MsbUJBQ0EsbUJBQ1AsV0FFTixDQU5VLHVEQUNFLFlBQUEsbUJBQUEsWUFDQyxDQUZILG9EQUNFLGdCQUNDLENBRkgsd0RBQ0UsZ0JBQUEsYUFDQyxDQUZILDREQUNFLFlBQ0MsQ0FJYiwwRkFDYyxrQkFDRSxvQkFDTSwwQkFDWCxlQUNoQixDQUVLLDBGQUNXLGVBQ0MsZ0JBQ08sdUJBQ0wsa0JBQ0Usb0JBQ1YsVUFDWCxDQUVJLHlGQUNnQixpQ0FDSixlQUNDLGdCQUNFLGtCQUNuQixDQUxJLHVHQUNnQixZQUFBLG1CQUFBLFlBQ0osQ0FGWixvR0FDZ0IsZ0JBQ0osQ0FGWix3R0FDZ0IsZ0JBQUEsYUFDSixDQUZaLDRHQUNnQixZQUNKLENBSWxCLHNEQ3pENkMiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgaW1hZ2UsIGNoaWxkcmVuLCBsYW5nIH0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBsZXQgc3R5bGVzID0ge307XG4gIGxldCBoaWRlY2xhc3MgPSAnJztcbiAgY29uc3QganNEYXRhID0gcmVxdWlyZSgnLi4vLi4vbG9jYWxlLycrbGFuZysnL2hvbWUtbWFpbi1iYW5uZXIuanNvbicpO1xuICBcbiAgaWYgKGltYWdlKSB7XG4gICAgY2xhc3NOYW1lID0gJ2hhc19pbWFnZSc7XG4gICAgc3R5bGVzID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1hZ2V9JylgIH07XG4gIH0gZWxzZSB7XG4gICAgaGlkZWNsYXNzID0gJ2hpZGUtYmFubmVyLXRleHQnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlc30+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmhpZGUtYmFubmVyLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICA1MCUgNTAlO1xuICAgICAgICAgIGhlaWdodDogNjY3cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXItaW5mby1ib3gge1xuICAgICAgICAgIGxvc3QtY29sdW1uOiA0LzEyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxNyU7XG5cbiAgICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwdWJsaWNvJztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgbG9zdC1jb2x1bW46IDEwLzEyO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTgwJTsgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hpZGVjbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWluZm8tYm94XCI+XG4gICAgICAgICAgPGhncm91cD5cbiAgICAgICAgICAgIDxoMj57anNEYXRhLkludHJvZHVjaW5nVGV4dH08L2gyPlxuICAgICAgICAgICAgPGgzPntqc0RhdGEuVGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2hncm91cD5cbiAgICAgICAgICA8cD57anNEYXRhLkRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwid2hpdGUtYm9yZGVyLWJ1dHRvblwiPntqc0RhdGEuU2hvcE5vd0J0bn08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiIsIi5oaWRlLWJhbm5lci10ZXh0W2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSB7ZGlzcGxheTogbm9uZTt9Lmhhc19pbWFnZVtkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogIDUwJSA1MCU7aGVpZ2h0OiA2NjdweDt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3Bvc2l0aW9uOiByZWxhdGl2ZTtvdmVyZmxvdzogaGlkZGVuO30uYmFubmVyLWluZm8tYm94W2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSB7bG9zdC1jb2x1bW46IDQvMTI7cGFkZGluZzogMCAwIDAgMTAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDE3JTsmW2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSBoMltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2ZvbnQtd2VpZ2h0OiBib2xkO2xldHRlci1zcGFjaW5nOiA0cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtjb2xvcjogI2ZmZmZmZjt9JltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0gaDNbZGF0YS1qc3g9XCI0MDA2NDYyODY3XCJdIHtjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDU1cHg7Zm9udC1mYW1pbHk6ICdwdWJsaWNvJztmb250LXdlaWdodDogYm9sZDtwYWRkaW5nOiAxMHB4IDAgMCAwO21hcmdpbjogMDt9JltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0gcFtkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2xvc3QtY29sdW1uOiAxMC8xMjtjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDE1cHg7bGluZS1oZWlnaHQ6IDE4MCU7fX1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyeGhlVzkxZEM5SmJXRm5aVmR5WVhCd1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCWld0Q0xFRkJSVk1zTUVOQlEwZ3NZMEZEWml4RFFVVlhMRzFEUVVOdFFpdzJRa0ZEUXl3NFFrRkRhRUlzWTBGRFJpeFpRVU5YTEhWQ1FVTktMRzFDUVVOR0xHbENRVU5zUWl4RFFVVnBRaXg1UTBGRFJTeHJRa0ZEUXl4dFFrRkRRU3h0UWtGRFVDeFpRVVZPTEc5RVFVTmpMR3RDUVVORkxHOUNRVU5OTERCQ1FVTllMR1ZCUTJoQ0xFTkJSVXNzYjBSQlExY3NaVUZEUXl4blFrRkRUeXgxUWtGRFRDeHJRa0ZEUlN4dlFrRkRWaXhWUVVOWUxFTkJSVWtzYlVSQlEyZENMRzFDUVVOS0xHVkJRME1zWjBKQlEwVXNhMEpCUTI1Q0xFTkJRMFlpTENKbWFXeGxJam9pYzNKakwyTnZiWEJ2Ym1WdWRITXZiR0Y1YjNWMEwwbHRZV2RsVjNKaGNIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2YUc5dFpTOXdjbUZrYVhBdGMyVnlkbVZ5TDNKbFlXTjBMV052WkdVdGJtVjNMM0J5YjJSMVkzUXRaR1YwWVdsc0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ0tIc2dhVzFoWjJVc0lHTm9hV3hrY21WdUxDQnNZVzVuSUgwcElEMCtJSHRjYmlBZ2JHVjBJR05zWVhOelRtRnRaU0E5SUNjbk8xeHVJQ0JzWlhRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUd4bGRDQm9hV1JsWTJ4aGMzTWdQU0FuSnp0Y2JpQWdZMjl1YzNRZ2FuTkVZWFJoSUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2Ykc5allXeGxMeWNyYkdGdVp5c25MMmh2YldVdGJXRnBiaTFpWVc1dVpYSXVhbk52YmljcE8xeHVJQ0JjYmlBZ2FXWWdLR2x0WVdkbEtTQjdYRzRnSUNBZ1kyeGhjM05PWVcxbElEMGdKMmhoYzE5cGJXRm5aU2M3WEc0Z0lDQWdjM1I1YkdWeklEMGdleUJpWVdOclozSnZkVzVrU1cxaFoyVTZJR0IxY213b0p5UjdhVzFoWjJWOUp5bGdJSDA3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYUdsa1pXTnNZWE56SUQwZ0oyaHBaR1V0WW1GdWJtVnlMWFJsZUhRbk8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOGMyVmpkR2x2YmlCamJHRnpjMDVoYldVOWUyTnNZWE56VG1GdFpYMGdjM1I1YkdVOWUzTjBlV3hsYzMwK1hHNGdJQ0FnSUNBOGMzUjViR1VnYW5ONFBudGdYRzVjYmlBZ0lDQWdJQ0FnTG1ocFpHVXRZbUZ1Ym1WeUxYUmxlSFFnZTF4dUlDQWdJQ0FnSUNBZ0lHUnBjM0JzWVhrNklHNXZibVU3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXVhR0Z6WDJsdFlXZGxJSHRjYmlBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xYSmxjR1ZoZERvZ2JtOHRjbVZ3WldGME8xeHVJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUNBMU1DVWdOVEFsTzF4dUlDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ05qWTNjSGc3WEc0Z0lDQWdJQ0FnSUNBZ2QybGtkR2c2SURFd01DVTdYRzRnSUNBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxemFYcGxPaUJqYjNabGNqdGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3WEc0Z0lDQWdJQ0FnSUNBZ2IzWmxjbVpzYjNjNklHaHBaR1JsYmp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzVpWVc1dVpYSXRhVzVtYnkxaWIzZ2dlMXh1SUNBZ0lDQWdJQ0FnSUd4dmMzUXRZMjlzZFcxdU9pQTBMekV5TzF4dUlDQWdJQ0FnSUNBZ0lIQmhaR1JwYm1jNklEQWdNQ0F3SURFd0pUdGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEc0Z0lDQWdJQ0FnSUNBZ1ltOTBkRzl0T2lBeE55VTdYRzVjYmlBZ0lDQWdJQ0FnSUNBbUlHZ3lJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUJpYjJ4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMGRHVnlMWE53WVdOcGJtYzZJRFJ3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTJabVptWm1aanRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FtSUdneklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqUmtaR1JrWkdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQTFOWEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxbVlXMXBiSGs2SUNkd2RXSnNhV052Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGQyVnBaMmgwT2lCaWIyeGtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01UQndlQ0F3SURBZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGNtZHBiam9nTUR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBbUlIQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOXpkQzFqYjJ4MWJXNDZJREV3THpFeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJQ05HUmtaR1JrWTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTFjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTVRnd0pUc2dYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHQjlQQzl6ZEhsc1pUNWNiaUFnSUNBZ0lIc2dZMmhwYkdSeVpXNGdmVnh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOWUyaHBaR1ZqYkdGemMzMCtYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZbUZ1Ym1WeUxXbHVabTh0WW05NFhDSStYRzRnSUNBZ0lDQWdJQ0FnUEdobmNtOTFjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeG9NajU3YW5ORVlYUmhMa2x1ZEhKdlpIVmphVzVuVkdWNGRIMDhMMmd5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR2d6UG50cWMwUmhkR0V1VkdsMGJHVjlQQzlvTXo1Y2JpQWdJQ0FnSUNBZ0lDQThMMmhuY205MWNENWNiaUFnSUNBZ0lDQWdJQ0E4Y0Q1N2FuTkVZWFJoTGtSbGMyTnlhWEIwYVc5dWZUd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aVhDSWdZMnhoYzNOT1lXMWxQVndpZDJocGRHVXRZbTl5WkdWeUxXSjFkSFJ2Ymx3aVBudHFjMFJoZEdFdVUyaHZjRTV2ZDBKMGJuMDhMMkUrWEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5elpXTjBhVzl1UGx4dUlDQXBPMXh1ZlR0Y2JpSmRmUT09ICovXG4vKkAgc291cmNlVVJMPXNyYy9jb21wb25lbnRzL2xheW91dC9JbWFnZVdyYXBwZXIuanMgKi8iXX0= */'
  }), children, _react2.default.createElement('div', { className: hideclass, 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('div', { className: 'banner-info-box', 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('hgroup', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('h2', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, jsData.IntroducingText), _react2.default.createElement('h3', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, jsData.Title)), _react2.default.createElement('p', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, jsData.Description), _react2.default.createElement('a', { href: '', className: 'white-border-button', 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, jsData.ShopNowBtn))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/ImageWrapper.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/ImageWrapper.js"); } } })();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/Navigation.js';

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _propTypes = __webpack_require__(82);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _angleDown = __webpack_require__(768);

var _angleDown2 = _interopRequireDefault(_angleDown);

var _NavigationLink = __webpack_require__(754);

var _NavigationLink2 = _interopRequireDefault(_NavigationLink);

var _website_stores = __webpack_require__(649);

var _website_stores2 = _interopRequireDefault(_website_stores);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var options = _website_stores2.default;

/**
 * Empty Select box
 * @param {Object} selectbox Object
 * @returns {Object} none
 */
function removeOptions(selectbox) {
  var i = void 0;
  for (i = selectbox.options.length - 1; i >= 0; i -= 1) {
    selectbox.remove(i);
  }
}
/**
 * Set Country language
 * @returns {String} Redirect or Refresh
 */
function setCountryLang() {
  var lang = document.getElementById('lang_code').value;
  var code = document.getElementById('curr_web_code').innerHTML;
  var currURL = window.location.href.replace(lang, code);
  window.location.assign(currURL);
}
// const defaultCOption = options[0];
var dropDownOnChange = function dropDownOnChange(change) {
  var webId = change.newValue;
  var storeoptdata = [];
  var webFlag = '';
  var code = '';
  var storeDD = document.getElementById('stores');
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? storeoptdata = wsdata.stores : '';
  });
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? webFlag = wsdata.flag : '';
  });
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? code = wsdata.code : '';
  });

  document.getElementById('country_flag_img').src = webFlag;
  // document.getElementById('country_flag_img2').src = webFlag;
  // document.getElementById('country_flag_main').src = webFlag;
  document.getElementById('curr_web_code').innerHTML = code;
  // document.getElementById('myDropdown2').value = web_id;
  // var store_dd2 = document.getElementById('stores2');
  removeOptions(storeDD);
  // removeOptions(store_dd2);
  storeoptdata.forEach(function (opt) {
    return storeDD.options.add(new Option(opt.name, opt.storeId, false));
  });
  // storeoptdata.forEach((opt)=>store_dd2.options.add(new Option(opt.name, opt.storeId,false)));
};
var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  propTypes: {
    id: _react2.default.PropTypes.string.isRequired,
    options: _react2.default.PropTypes.array.isRequired,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
    valueField: _react2.default.PropTypes.string,
    labelField: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      value: null,
      valueField: 'value',
      labelField: 'label',
      onChange: null
    };
  },
  getInitialState: function getInitialState() {
    var selected = this.getSelFPro(this.props);
    return {
      selected: selected
    };
  },
  getSelFPro: function getSelFPro(props) {
    var selected = void 0;
    if (props.value === null && props.options.length !== 0) {
      selected = props.options[0][props.valueField];
    } else {
      selected = props.value;
    }
    return selected;
  },

  handleChange: function handleChange(e) {
    if (this.props.onChange) {
      var change = { oldValue: this.state.selected, newValue: e.target.value };
      this.props.onChange(change);
    }
    this.setState({ selected: e.target.value });
  },
  render: function render() {
    var self = this;
    var ddoptions = self.props.options.map(function (option) {
      return _react2.default.createElement('option', { key: option[self.props.valueField], value: option[self.props.valueField], __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, option[self.props.labelField]);
    });
    return _react2.default.createElement('select', { id: this.props.id, className: 'country-select', value: this.state.selected, onChange: this.handleChange, 'data-jsx': 682895443,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, _react2.default.createElement(_style2.default, {
      styleId: 682895443,
      css: '.form-control[data-jsx="682895443"]{float:left;height:30px;width:200px;}\n/*@ sourceURL=src/components/layout/Navigation.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmlnYXRpb24uanMiLCJzcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR29CLG9DQUNlLFdBQWEsWUFBYSxZQUFDLENBQUE7QUN6RzlELG9EQUFvRCIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5nbGVEb3duIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9hbmdsZS1kb3duJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTmF2aWdhdGlvbkxpbmsnO1xuaW1wb3J0IFdlYnNpdGVTdG9yZXNEYXRhIGZyb20gJy4uL2R1bW15X2RhdGEvd2Vic2l0ZV9zdG9yZXMuanNvbic7XG5cbmNvbnN0IG9wdGlvbnMgPSBXZWJzaXRlU3RvcmVzRGF0YTtcblxuLyoqXG4gKiBFbXB0eSBTZWxlY3QgYm94XG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0Ym94IE9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gbm9uZVxuICovXG5mdW5jdGlvbiByZW1vdmVPcHRpb25zKHNlbGVjdGJveCkge1xuICBsZXQgaTtcbiAgZm9yIChpID0gc2VsZWN0Ym94Lm9wdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBzZWxlY3Rib3gucmVtb3ZlKGkpO1xuICB9XG59XG4vKipcbiAqIFNldCBDb3VudHJ5IGxhbmd1YWdlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZWRpcmVjdCBvciBSZWZyZXNoXG4gKi9cbmZ1bmN0aW9uIHNldENvdW50cnlMYW5nKCkge1xuICBjb25zdCBsYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmdfY29kZScpLnZhbHVlO1xuICBjb25zdCBjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJfd2ViX2NvZGUnKS5pbm5lckhUTUw7XG4gIGNvbnN0IGN1cnJVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxhbmcsIGNvZGUpO1xuICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGN1cnJVUkwpO1xufVxuLy8gY29uc3QgZGVmYXVsdENPcHRpb24gPSBvcHRpb25zWzBdO1xuY29uc3QgZHJvcERvd25PbkNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgY29uc3Qgd2ViSWQgPSBjaGFuZ2UubmV3VmFsdWU7XG4gIGxldCBzdG9yZW9wdGRhdGEgPSBbXTtcbiAgbGV0IHdlYkZsYWcgPSAnJztcbiAgbGV0IGNvZGUgPSAnJztcbiAgY29uc3Qgc3RvcmVERCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yZXMnKTtcbiAgV2Vic2l0ZVN0b3Jlc0RhdGEubWFwKHdzZGF0YSA9PiAoKHdzZGF0YS53ZWJzaXRlSWQgPT0gd2ViSWQpID8gc3RvcmVvcHRkYXRhID0gd3NkYXRhLnN0b3JlcyA6ICcnKSk7XG4gIFdlYnNpdGVTdG9yZXNEYXRhLm1hcCh3c2RhdGEgPT4gKCh3c2RhdGEud2Vic2l0ZUlkID09IHdlYklkKSA/IHdlYkZsYWcgPSB3c2RhdGEuZmxhZyA6ICcnKSk7XG4gIFdlYnNpdGVTdG9yZXNEYXRhLm1hcCh3c2RhdGEgPT4gKCh3c2RhdGEud2Vic2l0ZUlkID09IHdlYklkKSA/IGNvZGUgPSB3c2RhdGEuY29kZSA6ICcnKSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnlfZmxhZ19pbWcnKS5zcmMgPSB3ZWJGbGFnO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeV9mbGFnX2ltZzInKS5zcmMgPSB3ZWJGbGFnO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeV9mbGFnX21haW4nKS5zcmMgPSB3ZWJGbGFnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vycl93ZWJfY29kZScpLmlubmVySFRNTCA9IGNvZGU7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURyb3Bkb3duMicpLnZhbHVlID0gd2ViX2lkO1xuICAvLyB2YXIgc3RvcmVfZGQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3JlczInKTtcbiAgcmVtb3ZlT3B0aW9ucyhzdG9yZUREKTtcbiAgLy8gcmVtb3ZlT3B0aW9ucyhzdG9yZV9kZDIpO1xuICBzdG9yZW9wdGRhdGEuZm9yRWFjaChvcHQgPT4gc3RvcmVERC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKG9wdC5uYW1lLCBvcHQuc3RvcmVJZCwgZmFsc2UpKSk7XG4gIC8vIHN0b3Jlb3B0ZGF0YS5mb3JFYWNoKChvcHQpPT5zdG9yZV9kZDIub3B0aW9ucy5hZGQobmV3IE9wdGlvbihvcHQubmFtZSwgb3B0LnN0b3JlSWQsZmFsc2UpKSk7XG59O1xuY29uc3QgRHJvcGRvd24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoXG4gICAgICBbXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICAgIF1cbiAgKSxcbiAgICB2YWx1ZUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlRmllbGQ6ICd2YWx1ZScsXG4gICAgICBsYWJlbEZpZWxkOiAnbGFiZWwnLFxuICAgICAgb25DaGFuZ2U6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbEZQcm8odGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgIH07XG4gIH0sXG4gIGdldFNlbEZQcm8ocHJvcHMpIHtcbiAgICBsZXQgc2VsZWN0ZWQ7XG4gICAgaWYgKHByb3BzLnZhbHVlID09PSBudWxsICYmIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBzZWxlY3RlZCA9IHByb3BzLm9wdGlvbnNbMF1bcHJvcHMudmFsdWVGaWVsZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfSxcbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBjaGFuZ2UgPSB7IG9sZFZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkLCBuZXdWYWx1ZTogZS50YXJnZXQudmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY2hhbmdlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZGRvcHRpb25zID0gc2VsZi5wcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uW3NlbGYucHJvcHMudmFsdWVGaWVsZF19IHZhbHVlPXtvcHRpb25bc2VsZi5wcm9wcy52YWx1ZUZpZWxkXX0+XG4gICAgICAgICAge29wdGlvbltzZWxmLnByb3BzLmxhYmVsRmllbGRdfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3QgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cImNvdW50cnktc2VsZWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9ybS1jb250cm9se2Zsb2F0OmxlZnQ7IGhlaWdodDozMHB4OyB3aWR0aDoyMDBweDt9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge2Rkb3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG4gIH0sXG59KTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IGN1cnJlbnRQYXRoLCBsYW5nIH0pID0+IChcbiAgPG5hdj5cbiAgICA8dWwgY2xhc3NOYW1lPVwiZGVza3RvcC1tZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbmF2XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayByb3V0ZT1cIndhdGNoZXNcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PldhdGNoZXM8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayByb3V0ZT1cInN0cmFwc1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+U3RyYXBzPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCJqZXdlbHJ5XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5KZXdlbHJ5PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiaG9tZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0gY2xhc3NOYW1lPVwiaG9tZV9sb2dvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1uYXZcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1jYXJ0XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImNhcnRcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9uYXYtY2FydC1ibGFjay5wbmdcIiBhbHQ9XCJcIiAvPjxzcGFuPjA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxvZ2luXCI+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCJsb2dpblwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+TG9naW48L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCIgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJjb3VudHJ5X2ZsYWdfbWFpblwiIHdpZHRoPVwiMTJcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9ubC5zdmdcIiBhbHQ9XCJcIiAvPiZuYnNwOzxzcGFuIGlkPVwiY3Vycl93ZWJfY29kZVwiPk5MPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJmLW1vZC1sYW5ndWFnZUJhcl9faW5uZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmYtbW9kLWxvY2F0aW9uU2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50cnktaW1nXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkNvdW50cnkgRmxhZ1wiIGlkPVwiY291bnRyeV9mbGFnX2ltZ1wiIHNyYz1cImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL3d3LnBuZ1wiIHdpZHRoPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmYtbW9kLWxvY2F0aW9uU2VsZWN0b3JfX2Fycm93XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9XCJteURyb3Bkb3duM1wiIG9wdGlvbnM9e29wdGlvbnN9IHZhbHVlPVwiYlwiIGxhYmVsRmllbGQ9XCJuYW1lXCIgdmFsdWVGaWVsZD1cIndlYnNpdGVJZFwiIG9uQ2hhbmdlPXtkcm9wRG93bk9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZi1tb2QtbGFuZ3VhZ2VCYXJfX3JmLW1vZC1sYW5ndWFnZVNlbGVjdG9yIHJmLW1vZC1sYW5ndWFnZVNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJsYW5ndWFnZS1zZWxlY3RcIiBuYW1lPVwic3RvcmVzXCIgaWQ9XCJzdG9yZXNcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibGFuZ19jb2RlXCIgaWQ9XCJsYW5nX2NvZGVcIiB2YWx1ZT17bGFuZ30gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxlY3QtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NldENvdW50cnlMYW5nfT48YT5Db250aW51ZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSA+U2VydmljZSA8QW5nbGVEb3duIGNsYXNzTmFtZT1cImFuZ2xlX2Rvd25cIiAvPjwvTGluaz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cInN1cHBvcnRcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlN1cHBvcnQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiXCIgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5Db250YWN0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJzdG9yZXNcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlN0b3JlczwvTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyb3NlZmllbGQtbWVudVwiPlxuICAgICAgICAgIDxMaW5rIGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+V29ybGQgT2YgUm9zZWZpZWxkIDxBbmdsZURvd24gY2xhc3NOYW1lPVwiYW5nbGVfZG93blwiIC8+PC9MaW5rPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwiZG93bnRvd24tY2hpY1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+RG93bnRvd24gQ2hpYzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwidXBwZXItZWFzdC1zaWRlXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5VcHBlciBFYXN0IFNpZGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIndlc3QtdmlsbGFnZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+V2VzdCBWaWxsYWdlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJjYW1wYWlnblwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+TGF0ZXN0IENhbXBhaWduPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCIxNS1taW51dGVzLXdpdGgtc3RlcGhhbmllXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT4xNSBNaW51dGVzIFdpdGg8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIm15cm9zZWZpZWxkbW9tZW50XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT4jTXlyb3NlZmllbGRtb21lbnQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIm91ci1zdG9yeVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+T3VyIHN0b3J5PC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiaG9tZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0gY2xhc3NOYW1lPVwibW9iaWxlX2xvZ29cIj5Ib21lPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtY2FydFwiPlxuICAgICAgICA8TGluayBocmVmPVwiY2FydFwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWljb25cIj48c3Bhbj4wPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKTtcblxuTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnRQYXRoOiAnLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiLmZvcm0tY29udHJvbFtkYXRhLWpzeD1cIjY4Mjg5NTQ0M1wiXXtmbG9hdDpsZWZ0O2hlaWdodDozMHB4O3dpZHRoOjIwMHB4O31cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyeGhlVzkxZEM5T1lYWnBaMkYwYVc5dUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVEJIYjBJc1FVRkRTU3h2UTBGQlZ5eFhRVUZoTEZsQlFXRXNXVUZCUXlJc0ltWnBiR1VpT2lKemNtTXZZMjl0Y0c5dVpXNTBjeTlzWVhsdmRYUXZUbUYyYVdkaGRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2YUc5dFpTOXdjbUZrYVhBdGMyVnlkbVZ5TDNKbFlXTjBMV052WkdVdGJtVjNMM0J5YjJSMVkzUXRaR1YwWVdsc0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVSEp2Y0ZSNWNHVnpJSDBnWm5KdmJTQW5jSEp2Y0MxMGVYQmxjeWM3WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUVGdVoyeGxSRzkzYmlCbWNtOXRJQ2R5WldGamRDMXBZMjl1Y3k5c2FXSXZabUV2WVc1bmJHVXRaRzkzYmljN1hHNXBiWEJ2Y25RZ1RHbHVheUJtY205dElDY3VMMDVoZG1sbllYUnBiMjVNYVc1ckp6dGNibWx0Y0c5eWRDQlhaV0p6YVhSbFUzUnZjbVZ6UkdGMFlTQm1jbTl0SUNjdUxpOWtkVzF0ZVY5a1lYUmhMM2RsWW5OcGRHVmZjM1J2Y21WekxtcHpiMjRuTzF4dVhHNWpiMjV6ZENCdmNIUnBiMjV6SUQwZ1YyVmljMmwwWlZOMGIzSmxjMFJoZEdFN1hHNWNiaThxS2x4dUlDb2dSVzF3ZEhrZ1UyVnNaV04wSUdKdmVGeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSE5sYkdWamRHSnZlQ0JQWW1wbFkzUmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUc1dmJtVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2NtVnRiM1psVDNCMGFXOXVjeWh6Wld4bFkzUmliM2dwSUh0Y2JpQWdiR1YwSUdrN1hHNGdJR1p2Y2lBb2FTQTlJSE5sYkdWamRHSnZlQzV2Y0hScGIyNXpMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnYVNBdFBTQXhLU0I3WEc0Z0lDQWdjMlZzWldOMFltOTRMbkpsYlc5MlpTaHBLVHRjYmlBZ2ZWeHVmVnh1THlvcVhHNGdLaUJUWlhRZ1EyOTFiblJ5ZVNCc1lXNW5kV0ZuWlZ4dUlDb2dRSEpsZEhWeWJuTWdlMU4wY21sdVozMGdVbVZrYVhKbFkzUWdiM0lnVW1WbWNtVnphRnh1SUNvdlhHNW1kVzVqZEdsdmJpQnpaWFJEYjNWdWRISjVUR0Z1WnlncElIdGNiaUFnWTI5dWMzUWdiR0Z1WnlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkc1lXNW5YMk52WkdVbktTNTJZV3gxWlR0Y2JpQWdZMjl1YzNRZ1kyOWtaU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqZFhKeVgzZGxZbDlqYjJSbEp5a3VhVzV1WlhKSVZFMU1PMXh1SUNCamIyNXpkQ0JqZFhKeVZWSk1JRDBnZDJsdVpHOTNMbXh2WTJGMGFXOXVMbWh5WldZdWNtVndiR0ZqWlNoc1lXNW5MQ0JqYjJSbEtUdGNiaUFnZDJsdVpHOTNMbXh2WTJGMGFXOXVMbUZ6YzJsbmJpaGpkWEp5VlZKTUtUdGNibjFjYmk4dklHTnZibk4wSUdSbFptRjFiSFJEVDNCMGFXOXVJRDBnYjNCMGFXOXVjMXN3WFR0Y2JtTnZibk4wSUdSeWIzQkViM2R1VDI1RGFHRnVaMlVnUFNCbWRXNWpkR2x2YmlBb1kyaGhibWRsS1NCN1hHNGdJR052Ym5OMElIZGxZa2xrSUQwZ1kyaGhibWRsTG01bGQxWmhiSFZsTzF4dUlDQnNaWFFnYzNSdmNtVnZjSFJrWVhSaElEMGdXMTA3WEc0Z0lHeGxkQ0IzWldKR2JHRm5JRDBnSnljN1hHNGdJR3hsZENCamIyUmxJRDBnSnljN1hHNGdJR052Ym5OMElITjBiM0psUkVRZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmMzUnZjbVZ6SnlrN1hHNGdJRmRsWW5OcGRHVlRkRzl5WlhORVlYUmhMbTFoY0NoM2MyUmhkR0VnUFQ0Z0tDaDNjMlJoZEdFdWQyVmljMmwwWlVsa0lEMDlJSGRsWWtsa0tTQS9JSE4wYjNKbGIzQjBaR0YwWVNBOUlIZHpaR0YwWVM1emRHOXlaWE1nT2lBbkp5a3BPMXh1SUNCWFpXSnphWFJsVTNSdmNtVnpSR0YwWVM1dFlYQW9kM05rWVhSaElEMCtJQ2dvZDNOa1lYUmhMbmRsWW5OcGRHVkpaQ0E5UFNCM1pXSkpaQ2tnUHlCM1pXSkdiR0ZuSUQwZ2QzTmtZWFJoTG1ac1lXY2dPaUFuSnlrcE8xeHVJQ0JYWldKemFYUmxVM1J2Y21WelJHRjBZUzV0WVhBb2QzTmtZWFJoSUQwK0lDZ29kM05rWVhSaExuZGxZbk5wZEdWSlpDQTlQU0IzWldKSlpDa2dQeUJqYjJSbElEMGdkM05rWVhSaExtTnZaR1VnT2lBbkp5a3BPMXh1WEc0Z0lHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIzVnVkSEo1WDJac1lXZGZhVzFuSnlrdWMzSmpJRDBnZDJWaVJteGhaenRjYmlBZ0x5OGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTnZkVzUwY25sZlpteGhaMTlwYldjeUp5a3VjM0pqSUQwZ2QyVmlSbXhoWnp0Y2JpQWdMeThnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk52ZFc1MGNubGZabXhoWjE5dFlXbHVKeWt1YzNKaklEMGdkMlZpUm14aFp6dGNiaUFnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk4xY25KZmQyVmlYMk52WkdVbktTNXBibTVsY2toVVRVd2dQU0JqYjJSbE8xeHVJQ0F2THlCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYlhsRWNtOXdaRzkzYmpJbktTNTJZV3gxWlNBOUlIZGxZbDlwWkR0Y2JpQWdMeThnZG1GeUlITjBiM0psWDJSa01pQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHpkRzl5WlhNeUp5azdYRzRnSUhKbGJXOTJaVTl3ZEdsdmJuTW9jM1J2Y21WRVJDazdYRzRnSUM4dklISmxiVzkyWlU5d2RHbHZibk1vYzNSdmNtVmZaR1F5S1R0Y2JpQWdjM1J2Y21WdmNIUmtZWFJoTG1admNrVmhZMmdvYjNCMElEMCtJSE4wYjNKbFJFUXViM0IwYVc5dWN5NWhaR1FvYm1WM0lFOXdkR2x2YmlodmNIUXVibUZ0WlN3Z2IzQjBMbk4wYjNKbFNXUXNJR1poYkhObEtTa3BPMXh1SUNBdkx5QnpkRzl5Wlc5d2RHUmhkR0V1Wm05eVJXRmphQ2dvYjNCMEtUMCtjM1J2Y21WZlpHUXlMbTl3ZEdsdmJuTXVZV1JrS0c1bGR5QlBjSFJwYjI0b2IzQjBMbTVoYldVc0lHOXdkQzV6ZEc5eVpVbGtMR1poYkhObEtTa3BPMXh1ZlR0Y2JtTnZibk4wSUVSeWIzQmtiM2R1SUQwZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHVJQ0J3Y205d1ZIbHdaWE02SUh0Y2JpQWdJQ0JwWkRvZ1VtVmhZM1F1VUhKdmNGUjVjR1Z6TG5OMGNtbHVaeTVwYzFKbGNYVnBjbVZrTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkpsWVdOMExsQnliM0JVZVhCbGN5NWhjbkpoZVM1cGMxSmxjWFZwY21Wa0xGeHVJQ0FnSUhaaGJIVmxPaUJTWldGamRDNVFjbTl3Vkhsd1pYTXViMjVsVDJaVWVYQmxLRnh1SUNBZ0lDQWdXMXh1SUNBZ0lDQWdJQ0JTWldGamRDNVFjbTl3Vkhsd1pYTXViblZ0WW1WeUxGeHVJQ0FnSUNBZ0lDQlNaV0ZqZEM1UWNtOXdWSGx3WlhNdWMzUnlhVzVuWEc0Z0lDQWdJQ0JkWEc0Z0lDa3NYRzRnSUNBZ2RtRnNkV1ZHYVdWc1pEb2dVbVZoWTNRdVVISnZjRlI1Y0dWekxuTjBjbWx1Wnl4Y2JpQWdJQ0JzWVdKbGJFWnBaV3hrT2lCU1pXRmpkQzVRY205d1ZIbHdaWE11YzNSeWFXNW5MRnh1SUNBZ0lHOXVRMmhoYm1kbE9pQlNaV0ZqZEM1UWNtOXdWSGx3WlhNdVpuVnVZMXh1SUNCOUxGeHVJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklHNTFiR3dzWEc0Z0lDQWdJQ0IyWVd4MVpVWnBaV3hrT2lBbmRtRnNkV1VuTEZ4dUlDQWdJQ0FnYkdGaVpXeEdhV1ZzWkRvZ0oyeGhZbVZzSnl4Y2JpQWdJQ0FnSUc5dVEyaGhibWRsT2lCdWRXeHNMRnh1SUNBZ0lIMDdYRzRnSUgwc1hHNGdJR2RsZEVsdWFYUnBZV3hUZEdGMFpUb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR052Ym5OMElITmxiR1ZqZEdWa0lEMGdkR2hwY3k1blpYUlRaV3hHVUhKdktIUm9hWE11Y0hKdmNITXBPMXh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNCelpXeGxZM1JsWkRvZ2MyVnNaV04wWldSY2JpQWdJQ0I5TzF4dUlDQjlMRnh1SUNCblpYUlRaV3hHVUhKdktIQnliM0J6S1NCN1hHNGdJQ0FnYkdWMElITmxiR1ZqZEdWa08xeHVJQ0FnSUdsbUlDaHdjbTl3Y3k1MllXeDFaU0E5UFQwZ2JuVnNiQ0FtSmlCd2NtOXdjeTV2Y0hScGIyNXpMbXhsYm1kMGFDQWhQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2MyVnNaV04wWldRZ1BTQndjbTl3Y3k1dmNIUnBiMjV6V3pCZFczQnliM0J6TG5aaGJIVmxSbWxsYkdSZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J6Wld4bFkzUmxaQ0E5SUhCeWIzQnpMblpoYkhWbE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjMlZzWldOMFpXUTdYRzRnSUgwc1hHNGdJR2hoYm1Sc1pVTm9ZVzVuWlRvZ1puVnVZM1JwYjI0Z0tHVXBJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXdjbTl3Y3k1dmJrTm9ZVzVuWlNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWTJoaGJtZGxJRDBnZXlCdmJHUldZV3gxWlRvZ2RHaHBjeTV6ZEdGMFpTNXpaV3hsWTNSbFpDd2dibVYzVm1Gc2RXVTZJR1V1ZEdGeVoyVjBMblpoYkhWbElIMDdYRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbTl1UTJoaGJtZGxLR05vWVc1blpTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9leUJ6Wld4bFkzUmxaRG9nWlM1MFlYSm5aWFF1ZG1Gc2RXVWdmU2s3WEc0Z0lIMHNYRzRnSUhKbGJtUmxjam9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sYkdZZ1BTQjBhR2x6TzF4dUlDQWdJR052Ym5OMElHUmtiM0IwYVc5dWN5QTlJSE5sYkdZdWNISnZjSE11YjNCMGFXOXVjeTV0WVhBb0tHOXdkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQRzl3ZEdsdmJpQnJaWGs5ZTI5d2RHbHZibHR6Wld4bUxuQnliM0J6TG5aaGJIVmxSbWxsYkdSZGZTQjJZV3gxWlQxN2IzQjBhVzl1VzNObGJHWXVjSEp2Y0hNdWRtRnNkV1ZHYVdWc1pGMTlQbHh1SUNBZ0lDQWdJQ0FnSUh0dmNIUnBiMjViYzJWc1ppNXdjbTl3Y3k1c1lXSmxiRVpwWld4a1hYMWNiaUFnSUNBZ0lDQWdQQzl2Y0hScGIyNCtYRzRnSUNBZ0lDQXBPMXh1SUNBZ0lIMHBPMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBOGMyVnNaV04wSUdsa1BYdDBhR2x6TG5CeWIzQnpMbWxrZlNCamJHRnpjMDVoYldVOVhDSmpiM1Z1ZEhKNUxYTmxiR1ZqZEZ3aUlIWmhiSFZsUFh0MGFHbHpMbk4wWVhSbExuTmxiR1ZqZEdWa2ZTQnZia05vWVc1blpUMTdkR2hwY3k1b1lXNWtiR1ZEYUdGdVoyVjlQbHh1SUNBZ0lDQWdJQ0E4YzNSNWJHVWdhbk40UG50Z1hHNGdJQ0FnSUNBZ0lDQWdMbVp2Y20wdFkyOXVkSEp2Ykh0bWJHOWhkRHBzWldaME95Qm9aV2xuYUhRNk16QndlRHNnZDJsa2RHZzZNakF3Y0hnN2ZWeHVJQ0FnSUNBZ0lDQmdmVHd2YzNSNWJHVStYRzRnSUNBZ0lDQWdJSHRrWkc5d2RHbHZibk45WEc0Z0lDQWdJQ0E4TDNObGJHVmpkRDVjYmlBZ0lDQXBPMXh1SUNCOUxGeHVmU2s3WEc1Y2JtTnZibk4wSUU1aGRtbG5ZWFJwYjI0Z1BTQW9leUJqZFhKeVpXNTBVR0YwYUN3Z2JHRnVaeUI5S1NBOVBpQW9YRzRnSUR4dVlYWStYRzRnSUNBZ1BIVnNJR05zWVhOelRtRnRaVDFjSW1SbGMydDBiM0F0YldWdWRWd2lQbHh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnNaV1owTFc1aGRsd2lQbHh1SUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdQRXhwYm1zZ2NtOTFkR1U5WENKM1lYUmphR1Z6WENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1WFlYUmphR1Z6UEM5TWFXNXJQbHh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ1BFeHBibXNnY205MWRHVTlYQ0p6ZEhKaGNITmNJaUJ3WVhKaGJYTTllM3NnYkdGdVp5QjlmU0JqZFhKeVpXNTBVR0YwYUQxN1kzVnljbVZ1ZEZCaGRHaDlQbE4wY21Gd2N6d3ZUR2x1YXo1Y2JpQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJRHhNYVc1cklISnZkWFJsUFZ3aWFtVjNaV3h5ZVZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK1NtVjNaV3h5ZVR3dlRHbHVhejVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqWlc1MFpYSXRibUYyWENJK1hHNGdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBOFRHbHVheUJ5YjNWMFpUMWNJbWh2YldWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOUlHTnNZWE56VG1GdFpUMWNJbWh2YldWZmJHOW5iMXdpUGtodmJXVThMMHhwYm1zK1hHNGdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWNtbG5hSFF0Ym1GMlhDSStYRzRnSUNBZ0lDQWdJRHhzYVNCamJHRnpjMDVoYldVOVhDSnVZWFl0WTJGeWRGd2lQbHh1SUNBZ0lDQWdJQ0FnSUR4TWFXNXJJR2h5WldZOVhDSmpZWEowWENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhwYldjZ2MzSmpQVndpTDNOMFlYUnBZeTlwYldGblpYTXZibUYyTFdOaGNuUXRZbXhoWTJzdWNHNW5YQ0lnWVd4MFBWd2lYQ0lnTHo0OGMzQmhiajR3UEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUR3dlRHbHVhejVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdQR3hwSUdOc1lYTnpUbUZ0WlQxY0ltNWhkaTFzYjJkcGJsd2lQbHh1SUNBZ0lDQWdJQ0FnSUR4TWFXNXJJSEp2ZFhSbFBWd2liRzluYVc1Y0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBreHZaMmx1UEM5TWFXNXJQbHh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ1BFeHBibXNnYUhKbFpqMWNJbHdpSUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUdsa1BWd2lZMjkxYm5SeWVWOW1iR0ZuWDIxaGFXNWNJaUIzYVdSMGFEMWNJakV5WENJZ2MzSmpQVndpTDNOMFlYUnBZeTlwYldGblpYTXZibXd1YzNablhDSWdZV3gwUFZ3aVhDSWdMejRtYm1KemNEczhjM0JoYmlCcFpEMWNJbU4xY25KZmQyVmlYMk52WkdWY0lqNU9URHd2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0E4TDB4cGJtcytYRzRnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0p6ZDJsMFkyaGxjaTF6ZFdJdGJXVnVkVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnlaaTF0YjJRdGJHRnVaM1ZoWjJWQ1lYSmZYMmx1Ym1WeVYzSmhjSEJsY2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5KbUxXMXZaQzFzYjJOaGRHbHZibE5sYkdWamRHOXlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjNWdWRISjVMV2x0WjF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCaGJIUTlYQ0pEYjNWdWRISjVJRVpzWVdkY0lpQnBaRDFjSW1OdmRXNTBjbmxmWm14aFoxOXBiV2RjSWlCemNtTTlYQ0pvZEhSd2N6b3ZMMlJsZGk1eWIzTmxabWxsYkdSM1lYUmphR1Z6TG1OdmJTOXphMmx1TDJaeWIyNTBaVzVrTDNkaGRHTm9aWE12WkdWbVlYVnNkQzlwYldGblpYTXZabXhoWnk5M2R5NXdibWRjSWlCM2FXUjBhRDFjSWpFMFhDSWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emNHRnVJR05zWVhOelRtRnRaVDFjSW5KbUxXMXZaQzFzYjJOaGRHbHZibE5sYkdWamRHOXlYMTloY25KdmQxd2lJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRVJ5YjNCa2IzZHVJR2xrUFZ3aWJYbEVjbTl3Wkc5M2JqTmNJaUJ2Y0hScGIyNXpQWHR2Y0hScGIyNXpmU0IyWVd4MVpUMWNJbUpjSWlCc1lXSmxiRVpwWld4a1BWd2libUZ0WlZ3aUlIWmhiSFZsUm1sbGJHUTlYQ0ozWldKemFYUmxTV1JjSWlCdmJrTm9ZVzVuWlQxN1pISnZjRVJ2ZDI1UGJrTm9ZVzVuWlgwZ0x6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2ljbVl0Ylc5a0xXeGhibWQxWVdkbFFtRnlYMTl5WmkxdGIyUXRiR0Z1WjNWaFoyVlRaV3hsWTNSdmNpQnlaaTF0YjJRdGJHRnVaM1ZoWjJWVFpXeGxZM1J2Y2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpaV3hsWTNRZ1kyeGhjM05PWVcxbFBWd2liR0Z1WjNWaFoyVXRjMlZzWldOMFhDSWdibUZ0WlQxY0luTjBiM0psYzF3aUlHbGtQVndpYzNSdmNtVnpYQ0lnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCMGVYQmxQVndpYUdsa1pHVnVYQ0lnYm1GdFpUMWNJbXhoYm1kZlkyOWtaVndpSUdsa1BWd2liR0Z1WjE5amIyUmxYQ0lnZG1Gc2RXVTllMnhoYm1kOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z1kyeGhjM05PWVcxbFBWd2ljMlZzWldOMExXSjFkSFJ2Ymx3aUlIUjVjR1U5WENKaWRYUjBiMjVjSWlCdmJrTnNhV05yUFh0elpYUkRiM1Z1ZEhKNVRHRnVaMzArUEdFK1EyOXVkR2x1ZFdVOEwyRStQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lEeE1hVzVySUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDBnUGxObGNuWnBZMlVnUEVGdVoyeGxSRzkzYmlCamJHRnpjMDVoYldVOVhDSmhibWRzWlY5a2IzZHVYQ0lnTHo0OEwweHBibXMrWEc0Z0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelRtRnRaVDFjSW5OMVlpMXRaVzUxWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p6ZFhCd2IzSjBYQ0lnY0dGeVlXMXpQWHQ3SUd4aGJtY2dmWDBnWTNWeWNtVnVkRkJoZEdnOWUyTjFjbkpsYm5SUVlYUm9mVDVUZFhCd2IzSjBQQzlNYVc1clBqd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQThiR2srUEV4cGJtc2dhSEpsWmoxY0lsd2lJR04xY25KbGJuUlFZWFJvUFh0amRYSnlaVzUwVUdGMGFIMCtRMjl1ZEdGamREd3ZUR2x1YXo0OEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanhNYVc1cklISnZkWFJsUFZ3aWMzUnZjbVZ6WENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1VGRHOXlaWE04TDB4cGJtcytQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dUlDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2ljbTl6WldacFpXeGtMVzFsYm5WY0lqNWNiaUFnSUNBZ0lDQWdJQ0E4VEdsdWF5QmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBsZHZjbXhrSUU5bUlGSnZjMlZtYVdWc1pDQThRVzVuYkdWRWIzZHVJR05zWVhOelRtRnRaVDFjSW1GdVoyeGxYMlJ2ZDI1Y0lpQXZQand2VEdsdWF6NWNiaUFnSUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM05PWVcxbFBWd2ljM1ZpTFcxbGJuVmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0ltUnZkMjUwYjNkdUxXTm9hV05jSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGtSdmQyNTBiM2R1SUVOb2FXTThMMHhwYm1zK1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0luVndjR1Z5TFdWaGMzUXRjMmxrWlZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK1ZYQndaWElnUldGemRDQlRhV1JsUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0ozWlhOMExYWnBiR3hoWjJWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBsZGxjM1FnVm1sc2JHRm5aVHd2VEdsdWF6NDhMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwUGp4TWFXNXJJSEp2ZFhSbFBWd2lZMkZ0Y0dGcFoyNWNJaUJ3WVhKaGJYTTllM3NnYkdGdVp5QjlmU0JqZFhKeVpXNTBVR0YwYUQxN1kzVnljbVZ1ZEZCaGRHaDlQa3hoZEdWemRDQkRZVzF3WVdsbmJqd3ZUR2x1YXo0OEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanhNYVc1cklISnZkWFJsUFZ3aU1UVXRiV2x1ZFhSbGN5MTNhWFJvTFhOMFpYQm9ZVzVwWlZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK01UVWdUV2x1ZFhSbGN5QlhhWFJvUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p0ZVhKdmMyVm1hV1ZzWkcxdmJXVnVkRndpSUhCaGNtRnRjejE3ZXlCc1lXNW5JSDE5SUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDArSTAxNWNtOXpaV1pwWld4a2JXOXRaVzUwUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p2ZFhJdGMzUnZjbmxjSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGs5MWNpQnpkRzl5ZVR3dlRHbHVhejQ4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBOEwzVnNQbHh1SUNBZ0lEeDFiQ0JqYkdGemMwNWhiV1U5WENKdGIySnBiR1V0YldWdWRWd2lQbHh1SUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBOFRHbHVheUJ5YjNWMFpUMWNJbWh2YldWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOUlHTnNZWE56VG1GdFpUMWNJbTF2WW1sc1pWOXNiMmR2WENJK1NHOXRaVHd2VEdsdWF6NWNiaUFnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2libUYyTFdOaGNuUmNJajVjYmlBZ0lDQWdJQ0FnUEV4cGJtc2dhSEpsWmoxY0ltTmhjblJjSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGx4dUlDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyRnlkQzFwWTI5dVhDSStQSE53WVc0K01Ed3ZjM0JoYmo0OEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEM5TWFXNXJQbHh1SUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0E4TDNWc1BseHVJQ0E4TDI1aGRqNWNiaWs3WEc1Y2JrNWhkbWxuWVhScGIyNHVjSEp2Y0ZSNWNHVnpJRDBnZTF4dUlDQmpkWEp5Wlc1MFVHRjBhRG9nVUhKdmNGUjVjR1Z6TG5OMGNtbHVaeXhjYm4wN1hHNWNiazVoZG1sbllYUnBiMjR1WkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNCamRYSnlaVzUwVUdGMGFEb2dKeThuTEZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdUbUYyYVdkaGRHbHZianRjYmlKZGZRPT0gKi9cbi8qQCBzb3VyY2VVUkw9c3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmlnYXRpb24uanMgKi8iXX0= */'
    }), ddoptions);
  }
});

var Navigation = function Navigation(_ref) {
  var currentPath = _ref.currentPath,
      lang = _ref.lang;
  return _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('ul', { className: 'desktop-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'left-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'watches', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, 'Watches')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'straps', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, 'Straps')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'jewelry', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, 'Jewelry'))), _react2.default.createElement('div', { className: 'center-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'home', params: { lang: lang }, currentPath: currentPath, className: 'home_logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, 'Home'))), _react2.default.createElement('div', { className: 'right-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', { className: 'nav-cart', __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: 'cart', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, _react2.default.createElement('img', { src: '/static/images/nav-cart-black.png', alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    'data-jsx': 682895443
  }, '0'))), _react2.default.createElement('li', { className: 'nav-login', __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'login', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, 'Login')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: '', currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, _react2.default.createElement('img', { id: 'country_flag_main', width: '12', src: '/static/images/nl.svg', alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    'data-jsx': 682895443
  }), '\xA0', _react2.default.createElement('span', { id: 'curr_web_code', __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    'data-jsx': 682895443
  }, 'NL')), _react2.default.createElement('div', { className: 'switcher-sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'rf-mod-languageBar__innerWrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'rf-mod-locationSelector', __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'country-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('img', { alt: 'Country Flag', id: 'country_flag_img', src: 'https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ww.png', width: '14', __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('span', { className: 'rf-mod-locationSelector__arrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    'data-jsx': 682895443
  })), _react2.default.createElement(Dropdown, { id: 'myDropdown3', options: options, value: 'b', labelField: 'name', valueField: 'websiteId', onChange: dropDownOnChange, __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  })), _react2.default.createElement('div', { className: 'rf-mod-languageBar__rf-mod-languageSelector rf-mod-languageSelector', __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('select', { className: 'language-select', name: 'stores', id: 'stores', __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    'data-jsx': 682895443
  })), _react2.default.createElement('input', { type: 'hidden', name: 'lang_code', id: 'lang_code', value: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('button', { className: 'select-button', type: 'button', onClick: setCountryLang, __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    'data-jsx': 682895443
  }, 'Continue'))))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, 'Service ', _react2.default.createElement(_angleDown2.default, { className: 'angle_down', __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  })), _react2.default.createElement('ul', { className: 'sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'support', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, 'Support')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: '', currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, 'Contact')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'stores', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, 'Stores')))), _react2.default.createElement('li', { className: 'rosefield-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, 'World Of Rosefield ', _react2.default.createElement(_angleDown2.default, { className: 'angle_down', __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  })), _react2.default.createElement('ul', { className: 'sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'downtown-chic', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }, 'Downtown Chic')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'upper-east-side', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, 'Upper East Side')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'west-village', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, 'West Village')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'campaign', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, 'Latest Campaign')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: '15-minutes-with-stephanie', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }, '15 Minutes With')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'myrosefieldmoment', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, '#Myrosefieldmoment')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'our-story', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, 'Our story')))))), _react2.default.createElement('ul', { className: 'mobile-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'home', params: { lang: lang }, currentPath: currentPath, className: 'mobile_logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, 'Home')), _react2.default.createElement('li', { className: 'nav-cart', __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: 'cart', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    }
  }, _react2.default.createElement('div', { className: 'cart-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    'data-jsx': 682895443
  }, '0'))))));
};

Navigation.propTypes = {
  currentPath: _propTypes.PropTypes.string
};

Navigation.defaultProps = {
  currentPath: '/'
};

exports.default = Navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/Navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/Navigation.js"); } } })();

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(592);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _routes = __webpack_require__(565);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NavigationLink = function NavigationLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      currentPath = _ref.currentPath,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'href', 'currentPath', 'className']);

  var classes = [];
  if (className) classes.push(className);

  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({ href: href }, props), _react2.default.createElement('a', { className: classes.join(' ') }, children));
};

NavigationLink.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  currentPath: _propTypes.PropTypes.string.isRequired,
  className: _propTypes.PropTypes.node };

exports.default = NavigationLink;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/NavigationLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/NavigationLink.js"); } } })();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(565);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement("section", { className: "copyright" }, _react2.default.createElement("p", null, "\xA9 ", new Date().getFullYear(), " ROSEFIELD BV. Alle rechten voorbehouden.\xA0"), _react2.default.createElement("div", { className: "copyright-links" }, _react2.default.createElement(_routes.Link, { route: "privacy", params: { lang: lang } }, _react2.default.createElement("a", null, "Privacybeleid")), "\xA0|\xA0", _react2.default.createElement(_routes.Link, { route: "terms", params: { lang: lang } }, _react2.default.createElement("a", null, "Algemene voorwaarden"))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/CopyrightInfo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/CopyrightInfo.js"); } } })();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(592);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _routes = __webpack_require__(565);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavLinks.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavLinks.js"); } } })();

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavigation.js';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _FooterNavLinks = __webpack_require__(756);

var _FooterNavLinks2 = _interopRequireDefault(_FooterNavLinks);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FooterNavigation = function FooterNavigation(_ref) {
  var currentPath = _ref.currentPath,
      lang = _ref.lang;

  var lableData = __webpack_require__(802)("./" + lang + '/translation_label.json');
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/FooterNavigation.js"); } } })();

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement("div", { className: "footer-signup" }, _react2.default.createElement("h2", null, "Sign Up"), _react2.default.createElement("p", { className: "footer-signup-txt" }, "Sign up for our newsletter and be the first to know."), _react2.default.createElement("form", { action: "", method: "post", className: "frm-newsletter" }, _react2.default.createElement("div", { className: "footer-emailbg" }, _react2.default.createElement("input", { className: "footer-email", placeholder: "Email Address" }), _react2.default.createElement("input", { className: "footer-emailarow", type: "button" }))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/NewsletterEmail.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/NewsletterEmail.js"); } } })();

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _facebook = __webpack_require__(770);

var _facebook2 = _interopRequireDefault(_facebook);

var _pinterestP = __webpack_require__(772);

var _pinterestP2 = _interopRequireDefault(_pinterestP);

var _instagram = __webpack_require__(771);

var _instagram2 = _interopRequireDefault(_instagram);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement('section', { className: 'icons' }, _react2.default.createElement('a', { href: 'https://www.facebook.com/Rosefieldwatches' }, _react2.default.createElement(_facebook2.default, null)), _react2.default.createElement('a', { href: 'https://www.pinterest.com/rosefieldwatch/' }, _react2.default.createElement(_pinterestP2.default, null)), _react2.default.createElement('a', { href: 'https://instagram.com/rosefieldwatches/' }, _react2.default.createElement(_instagram2.default, null)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/footer/Social.js"); } } })();

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/index.js';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _reactSticky = __webpack_require__(788);

var _Navigation = __webpack_require__(753);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Head = __webpack_require__(751);

var _Head2 = _interopRequireDefault(_Head);

var _NewsletterEmail = __webpack_require__(758);

var _NewsletterEmail2 = _interopRequireDefault(_NewsletterEmail);

var _FooterNavigation = __webpack_require__(757);

var _FooterNavigation2 = _interopRequireDefault(_FooterNavigation);

var _Social = __webpack_require__(759);

var _Social2 = _interopRequireDefault(_Social);

var _CopyrightInfo = __webpack_require__(755);

var _CopyrightInfo2 = _interopRequireDefault(_CopyrightInfo);

var _index = __webpack_require__(725);

var _index2 = _interopRequireDefault(_index);

var _BurgerMenu = __webpack_require__(750);

var _BurgerMenu2 = _interopRequireDefault(_BurgerMenu);

var _ImageWrapper = __webpack_require__(752);

var _ImageWrapper2 = _interopRequireDefault(_ImageWrapper);

__webpack_require__(765);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/components/layout/index.js"); } } })();

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactApollo = __webpack_require__(599);

var _isomorphicFetch = __webpack_require__(646);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _persist = __webpack_require__(764);

var _persist2 = _interopRequireDefault(_persist);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

/**
 * Initializes the Apollo connection
 * @returns {ApolloClient} ApolloClient instance
 */
function initApollo(headers, initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser,
    dataIdFromObject: function dataIdFromObject(result) {
      return result.id || null;
    },
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'http://localhost:8080/graphql',
      opts: {
        credentials: 'same-origin'
      }
    }).use([{
      applyMiddleware: function applyMiddleware(req, next) {
        var _this = this;

        if (!req.options.headers) {
          req.options.headers = {}; // Create the header object if needed.
        }

        // get the authentication token from local storage if it exists
        (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var token;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _persist2.default.willGetSessionToken();

                case 2:
                  token = _context.sent;

                  req.options.headers.authorization = token ? 'Bearer ' + token : null;
                  next();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }
    }])
  });
}

exports.default = function (headers) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!process.browser) {
    return initApollo(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = initApollo(headers, initialState);
  }
  return apolloClient;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42), __webpack_require__(61)))

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(566);

var _reducer = __webpack_require__(766);

var _reducer2 = _interopRequireDefault(_reducer);

var _middleware = __webpack_require__(763);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var reduxStore = null;

exports.default = function (client, initialState) {
  var store = void 0;
  if (!process.browser || !reduxStore) {
    var middleware = (0, _middleware2.default)(client.middleware());
    store = (0, _redux.createStore)((0, _reducer2.default)(client), initialState, middleware);
    if (!process.browser) {
      return store;
    }
    reduxStore = store;
  }
  return reduxStore;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/initRedux.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/initRedux.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMiddleware;

var _redux = __webpack_require__(566);

/**
 * Reduc middleware
 * @param {int} clientMiddleware The first number.
 * @returns {int} composed object.
 */
function createMiddleware(clientMiddleware) {
  var middleware = (0, _redux.applyMiddleware)(clientMiddleware);
  if (process.browser && window.devToolsExtension) {
    return (0, _redux.compose)(middleware, window.devToolsExtension());
  }
  return middleware;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/middleware.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/middleware.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _localforage = __webpack_require__(713);

var localForage = _interopRequireWildcard(_localforage);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var persist = function () {
  function persist() {
    (0, _classCallCheck3.default)(this, persist);
  }

  (0, _createClass3.default)(persist, null, [{
    key: 'willGetSessionToken',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', localForage.getItem(persist.SESSION_TOKEN_KEY).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function willGetSessionToken() {
        return _ref.apply(this, arguments);
      }

      return willGetSessionToken;
    }()
  }, {
    key: 'willSetSessionToken',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(value) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', localForage.setItem(persist.SESSION_TOKEN_KEY, value).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function willSetSessionToken(_x) {
        return _ref2.apply(this, arguments);
      }

      return willSetSessionToken;
    }()
  }, {
    key: 'willRemoveSessionToken',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', localForage.removeItem(persist.SESSION_TOKEN_KEY).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function willRemoveSessionToken() {
        return _ref3.apply(this, arguments);
      }

      return willRemoveSessionToken;
    }()
  }, {
    key: 'willGetAccessToken',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', localForage.getItem(persist.ACCESS_TOKEN_KEY).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function willGetAccessToken() {
        return _ref4.apply(this, arguments);
      }

      return willGetAccessToken;
    }()
  }, {
    key: 'willSetAccessToken',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(value) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', localForage.setItem(persist.ACCESS_TOKEN_KEY, value).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function willSetAccessToken(_x2) {
        return _ref5.apply(this, arguments);
      }

      return willSetAccessToken;
    }()
  }, {
    key: 'willRemoveAccessToken',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', localForage.removeItem(persist.ACCESS_TOKEN_KEY).catch(function (err) {
                  return err;
                }));

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function willRemoveAccessToken() {
        return _ref6.apply(this, arguments);
      }

      return willRemoveAccessToken;
    }()
  }, {
    key: 'SESSION_TOKEN_KEY',
    get: function get() {
      return 'sessionToken';
    }
  }, {
    key: 'ACCESS_TOKEN_KEY',
    get: function get() {
      return 'accessToken';
    }
  }]);
  return persist;
}();

module.exports = persist;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/persist.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/persist.js"); } } })();

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nprogress = __webpack_require__(730);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/progressbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/progressbar.js"); } } })();

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReducer;

var _redux = __webpack_require__(566);

var _reduxBurgerMenu = __webpack_require__(604);

/**
 * Combines the reducers for the app
 * @param {object} client The first number.
 * @returns {object} The reducer
 */
function getReducer(client) {
  return (0, _redux.combineReducers)({
    burgerMenu: _reduxBurgerMenu.reducer,
    apollo: client.reducer()
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/reducer.js"); } } })();

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(599);

var _initApollo = __webpack_require__(761);

var _initApollo2 = _interopRequireDefault(_initApollo);

var _initRedux = __webpack_require__(762);

var _initRedux2 = _interopRequireDefault(_initRedux);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable */

exports.default = function (Component) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);
    (0, _createClass3.default)(_class, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var headers, client, redux, props, app, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  headers = ctx.req ? ctx.req.headers : {};
                  client = (0, _initApollo2.default)(headers);
                  redux = (0, _initRedux2.default)(client, client.initialState);
                  _context.t0 = _extends3.default;
                  _context.t1 = {
                    url: { query: ctx.query, pathname: ctx.pathname }
                  };
                  _context.next = 7;
                  return Component.getInitialProps ? Component.getInitialProps(ctx) : {};

                case 7:
                  _context.t2 = _context.sent;
                  props = (0, _context.t0)(_context.t1, _context.t2);

                  if (process.browser) {
                    _context.next = 13;
                    break;
                  }

                  app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: client, store: redux }, _react2.default.createElement(Component, props));
                  _context.next = 13;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 13:
                  state = redux.getState();
                  return _context.abrupt('return', (0, _extends3.default)({
                    initialState: (0, _extends3.default)({}, state, {
                      apollo: {
                        data: client.getInitialState().data
                      }
                    }),
                    headers: headers
                  }, props));

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

      _this.client = (0, _initApollo2.default)(_this.props.headers, _this.props.initialState);
      _this.store = (0, _initRedux2.default)(_this.client, _this.props.initialState);
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.client, store: this.store }, _react2.default.createElement(Component, this.props));
      }
    }]);
    return _class;
  }(_react2.default.Component);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/pradip-server/react-code-new/product-detail/src/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pradip-server/react-code-new/product-detail/src/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./at/home-15min-with.json": 650,
	"./at_en/home-15min-with.json": 654,
	"./au/home-15min-with.json": 658,
	"./be/home-15min-with.json": 662,
	"./be_en/home-15min-with.json": 666,
	"./be_fr/home-15min-with.json": 670,
	"./cz/home-15min-with.json": 674,
	"./cz_en/home-15min-with.json": 678,
	"./de/home-15min-with.json": 682,
	"./en_us/home-15min-with.json": 686,
	"./fr/home-15min-with.json": 690,
	"./jp/home-15min-with.json": 694,
	"./nl/home-15min-with.json": 698,
	"./nl_en/home-15min-with.json": 702,
	"./ww/home-15min-with.json": 706
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 799;

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./at/home-behind-brand.json": 651,
	"./at_en/home-behind-brand.json": 655,
	"./au/home-behind-brand.json": 659,
	"./be/home-behind-brand.json": 663,
	"./be_en/home-behind-brand.json": 667,
	"./be_fr/home-behind-brand.json": 671,
	"./cz/home-behind-brand.json": 675,
	"./cz_en/home-behind-brand.json": 679,
	"./de/home-behind-brand.json": 683,
	"./en_us/home-behind-brand.json": 687,
	"./fr/home-behind-brand.json": 691,
	"./jp/home-behind-brand.json": 695,
	"./nl/home-behind-brand.json": 699,
	"./nl_en/home-behind-brand.json": 703,
	"./ww/home-behind-brand.json": 707
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 800;

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./at/home-main-banner.json": 652,
	"./at_en/home-main-banner.json": 656,
	"./au/home-main-banner.json": 660,
	"./be/home-main-banner.json": 664,
	"./be_en/home-main-banner.json": 668,
	"./be_fr/home-main-banner.json": 672,
	"./cz/home-main-banner.json": 676,
	"./cz_en/home-main-banner.json": 680,
	"./de/home-main-banner.json": 684,
	"./en_us/home-main-banner.json": 688,
	"./fr/home-main-banner.json": 692,
	"./jp/home-main-banner.json": 696,
	"./nl/home-main-banner.json": 700,
	"./nl_en/home-main-banner.json": 704,
	"./ww/home-main-banner.json": 708
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 801;

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./at/translation_label.json": 653,
	"./at_en/translation_label.json": 657,
	"./au/translation_label.json": 661,
	"./be/translation_label.json": 665,
	"./be_en/translation_label.json": 669,
	"./be_fr/translation_label.json": 673,
	"./cz/translation_label.json": 677,
	"./cz_en/translation_label.json": 681,
	"./de/translation_label.json": 685,
	"./en_us/translation_label.json": 689,
	"./fr/translation_label.json": 693,
	"./jp/translation_label.json": 697,
	"./nl/translation_label.json": 701,
	"./nl_en/translation_label.json": 705,
	"./ww/translation_label.json": 709
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 802;

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(609);


/***/ })

},[803]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvcm91dGVzLmpzPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmY3YTAwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2R1bW15X2RhdGEvcG9wdWxhaXJfcHJvZHVjdHMuanNvbj82ZjdhMDA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHVtbXlfZGF0YS93ZWJzaXRlX3N0b3Jlcy5qc29uPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2F0L2hvbWUtMTVtaW4td2l0aC5qc29uPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2F0L2hvbWUtYmVoaW5kLWJyYW5kLmpzb24/NmY3YTAwNiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYXQvaG9tZS1tYWluLWJhbm5lci5qc29uPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2F0L3RyYW5zbGF0aW9uX2xhYmVsLmpzb24/NmY3YTAwNiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYXRfZW4vaG9tZS0xNW1pbi13aXRoLmpzb24/NmY3YTAwNiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYXRfZW4vaG9tZS1iZWhpbmQtYnJhbmQuanNvbj82ZjdhMDA2Iiwid2VicGFjazovLy8uL2xvY2FsZS9hdF9lbi9ob21lLW1haW4tYmFubmVyLmpzb24/NmY3YTAwNiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYXRfZW4vdHJhbnNsYXRpb25fbGFiZWwuanNvbj82ZjdhMDA2Iiwid2VicGFjazovLy8uL2xvY2FsZS9hdS9ob21lLTE1bWluLXdpdGguanNvbj82ZjdhMDA2Iiwid2VicGFjazovLy8uL2xvY2FsZS9hdS9ob21lLWJlaGluZC1icmFuZC5qc29uPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2F1L2hvbWUtbWFpbi1iYW5uZXIuanNvbj82ZjdhMDA2Iiwid2VicGFjazovLy8uL2xvY2FsZS9hdS90cmFuc2xhdGlvbl9sYWJlbC5qc29uPzZmN2EwMDYiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2JlL2hvbWUtMTVtaW4td2l0aC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2JlL2hvbWUtYmVoaW5kLWJyYW5kLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYmUvaG9tZS1tYWluLWJhbm5lci5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2JlL3RyYW5zbGF0aW9uX2xhYmVsLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYmVfZW4vaG9tZS0xNW1pbi13aXRoLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYmVfZW4vaG9tZS1iZWhpbmQtYnJhbmQuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9iZV9lbi9ob21lLW1haW4tYmFubmVyLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvYmVfZW4vdHJhbnNsYXRpb25fbGFiZWwuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9iZV9mci9ob21lLTE1bWluLXdpdGguanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9iZV9mci9ob21lLWJlaGluZC1icmFuZC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2JlX2ZyL2hvbWUtbWFpbi1iYW5uZXIuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9iZV9mci90cmFuc2xhdGlvbl9sYWJlbC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2N6L2hvbWUtMTVtaW4td2l0aC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2N6L2hvbWUtYmVoaW5kLWJyYW5kLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvY3ovaG9tZS1tYWluLWJhbm5lci5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2N6L3RyYW5zbGF0aW9uX2xhYmVsLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvY3pfZW4vaG9tZS0xNW1pbi13aXRoLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvY3pfZW4vaG9tZS1iZWhpbmQtYnJhbmQuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9jel9lbi9ob21lLW1haW4tYmFubmVyLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvY3pfZW4vdHJhbnNsYXRpb25fbGFiZWwuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9kZS9ob21lLTE1bWluLXdpdGguanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9kZS9ob21lLWJlaGluZC1icmFuZC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2RlL2hvbWUtbWFpbi1iYW5uZXIuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9kZS90cmFuc2xhdGlvbl9sYWJlbC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2VuX3VzL2hvbWUtMTVtaW4td2l0aC5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2VuX3VzL2hvbWUtYmVoaW5kLWJyYW5kLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvZW5fdXMvaG9tZS1tYWluLWJhbm5lci5qc29uPzU0ZjE1OWIiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2VuX3VzL3RyYW5zbGF0aW9uX2xhYmVsLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvZnIvaG9tZS0xNW1pbi13aXRoLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvZnIvaG9tZS1iZWhpbmQtYnJhbmQuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9mci9ob21lLW1haW4tYmFubmVyLmpzb24/NTRmMTU5YiIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvZnIvdHJhbnNsYXRpb25fbGFiZWwuanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9qcC9ob21lLTE1bWluLXdpdGguanNvbj81NGYxNTliIiwid2VicGFjazovLy8uL2xvY2FsZS9qcC9ob21lLWJlaGluZC1icmFuZC5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL2pwL2hvbWUtbWFpbi1iYW5uZXIuanNvbj9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZS9qcC90cmFuc2xhdGlvbl9sYWJlbC5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL25sL2hvbWUtMTVtaW4td2l0aC5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL25sL2hvbWUtYmVoaW5kLWJyYW5kLmpzb24/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvbmwvaG9tZS1tYWluLWJhbm5lci5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL25sL3RyYW5zbGF0aW9uX2xhYmVsLmpzb24/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvbmxfZW4vaG9tZS0xNW1pbi13aXRoLmpzb24/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvbmxfZW4vaG9tZS1iZWhpbmQtYnJhbmQuanNvbj9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZS9ubF9lbi9ob21lLW1haW4tYmFubmVyLmpzb24/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUvbmxfZW4vdHJhbnNsYXRpb25fbGFiZWwuanNvbj9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZS93dy9ob21lLTE1bWluLXdpdGguanNvbj9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZS93dy9ob21lLWJlaGluZC1icmFuZC5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlL3d3L2hvbWUtbWFpbi1iYW5uZXIuanNvbj9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZS93dy90cmFuc2xhdGlvbl9sYWJlbC5qc29uP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFsX3N0eWxlcy9pbmRleC5jc3M/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvcHVsYWlyUHJvZHVjdHMuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvMTVNaW5XaXRoLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL0JlaGluZEJyYW5kLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL1Bob3RvU2x1cnBTZWN0aW9uLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyTWVudS5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWQuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9JbWFnZVdyYXBwZXIuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9OYXZpZ2F0aW9uLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2aWdhdGlvbkxpbmsuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIvQ29weXJpZ2h0SW5mby5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Gb290ZXJOYXZMaW5rcy5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Gb290ZXJOYXZpZ2F0aW9uLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL05ld3NsZXR0ZXJFbWFpbC5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Tb2NpYWwuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xpYi9pbml0QXBvbGxvLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRSZWR1eC5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xpYi9taWRkbGV3YXJlLmpzP2FhZDJjMzgiLCJ3ZWJwYWNrOi8vLy4vbGliL3BlcnNpc3QuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9saWIvcHJvZ3Jlc3NiYXIuanM/YWFkMmMzOCIsIndlYnBhY2s6Ly8vLi9saWIvcmVkdWNlci5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz9hYWQyYzM4Iiwid2VicGFjazovLy8uL2xvY2FsZSBeXFwuXFwvLipcXC9ob21lXFwtMTVtaW5cXC13aXRoXFwuanNvbiQ/NTczZjE2MCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUgXlxcLlxcLy4qXFwvaG9tZVxcLWJlaGluZFxcLWJyYW5kXFwuanNvbiQ/NTczZjE2MCIsIndlYnBhY2s6Ly8vLi9sb2NhbGUgXlxcLlxcLy4qXFwvaG9tZVxcLW1haW5cXC1iYW5uZXJcXC5qc29uJD81NzNmMTYwIiwid2VicGFjazovLy8uL2xvY2FsZSBeXFwuXFwvLipcXC90cmFuc2xhdGlvbl9sYWJlbFxcLmpzb24kPzU3M2YxNjAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhOztBQUVuQixJQUFNLFNBQVM7QUFDZixPQUFPLFVBQVU7O0FBRWpCO0FBQ0EsSUFBTSxXQUFXLFVBQVU7QUFDM0IsT0FBTyxJQUFJLFFBQVcsZ0JBQWE7O0FBRW5DLE9BQU8sSUFBSSxjQUFpQiwyQkFBd0I7QUFDcEQsT0FBTyxJQUFJLGNBQWlCLDBCQUF1Qjs7QUFFbkQsT0FBTyxJQUFJLFdBQWMsdUJBQW9CO0FBQzdDLE9BQU8sSUFBSSxVQUFhLHNCQUFt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TTtrQkFBaEM7b0JBQ0E7QUFEQTs7O2tCQUNBO29CQUFBO0FBQUE7QUFBQTs7QUFMRzs7a0JBU1Esd0JBQVMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ2xnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUN2QkFBLE9BQU9DLE9BQVAsR0FBaUIsZ2doRkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLHVCQUFhO01BQUEsWUFDM0I7O3lCQUNBLHVCQUFLLFdBQVUsd0JBQWY7R0FBQTthQUFBO1NBcUNFO0FBckNGLHNCQXFDRTtnQkFBQTtBQUFBLEtBRUEscUVBQUssV0FBVSx3QkFDWDtpQ0FBcUIsSUFBSSxVQUFDLFNBQVMsT0FBVjtXQUFvQiwwRUFBUyxLQUFLLFNBQVcsV0FBUyxNQUFNO0FBRXpGLDhDQUFLLFdBQVUsb0JBQ2I7cUJBQUEscUJBQUcsV0FBVSw0QkFBYjtLQUlMO0FBakREOztBQW1EQSxRQUFRO1FBQ0Esb0JBQVUsT0FBTztBQUF2Qjs7a0JBR2EsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RmOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBQ0EsSUFBTSxVQUFVLHVCQUFnQztNQUFBO01BQUE7TUFBQTtNQUFBLFlBQzlDOztNQUFNLE1BQ047VUFBUSxJQUVSOzt5QkFDRSx1QkFBSyxXQUFVLHVCQUFmO0dBQUE7YUFBQTtTQTZCRTtBQTdCRixzQkE2QkUsOEJBQU0sT0FBTSxjQUFhLFFBQVEsRUFBRSxNQUFGLE1BQVEsSUFDdkMsNkNBQUcsT0FBTSxxQkFFUDtxQkFBQSxzQ0FBTyxLQUFLLEtBQUssTUFDZixtRUFBTyxLQUFLLEtBQUssT0FBTyxLQUFLLE1BQU0sQ0FBQyxZQUFZLFdBQVcsTUFBSyxVQUFTLFVBQVUsRUFBRSxPQUFPLHdCQUF3QixLQUFJLFFBQU8sT0FDL0gsZ0VBQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxNQUFNLENBQUMsWUFBWSxXQUFXLE1BQUssVUFBUyxVQUFVLEVBQUUsT0FBTyx3QkFBd0IsS0FBSSxRQUFPLE9BQy9ILGdFQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssTUFBTSxDQUFDLFlBQVksV0FBVyxLQUFJLFFBQU8sT0FHeEU7Z0JBQUE7QUFBQSxLQUFXLFVBS3BCO0FBaEREOztBQWtEQSxRQUFRO01BQ0Ysb0JBQVUsT0FDZDtTQUFPLG9CQUFVLE9BQ2pCO1NBQU8sb0JBQVUsT0FDakI7T0FBSyxvQkFBVSxPQUFPO0FBSHRCOztrQkFNYSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGY7Ozs7QUFDQTs7Ozs7O0FBRUE7OztJQUdNO3lDQUNKOztBQUdBOzs7eUJBQVksT0FBTzt3Q0FBQTs7b0pBRWpCOztRQUFNLFNBQVMsNkJBQVEsR0FBZ0IsTUFBTSxPQUM3QztVQUFLO1dBRUg7WUFBTSxNQUNOO2dCQUFVO0FBRlY7V0FJSDtBQUNEOzs7Ozs7Ozs2QkFLRTs2QkFDRTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBO2lCQUFBO2FBb0hFO0FBcEhGLDBCQW9IRSx1QkFBSyxXQUFVLDRCQUFmOztvQkFBQTtzQkFDRTtBQURGO3lCQUNFLHVCQUFLLFdBQVUsb0NBQWY7O29CQUFBO3NCQUNFO0FBREY7eUJBQ0UsdUJBQUssV0FBVSx5QkFBZjs7b0JBQUE7c0JBQTJCO0FBQTNCO3lCQUEyQjtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRTdCLGtEQUFLLFdBQVUsbUNBQWY7O29CQUFBO3NCQUNFO0FBREY7eUJBQ0UsdUJBQUssV0FBVSx5QkFBZjs7b0JBQUE7c0JBQ0U7QUFERjt5QkFDRTtvQkFBQTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNFO29CQUFBOztvQkFBQTtzQkFBSztBQUFMO0FBQUEsY0FBVSxNQUFNLFNBQ2hCO29CQUFBOztvQkFBQTtzQkFBSztBQUFMO0FBQUEsY0FBVSxNQUFNLFNBRWxCO29CQUFBOztvQkFBQTtzQkFBSTtBQUFKO0FBQUEsY0FBUyxNQUFNLFNBQ2YsNERBQU0sT0FBTSw2QkFBNEIsUUFBUSxFQUFFLE1BQUssS0FBSyxNQUFNO29CQUFsRTtzQkFDRTtBQURGO3lCQUNFO29CQUFBOztvQkFBQTtzQkFBSTtBQUFKO0FBQUEsY0FBUyxNQUFNLFNBTzVCOzs7O0VBMUp5QixnQkFBTTs7a0JBNkpuQixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2Y7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFROztBQUVkOzs7O0lBR007dUNBQ0o7O0FBR0E7Ozt1QkFBWSxPQUFPO3dDQUFBOztnSkFFakI7O1FBQU0sU0FBUyw2QkFBUSxHQUFnQixNQUFNLE9BQzdDO1VBQUs7V0FFSDtZQUFNLE1BQ047Z0JBQVU7QUFGVjtXQUlIO0FBQ0Q7Ozs7Ozs7OzZCQUtFOzZCQUNFO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUE7aUJBQUE7YUFzR0U7QUF0R0YsMEJBc0dFO29CQUFBOztvQkFBQTtzQkFDRTtBQURGO0FBQUEsdUNBQ0csU0FBTSxTQUFTLFdBQVcsVUFBVTtvQkFBckM7c0JBQ0E7QUFEQTswQkFDQSx1QkFBSyxXQUFVLHdCQUFmOztvQkFBQTtzQkFDRTtBQURGO3lCQUNFO29CQUFBOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0U7b0JBQUE7O29CQUFBO3NCQUFLO0FBQUw7QUFBQSxjQUFVLE1BQU0sU0FDaEI7b0JBQUE7O29CQUFBO3NCQUFLO0FBQUw7QUFBQSxjQUFVLE1BQU0sU0FFbEI7b0JBQUE7O29CQUFBO3NCQUFJO0FBQUo7QUFBQSxjQUFTLE1BQU0sU0FLeEI7Ozs7RUFySXVCLGdCQUFNOztrQkF3SWpCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDL0lBO3lCQUNiLDJCQUFTLFdBQVUsZ0RBQW5CO0dBQUE7YUFBQTtTQTZDRTtBQTdDRixzQkE2Q0U7Z0JBQUE7QUFBQSxLQUNBLHVFQUFLLFdBQVUsbUNBQ2I7cUJBQUEsdUJBQUssV0FBVSx1QkFDYjs0Q0FBSyxLQUFJLHdDQUF1QyxLQUFJLGdCQUV0RDt1QkFBQSx1QkFBSyxXQUFVLHVCQUNiOzRDQUFLLEtBQUksd0NBQXVDLEtBQUksZ0JBRXREO3VCQUFBLHVCQUFLLFdBQVUsK0JBQ2I7NENBQUssS0FBSSx3Q0FBdUMsS0FBSSxnQkFFdEQ7dUJBQUEsdUJBQUssV0FBVSwrQkFDYjs0Q0FBSyxLQUFJLHdDQUF1QyxLQUFJLGdCQUFwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURSOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLFlBQVk7TUFBRzt5QkFDbkIsZ0NBQU0sWUFBWSxhQUFhLGtCQUFrQixVQUFVO2tCQUFrQjs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBO2dCQUE3RTtrQkFBQTtBQUFBO0dBQUE7YUFBQTtTQUFBO0FBQUE7YUFBQTtTQStHRTtBQS9HRixzQkErR0UsdUJBQUssV0FBVSxrQ0FBZjs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRSx1QkFBSyxXQUFVLHFCQUFmOztnQkFBQTtrQkFBQTtBQUFBO0tBQ0EsaURBQUssV0FBVSxvQkFBZjs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRSxxQkFBRyxNQUFLLGdCQUFSOztnQkFBQTtrQkFDRTtBQURGOzhEQUNZLE9BQU0sU0FBUSxNQUFLO2dCQUE3QjtrQkFBc0M7QUFBdEM7c0JBQXNDO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FLNUMsZ0RBQUssV0FBVSxzQkFBcUIsTUFBSywwQkFBekM7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0U7Z0JBQUE7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRSxzQkFBSSxXQUFVLDJCQUFkOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFO2dCQUFBOztnQkFBQTtrQkFBSztBQUFMO0FBQUEscUJBQUssOEJBQU0sT0FBTSxXQUFVLFFBQVEsRUFBRSxNQUFGO2dCQUE5QjtrQkFBd0M7QUFBeEM7cUJBQXdDO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FFL0MscURBQUksV0FBVSwyQkFBZDs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRTtnQkFBQTs7Z0JBQUE7a0JBQUs7QUFBTDtBQUFBLHFCQUFLLDhCQUFNLE9BQU0sVUFBUyxRQUFRLEVBQUUsTUFBRjtnQkFBN0I7a0JBQXVDO0FBQXZDO3FCQUF1QztnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRTlDLG9EQUFJLFdBQVUsMkJBQWQ7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0U7Z0JBQUE7O2dCQUFBO2tCQUFLO0FBQUw7QUFBQSxxQkFBSyw4QkFBTSxPQUFNLFdBQVUsUUFBUSxFQUFFLE1BQUY7Z0JBQTlCO2tCQUF3QztBQUF4QztxQkFBd0M7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUUvQyxxREFBSSxXQUFVLDJCQUFkOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVUsbUNBQWY7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0UsNENBQWEsU0FBUSxzQkFBcUIsZ0JBQWdCLEtBQUssUUFBTztnQkFBdEU7a0JBQ0U7QUFERjtxQkFDRSx1QkFBSyxXQUFVLGdDQUFmOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFLHNCQUFJLFdBQVUsOEJBQWQ7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0U7Z0JBQUE7O2dCQUFBO2tCQUFJO0FBQUo7QUFBQSxxQkFBSSw4QkFBTSxPQUFNLGlCQUFnQixRQUFRLEVBQUUsTUFBRjtnQkFBcEM7a0JBQUE7QUFBQTtLQUNKO2dCQUFBOztnQkFBQTtrQkFBSTtBQUFKO0FBQUEscUJBQUksOEJBQU0sT0FBTSxtQkFBa0IsUUFBUSxFQUFFLE1BQUY7Z0JBQXRDO2tCQUFBO0FBQUE7S0FDSjtnQkFBQTs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBLHFCQUFJLDhCQUFNLE9BQU0sZ0JBQWUsUUFBUSxFQUFFLE1BQUY7Z0JBQW5DO2tCQUFBO0FBQUE7S0FDSjtnQkFBQTs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBLHFCQUFJLDhCQUFNLE9BQU0sWUFBVyxRQUFRLEVBQUUsTUFBRjtnQkFBL0I7a0JBQUE7QUFBQTtLQUNKO2dCQUFBOztnQkFBQTtrQkFBSTtBQUFKO0FBQUEscUJBQUksOEJBQU0sT0FBTSw2QkFBNEIsUUFBUSxFQUFFLE1BQUY7Z0JBQWhEO2tCQUFBO0FBQUE7S0FDSjtnQkFBQTs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBLHFCQUFJLDhCQUFNLE9BQU0scUJBQW9CLFFBQVEsRUFBRSxNQUFGO2dCQUF4QztrQkFBQTtBQUFBO0tBQ0o7Z0JBQUE7O2dCQUFBO2tCQUFJO0FBQUo7QUFBQSxxQkFBSSw4QkFBTSxPQUFNLGFBQVksUUFBUSxFQUFFLE1BQUY7Z0JBQWhDO2tCQUFBO0FBQUE7S0FNZCwwREFBSSxXQUFVLDJCQUFkOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVUsbUNBQWY7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0UsNENBQWEsU0FBUSxXQUFVLGdCQUFnQixLQUFLLFFBQU87Z0JBQTNEO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVSxnQ0FBZjs7Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRSxzQkFBSSxXQUFVLDhCQUFkOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFO2dCQUFBOztnQkFBQTtrQkFBSTtBQUFKO0FBQUEscUJBQUksOEJBQU0sT0FBTSxXQUFVLFFBQVEsRUFBRSxNQUFGO2dCQUE5QjtrQkFBQTtBQUFBO0tBQ0o7Z0JBQUE7O2dCQUFBO2tCQUFJO0FBQUo7QUFBQSxxQkFBSSw4QkFBTSxNQUFLO2dCQUFYO2tCQUFBO0FBQUE7S0FDSjtnQkFBQTs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBLHFCQUFJLDhCQUFNLE9BQU0sVUFBUyxRQUFRLEVBQUUsTUFBRjtnQkFBN0I7a0JBQUE7QUFBQTtLQUFBO0FBNUp0Qjs7a0JBdUtlLGdDQUFnQixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLL0I7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU87TUFBRztTQUNkLDhDQUNFLDZDQUFTLE1BQ1QsZ0RBQU0sU0FDTixvREFBTSxNQUFLLFlBQVcsU0FDdEIsb0ZBQU0sS0FBSSxpQkFBZ0IsTUFBSywrQkFBOEIsTUFDN0QsMkRBQU0sTUFBSyxZQUFXLFNBQVE7QUFObEM7O0FBVUEsS0FBSztTQUNJLG9CQUFVO0FBQWpCOztBQUdGLEtBQUs7U0FDSTtBQUFQOztrQkFHYSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNyQkEsZ0JBQStCO01BQUE7TUFBQTtNQUFBLFlBQzVDOztNQUFJLFlBQ0o7TUFBSSxTQUNKO01BQUksWUFDSjtNQUFNLFNBQVMsNkJBQVEsR0FBZ0IsT0FFdkM7O01BQUksT0FDRjtnQkFDQTthQUFTLEVBQUUsNEJBQXlCLFFBQ3JDO0FBSEQsU0FJRTtnQkFDRDtBQUVEOzt5QkFDRSwyQkFBUyxXQUFXLFdBQVcsT0FBTyxvQkFBdEM7O2dCQUFBO2tCQUFBO0FBQUE7R0FBQTthQUFBO1NBZ0RJO0FBaERKLE1BaURFLGlEQUFLLFdBQVcsdUJBQWhCOztnQkFBQTtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVUsK0JBQWY7O2dCQUFBO2tCQUNFO0FBREY7cUJBQ0U7Z0JBQUE7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRTtnQkFBQTs7Z0JBQUE7a0JBQUs7QUFBTDtBQUFBLFlBQ0E7Z0JBQUE7O2dCQUFBO2tCQUFLO0FBQUw7QUFBQSxZQUVGO2dCQUFBOztnQkFBQTtrQkFBSTtBQUFKO0FBQUEsWUFDQSxtREFBRyxNQUFLLElBQUcsV0FBVSxtQ0FBckI7O2dCQUFBO2tCQUE0QztBQUE1QztZQUtUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VEOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sMkJBQU47O0FBRUE7Ozs7O0FBS0EsU0FBUyxjQUFjLFdBQ3JCO01BQUksU0FDSjtPQUFLLElBQUksVUFBVSxRQUFRLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUNsRDtjQUFVLE9BQ1g7QUFDRjs7QUFDRDs7OztBQUlBLFNBQVMsaUJBQ1A7TUFBTSxPQUFPLFNBQVMsZUFBZSxhQUNyQztNQUFNLE9BQU8sU0FBUyxlQUFlLGlCQUNyQztNQUFNLFVBQVUsT0FBTyxTQUFTLEtBQUssUUFBUSxNQUM3QztTQUFPLFNBQVMsT0FDakI7O0FBQ0Q7QUFDQSxJQUFNLG1CQUFtQiwwQkFBVSxRQUNqQztNQUFNLFFBQVEsT0FDZDtNQUFJLGVBQ0o7TUFBSSxVQUNKO01BQUksT0FDSjtNQUFNLFVBQVUsU0FBUyxlQUN6QjsyQkFBa0IsSUFBSTtXQUFZLE9BQU8sYUFBYSxRQUFTLGVBQWUsT0FBTyxTQUFTO0FBQzlGOzJCQUFrQixJQUFJO1dBQVksT0FBTyxhQUFhLFFBQVMsVUFBVSxPQUFPLE9BQU87QUFDdkY7MkJBQWtCLElBQUk7V0FBWSxPQUFPLGFBQWEsUUFBUyxPQUFPLE9BQU8sT0FBTztBQUVwRjs7V0FBUyxlQUFlLG9CQUFvQixNQUM1QztBQUNBO0FBQ0E7V0FBUyxlQUFlLGlCQUFpQixZQUN6QztBQUNBO0FBQ0E7Z0JBQ0E7QUFDQTtlQUFhLFFBQVE7V0FBTyxRQUFRLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksU0FBUztBQUNsRjtBQUNEO0FBcEJEO0FBcUJBLElBQU0sMkJBQWlCO2VBQ3JCOzs7UUFDTSxnQkFBTSxVQUFVLE9BQ3BCO2FBQVMsZ0JBQU0sVUFBVSxNQUN6QjtXQUFPLGdCQUFNLFVBQVUsVUFDckIsQ0FDRSxnQkFBTSxVQUFVLFFBQ2hCLGdCQUFNLFVBR1Y7Z0JBQVksZ0JBQU0sVUFDbEI7Z0JBQVksZ0JBQU0sVUFDbEI7Y0FBVSxnQkFBTSxVQUVsQjtBQVpFO21CQVllLDJCQUNmOzthQUVFO2tCQUNBO2tCQUNBO2dCQUVIO0FBTEc7QUFNSjttQkFBaUIsMkJBQ2Y7UUFBTSxXQUFXLEtBQUssV0FBVyxLQUNqQzs7Z0JBR0Q7QUFGRztBQUdKO0FBNUJpQyxrQ0E0QnRCLE9BQ1Q7UUFBSSxnQkFDSjtRQUFJLE1BQU0sVUFBVSxRQUFRLE1BQU0sUUFBUSxXQUFXLEdBQ25EO2lCQUFXLE1BQU0sUUFBUSxHQUFHLE1BQzdCO0FBRkQsV0FHRTtpQkFBVyxNQUNaO0FBQ0Q7V0FDRDtBQUNEOztnQkFBYyxzQkFBVSxHQUN0QjtRQUFJLEtBQUssTUFBTSxVQUNiO1VBQU0sU0FBUyxFQUFFLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxFQUFFLE9BQzVEO1dBQUssTUFBTSxTQUNaO0FBQ0Q7U0FBSyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQzdCO0FBQ0Q7VUFBUSxrQkFDTjtRQUFNLE9BQ047UUFBTSxpQkFBaUIsTUFBTSxRQUFRLElBQUksVUFBQyxRQUN4Qzs2QkFDRSwwQkFBUSxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxPQUFPLEtBQUssTUFBTTtvQkFBckU7c0JBQ0c7QUFESDtPQUFBLFNBQ1UsS0FBSyxNQUdsQjtBQUNELEtBUGtCOzJCQVFoQiwwQkFBUSxJQUFJLEtBQUssTUFBTSxJQUFJLFdBQVUsa0JBQWlCLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLDBCQUFqRzs7a0JBQUE7b0JBQUE7QUFBQTtLQUFBO2VBQUE7V0FJRztBQUpILFFBT0g7QUE3RGdDO0FBQUEsQ0FBbEI7O0FBZ0VqQixJQUFNLGFBQWE7TUFBRztNQUFhO3lCQUNqQzs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFDRTtBQURGLHFCQUNFLHNCQUFJLFdBQVU7Z0JBQWQ7a0JBQUE7QUFBQTtnQkFDRTtxQkFBQSx1QkFBSyxXQUFVO2dCQUFmO2tCQUFBO0FBQUE7Z0JBQ0U7cUJBQUE7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQ0U7QUFERixxQkFDRSwwQ0FBTSxPQUFNLFdBQVUsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUFyRDtrQkFBQTtBQUFBO0tBRUY7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQ0U7QUFERixxQkFDRSwwQ0FBTSxPQUFNLFVBQVMsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUFwRDtrQkFBQTtBQUFBO0tBRUY7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQ0U7QUFERixxQkFDRSwwQ0FBTSxPQUFNLFdBQVUsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUFyRDtrQkFBQTtBQUFBO0tBR0oscURBQUssV0FBVTtnQkFBZjtrQkFBQTtBQUFBO2dCQUNFO3FCQUFBOztnQkFBQTtrQkFBQTtBQUFBO2dCQUNFO0FBREYscUJBQ0UsMENBQU0sT0FBTSxRQUFPLFFBQVEsRUFBRSxNQUFGLFFBQVUsYUFBYSxhQUFhLFdBQVU7Z0JBQXpFO2tCQUFBO0FBQUE7S0FHSixrREFBSyxXQUFVO2dCQUFmO2tCQUFBO0FBQUE7Z0JBQ0U7cUJBQUEsc0JBQUksV0FBVTtnQkFBZDtrQkFBQTtBQUFBO2dCQUNFO3FCQUFBLDBDQUFNLE1BQUssUUFBTyxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQWpEO2tCQUNFO0FBREY7NENBQ08sS0FBSSxxQ0FBb0MsS0FBSTtnQkFBakQ7a0JBQUE7QUFBQTtnQkFBc0Q7c0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUE7QUFBQSxLQUcxRCw4Q0FBSSxXQUFVO2dCQUFkO2tCQUFBO0FBQUE7Z0JBQ0U7cUJBQUEsMENBQU0sT0FBTSxTQUFRLFFBQVEsRUFBRSxNQUFGLFFBQVUsYUFBYTtnQkFBbkQ7a0JBQUE7QUFBQTtLQUVGOztnQkFBQTtrQkFBQTtBQUFBO2dCQUNFO0FBREYscUJBQ0UsMENBQU0sTUFBSyxJQUFHLGFBQWE7Z0JBQTNCO2tCQUNFO0FBREY7NENBQ08sSUFBRyxxQkFBb0IsT0FBTSxNQUFLLEtBQUkseUJBQXdCLEtBQUk7Z0JBQXZFO2tCQUFBO0FBQUE7Z0JBQUE7TUFBa0YsZ0RBQU0sSUFBRztnQkFBVDtrQkFBQTtBQUFBO2dCQUFBO0tBRXBGLCtDQUFLLFdBQVU7Z0JBQWY7a0JBQUE7QUFBQTtnQkFDRTtxQkFBQSx1QkFBSyxXQUFVO2dCQUFmO2tCQUFBO0FBQUE7Z0JBQ0U7cUJBQUEsdUJBQUssV0FBVTtnQkFBZjtrQkFBQTtBQUFBO2dCQUNFO3FCQUFBLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQUE7QUFBQTtnQkFDRTs0Q0FBSyxLQUFJLGdCQUFlLElBQUcsb0JBQW1CLEtBQUkscUZBQW9GLE9BQU07Z0JBQTVJO2tCQUFBO0FBQUE7Z0JBQ0E7OENBQU0sV0FBVTtnQkFBaEI7a0JBQUE7QUFBQTtnQkFFRjtxQ0FBQyxZQUFTLElBQUcsZUFBYyxTQUFTLFNBQVMsT0FBTSxLQUFJLFlBQVcsUUFBTyxZQUFXLGFBQVksVUFBVTtnQkFBMUc7a0JBRUY7QUFGRTt1QkFFRix1QkFBSyxXQUFVO2dCQUFmO2tCQUFBO0FBQUE7Z0JBQ0U7K0NBQVEsV0FBVSxtQkFBa0IsTUFBSyxVQUFTLElBQUc7Z0JBQXJEO2tCQUFBO0FBQUE7Z0JBRUY7Z0RBQU8sTUFBSyxVQUFTLE1BQUssYUFBWSxJQUFHLGFBQVksT0FBTztnQkFBNUQ7a0JBQUE7QUFBQTtnQkFDQTtzQkFBQSwwQkFBUSxXQUFVLGlCQUFnQixNQUFLLFVBQVMsU0FBUztnQkFBekQ7a0JBQUE7QUFBQTtnQkFBeUU7cUJBQUE7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUE7QUFBQSxLQUkvRTs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFDRTtBQURGLHFCQUNFLDBDQUFNLGFBQWE7Z0JBQW5CO2tCQUFBO0FBQUE7S0FBeUMsaUVBQVcsV0FBVTtnQkFBckI7a0JBQ3pDO0FBRHlDO3VCQUN6QyxzQkFBSSxXQUFVO2dCQUFkO2tCQUFBO0FBQUE7Z0JBQ0U7cUJBQUE7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUk7QUFBSixxQkFBSSwwQ0FBTSxPQUFNLFdBQVUsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUFyRDtrQkFBQTtBQUFBO0tBQ0o7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUk7QUFBSixxQkFBSSwwQ0FBTSxNQUFLLElBQUcsYUFBYTtnQkFBM0I7a0JBQUE7QUFBQTtLQUNKOztnQkFBQTtrQkFBQTtBQUFBO2dCQUFJO0FBQUoscUJBQUksMENBQU0sT0FBTSxVQUFTLFFBQVEsRUFBRSxNQUFGLFFBQVUsYUFBYTtnQkFBcEQ7a0JBQUE7QUFBQTtLQUdSLG9EQUFJLFdBQVU7Z0JBQWQ7a0JBQUE7QUFBQTtnQkFDRTtxQkFBQSwwQ0FBTSxhQUFhO2dCQUFuQjtrQkFBQTtBQUFBO0tBQW1ELDRFQUFXLFdBQVU7Z0JBQXJCO2tCQUNuRDtBQURtRDt1QkFDbkQsc0JBQUksV0FBVTtnQkFBZDtrQkFBQTtBQUFBO2dCQUNFO3FCQUFBOztnQkFBQTtrQkFBQTtBQUFBO2dCQUFJO0FBQUoscUJBQUksMENBQU0sT0FBTSxpQkFBZ0IsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUEzRDtrQkFBQTtBQUFBO0tBQ0o7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUk7QUFBSixxQkFBSSwwQ0FBTSxPQUFNLG1CQUFrQixRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQTdEO2tCQUFBO0FBQUE7S0FDSjs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFBSTtBQUFKLHFCQUFJLDBDQUFNLE9BQU0sZ0JBQWUsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUExRDtrQkFBQTtBQUFBO0tBQ0o7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUk7QUFBSixxQkFBSSwwQ0FBTSxPQUFNLFlBQVcsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUF0RDtrQkFBQTtBQUFBO0tBQ0o7O2dCQUFBO2tCQUFBO0FBQUE7Z0JBQUk7QUFBSixxQkFBSSwwQ0FBTSxPQUFNLDZCQUE0QixRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQXZFO2tCQUFBO0FBQUE7S0FDSjs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFBSTtBQUFKLHFCQUFJLDBDQUFNLE9BQU0scUJBQW9CLFFBQVEsRUFBRSxNQUFGLFFBQVUsYUFBYTtnQkFBL0Q7a0JBQUE7QUFBQTtLQUNKOztnQkFBQTtrQkFBQTtBQUFBO2dCQUFJO0FBQUoscUJBQUksMENBQU0sT0FBTSxhQUFZLFFBQVEsRUFBRSxNQUFGLFFBQVUsYUFBYTtnQkFBdkQ7a0JBQUE7QUFBQTtLQUtaLHlEQUFJLFdBQVU7Z0JBQWQ7a0JBQUE7QUFBQTtnQkFDRTtxQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFDRTtBQURGLHFCQUNFLDBDQUFNLE9BQU0sUUFBTyxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWEsYUFBYSxXQUFVO2dCQUF6RTtrQkFBQTtBQUFBO0tBRUYsZ0RBQUksV0FBVTtnQkFBZDtrQkFBQTtBQUFBO2dCQUNFO3FCQUFBLDBDQUFNLE1BQUssUUFBTyxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQWpEO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVTtnQkFBZjtrQkFBQTtBQUFBO2dCQUEyQjtxQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtnQkFBQTtBQUFBO0FBN0VyQzs7QUFvRkEsV0FBVztlQUNJLHFCQUFVO0FBQXZCOztBQUdGLFdBQVc7ZUFDSTtBQUFiOztrQkFHYSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01mOztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQiw4QkFBMEQ7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBLHlGQUMvRTs7TUFBTSxVQUNOO01BQUksV0FBVyxRQUFRLEtBRXZCOztTQUNFLHFFQUFNLE1BQU0sUUFBaUIsNkNBQUcsV0FBVyxRQUFRLEtBQVksUUFFbEU7QUFQRDs7QUFTQSxlQUFlLFlBQ2I7WUFBVSxxQkFBVSxLQUNwQjtlQUFhLHFCQUFVLE9BQ3ZCO2FBQVcscUJBQVU7O2tCQUdSLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmOzs7Ozs7a0JBQ2U7TUFBRTtTQUNmLDJDQUFTLFdBQ1Asd0RBQVksYUFBSSxPQUFRLGVBQ3hCLHlGQUFLLFdBQ0gsbUVBQU0sT0FBTSxXQUFVLFFBQVEsRUFBRSxNQUMvQixzRUFFRCwyREFBTSxPQUFNLFNBQVEsUUFBUSxFQUFFLE1BQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RSOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QixvQ0FBMEQ7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBLHlGQUNyRjs7TUFBTSxVQUNOO01BQUksV0FBVyxRQUFRLEtBRXZCOztTQUNFLHFFQUFNLE1BQU0sUUFBaUIsNkNBQUcsV0FBVyxRQUFRLEtBQVksUUFFbEU7QUFQRDs7QUFTQSxxQkFBcUIsWUFDbkI7WUFBVSxxQkFBVSxLQUNwQjtlQUFhLHFCQUFVLE9BQ3ZCO2FBQVcscUJBQVU7O2tCQUdSLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxtQkFBbUIsZ0NBQTJCO01BQUE7TUFBQSxZQUNsRDs7TUFBTSxZQUFZLDZCQUFRLEdBQW1CLE9BQzdDO3lCQUNFLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtHQUFBLGtCQUNFOztnQkFBQTtrQkFBSztBQUFMO0FBQUEsZUFDQSxzRUFBTSxPQUFNLFdBQVUsUUFBUSxFQUFFLE1BQUYsUUFBVSxhQUFhO2dCQUFyRDtrQkFBbUU7QUFBbkU7ZUFDQSw0RUFBTSxPQUFNLG9CQUFtQixRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQTlEO2tCQUE0RTtBQUE1RTtlQUNBLDRFQUFNLE9BQU0sVUFBUyxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQXBEO2tCQUFrRTtBQUFsRTtlQUNBLG1FQUFNLE9BQU0sU0FBUSxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQW5EO2tCQUFrRTtBQUFsRTtlQUNBLHlFQUFNLE9BQU0sVUFBUyxRQUFRLEVBQUUsTUFBRixRQUFVLGFBQWE7Z0JBQXBEO2tCQUFrRTtBQUFsRTtlQUdMO0FBWkQ7O0FBY0EsaUJBQWlCO2VBQ0YscUJBQ2I7UUFBTSxxQkFBVTtBQURoQjs7QUFJRixpQkFBaUI7ZUFFZjtRQUFNO0FBRE47O2tCQUlhLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDNUJBO1NBQ2IsdUNBQUssV0FDSCw2REFDQSxpREFBRyxXQUFVLHVCQUNiLGlHQUFNLFFBQU8sSUFBRyxRQUFPLFFBQU8sV0FDNUIsMkRBQUssV0FDSCw2REFBTyxXQUFVLGdCQUFlLGFBQ2hDLDZEQUFPLFdBQVUsb0JBQW1CLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqRDs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO1NBQ2IsMkNBQVMsV0FDUCxnREFBRyxNQUFpRCxpR0FDcEQsNkNBQUcsTUFBaUQsbUdBQ3BELDZDQUFHLE1BQStDLGdHQUFsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JKOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFFQSxJQUFNLFNBQVM7TUFBRztNQUFVO01BQU87TUFBYTtNQUFnQjt5QkFDOUQ7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBO0FBR0k7NkJBQXlCLEVBQUUsZ0JBQUY7O2dCQUYzQjtrQkFLQTtBQUxBO0FBQ0Usc0RBSUksT0FBTztnQkFBYjtrQkFFQTtBQUZBOzREQUVZLE1BQU07Z0JBQWxCO2tCQUVBO0FBRkE7c0JBRUEsdUJBQUssSUFBRztnQkFBUjtrQkFDRTtBQURGO3FCQUNFLHdDQUFjLE9BQU8sZ0JBQWdCLE1BQU07Z0JBQTNDO2tCQUNFO0FBREY7cUJBQ0U7O2dCQUFBO2tCQUVJO0FBRko7QUFBQSxzQkFFb0M7UUFBQTtRQUFBLHdCQUM5Qjs7UUFBTSxhQUVOOztRQUFJLGtCQUFrQixDQUFDLEtBQUssV0FBVyxLQUN2QztRQUFJLGdCQUFnQixXQUFXLEtBQy9COzJCQUNFLDBCQUFRLE9BQU8sT0FBTyxXQUFXLFdBQVcsS0FBSztrQkFBakQ7b0JBQ0U7QUFERjtLQUFBLHdEQUNjLGFBQWEsYUFBYSxNQUFNO2tCQUE1QztvQkFHTDtBQUhLOztBQVFaOztnQkFBQTtrQkFDSTtBQURKO0FBQUEsS0FJQTs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLGlFQUNvQixhQUFhLGFBQWEsTUFBTTtnQkFBbEQ7a0JBQ0E7QUFEQTs7O2dCQUNBO2tCQUNBO0FBREE7QUFBQSxzQkFDQSx1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7OztnQkFDRTtrQkFDQTtBQURBO0FBQUEsK0RBQ2UsTUFBTTtnQkFBckI7a0JBQUE7QUFBQTs7QUF4Q1o7O0FBaURBLE9BQU87WUFDSyxxQkFDVjtTQUFPLHFCQUNQO2tCQUFnQixxQkFDaEI7ZUFBYSxxQkFBVSxPQUN2QjtRQUFNLHFCQUFVLE9BQU87QUFKdkI7O0FBT0YsT0FBTztTQUVMO1lBQ0E7a0JBQ0E7UUFBTTtBQUhOOztrQkFNYSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRmY7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWU7O0FBRW5CO0FBQ0EsSUFBSSxDQUFDLFFBQVEsU0FDWDtTQUFPLDBCQUNSOzs7QUFFRDs7OztBQUlBLFNBQVMsV0FBVyxTQUFTLGNBQzNCOztrQkFFRTthQUFTLENBQUMsUUFDVjtzQkFBa0I7YUFBVSxPQUFPLE1BQU07QUFDekM7O1dBRUU7O3FCQUNlO0FBQWI7QUFGRixLQURnQixFQU1mO0FBQUssZ0RBQ1EsS0FBSyxNQUFNO29CQUN6Qjs7WUFBSSxDQUFDLElBQUksUUFBUSxTQUNmO2NBQUksUUFBUSxVQUFVLElBQ3ZCO0FBRUQ7O0FBQ0E7bUVBQUM7Y0FBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFBQTtrQ0FBQTt5QkFDcUIsa0JBQVE7O3FCQUF0QjtBQURQLG1DQUVDOztzQkFBSSxRQUFRLFFBQVEsZ0JBQWdCLG9CQUFrQixRQUN0RDtBQUhEOztxQkFBQTtxQkFBQTtrQ0FBQTs7QUFBQTtzQkFBQTtBQUtGO0FBR0o7QUFkRyxLQURPO0FBVFAsR0FESzs7O2tCQTJCTSxVQUFDLFNBQStCO01BQUEsbUZBQzdDOztNQUFJLENBQUMsUUFBUSxTQUNYO1dBQU8sV0FBVyxTQUNuQjtBQUNEO01BQUksQ0FBQyxjQUNIO21CQUFlLFdBQVcsU0FDM0I7QUFDRDtTQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJLGFBQWE7O2tCQUVGLFVBQUMsUUFBUSxjQUN0QjtNQUFJLGFBQ0o7TUFBSSxDQUFDLFFBQVEsV0FBVyxDQUFDLFlBQ3ZCO1FBQU0sYUFBYSwwQkFBaUIsT0FDcEM7WUFBUSx3QkFBWSx1QkFBVyxTQUFTLGNBQ3hDO1FBQUksQ0FBQyxRQUFRLFNBQ1g7YUFDRDtBQUNEO2lCQUNEO0FBQ0Q7U0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDVnVCOztBQVB4Qjs7QUFFQTs7Ozs7QUFLZSxTQUFTLGlCQUFpQixrQkFDdkM7TUFBTSxhQUFhLDRCQUNuQjtNQUFJLFFBQVEsV0FBVyxPQUFPLG1CQUM1QjtXQUFPLG9CQUFRLFlBQVksT0FDNUI7QUFDRDtTQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU47Ozs7Ozs7Ozs7Ozs7NkRBS2lCLFFBQVEsUUFBUSxtQkFBbUIsTUFBTTt5QkFBTztBQUE1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFHd0I7Ozs7OzhEQUNaLFFBQVEsUUFBUSxtQkFBbUIsT0FBTyxNQUFNO3lCQUFPO0FBQW5FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBSVksV0FBVyxRQUFRLG1CQUFtQixNQUFNO3lCQUFPO0FBQS9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBSVksUUFBUSxRQUFRLGtCQUFrQixNQUFNO3lCQUFPO0FBQTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytGQUd1Qjs7Ozs7OERBQ1gsUUFBUSxRQUFRLGtCQUFrQixPQUFPLE1BQU07eUJBQU87QUFBbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFJWSxXQUFXLFFBQVEsa0JBQWtCLE1BQU07eUJBQU87QUFBOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkF4QndCO2FBQXVCOzs7O3dCQUN4QjthQUFzQjs7Ozs7O0FBMkJ4RCxPQUFPLFVBQVUsUTs7Ozs7Ozs7Ozs7O0FDL0JqQjs7OztBQUNBOzs7Ozs7OztBQUVBLGdCQUFPLHFCQUFxQjtTQUFNLG9CQUFVO0FBQTVDO0FBQ0EsZ0JBQU8sd0JBQXdCO1NBQU0sb0JBQVU7QUFBL0M7QUFDQSxnQkFBTyxxQkFBcUI7U0FBTSxvQkFBVTtBQUE1QyxFOzs7Ozs7Ozs7Ozs7Ozs7a0JDR3dCOztBQVJ4Qjs7QUFDQTs7QUFFQTs7Ozs7QUFLZSxTQUFTLFdBQVcsUUFDakM7O2lDQUVFO1lBQVEsT0FFWDtBQUhHLEdBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBTEE7O2tCQVFlO3FDQUFBO29DQUFBOztXQUFBO3lCQUFBOytGQUVrQixLQUZsQjtrREFBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFHSDtBQUhHLDRCQUdPLElBQUksTUFBTSxJQUFJLElBQUksVUFDNUI7QUFKRywyQkFJTSwwQkFDVDtBQUxHLDBCQUtLLHlCQUFVLFFBQVEsT0FBTzswQ0FMOUI7O3lCQVFGLEVBQUUsT0FBTyxJQUFJLE9BQU8sVUFBVSxJQUFJO0FBQXZDO2tDQVJPO3lCQVNHLFVBQVUsa0JBQWtCLFVBQVUsZ0JBQWdCLE9BQU87O3FCQVRoRTt5Q0FPSDtBQVBHOztzQkFZSixRQUFRLFNBWko7b0NBQUE7QUFBQTtBQWFEOztBQWJDLHdCQWNMLDZEQUFnQixRQUFRLFFBQVEsT0FDOUIsdUNBQUMsV0FBYztrQ0FmWjt5QkFrQkQsa0NBQWdCOztxQkFHbEI7QUFyQkcsMEJBcUJLLE1BQU07OzZEQUliOzs4QkFFSyxPQUFPLGtCQUdqQjtBQUhJO0FBREY7NkJBMUJLO0FBd0JQLHFCQU9HOztxQkEvQkk7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQW1DWDtBQW5DVzs7b0JBbUNDLE9BQU87MENBQUE7O3dJQUVqQjs7WUFBSyxTQUFTLDBCQUFXLE1BQUssTUFBTSxTQUFTLE1BQUssTUFDbEQ7WUFBSyxRQUFRLHlCQUFVLE1BQUssUUFBUSxNQUFLLE1BQU07YUFDaEQ7QUF2Q1U7OztXQUFBOytCQTBDVDtlQUNFLDZEQUFnQixRQUFRLEtBQUssUUFBUSxPQUFPLEtBQzFDLHVDQUFDLFdBQWMsS0FHcEI7QUEvQ1U7QUFBQTtXQUFBO0lBQ0MsZ0JBQU07Ozs7Ozs7Ozs7O0FDVHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0IiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5leHRSb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpO1xuXG5jb25zdCByb3V0ZXMgPSBuZXh0Um91dGVzKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcblxuLy8gYXJndXJtZW50czogbmFtZSwgdXJsLCBuYW1lIG9mIGZpbGUgdW5kZXIgcGFnZSA9IG5hbWVcbmNvbnN0IHJvb3RQYXRoID0gJy86bGFuZyc7IC8vICAvOmxhbmdcbnJvdXRlcy5hZGQoJ2hvbWUnLCBgJHtyb290UGF0aH0vYCwgJy8nKTtcblxucm91dGVzLmFkZCgnc2hvd193YXRjaCcsIGAke3Jvb3RQYXRofS93YXRjaGVzLzppZGAsICcvcHJvZHVjdHMvc2hvdycpO1xucm91dGVzLmFkZCgnc2hvd19zdHJhcCcsIGAke3Jvb3RQYXRofS9zdHJhcHMvOmlkYCwgJy9wcm9kdWN0cy9zaG93Jyk7XG5cbnJvdXRlcy5hZGQoJ3dhdGNoZXMnLCBgJHtyb290UGF0aH0vd2F0Y2hlc2AsICcvY2F0ZWdvcnkvd2F0Y2hlcy9zaG93Jyk7XG5yb3V0ZXMuYWRkKCdzdHJhcHMnLCBgJHtyb290UGF0aH0vc3RyYXBzYCwgJy9jYXRlZ29yeS9zdHJhcHMvc2hvdycpO1xucm91dGVzLmFkZCgnamV3ZWxyeScsIGAke3Jvb3RQYXRofS9qZXdlbHJ5YCwgJy9jYXRlZ29yeS9qZXdlbHJ5L3Nob3cnKTtcblxuLyogZm9yIHRlbXAgbGluayAtPiBQYWdlcyBhcmUgbm90IGNyZWF0ZWQgKi9cbnJvdXRlcy5hZGQoJ2luc3BpcmF0aW9uJywgYCR7cm9vdFBhdGh9L2luc3BpcmF0aW9uYCwgJy9pbnNwaXJhdGlvbi9pbmRleCcpO1xucm91dGVzLmFkZCgnc2VydmljZScsIGAke3Jvb3RQYXRofS9zZXJ2aWNlYCwgJy9zZXJ2aWNlL2luZGV4Jyk7XG5cbnJvdXRlcy5hZGQoJ3Rlcm1zJywgYCR7cm9vdFBhdGh9L3Rlcm1zYCwgJy90ZXJtcy9pbmRleCcpO1xucm91dGVzLmFkZCgncHJpdmFjeScsIGAke3Jvb3RQYXRofS9wcml2YWN5YCwgJy9wcml2YWN5L2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdzaGlwcGluZy1yZXR1cm5zJywgYCR7cm9vdFBhdGh9L3NoaXBwaW5nLXJldHVybnNgLCAnL3NoaXBwaW5nLXJldHVybnMvaW5kZXgnKTtcbnJvdXRlcy5hZGQoJ2xvZ2luJywgYCR7cm9vdFBhdGh9L2xvZ2luYCwgJy9sb2dpbi9pbmRleCcpO1xucm91dGVzLmFkZCgnZm9yZ290cGFzc3dvcmQnLCBgJHtyb290UGF0aH0vZm9yZ290cGFzc3dvcmRgLCAnL2ZvcmdvdHBhc3N3b3JkL2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdvdXItc3RvcnknLCBgJHtyb290UGF0aH0vb3VyLXN0b3J5YCwgJy9vdXItc3RvcnkvaW5kZXgnKTtcbnJvdXRlcy5hZGQoJ3JlZ2lzdGVyJywgYCR7cm9vdFBhdGh9L3JlZ2lzdGVyYCwgJy9yZWdpc3Rlci9pbmRleCcpO1xucm91dGVzLmFkZCgnY2FyZWVyJywgYCR7cm9vdFBhdGh9L2NhcmVlcmAsICcvY2FyZWVyL2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdjaGVja291dCcsIGAke3Jvb3RQYXRofS9jaGVja291dGAsICcvY2hlY2tvdXQvaW5kZXgnKTtcbnJvdXRlcy5hZGQoJ2pvYi1kZXRhaWwnLCBgJHtyb290UGF0aH0vam9iLWRldGFpbC86aWRgLCAnL2pvYi1kZXRhaWwvaW5kZXgnKTtcbnJvdXRlcy5hZGQoJ215LWFjY291bnQnLCBgJHtyb290UGF0aH0vbXktYWNjb3VudGAsICcvbXktYWNjb3VudC9pbmRleCcpO1xucm91dGVzLmFkZCgnY3VzdG9tZXIvYWNjb3VudC9lZGl0JywgYCR7cm9vdFBhdGh9L2N1c3RvbWVyL2FjY291bnQvZWRpdGAsICcvbXktYWNjb3VudC9lZGl0Jyk7XG5yb3V0ZXMuYWRkKCdjdXN0b21lci9hZGRyZXNzJywgYCR7cm9vdFBhdGh9L2N1c3RvbWVyL2FkZHJlc3NgLCAnL215LWFjY291bnQvYWRkcmVzcycpO1xucm91dGVzLmFkZCgnY3VzdG9tZXIvYWRkcmVzcy9lZGl0JywgYCR7cm9vdFBhdGh9L2N1c3RvbWVyL2FkZHJlc3MvZWRpdGAsICcvbXktYWNjb3VudC9lZGl0LWFkZHJlc3MnKTtcbnJvdXRlcy5hZGQoJ2N1c3RvbWVyL2FkZHJlc3MvYWRkJywgYCR7cm9vdFBhdGh9L2N1c3RvbWVyL2FkZHJlc3MvYWRkYCwgJy9teS1hY2NvdW50L2FkZC1hZGRyZXNzJyk7XG5yb3V0ZXMuYWRkKCcvY3VzdG9tZXIvbmV3c2xldHRlci1lZGl0JywgYCR7cm9vdFBhdGh9L2N1c3RvbWVyL25ld3NsZXR0ZXItZWRpdGAsICcvbXktYWNjb3VudC9uZXdzbGV0dGVyLWVkaXQnKTtcblxucm91dGVzLmFkZCgnY2FtcGFpZ24nLCBgJHtyb290UGF0aH0vY2FtcGFpZ25gLCAnL2NhbXBhaWduL2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdhLWRheS13aXRoLWFieScsIGAke3Jvb3RQYXRofS9hLWRheS13aXRoLWFieWAsICcvY2FtcGFpZ24vYWJ5Jyk7XG5yb3V0ZXMuYWRkKCdhLWRheS13aXRoLWFsbHknLCBgJHtyb290UGF0aH0vYS1kYXktd2l0aC1hbGx5YCwgJy9jYW1wYWlnbi9hbGx5Jyk7XG5cbnJvdXRlcy5hZGQoJ2Rvd250b3duLWNoaWMnLCBgJHtyb290UGF0aH0vZG93bnRvd24tY2hpY2AsICcvY2FtcGFpZ24vZG93bnRvd24tY2hpYycpO1xucm91dGVzLmFkZCgndXBwZXItZWFzdC1zaWRlJywgYCR7cm9vdFBhdGh9L3VwcGVyLWVhc3Qtc2lkZWAsICcvY2FtcGFpZ24vdXBwZXItZWFzdC1zaWRlJyk7XG5yb3V0ZXMuYWRkKCd3ZXN0LXZpbGxhZ2UnLCBgJHtyb290UGF0aH0vd2VzdC12aWxsYWdlYCwgJy9jYW1wYWlnbi93ZXN0LXZpbGxhZ2UnKTtcblxucm91dGVzLmFkZCgnc3RvcmVzJywgYCR7cm9vdFBhdGh9L3N0b3Jlc2AsICcvc3RvcmVzL2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdsb2NhdGlvbi1kZXRhaWwnLCBgJHtyb290UGF0aH0vbG9jYXRpb24tZGV0YWlsLzppZGAsICcvbG9jYXRpb24tZGV0YWlsL2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdjdXN0b21lci9vcmRlcnMnLCBgJHtyb290UGF0aH0vY3VzdG9tZXIvb3JkZXJzYCwgJy9teS1hY2NvdW50L29yZGVycycpO1xucm91dGVzLmFkZCgnL2N1c3RvbWVyL29yZGVyL3ZpZXcnLCBgJHtyb290UGF0aH0vY3VzdG9tZXIvb3JkZXIvdmlld2AsICcvbXktYWNjb3VudC92aWV3Jyk7XG5yb3V0ZXMuYWRkKCdzdXBwb3J0JywgYCR7cm9vdFBhdGh9L3N1cHBvcnRgLCAnL3N1cHBvcnQvaW5kZXgnKTtcblxucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLXN0ZXBoYW5pZScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtc3RlcGhhbmllYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgtc3RlcGhhbmllJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtdmlybmEtYXV2ZXJnbmUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy12aXJuYS1hdXZlcmduZWAsICcvMTVtaW4vMTUtbWludXRlcy13aXRoLXZpcm5hLWF1dmVyZ25lJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtZXNtZWUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWVzbWVlYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgtZXNtZWUnKTtcbnJvdXRlcy5hZGQoJzE1LW1pbnV0ZXMtd2l0aC1uaWNvbGUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLW5pY29sZWAsICcvMTVtaW4vMTUtbWludXRlcy13aXRoLW5pY29sZScpO1xucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLWxlbmEnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWxlbmFgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1sZW5hJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtY2hsb2UnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWNobG9lYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgtY2hsb2UnKTtcbnJvdXRlcy5hZGQoJzE1LW1pbnV0ZXMtd2l0aC1sYXVyaWFubmUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWxhdXJpYW5uZWAsICcvMTVtaW4vMTUtbWludXRlcy13aXRoLWxhdXJpYW5uZScpO1xucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLXlpbicsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgteWluYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgteWluJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtcmViZWNjYScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtcmViZWNjYWAsICcvMTVtaW4vMTUtbWludXRlcy13aXRoLXJlYmVjY2EnKTtcbnJvdXRlcy5hZGQoJzE1LW1pbnV0ZXMtd2l0aC1jYXJvbGluZScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtY2Fyb2xpbmVgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1jYXJvbGluZScpO1xucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLWFubmFiZWwnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWFubmFiZWxgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1hbm5hYmVsJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtYmFyYmFyYScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtYmFyYmFyYWAsICcvMTVtaW4vMTUtbWludXRlcy13aXRoLWJhcmJhcmEnKTtcbnJvdXRlcy5hZGQoJzE1LW1pbnV0ZXMtd2l0aC1jaGV5ZW5uZScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtY2hleWVubmVgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1jaGV5ZW5uZScpO1xucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLWplYW5pbmUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWplYW5pbmVgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1qZWFuaW5lJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgtbHVkaXZpbmUnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWx1ZGl2aW5lYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgtbHVkaXZpbmUnKTtcbnJvdXRlcy5hZGQoJzE1LW1pbnV0ZXMtd2l0aC1sYWV0aXRpYScsIGAke3Jvb3RQYXRofS8xNS1taW51dGVzLXdpdGgtbGFldGl0aWFgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1sYWV0aXRpYScpO1xucm91dGVzLmFkZCgnMTUtbWludXRlcy13aXRoLXBhdWxpbmEnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLXBhdWxpbmFgLCAnLzE1bWluLzE1LW1pbnV0ZXMtd2l0aC1wYXVsaW5hJyk7XG5yb3V0ZXMuYWRkKCcxNS1taW51dGVzLXdpdGgta2F0amEnLCBgJHtyb290UGF0aH0vMTUtbWludXRlcy13aXRoLWthdGphYCwgJy8xNW1pbi8xNS1taW51dGVzLXdpdGgta2F0amEnKTtcbnJvdXRlcy5hZGQoJ3RhbmdlcmluZS1zdW1tZXItc2V0JywgYCR7cm9vdFBhdGh9L3RhbmdlcmluZS1zdW1tZXItc2V0YCwgJy9naWZ0LXNldC90YW5nZXJpbmUtc3VtbWVyLXNldCcpO1xucm91dGVzLmFkZCgnbXlyb3NlZmllbGRtb21lbnQnLCBgJHtyb290UGF0aH0vbXlyb3NlZmllbGRtb21lbnRgLCAnL215cm9zZWZpZWxkbW9tZW50L2luZGV4Jyk7XG5yb3V0ZXMuYWRkKCdjYXJ0JywgYCR7cm9vdFBhdGh9L2NhcnRgLCAnL2NhcnQvaW5kZXgnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9yb3V0ZXMuanMiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuXG5pbXBvcnQgUG9wdWxhaXJQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVsYWlyUHJvZHVjdHMnO1xuaW1wb3J0IFBob3RvU2x1cnBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9QaG90b1NsdXJwU2VjdGlvbic7XG5pbXBvcnQgQmVoaW5kQnJhbmQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0JlaGluZEJyYW5kJztcbmltcG9ydCBGaWZ0ZWVuTWluV2l0aCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvMTVNaW5XaXRoJztcblxuZXhwb3J0IGNvbnN0IEluZGV4UGFnZSA9ICh7IHVybCB9KSA9PiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICA8TGF5b3V0IGxhbmc9e3VybC5xdWVyeS5sYW5nfSBjdXJyZW50UGF0aD17dXJsICYmIHVybC5wYXRobmFtZX0gdG9wQmFubmVySW1hZ2U9eycvc3RhdGljL2ltYWdlcy9iYW5uZXItYmcucG5nJ30+XG4gICAgPFBvcHVsYWlyUHJvZHVjdHMgbGFuZz17dXJsLnF1ZXJ5Lmxhbmd9IC8+XG4gICAgPEJlaGluZEJyYW5kIGxhbmc9e3VybC5xdWVyeS5sYW5nfSAvPlxuICAgIDxGaWZ0ZWVuTWluV2l0aCBsYW5nPXt1cmwucXVlcnkubGFuZ30gLz5cbiAgICA8UGhvdG9TbHVycFNlY3Rpb24gLz5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShJbmRleFBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJUaGUgR3JhbWVyY3lcIixcblx0XHRcInNob3J0X2Rlc2NyaXB0aW9uXCI6IFwiV2hpdGUgLSBCbGFja1wiLFxuXHRcdFwicHJpY2VcIjogODkwMCxcblx0XHRcImltYWdlXCI6IFwiaHR0cHM6Ly9pLnJvc2VmaWVsZHdhdGNoZXMuY29tL3Byb2R1Y3RzL3dhdGNoZXMvdGhlLWdyYW1lcmN5L1RoZS1HcmFtZXJjeS1XaGl0ZS1ibGFjay5wbmdcIlxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIlRoZSBHcmFtZXJjeVwiLFxuXHRcdFwic2hvcnRfZGVzY3JpcHRpb25cIjogXCJXaGl0ZSAtIFJvc2Vnb2xkXCIsXG5cdFx0XCJwcmljZVwiOiA4OTAwLFxuXHRcdFwiaW1hZ2VcIjogXCJodHRwczovL2kucm9zZWZpZWxkd2F0Y2hlcy5jb20vcHJvZHVjdHMvd2F0Y2hlcy90aGUtbWVyY2VyL3RoZS1tZXJjZXItd2hpdGUtcm9zZWdvbGQucG5nXCJcblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJUaGUgQm93ZXJ5XCIsXG5cdFx0XCJzaG9ydF9kZXNjcmlwdGlvblwiOiBcIldoaXRlIC0gQmxhY2tcIixcblx0XHRcInByaWNlXCI6IDg5MDAsXG5cdFx0XCJpbWFnZVwiOiBcImh0dHBzOi8vaS5yb3NlZmllbGR3YXRjaGVzLmNvbS9wcm9kdWN0cy93YXRjaGVzL3RoZS1ib3dlcnkvVGhlLUJvd2VyeS1XaGl0ZS1CbGFjay1zaWx2ZXIucG5nXCJcblx0fSxcblx0e1xuXHRcdFwiaWRcIjogNCxcblx0XHRcIm5hbWVcIjogXCJUaGUgQm93ZXJ5XCIsXG5cdFx0XCJzaG9ydF9kZXNjcmlwdGlvblwiOiBcIldoaXRlIC0gQnJvd25cIixcblx0XHRcInByaWNlXCI6IDg5MDAsXG5cdFx0XCJpbWFnZVwiOiBcImh0dHBzOi8vaS5yb3NlZmllbGR3YXRjaGVzLmNvbS9wcm9kdWN0cy93YXRjaGVzL3RoZS1ib3dlcnkvVGhlLUJvd2VyeS1XaGl0ZS1Ccm93bi5wbmdcIlxuXHR9XG5dO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9kdW1teV9kYXRhL3BvcHVsYWlyX3Byb2R1Y3RzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDEsXG5cdFx0XCJjb2RlXCI6IFwidXNcIixcblx0XHRcIm5hbWVcIjogXCJVU0FcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy91cy5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAxLFxuXHRcdFx0XHRcImNvZGVcIjogXCJ1c1wiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAyLFxuXHRcdFwiY29kZVwiOiBcInVrXCIsXG5cdFx0XCJuYW1lXCI6IFwiVUtcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy91ay5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAzLFxuXHRcdFx0XHRcImNvZGVcIjogXCJ1a1wiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAzLFxuXHRcdFwiY29kZVwiOiBcImJlXCIsXG5cdFx0XCJuYW1lXCI6IFwiQmVsZ2l1bVwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2JlLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDQsXG5cdFx0XHRcdFwiY29kZVwiOiBcImJlXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkR1dGNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAyMixcblx0XHRcdFx0XCJjb2RlXCI6IFwiYmVfZnJcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRnJlbmNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAyMyxcblx0XHRcdFx0XCJjb2RlXCI6IFwiYmVfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogNCxcblx0XHRcImNvZGVcIjogXCJkZVwiLFxuXHRcdFwibmFtZVwiOiBcIkdlcm1hbnlcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9kZS5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1LFxuXHRcdFx0XHRcImNvZGVcIjogXCJkZVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXJtYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDI2LFxuXHRcdFx0XHRcImNvZGVcIjogXCJkZV9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiA3LFxuXHRcdFwiY29kZVwiOiBcIm5sXCIsXG5cdFx0XCJuYW1lXCI6IFwiTmV0aGVybGFuZHNcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9ubC5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA4LFxuXHRcdFx0XHRcImNvZGVcIjogXCJubFwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJEdXRjaFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMjAsXG5cdFx0XHRcdFwiY29kZVwiOiBcIm5sX2VuXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDgsXG5cdFx0XCJjb2RlXCI6IFwiZXNcIixcblx0XHRcIm5hbWVcIjogXCJTcGFpblwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2VzLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDksXG5cdFx0XHRcdFwiY29kZVwiOiBcImVzXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIlNwYW5pc2hcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDI5LFxuXHRcdFx0XHRcImNvZGVcIjogXCJlc19lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiA5LFxuXHRcdFwiY29kZVwiOiBcImF1XCIsXG5cdFx0XCJuYW1lXCI6IFwiQXVzdHJhbGlhXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvYXUucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMTAsXG5cdFx0XHRcdFwiY29kZVwiOiBcImF1XCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDEwLFxuXHRcdFwiY29kZVwiOiBcImF0XCIsXG5cdFx0XCJuYW1lXCI6IFwiQXVzdHJpYVwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2F0LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDExLFxuXHRcdFx0XHRcImNvZGVcIjogXCJhdFwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXJtYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDIxLFxuXHRcdFx0XHRcImNvZGVcIjogXCJhdF9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxMSxcblx0XHRcImNvZGVcIjogXCJjYVwiLFxuXHRcdFwibmFtZVwiOiBcIkNhbmFkYVwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2NhLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDEyLFxuXHRcdFx0XHRcImNvZGVcIjogXCJjYVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAyNCxcblx0XHRcdFx0XCJjb2RlXCI6IFwiY2FfZnJcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRnJlbmNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxMixcblx0XHRcImNvZGVcIjogXCJteFwiLFxuXHRcdFwibmFtZVwiOiBcIk1leGljb1wiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL214LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDEzLFxuXHRcdFx0XHRcImNvZGVcIjogXCJteFwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJTcGFuaXNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAyOCxcblx0XHRcdFx0XCJjb2RlXCI6IFwibXhfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMTMsXG5cdFx0XCJjb2RlXCI6IFwiZXVcIixcblx0XHRcIm5hbWVcIjogXCJFVVwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2V1LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDE0LFxuXHRcdFx0XHRcImNvZGVcIjogXCJldVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxNCxcblx0XHRcImNvZGVcIjogXCJ3d1wiLFxuXHRcdFwibmFtZVwiOiBcIkdsb2JhbFwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL3d3LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDE1LFxuXHRcdFx0XHRcImNvZGVcIjogXCJ3d1wiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxNyxcblx0XHRcImNvZGVcIjogXCJpdFwiLFxuXHRcdFwibmFtZVwiOiBcIkl0YWx5XCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvaXQucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMTgsXG5cdFx0XHRcdFwiY29kZVwiOiBcIml0XCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkl0YWxpYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDI3LFxuXHRcdFx0XHRcImNvZGVcIjogXCJpdF9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxOCxcblx0XHRcImNvZGVcIjogXCJmclwiLFxuXHRcdFwibmFtZVwiOiBcIkZyYW5jZVwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2ZyLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDE5LFxuXHRcdFx0XHRcImNvZGVcIjogXCJmclwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJGcmVuY2hcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDI1LFxuXHRcdFx0XHRcImNvZGVcIjogXCJmcl9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAxOSxcblx0XHRcImNvZGVcIjogXCJjaFwiLFxuXHRcdFwibmFtZVwiOiBcIlN3aXR6ZXJsYW5kXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvY2gucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMzAsXG5cdFx0XHRcdFwiY29kZVwiOiBcImNoXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdlcm1hblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMzEsXG5cdFx0XHRcdFwiY29kZVwiOiBcImNoX2ZyXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkZyZW5jaFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMzIsXG5cdFx0XHRcdFwiY29kZVwiOiBcImNoX2l0XCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkl0YWxpYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDMzLFxuXHRcdFx0XHRcImNvZGVcIjogXCJjaF9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAyMCxcblx0XHRcImNvZGVcIjogXCJwbFwiLFxuXHRcdFwibmFtZVwiOiBcIlBvbGFuZFwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL3BsLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDM0LFxuXHRcdFx0XHRcImNvZGVcIjogXCJwbFwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJQb2xpc2hcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDM1LFxuXHRcdFx0XHRcImNvZGVcIjogXCJwbF9lblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJFbmdsaXNoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIndlYnNpdGVJZFwiOiAyMSxcblx0XHRcImNvZGVcIjogXCJka1wiLFxuXHRcdFwibmFtZVwiOiBcIkRlbm1hcmtcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9kay5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAzNixcblx0XHRcdFx0XCJjb2RlXCI6IFwiZGtcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRGFuaXNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAzNyxcblx0XHRcdFx0XCJjb2RlXCI6IFwiZGtfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMjIsXG5cdFx0XCJjb2RlXCI6IFwiaWVcIixcblx0XHRcIm5hbWVcIjogXCJJcmVsYW5kXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvaWUucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogMzgsXG5cdFx0XHRcdFwiY29kZVwiOiBcImllXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDIzLFxuXHRcdFwiY29kZVwiOiBcIm56XCIsXG5cdFx0XCJuYW1lXCI6IFwiTmV3IFplYWxhbmRcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9uei5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiAzOSxcblx0XHRcdFx0XCJjb2RlXCI6IFwibnpcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMjQsXG5cdFx0XCJjb2RlXCI6IFwiY3pcIixcblx0XHRcIm5hbWVcIjogXCJDemVjaCBSZXB1YmxpY1wiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2N6LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDQwLFxuXHRcdFx0XHRcImNvZGVcIjogXCJjelwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJDemVjaFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDEsXG5cdFx0XHRcdFwiY29kZVwiOiBcImN6X2VuXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDI1LFxuXHRcdFwiY29kZVwiOiBcInphXCIsXG5cdFx0XCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvemEucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDIsXG5cdFx0XHRcdFwiY29kZVwiOiBcInphXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDI2LFxuXHRcdFwiY29kZVwiOiBcInNnXCIsXG5cdFx0XCJuYW1lXCI6IFwiU2luZ2Fwb3JlXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvc2cucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDMsXG5cdFx0XHRcdFwiY29kZVwiOiBcInNnXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDI3LFxuXHRcdFwiY29kZVwiOiBcInNlXCIsXG5cdFx0XCJuYW1lXCI6IFwiU3dlZGVuXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvc2UucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDQsXG5cdFx0XHRcdFwiY29kZVwiOiBcInNlXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIlN3ZWRlblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDUsXG5cdFx0XHRcdFwiY29kZVwiOiBcInNlX2VuXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDI4LFxuXHRcdFwiY29kZVwiOiBcIm5vXCIsXG5cdFx0XCJuYW1lXCI6IFwiTm9yd2F5XCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvbm8ucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDYsXG5cdFx0XHRcdFwiY29kZVwiOiBcIm5vXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIk5vcndlZ2lhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNDcsXG5cdFx0XHRcdFwiY29kZVwiOiBcIm5vX2VuXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDI5LFxuXHRcdFwiY29kZVwiOiBcImZpXCIsXG5cdFx0XCJuYW1lXCI6IFwiRmlubGFuZFwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL2ZpLnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDQ4LFxuXHRcdFx0XHRcImNvZGVcIjogXCJmaVwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJGaW5uaXNoXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA0OSxcblx0XHRcdFx0XCJjb2RlXCI6IFwiZmlfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMzAsXG5cdFx0XCJjb2RlXCI6IFwiaGtcIixcblx0XHRcIm5hbWVcIjogXCJIb25nIEtvbmdcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9oay5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1MCxcblx0XHRcdFx0XCJjb2RlXCI6IFwiaGtcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMzEsXG5cdFx0XCJjb2RlXCI6IFwic2FcIixcblx0XHRcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9zYS5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1MSxcblx0XHRcdFx0XCJjb2RlXCI6IFwic2FcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiQXJhYmljXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1Mixcblx0XHRcdFx0XCJjb2RlXCI6IFwic2FfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMzIsXG5cdFx0XCJjb2RlXCI6IFwiYWVcIixcblx0XHRcIm5hbWVcIjogXCJVbml0ZWQgQXJhYmljIEVtaXJhdGVzXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvYWUucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNTMsXG5cdFx0XHRcdFwiY29kZVwiOiBcImFlXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDMzLFxuXHRcdFwiY29kZVwiOiBcImtyXCIsXG5cdFx0XCJuYW1lXCI6IFwiU291dGggS29yZWFcIixcblx0XHRcImZsYWdcIjogXCJodHRwczovL2Rldi5yb3NlZmllbGR3YXRjaGVzLmNvbS9za2luL2Zyb250ZW5kL3dhdGNoZXMvZGVmYXVsdC9pbWFnZXMvZmxhZy9rci5wbmdcIixcblx0XHRcInN0b3Jlc1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1NCxcblx0XHRcdFx0XCJjb2RlXCI6IFwia3JcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiS29yZWFuXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwic3RvcmVJZFwiOiA1NSxcblx0XHRcdFx0XCJjb2RlXCI6IFwia3JfZW5cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwiRW5nbGlzaFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJ3ZWJzaXRlSWRcIjogMzQsXG5cdFx0XCJjb2RlXCI6IFwianBcIixcblx0XHRcIm5hbWVcIjogXCJKYXBhblwiLFxuXHRcdFwiZmxhZ1wiOiBcImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL3d3LnBuZ1wiLFxuXHRcdFwic3RvcmVzXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJzdG9yZUlkXCI6IDU2LFxuXHRcdFx0XHRcImNvZGVcIjogXCJqcFwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJKYXBhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNTcsXG5cdFx0XHRcdFwiY29kZVwiOiBcImpwX2VuXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwid2Vic2l0ZUlkXCI6IDM1LFxuXHRcdFwiY29kZVwiOiBcImlkXCIsXG5cdFx0XCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsXG5cdFx0XCJmbGFnXCI6IFwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvaWQucG5nXCIsXG5cdFx0XCJzdG9yZXNcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInN0b3JlSWRcIjogNTgsXG5cdFx0XHRcdFwiY29kZVwiOiBcImlkXCIsXG5cdFx0XHRcdFwibmFtZVwiOiBcIkVuZ2xpc2hcIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHVtbXlfZGF0YS93ZWJzaXRlX3N0b3Jlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWFpblRpdGxlXCI6IFwiMTUgTWludXRlcyBXaXRoXCIsXG5cdFwiTmFtZVwiOiBcIlN0ZXBoYW5pZSAvIEZhc2hpb24gRmVhdHVyZXMgZWRpdG9yXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGF0dHJhY3RpdmUgd2F0Y2hlcnMgd2hvIGFyZSBsb29raW5nIGZvcndhcmQgdG8gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy5cIixcblx0XCJMaW5rVGV4dFwiOiBcIlJlYWQgTW9yZVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2F0L2hvbWUtMTVtaW4td2l0aC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQU1TTllDXCI6IFwiQU1TIHwgTllDXCIsXG5cdFwiVGl0bGVcIjogXCJCZWhpbmQgdGhlIGJyYW5kXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzIG1hbnVmYWN0dXJlcnMgd2hvIGhhdmUgYmVlbiBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLiBUaGUgcmVzdWx0IGlzIGFuIGV4dGVuc2l2ZSBjb2xsZWN0aW9uIG9mIHByZW1pdW0gcHJlbWl1bSBxdWFsaXR5IHdhdGNoZXMgd2l0aCB0d28geWVhciB3YXJyYW50eSwgd2hpY2ggYWxzbyBsb29rcyB2ZXJ5IGdvb2QuXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYXQvaG9tZS1iZWhpbmQtYnJhbmQuanNvblxuLy8gbW9kdWxlIGlkID0gNjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkludHJvZHVjaW5nVGV4dFwiOiBcIkludHJvZHVjaW5nXCIsXG5cdFwiVGl0bGVcIjogXCJUaGUgV2VzdCBWaWxsYWdlXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzXCIsXG5cdFwiU2hvcE5vd0J0blwiOiBcIlNob3AgTm93XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYXQvaG9tZS1tYWluLWJhbm5lci5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRG93bnRvd25fQ2hpY1wiOiBcIkRvd250b3duIENoaWNcIixcblx0XCJVcHBlcl9FYXN0X1NpZGVcIjogXCJVcHBlciBFYXN0IFNpZGVcIixcblx0XCJXZXN0X1ZpbGxhZ2VcIjogXCJXZXN0IFZpbGxhZ2VcIixcblx0XCJMYXRlc3RfQ2FtcGFpZ25cIjogXCJMYXRlc3QgQ2FtcGFpZ25cIixcblx0XCIjTXlyb3NlZmllbGRtb21lbnRcIjogXCIjTXlyb3NlZmllbGRtb21lbnRcIixcblx0XCJPdXJfc3RvcnlcIjogXCJPdXIgc3RvcnlcIixcblx0XCJXb3JsZF9PZl9Sb3NlZmllbGRcIjogXCJXb3JsZCBPZiBSb3NlZmllbGRcIixcblx0XCJTZXJ2aWNlXCI6IFwiU2VydmljZVwiLFxuXHRcIlN1cHBvcnRcIjogXCJTdXBwb3J0XCIsXG5cdFwiQ29udGFjdFwiOiBcIkNvbnRhY3RcIixcblx0XCJMb2dpblwiOiBcIkxvZ2luXCIsXG5cdFwiV2F0Y2hlc1wiOiBcIldhdGNoZXNcIixcblx0XCJTdHJhcHNcIjogXCJTdHJhcHNcIixcblx0XCJWaWV3X1RoZV9Db2xsZWN0aW9uXCI6IFwiVmlldyBUaGUgQ29sbGVjdGlvblwiLFxuXHRcIk5FRURfSEVMUFwiOiBcIk5FRUQgSEVMUD9cIixcblx0XCJDdXN0b21lclN1cHBvcnRcIjogXCJDdXN0b21lciBTdXBwb3J0XCIsXG5cdFwiU2hpcHBpbmdSZXR1cm5zXCI6IFwiU2hpcHBpbmcgJiBSZXR1cm5zXCIsXG5cdFwiU3RvcmVzXCI6IFwiU3RvcmVzXCIsXG5cdFwiTG9nSW5fU2lnblVwXCI6IFwiTG9nIEluL1NpZ24gVXBcIixcblx0XCJDYXJlZXJcIjogXCJDYXJlZXJcIixcblx0XCJTaWduX3VwX2Zvcl9vdXJfbmV3c2xldHRlcl9hbmRfYmVfdGhlX2ZpcnN0X3RvX2tub3cuXCI6IFwiU2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIgYW5kIGJlIHRoZSBmaXJzdCB0byBrbm93LlwiLFxuXHRcIkVtYWlsX0FkZHJlc3NcIjogXCJFbWFpbCBBZGRyZXNzXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYXQvdHJhbnNsYXRpb25fbGFiZWwuanNvblxuLy8gbW9kdWxlIGlkID0gNjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5UaXRsZVwiOiBcIjE1IE1pbnV0ZXMgV2l0aFwiLFxuXHRcIk5hbWVcIjogXCJTdGVwaGFuaWUgLyBGYXNoaW9uIEZlYXR1cmVzIGVkaXRvclwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBhdHRyYWN0aXZlIHdhdGNoZXJzIHdobyBhcmUgbG9va2luZyBmb3J3YXJkIHRvIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuXCIsXG5cdFwiTGlua1RleHRcIjogXCJSZWFkIE1vcmVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9hdF9lbi9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNjU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2F0X2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y2luZ1wiLFxuXHRcIlRpdGxlXCI6IFwiVGhlIFdlc3QgVmlsbGFnZVwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlc1wiLFxuXHRcIlNob3BOb3dCdG5cIjogXCJTaG9wIE5vd1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2F0X2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2F0X2VuL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgYXR0cmFjdGl2ZSB3YXRjaGVycyB3aG8gYXJlIGxvb2tpbmcgZm9yd2FyZCB0byBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLlwiLFxuXHRcIkxpbmtUZXh0XCI6IFwiUmVhZCBNb3JlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYXUvaG9tZS0xNW1pbi13aXRoLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBTVNOWUNcIjogXCJBTVMgfCBOWUNcIixcblx0XCJUaXRsZVwiOiBcIkJlaGluZCB0aGUgYnJhbmRcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXMgbWFudWZhY3R1cmVycyB3aG8gaGF2ZSBiZWVuIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuIFRoZSByZXN1bHQgaXMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcHJlbWl1bSBwcmVtaXVtIHF1YWxpdHkgd2F0Y2hlcyB3aXRoIHR3byB5ZWFyIHdhcnJhbnR5LCB3aGljaCBhbHNvIGxvb2tzIHZlcnkgZ29vZC5cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9hdS9ob21lLWJlaGluZC1icmFuZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NTlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW50cm9kdWNpbmdUZXh0XCI6IFwiSW50cm9kdWNpbmdcIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiU2hvcCBOb3dcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9hdS9ob21lLW1haW4tYmFubmVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEb3dudG93bl9DaGljXCI6IFwiRG93bnRvd24gQ2hpY1wiLFxuXHRcIlVwcGVyX0Vhc3RfU2lkZVwiOiBcIlVwcGVyIEVhc3QgU2lkZVwiLFxuXHRcIldlc3RfVmlsbGFnZVwiOiBcIldlc3QgVmlsbGFnZVwiLFxuXHRcIkxhdGVzdF9DYW1wYWlnblwiOiBcIkxhdGVzdCBDYW1wYWlnblwiLFxuXHRcIiNNeXJvc2VmaWVsZG1vbWVudFwiOiBcIiNNeXJvc2VmaWVsZG1vbWVudFwiLFxuXHRcIk91cl9zdG9yeVwiOiBcIk91ciBzdG9yeVwiLFxuXHRcIldvcmxkX09mX1Jvc2VmaWVsZFwiOiBcIldvcmxkIE9mIFJvc2VmaWVsZFwiLFxuXHRcIlNlcnZpY2VcIjogXCJTZXJ2aWNlXCIsXG5cdFwiU3VwcG9ydFwiOiBcIlN1cHBvcnRcIixcblx0XCJDb250YWN0XCI6IFwiQ29udGFjdFwiLFxuXHRcIkxvZ2luXCI6IFwiTG9naW5cIixcblx0XCJXYXRjaGVzXCI6IFwiV2F0Y2hlc1wiLFxuXHRcIlN0cmFwc1wiOiBcIlN0cmFwc1wiLFxuXHRcIlZpZXdfVGhlX0NvbGxlY3Rpb25cIjogXCJWaWV3IFRoZSBDb2xsZWN0aW9uXCIsXG5cdFwiTkVFRF9IRUxQXCI6IFwiTkVFRCBIRUxQP1wiLFxuXHRcIkN1c3RvbWVyU3VwcG9ydFwiOiBcIkN1c3RvbWVyIFN1cHBvcnRcIixcblx0XCJTaGlwcGluZ1JldHVybnNcIjogXCJTaGlwcGluZyAmIFJldHVybnNcIixcblx0XCJTdG9yZXNcIjogXCJTdG9yZXNcIixcblx0XCJMb2dJbl9TaWduVXBcIjogXCJMb2cgSW4vU2lnbiBVcFwiLFxuXHRcIkNhcmVlclwiOiBcIkNhcmVlclwiLFxuXHRcIlNpZ25fdXBfZm9yX291cl9uZXdzbGV0dGVyX2FuZF9iZV90aGVfZmlyc3RfdG9fa25vdy5cIjogXCJTaWduIHVwIGZvciBvdXIgbmV3c2xldHRlciBhbmQgYmUgdGhlIGZpcnN0IHRvIGtub3cuXCIsXG5cdFwiRW1haWxfQWRkcmVzc1wiOiBcIkVtYWlsIEFkZHJlc3NcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9hdS90cmFuc2xhdGlvbl9sYWJlbC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWFpblRpdGxlXCI6IFwiMTUgTWludXRlcyBXaXRoXCIsXG5cdFwiTmFtZVwiOiBcIlN0ZXBoYW5pZSAvIEZhc2hpb24gRmVhdHVyZXMgZWRpdG9yXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJWb29yIGRlIHByb2R1Y2V0aWUgdmFuIG9uemUgaG9ybG9nZXMgd2Vya2VuIHdlIHNhbWVuIG1ldCBlZW4gYWFudGFsIHRvb25hYWdldmVuZGEgbHV4ZSBob3Jsb2dlcy0gZmFicmlrYW50ZW4gZGllIGFsIHRpZW50YWxsZW4gamFyZW4gaG9ybG9nZXMgbWV0IGRlIGhhbmQgbWFrZW4uXCIsXG5cdFwiTGlua1RleHRcIjogXCJMRUVTIE1FRVJcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9iZS9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2JlL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y3RpZSB2YW5cIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiV2lua2VsIG51XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYmUvaG9tZS1tYWluLWJhbm5lci5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NjRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRG93bnRvd25fQ2hpY1wiOiBcIkRvd250b3duIENoaWNcIixcblx0XCJVcHBlcl9FYXN0X1NpZGVcIjogXCJVcHBlciBFYXN0IFNpZGVcIixcblx0XCJXZXN0X1ZpbGxhZ2VcIjogXCJXZXN0IFZpbGxhZ2VcIixcblx0XCJMYXRlc3RfQ2FtcGFpZ25cIjogXCJMYXRlc3QgQ2FtcGFpZ25cIixcblx0XCIjTXlyb3NlZmllbGRtb21lbnRcIjogXCIjTXlyb3NlZmllbGRtb21lbnRcIixcblx0XCJPdXJfc3RvcnlcIjogXCJPdXIgc3RvcnlcIixcblx0XCJXb3JsZF9PZl9Sb3NlZmllbGRcIjogXCJXb3JsZCBPZiBSb3NlZmllbGRcIixcblx0XCJTZXJ2aWNlXCI6IFwiU2VydmljZVwiLFxuXHRcIlN1cHBvcnRcIjogXCJTdXBwb3J0XCIsXG5cdFwiQ29udGFjdFwiOiBcIkNvbnRhY3RcIixcblx0XCJMb2dpblwiOiBcIkxvZ2luXCIsXG5cdFwiV2F0Y2hlc1wiOiBcIldhdGNoZXNcIixcblx0XCJTdHJhcHNcIjogXCJTdHJhcHNcIixcblx0XCJWaWV3X1RoZV9Db2xsZWN0aW9uXCI6IFwiVmlldyBUaGUgQ29sbGVjdGlvblwiLFxuXHRcIk5FRURfSEVMUFwiOiBcIk5FRUQgSEVMUD9cIixcblx0XCJDdXN0b21lclN1cHBvcnRcIjogXCJDdXN0b21lciBTdXBwb3J0XCIsXG5cdFwiU2hpcHBpbmdSZXR1cm5zXCI6IFwiU2hpcHBpbmcgJiBSZXR1cm5zXCIsXG5cdFwiU3RvcmVzXCI6IFwiU3RvcmVzXCIsXG5cdFwiTG9nSW5fU2lnblVwXCI6IFwiTG9nIEluL1NpZ24gVXBcIixcblx0XCJDYXJlZXJcIjogXCJDYXJlZXJcIixcblx0XCJTaWduX3VwX2Zvcl9vdXJfbmV3c2xldHRlcl9hbmRfYmVfdGhlX2ZpcnN0X3RvX2tub3cuXCI6IFwiU2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIgYW5kIGJlIHRoZSBmaXJzdCB0byBrbm93LlwiLFxuXHRcIkVtYWlsX0FkZHJlc3NcIjogXCJFbWFpbCBBZGRyZXNzXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYmUvdHJhbnNsYXRpb25fbGFiZWwuanNvblxuLy8gbW9kdWxlIGlkID0gNjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5UaXRsZVwiOiBcIjE1IE1pbnV0ZXMgV2l0aFwiLFxuXHRcIk5hbWVcIjogXCJTdGVwaGFuaWUgLyBGYXNoaW9uIEZlYXR1cmVzIGVkaXRvclwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBhdHRyYWN0aXZlIHdhdGNoZXJzIHdobyBhcmUgbG9va2luZyBmb3J3YXJkIHRvIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuXCIsXG5cdFwiTGlua1RleHRcIjogXCJSZWFkIE1vcmVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9iZV9lbi9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2JlX2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y2luZ1wiLFxuXHRcIlRpdGxlXCI6IFwiVGhlIFdlc3QgVmlsbGFnZVwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlc1wiLFxuXHRcIlNob3BOb3dCdG5cIjogXCJTaG9wIE5vd1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2JlX2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNjY4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2JlX2VuL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgYXR0cmFjdGl2ZSB3YXRjaGVycyB3aG8gYXJlIGxvb2tpbmcgZm9yd2FyZCB0byBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLlwiLFxuXHRcIkxpbmtUZXh0XCI6IFwiUmVhZCBNb3JlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvYmVfZnIvaG9tZS0xNW1pbi13aXRoLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBTVNOWUNcIjogXCJBTVMgfCBOWUNcIixcblx0XCJUaXRsZVwiOiBcIkJlaGluZCB0aGUgYnJhbmRcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXMgbWFudWZhY3R1cmVycyB3aG8gaGF2ZSBiZWVuIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuIFRoZSByZXN1bHQgaXMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcHJlbWl1bSBwcmVtaXVtIHF1YWxpdHkgd2F0Y2hlcyB3aXRoIHR3byB5ZWFyIHdhcnJhbnR5LCB3aGljaCBhbHNvIGxvb2tzIHZlcnkgZ29vZC5cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9iZV9mci9ob21lLWJlaGluZC1icmFuZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NzFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW50cm9kdWNpbmdUZXh0XCI6IFwiSW50cm9kdWNpbmdcIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiU2hvcCBOb3dcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9iZV9mci9ob21lLW1haW4tYmFubmVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEb3dudG93bl9DaGljXCI6IFwiRG93bnRvd24gQ2hpY1wiLFxuXHRcIlVwcGVyX0Vhc3RfU2lkZVwiOiBcIlVwcGVyIEVhc3QgU2lkZVwiLFxuXHRcIldlc3RfVmlsbGFnZVwiOiBcIldlc3QgVmlsbGFnZVwiLFxuXHRcIkxhdGVzdF9DYW1wYWlnblwiOiBcIkxhdGVzdCBDYW1wYWlnblwiLFxuXHRcIiNNeXJvc2VmaWVsZG1vbWVudFwiOiBcIiNNeXJvc2VmaWVsZG1vbWVudFwiLFxuXHRcIk91cl9zdG9yeVwiOiBcIk91ciBzdG9yeVwiLFxuXHRcIldvcmxkX09mX1Jvc2VmaWVsZFwiOiBcIldvcmxkIE9mIFJvc2VmaWVsZFwiLFxuXHRcIlNlcnZpY2VcIjogXCJTZXJ2aWNlXCIsXG5cdFwiU3VwcG9ydFwiOiBcIlN1cHBvcnRcIixcblx0XCJDb250YWN0XCI6IFwiQ29udGFjdFwiLFxuXHRcIkxvZ2luXCI6IFwiTG9naW5cIixcblx0XCJXYXRjaGVzXCI6IFwiV2F0Y2hlc1wiLFxuXHRcIlN0cmFwc1wiOiBcIlN0cmFwc1wiLFxuXHRcIlZpZXdfVGhlX0NvbGxlY3Rpb25cIjogXCJWaWV3IFRoZSBDb2xsZWN0aW9uXCIsXG5cdFwiTkVFRF9IRUxQXCI6IFwiTkVFRCBIRUxQP1wiLFxuXHRcIkN1c3RvbWVyU3VwcG9ydFwiOiBcIkN1c3RvbWVyIFN1cHBvcnRcIixcblx0XCJTaGlwcGluZ1JldHVybnNcIjogXCJTaGlwcGluZyAmIFJldHVybnNcIixcblx0XCJTdG9yZXNcIjogXCJTdG9yZXNcIixcblx0XCJMb2dJbl9TaWduVXBcIjogXCJMb2cgSW4vU2lnbiBVcFwiLFxuXHRcIkNhcmVlclwiOiBcIkNhcmVlclwiLFxuXHRcIlNpZ25fdXBfZm9yX291cl9uZXdzbGV0dGVyX2FuZF9iZV90aGVfZmlyc3RfdG9fa25vdy5cIjogXCJTaWduIHVwIGZvciBvdXIgbmV3c2xldHRlciBhbmQgYmUgdGhlIGZpcnN0IHRvIGtub3cuXCIsXG5cdFwiRW1haWxfQWRkcmVzc1wiOiBcIkVtYWlsIEFkZHJlc3NcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9iZV9mci90cmFuc2xhdGlvbl9sYWJlbC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NzNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWFpblRpdGxlXCI6IFwiMTUgTWludXRlcyBXaXRoXCIsXG5cdFwiTmFtZVwiOiBcIlN0ZXBoYW5pZSAvIEZhc2hpb24gRmVhdHVyZXMgZWRpdG9yXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGF0dHJhY3RpdmUgd2F0Y2hlcnMgd2hvIGFyZSBsb29raW5nIGZvcndhcmQgdG8gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy5cIixcblx0XCJMaW5rVGV4dFwiOiBcIlJlYWQgTW9yZVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2N6L2hvbWUtMTVtaW4td2l0aC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NzRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQU1TTllDXCI6IFwiQU1TIHwgTllDXCIsXG5cdFwiVGl0bGVcIjogXCJCZWhpbmQgdGhlIGJyYW5kXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzIG1hbnVmYWN0dXJlcnMgd2hvIGhhdmUgYmVlbiBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLiBUaGUgcmVzdWx0IGlzIGFuIGV4dGVuc2l2ZSBjb2xsZWN0aW9uIG9mIHByZW1pdW0gcHJlbWl1bSBxdWFsaXR5IHdhdGNoZXMgd2l0aCB0d28geWVhciB3YXJyYW50eSwgd2hpY2ggYWxzbyBsb29rcyB2ZXJ5IGdvb2QuXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvY3ovaG9tZS1iZWhpbmQtYnJhbmQuanNvblxuLy8gbW9kdWxlIGlkID0gNjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkludHJvZHVjaW5nVGV4dFwiOiBcIkludHJvZHVjaW5nXCIsXG5cdFwiVGl0bGVcIjogXCJUaGUgV2VzdCBWaWxsYWdlXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzXCIsXG5cdFwiU2hvcE5vd0J0blwiOiBcIlNob3AgTm93XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvY3ovaG9tZS1tYWluLWJhbm5lci5qc29uXG4vLyBtb2R1bGUgaWQgPSA2NzZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRG93bnRvd25fQ2hpY1wiOiBcIkRvd250b3duIENoaWNcIixcblx0XCJVcHBlcl9FYXN0X1NpZGVcIjogXCJVcHBlciBFYXN0IFNpZGVcIixcblx0XCJXZXN0X1ZpbGxhZ2VcIjogXCJXZXN0IFZpbGxhZ2VcIixcblx0XCJMYXRlc3RfQ2FtcGFpZ25cIjogXCJMYXRlc3QgQ2FtcGFpZ25cIixcblx0XCIjTXlyb3NlZmllbGRtb21lbnRcIjogXCIjTXlyb3NlZmllbGRtb21lbnRcIixcblx0XCJPdXJfc3RvcnlcIjogXCJPdXIgc3RvcnlcIixcblx0XCJXb3JsZF9PZl9Sb3NlZmllbGRcIjogXCJXb3JsZCBPZiBSb3NlZmllbGRcIixcblx0XCJTZXJ2aWNlXCI6IFwiU2VydmljZVwiLFxuXHRcIlN1cHBvcnRcIjogXCJTdXBwb3J0XCIsXG5cdFwiQ29udGFjdFwiOiBcIkNvbnRhY3RcIixcblx0XCJMb2dpblwiOiBcIkxvZ2luXCIsXG5cdFwiV2F0Y2hlc1wiOiBcIldhdGNoZXNcIixcblx0XCJTdHJhcHNcIjogXCJTdHJhcHNcIixcblx0XCJWaWV3X1RoZV9Db2xsZWN0aW9uXCI6IFwiVmlldyBUaGUgQ29sbGVjdGlvblwiLFxuXHRcIk5FRURfSEVMUFwiOiBcIk5FRUQgSEVMUD9cIixcblx0XCJDdXN0b21lclN1cHBvcnRcIjogXCJDdXN0b21lciBTdXBwb3J0XCIsXG5cdFwiU2hpcHBpbmdSZXR1cm5zXCI6IFwiU2hpcHBpbmcgJiBSZXR1cm5zXCIsXG5cdFwiU3RvcmVzXCI6IFwiU3RvcmVzXCIsXG5cdFwiTG9nSW5fU2lnblVwXCI6IFwiTG9nIEluL1NpZ24gVXBcIixcblx0XCJDYXJlZXJcIjogXCJDYXJlZXJcIixcblx0XCJTaWduX3VwX2Zvcl9vdXJfbmV3c2xldHRlcl9hbmRfYmVfdGhlX2ZpcnN0X3RvX2tub3cuXCI6IFwiU2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIgYW5kIGJlIHRoZSBmaXJzdCB0byBrbm93LlwiLFxuXHRcIkVtYWlsX0FkZHJlc3NcIjogXCJFbWFpbCBBZGRyZXNzXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvY3ovdHJhbnNsYXRpb25fbGFiZWwuanNvblxuLy8gbW9kdWxlIGlkID0gNjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5UaXRsZVwiOiBcIjE1IE1pbnV0ZXMgV2l0aFwiLFxuXHRcIk5hbWVcIjogXCJTdGVwaGFuaWUgLyBGYXNoaW9uIEZlYXR1cmVzIGVkaXRvclwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBhdHRyYWN0aXZlIHdhdGNoZXJzIHdobyBhcmUgbG9va2luZyBmb3J3YXJkIHRvIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuXCIsXG5cdFwiTGlua1RleHRcIjogXCJSZWFkIE1vcmVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9jel9lbi9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNjc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2N6X2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y2luZ1wiLFxuXHRcIlRpdGxlXCI6IFwiVGhlIFdlc3QgVmlsbGFnZVwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlc1wiLFxuXHRcIlNob3BOb3dCdG5cIjogXCJTaG9wIE5vd1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2N6X2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNjgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2N6X2VuL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgYXR0cmFjdGl2ZSB3YXRjaGVycyB3aG8gYXJlIGxvb2tpbmcgZm9yd2FyZCB0byBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLlwiLFxuXHRcIkxpbmtUZXh0XCI6IFwiUmVhZCBNb3JlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvZGUvaG9tZS0xNW1pbi13aXRoLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBTVNOWUNcIjogXCJBTVMgfCBOWUNcIixcblx0XCJUaXRsZVwiOiBcIkJlaGluZCB0aGUgYnJhbmRcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXMgbWFudWZhY3R1cmVycyB3aG8gaGF2ZSBiZWVuIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuIFRoZSByZXN1bHQgaXMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcHJlbWl1bSBwcmVtaXVtIHF1YWxpdHkgd2F0Y2hlcyB3aXRoIHR3byB5ZWFyIHdhcnJhbnR5LCB3aGljaCBhbHNvIGxvb2tzIHZlcnkgZ29vZC5cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9kZS9ob21lLWJlaGluZC1icmFuZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW50cm9kdWNpbmdUZXh0XCI6IFwiSW50cm9kdWNpbmdcIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiU2hvcCBOb3dcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9kZS9ob21lLW1haW4tYmFubmVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEb3dudG93bl9DaGljXCI6IFwiRG93bnRvd24gQ2hpY1wiLFxuXHRcIlVwcGVyX0Vhc3RfU2lkZVwiOiBcIlVwcGVyIEVhc3QgU2lkZVwiLFxuXHRcIldlc3RfVmlsbGFnZVwiOiBcIldlc3QgVmlsbGFnZVwiLFxuXHRcIkxhdGVzdF9DYW1wYWlnblwiOiBcIkxhdGVzdCBDYW1wYWlnblwiLFxuXHRcIiNNeXJvc2VmaWVsZG1vbWVudFwiOiBcIiNNeXJvc2VmaWVsZG1vbWVudFwiLFxuXHRcIk91cl9zdG9yeVwiOiBcIk91ciBzdG9yeVwiLFxuXHRcIldvcmxkX09mX1Jvc2VmaWVsZFwiOiBcIldvcmxkIE9mIFJvc2VmaWVsZFwiLFxuXHRcIlNlcnZpY2VcIjogXCJTZXJ2aWNlXCIsXG5cdFwiU3VwcG9ydFwiOiBcIlN1cHBvcnRcIixcblx0XCJDb250YWN0XCI6IFwiQ29udGFjdFwiLFxuXHRcIkxvZ2luXCI6IFwiTG9naW5cIixcblx0XCJXYXRjaGVzXCI6IFwiV2F0Y2hlc1wiLFxuXHRcIlN0cmFwc1wiOiBcIlN0cmFwc1wiLFxuXHRcIlZpZXdfVGhlX0NvbGxlY3Rpb25cIjogXCJWaWV3IFRoZSBDb2xsZWN0aW9uXCIsXG5cdFwiTkVFRF9IRUxQXCI6IFwiTkVFRCBIRUxQP1wiLFxuXHRcIkN1c3RvbWVyU3VwcG9ydFwiOiBcIkN1c3RvbWVyIFN1cHBvcnRcIixcblx0XCJTaGlwcGluZ1JldHVybnNcIjogXCJTaGlwcGluZyAmIFJldHVybnNcIixcblx0XCJTdG9yZXNcIjogXCJTdG9yZXNcIixcblx0XCJMb2dJbl9TaWduVXBcIjogXCJMb2cgSW4vU2lnbiBVcFwiLFxuXHRcIkNhcmVlclwiOiBcIkNhcmVlclwiLFxuXHRcIlNpZ25fdXBfZm9yX291cl9uZXdzbGV0dGVyX2FuZF9iZV90aGVfZmlyc3RfdG9fa25vdy5cIjogXCJTaWduIHVwIGZvciBvdXIgbmV3c2xldHRlciBhbmQgYmUgdGhlIGZpcnN0IHRvIGtub3cuXCIsXG5cdFwiRW1haWxfQWRkcmVzc1wiOiBcIkVtYWlsIEFkZHJlc3NcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9kZS90cmFuc2xhdGlvbl9sYWJlbC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2ODVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWFpblRpdGxlXCI6IFwiMTUgTWludXRlcyBXaXRoXCIsXG5cdFwiTmFtZVwiOiBcIlN0ZXBoYW5pZSAvIEZhc2hpb24gRmVhdHVyZXMgZWRpdG9yXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGF0dHJhY3RpdmUgd2F0Y2hlcnMgd2hvIGFyZSBsb29raW5nIGZvcndhcmQgdG8gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy5cIixcblx0XCJMaW5rVGV4dFwiOiBcIlJlYWQgTW9yZVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2VuX3VzL2hvbWUtMTVtaW4td2l0aC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2ODZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQU1TTllDXCI6IFwiQU1TIHwgTllDXCIsXG5cdFwiVGl0bGVcIjogXCJCZWhpbmQgdGhlIGJyYW5kXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzIG1hbnVmYWN0dXJlcnMgd2hvIGhhdmUgYmVlbiBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLiBUaGUgcmVzdWx0IGlzIGFuIGV4dGVuc2l2ZSBjb2xsZWN0aW9uIG9mIHByZW1pdW0gcHJlbWl1bSBxdWFsaXR5IHdhdGNoZXMgd2l0aCB0d28geWVhciB3YXJyYW50eSwgd2hpY2ggYWxzbyBsb29rcyB2ZXJ5IGdvb2QuXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvZW5fdXMvaG9tZS1iZWhpbmQtYnJhbmQuanNvblxuLy8gbW9kdWxlIGlkID0gNjg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkludHJvZHVjaW5nVGV4dFwiOiBcIkludHJvZHVjaW5nXCIsXG5cdFwiVGl0bGVcIjogXCJUaGUgV2VzdCBWaWxsYWdlXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzXCIsXG5cdFwiU2hvcE5vd0J0blwiOiBcIlNob3AgTm93XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvZW5fdXMvaG9tZS1tYWluLWJhbm5lci5qc29uXG4vLyBtb2R1bGUgaWQgPSA2ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRG93bnRvd25fQ2hpY1wiOiBcIkRvd250b3duIENoaWNcIixcblx0XCJVcHBlcl9FYXN0X1NpZGVcIjogXCJVcHBlciBFYXN0IFNpZGVcIixcblx0XCJXZXN0X1ZpbGxhZ2VcIjogXCJXZXN0IFZpbGxhZ2VcIixcblx0XCJMYXRlc3RfQ2FtcGFpZ25cIjogXCJMYXRlc3QgQ2FtcGFpZ25cIixcblx0XCIjTXlyb3NlZmllbGRtb21lbnRcIjogXCIjTXlyb3NlZmllbGRtb21lbnRcIixcblx0XCJPdXJfc3RvcnlcIjogXCJPdXIgc3RvcnlcIixcblx0XCJXb3JsZF9PZl9Sb3NlZmllbGRcIjogXCJXb3JsZCBPZiBSb3NlZmllbGRcIixcblx0XCJTZXJ2aWNlXCI6IFwiU2VydmljZVwiLFxuXHRcIlN1cHBvcnRcIjogXCJTdXBwb3J0XCIsXG5cdFwiQ29udGFjdFwiOiBcIkNvbnRhY3RcIixcblx0XCJMb2dpblwiOiBcIkxvZ2luXCIsXG5cdFwiV2F0Y2hlc1wiOiBcIldhdGNoZXNcIixcblx0XCJTdHJhcHNcIjogXCJTdHJhcHNcIixcblx0XCJWaWV3X1RoZV9Db2xsZWN0aW9uXCI6IFwiVmlldyBUaGUgQ29sbGVjdGlvblwiLFxuXHRcIk5FRURfSEVMUFwiOiBcIk5FRUQgSEVMUD9cIixcblx0XCJDdXN0b21lclN1cHBvcnRcIjogXCJDdXN0b21lciBTdXBwb3J0XCIsXG5cdFwiU2hpcHBpbmdSZXR1cm5zXCI6IFwiU2hpcHBpbmcgJiBSZXR1cm5zXCIsXG5cdFwiU3RvcmVzXCI6IFwiU3RvcmVzXCIsXG5cdFwiTG9nSW5fU2lnblVwXCI6IFwiTG9nIEluL1NpZ24gVXBcIixcblx0XCJDYXJlZXJcIjogXCJDYXJlZXJcIixcblx0XCJTaWduX3VwX2Zvcl9vdXJfbmV3c2xldHRlcl9hbmRfYmVfdGhlX2ZpcnN0X3RvX2tub3cuXCI6IFwiU2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIgYW5kIGJlIHRoZSBmaXJzdCB0byBrbm93LlwiLFxuXHRcIkVtYWlsX0FkZHJlc3NcIjogXCJFbWFpbCBBZGRyZXNzXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvZW5fdXMvdHJhbnNsYXRpb25fbGFiZWwuanNvblxuLy8gbW9kdWxlIGlkID0gNjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5UaXRsZVwiOiBcIjE1IE1pbnV0ZXMgV2l0aFwiLFxuXHRcIk5hbWVcIjogXCJTdGVwaGFuaWUgLyBGYXNoaW9uIEZlYXR1cmVzIGVkaXRvclwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBhdHRyYWN0aXZlIHdhdGNoZXJzIHdobyBhcmUgbG9va2luZyBmb3J3YXJkIHRvIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuXCIsXG5cdFwiTGlua1RleHRcIjogXCJSZWFkIE1vcmVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9mci9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2ZyL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y2luZ1wiLFxuXHRcIlRpdGxlXCI6IFwiVGhlIFdlc3QgVmlsbGFnZVwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlc1wiLFxuXHRcIlNob3BOb3dCdG5cIjogXCJTaG9wIE5vd1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2ZyL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2ZyL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgYXR0cmFjdGl2ZSB3YXRjaGVycyB3aG8gYXJlIGxvb2tpbmcgZm9yd2FyZCB0byBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLlwiLFxuXHRcIkxpbmtUZXh0XCI6IFwiUmVhZCBNb3JlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvanAvaG9tZS0xNW1pbi13aXRoLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBTVNOWUNcIjogXCJBTVMgfCBOWUNcIixcblx0XCJUaXRsZVwiOiBcIkJlaGluZCB0aGUgYnJhbmRcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXMgbWFudWZhY3R1cmVycyB3aG8gaGF2ZSBiZWVuIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuIFRoZSByZXN1bHQgaXMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcHJlbWl1bSBwcmVtaXVtIHF1YWxpdHkgd2F0Y2hlcyB3aXRoIHR3byB5ZWFyIHdhcnJhbnR5LCB3aGljaCBhbHNvIGxvb2tzIHZlcnkgZ29vZC5cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9qcC9ob21lLWJlaGluZC1icmFuZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2OTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW50cm9kdWNpbmdUZXh0XCI6IFwi5bCO5YWlXCIsXG5cdFwiVGl0bGVcIjogXCJUaGUgV2VzdCBWaWxsYWdlXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJGb3IgdGhlIHByb2R1Y3Rpb24gb2Ygb3VyIHdhdGNoZXMgd2Ugd29yayB0b2dldGhlciB3aXRoIGEgbnVtYmVyIG9mIGx1eHVyeSB3YXRjaGVzXCIsXG5cdFwiU2hvcE5vd0J0blwiOiBcIuS7iuOBmeOBkOizvOWFpVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2pwL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL2pwL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIlZvb3IgZGUgcHJvZHVjZXRpZSB2YW4gb256ZSBob3Jsb2dlcyB3ZXJrZW4gd2Ugc2FtZW4gbWV0IGVlbiBhYW50YWwgdG9vbmFhZ2V2ZW5kYSBsdXhlIGhvcmxvZ2VzLSBmYWJyaWthbnRlbiBkaWUgYWwgdGllbnRhbGxlbiBqYXJlbiBob3Jsb2dlcyBtZXQgZGUgaGFuZCBtYWtlbi5cIixcblx0XCJMaW5rVGV4dFwiOiBcIkxFRVMgTUVFUlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL25sL2hvbWUtMTVtaW4td2l0aC5qc29uXG4vLyBtb2R1bGUgaWQgPSA2OThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQU1TTllDXCI6IFwiQU1TIHwgTllDXCIsXG5cdFwiVGl0bGVcIjogXCJCZWhpbmQgdGhlIGJyYW5kXCIsXG5cdFwiRGVzY3JpcHRpb25cIjogXCJWb29yIGRlIHByb2R1Y2V0aWUgdmFuIG9uemUgaG9ybG9nZXMgd2Vya2VuIHdlIHNhbWVuIG1ldCBlZW4gYWFudGFsIHRvb25hYWdldmVuZGEgbHV4ZSBob3Jsb2dlcy0gZmFicmlrYW50ZW4gZGllIGFsIHRpZW50YWxsZW4gamFyZW4gaG9ybG9nZXMgbWV0IGRlIGhhbmQgbWFrZW4uSGV0IHJlc3VsdGFhdCBpcyBlZW4gdWl0Z2VicmVpZGUgY29sbGVjdGllIGJldGFhbGJhcmUgcHJlbWl1bSBxdWFsaXR5IGhvcmxvZ2VzIG1ldCB0d2VlIGphYXIgZ2FyYW50aWUsZGllIGVyIG9vayBidWl0ZW5nZXdvb24gZ29lZCB1aXR6aWVuLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL25sL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDY5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y3RpZSB2YW5cIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiV2lua2VsIG51XCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvbmwvaG9tZS1tYWluLWJhbm5lci5qc29uXG4vLyBtb2R1bGUgaWQgPSA3MDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRG93bnRvd25fQ2hpY1wiOiBcIkRvd250b3duIENoaWNcIixcblx0XCJVcHBlcl9FYXN0X1NpZGVcIjogXCJVcHBlciBFYXN0IFNpZGVcIixcblx0XCJXZXN0X1ZpbGxhZ2VcIjogXCJXZXN0IFZpbGxhZ2VcIixcblx0XCJMYXRlc3RfQ2FtcGFpZ25cIjogXCJMYXRlc3QgQ2FtcGFpZ25cIixcblx0XCIjTXlyb3NlZmllbGRtb21lbnRcIjogXCIjTXlyb3NlZmllbGRtb21lbnRcIixcblx0XCJPdXJfc3RvcnlcIjogXCJPVkVSIE9OU1wiLFxuXHRcIldvcmxkX09mX1Jvc2VmaWVsZFwiOiBcIldvcmxkIE9mIFJvc2VmaWVsZFwiLFxuXHRcIlNlcnZpY2VcIjogXCJTZXJ2aWNlXCIsXG5cdFwiU3VwcG9ydFwiOiBcIktsYW50ZW5zZXJ2aWNlXCIsXG5cdFwiQ29udGFjdFwiOiBcIkNvbnRhY3RcIixcblx0XCJMb2dpblwiOiBcIklubG9nZ2VuXCIsXG5cdFwiV2F0Y2hlc1wiOiBcIkhvcmxvZ2VzXCIsXG5cdFwiU3RyYXBzXCI6IFwiQmFuZGplc1wiLFxuXHRcIlZpZXdfVGhlX0NvbGxlY3Rpb25cIjogXCJCZWtpamsgRGUgQ29sbGVjdGllXCIsXG5cdFwiTkVFRF9IRUxQXCI6IFwiSFVMUCBOT0RJRz9cIixcblx0XCJDdXN0b21lclN1cHBvcnRcIjogXCJLbGFudGVuc2VydmljZVwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlZlcnplbmRpbmcgJiBSZXRvdXJuZXJlblwiLFxuXHRcIlN0b3Jlc1wiOiBcIldpbmtlbHNcIixcblx0XCJMb2dJbl9TaWduVXBcIjogXCJJbmxvZ2dlbi9SZWdpc3RyZXJlblwiLFxuXHRcIkNhcmVlclwiOiBcIkNhcmVlclwiLFxuXHRcIlNpZ25fdXBfZm9yX291cl9uZXdzbGV0dGVyX2FuZF9iZV90aGVfZmlyc3RfdG9fa25vdy5cIjogXCJNZWxkIGplIGFhbiB2b29yIG9uemUgbmlldXdzYnJpZWYgZW4gYmVuIGFscyBlZXJzdGUgb3AgZGUuXCIsXG5cdFwiRW1haWxfQWRkcmVzc1wiOiBcIkUtbWFpbGFkcmVzXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvbmwvdHJhbnNsYXRpb25fbGFiZWwuanNvblxuLy8gbW9kdWxlIGlkID0gNzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5UaXRsZVwiOiBcIjE1IE1pbnV0ZXMgV2l0aFwiLFxuXHRcIk5hbWVcIjogXCJTdGVwaGFuaWUgLyBGYXNoaW9uIEZlYXR1cmVzIGVkaXRvclwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBhdHRyYWN0aXZlIHdhdGNoZXJzIHdobyBhcmUgbG9va2luZyBmb3J3YXJkIHRvIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuXCIsXG5cdFwiTGlua1RleHRcIjogXCJSZWFkIE1vcmVcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS9ubF9lbi9ob21lLTE1bWluLXdpdGguanNvblxuLy8gbW9kdWxlIGlkID0gNzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFNU05ZQ1wiOiBcIkFNUyB8IE5ZQ1wiLFxuXHRcIlRpdGxlXCI6IFwiQmVoaW5kIHRoZSBicmFuZFwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlcyBtYW51ZmFjdHVyZXJzIHdobyBoYXZlIGJlZW4gbWFraW5nIHdhdGNoZXMgZm9yIGRlY2FkZXMgb2Ygd2F0Y2hlcy4gVGhlIHJlc3VsdCBpcyBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwcmVtaXVtIHByZW1pdW0gcXVhbGl0eSB3YXRjaGVzIHdpdGggdHdvIHllYXIgd2FycmFudHksIHdoaWNoIGFsc28gbG9va3MgdmVyeSBnb29kLlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL25sX2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDcwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnRyb2R1Y2luZ1RleHRcIjogXCJJbnRyb2R1Y2luZ1wiLFxuXHRcIlRpdGxlXCI6IFwiVGhlIFdlc3QgVmlsbGFnZVwiLFxuXHRcIkRlc2NyaXB0aW9uXCI6IFwiRm9yIHRoZSBwcm9kdWN0aW9uIG9mIG91ciB3YXRjaGVzIHdlIHdvcmsgdG9nZXRoZXIgd2l0aCBhIG51bWJlciBvZiBsdXh1cnkgd2F0Y2hlc1wiLFxuXHRcIlNob3BOb3dCdG5cIjogXCJTaG9wIE5vd1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL25sX2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblxuLy8gbW9kdWxlIGlkID0gNzA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRvd250b3duX0NoaWNcIjogXCJEb3dudG93biBDaGljXCIsXG5cdFwiVXBwZXJfRWFzdF9TaWRlXCI6IFwiVXBwZXIgRWFzdCBTaWRlXCIsXG5cdFwiV2VzdF9WaWxsYWdlXCI6IFwiV2VzdCBWaWxsYWdlXCIsXG5cdFwiTGF0ZXN0X0NhbXBhaWduXCI6IFwiTGF0ZXN0IENhbXBhaWduXCIsXG5cdFwiI015cm9zZWZpZWxkbW9tZW50XCI6IFwiI015cm9zZWZpZWxkbW9tZW50XCIsXG5cdFwiT3VyX3N0b3J5XCI6IFwiT3VyIHN0b3J5XCIsXG5cdFwiV29ybGRfT2ZfUm9zZWZpZWxkXCI6IFwiV29ybGQgT2YgUm9zZWZpZWxkXCIsXG5cdFwiU2VydmljZVwiOiBcIlNlcnZpY2VcIixcblx0XCJTdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuXHRcIkNvbnRhY3RcIjogXCJDb250YWN0XCIsXG5cdFwiTG9naW5cIjogXCJMb2dpblwiLFxuXHRcIldhdGNoZXNcIjogXCJXYXRjaGVzXCIsXG5cdFwiU3RyYXBzXCI6IFwiU3RyYXBzXCIsXG5cdFwiVmlld19UaGVfQ29sbGVjdGlvblwiOiBcIlZpZXcgVGhlIENvbGxlY3Rpb25cIixcblx0XCJORUVEX0hFTFBcIjogXCJORUVEIEhFTFA/XCIsXG5cdFwiQ3VzdG9tZXJTdXBwb3J0XCI6IFwiQ3VzdG9tZXIgU3VwcG9ydFwiLFxuXHRcIlNoaXBwaW5nUmV0dXJuc1wiOiBcIlNoaXBwaW5nICYgUmV0dXJuc1wiLFxuXHRcIlN0b3Jlc1wiOiBcIlN0b3Jlc1wiLFxuXHRcIkxvZ0luX1NpZ25VcFwiOiBcIkxvZyBJbi9TaWduIFVwXCIsXG5cdFwiQ2FyZWVyXCI6IFwiQ2FyZWVyXCIsXG5cdFwiU2lnbl91cF9mb3Jfb3VyX25ld3NsZXR0ZXJfYW5kX2JlX3RoZV9maXJzdF90b19rbm93LlwiOiBcIlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCBiZSB0aGUgZmlyc3QgdG8ga25vdy5cIixcblx0XCJFbWFpbF9BZGRyZXNzXCI6IFwiRW1haWwgQWRkcmVzc1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlL25sX2VuL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cbi8vIG1vZHVsZSBpZCA9IDcwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNYWluVGl0bGVcIjogXCIxNSBNaW51dGVzIFdpdGhcIixcblx0XCJOYW1lXCI6IFwiU3RlcGhhbmllIC8gRmFzaGlvbiBGZWF0dXJlcyBlZGl0b3JcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgYXR0cmFjdGl2ZSB3YXRjaGVycyB3aG8gYXJlIGxvb2tpbmcgZm9yd2FyZCB0byBtYWtpbmcgd2F0Y2hlcyBmb3IgZGVjYWRlcyBvZiB3YXRjaGVzLlwiLFxuXHRcIkxpbmtUZXh0XCI6IFwiUmVhZCBNb3JlXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUvd3cvaG9tZS0xNW1pbi13aXRoLmpzb25cbi8vIG1vZHVsZSBpZCA9IDcwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBTVNOWUNcIjogXCJBTVMgfCBOWUNcIixcblx0XCJUaXRsZVwiOiBcIkJlaGluZCB0aGUgYnJhbmRcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXMgbWFudWZhY3R1cmVycyB3aG8gaGF2ZSBiZWVuIG1ha2luZyB3YXRjaGVzIGZvciBkZWNhZGVzIG9mIHdhdGNoZXMuIFRoZSByZXN1bHQgaXMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcHJlbWl1bSBwcmVtaXVtIHF1YWxpdHkgd2F0Y2hlcyB3aXRoIHR3byB5ZWFyIHdhcnJhbnR5LCB3aGljaCBhbHNvIGxvb2tzIHZlcnkgZ29vZC5cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS93dy9ob21lLWJlaGluZC1icmFuZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA3MDdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW50cm9kdWNpbmdUZXh0XCI6IFwiSW50cm9kdWNpbmdcIixcblx0XCJUaXRsZVwiOiBcIlRoZSBXZXN0IFZpbGxhZ2VcIixcblx0XCJEZXNjcmlwdGlvblwiOiBcIkZvciB0aGUgcHJvZHVjdGlvbiBvZiBvdXIgd2F0Y2hlcyB3ZSB3b3JrIHRvZ2V0aGVyIHdpdGggYSBudW1iZXIgb2YgbHV4dXJ5IHdhdGNoZXNcIixcblx0XCJTaG9wTm93QnRuXCI6IFwiU2hvcCBOb3dcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS93dy9ob21lLW1haW4tYmFubmVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDcwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEb3dudG93bl9DaGljXCI6IFwiRG93bnRvd24gQ2hpY1wiLFxuXHRcIlVwcGVyX0Vhc3RfU2lkZVwiOiBcIlVwcGVyIEVhc3QgU2lkZVwiLFxuXHRcIldlc3RfVmlsbGFnZVwiOiBcIldlc3QgVmlsbGFnZVwiLFxuXHRcIkxhdGVzdF9DYW1wYWlnblwiOiBcIkxhdGVzdCBDYW1wYWlnblwiLFxuXHRcIiNNeXJvc2VmaWVsZG1vbWVudFwiOiBcIiNNeXJvc2VmaWVsZG1vbWVudFwiLFxuXHRcIk91cl9zdG9yeVwiOiBcIk91ciBzdG9yeVwiLFxuXHRcIldvcmxkX09mX1Jvc2VmaWVsZFwiOiBcIldvcmxkIE9mIFJvc2VmaWVsZFwiLFxuXHRcIlNlcnZpY2VcIjogXCJTZXJ2aWNlXCIsXG5cdFwiU3VwcG9ydFwiOiBcIlN1cHBvcnRcIixcblx0XCJDb250YWN0XCI6IFwiQ29udGFjdFwiLFxuXHRcIkxvZ2luXCI6IFwiTG9naW5cIixcblx0XCJXYXRjaGVzXCI6IFwiV2F0Y2hlc1wiLFxuXHRcIlN0cmFwc1wiOiBcIlN0cmFwc1wiLFxuXHRcIlZpZXdfVGhlX0NvbGxlY3Rpb25cIjogXCJWaWV3IFRoZSBDb2xsZWN0aW9uXCIsXG5cdFwiTkVFRF9IRUxQXCI6IFwiTkVFRCBIRUxQP1wiLFxuXHRcIkN1c3RvbWVyU3VwcG9ydFwiOiBcIkN1c3RvbWVyIFN1cHBvcnRcIixcblx0XCJTaGlwcGluZ1JldHVybnNcIjogXCJTaGlwcGluZyAmIFJldHVybnNcIixcblx0XCJTdG9yZXNcIjogXCJTdG9yZXNcIixcblx0XCJMb2dJbl9TaWduVXBcIjogXCJMb2cgSW4vU2lnbiBVcFwiLFxuXHRcIkNhcmVlclwiOiBcIkNhcmVlclwiLFxuXHRcIlNpZ25fdXBfZm9yX291cl9uZXdzbGV0dGVyX2FuZF9iZV90aGVfZmlyc3RfdG9fa25vdy5cIjogXCJTaWduIHVwIGZvciBvdXIgbmV3c2xldHRlciBhbmQgYmUgdGhlIGZpcnN0IHRvIGtub3cuXCIsXG5cdFwiRW1haWxfQWRkcmVzc1wiOiBcIkVtYWlsIEFkZHJlc3NcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvY2FsZS93dy90cmFuc2xhdGlvbl9sYWJlbC5qc29uXG4vLyBtb2R1bGUgaWQgPSA3MDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qISBub3JtYWxpemUuY3NzIHY2LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxuICB6LWluZGV4OiA5MFxcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gIGxldHRlci1zcGFjaW5nOiAzLjE2cHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmhlYWRlciBuYXYgLmRlc2t0b3AtbWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaGVhZGVyIG5hdiAubW9iaWxlLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIG5hdiB1bCB7XFxuICB3aWR0aDogY2FsYyg5OS45JSAqIDIwLzIwIC0gKDMwcHggLSAzMHB4ICogMjAvMjApKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciBuYXYgdWw6bnRoLWNoaWxkKDFuKSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIGNsZWFyOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHVsOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHVsOm50aC1jaGlsZCgyMG4pIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuaGVhZGVyIG5hdiB1bDpudGgtY2hpbGQoMjBuICsgMSkge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbmhlYWRlciBuYXYgLmxlZnQtbmF2IHtcXG4gIHdpZHRoOiBjYWxjKDk5LjklICogOC8yMCAtICgzMHB4IC0gMzBweCAqIDgvMjApKTtcXG59XFxuXFxuaGVhZGVyIG5hdiAubGVmdC1uYXY6bnRoLWNoaWxkKDFuKSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIGNsZWFyOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgbmF2IC5sZWZ0LW5hdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuaGVhZGVyIG5hdiAubGVmdC1uYXY6bnRoLWNoaWxkKDIwbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5oZWFkZXIgbmF2IC5sZWZ0LW5hdjpudGgtY2hpbGQoMjBuICsgMSkge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbmhlYWRlciBuYXYgLmxlZnQtbmF2IGxpIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgbmF2IC5sZWZ0LW5hdiBsaTpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbmhlYWRlciBuYXYgLmNlbnRlci1uYXYge1xcbiAgd2lkdGg6IGNhbGMoOTkuOSUgKiA0LzIwIC0gKDMwcHggLSAzMHB4ICogNC8yMCkpO1xcbn1cXG5cXG5oZWFkZXIgbmF2IC5jZW50ZXItbmF2Om50aC1jaGlsZCgxbikge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBjbGVhcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIG5hdiAuY2VudGVyLW5hdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuaGVhZGVyIG5hdiAuY2VudGVyLW5hdjpudGgtY2hpbGQoMjBuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmhlYWRlciBuYXYgLmNlbnRlci1uYXY6bnRoLWNoaWxkKDIwbiArIDEpIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG5oZWFkZXIgbmF2IC5yaWdodC1uYXYge1xcbiAgd2lkdGg6IGNhbGMoOTkuOSUgKiA4LzIwIC0gKDMwcHggLSAzMHB4ICogOC8yMCkpO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmhlYWRlciBuYXYgLnJpZ2h0LW5hdjpudGgtY2hpbGQoMW4pIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbmhlYWRlciBuYXYgLnJpZ2h0LW5hdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuaGVhZGVyIG5hdiAucmlnaHQtbmF2Om50aC1jaGlsZCgyMG4pIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuaGVhZGVyIG5hdiAucmlnaHQtbmF2Om50aC1jaGlsZCgyMG4gKyAxKSB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuaGVhZGVyIG5hdiAucmlnaHQtbmF2IGxpIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuaGVhZGVyIG5hdiAucmlnaHQtbmF2IC5uYXYtY2FydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkNmNjO1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBsZWZ0OiAzcHg7XFxufVxcblxcbmhlYWRlciBuYXYgLnJpZ2h0LW5hdiAubmF2LWNhcnQgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuXFxuaGVhZGVyIG5hdiAucmlnaHQtbmF2IC5uYXYtbG9naW4ge1xcbiAgfVxcblxcbmhlYWRlciBuYXYgLnJpZ2h0LW5hdiAubmF2LWxvZ2luIGEge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbmhlYWRlciBuYXYgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpIGEge1xcbiAgY29sb3I6ICM0MzQzNDMgIWltcG9ydGFudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmhlYWRlciBuYXYgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI2RjOWY4YyAhaW1wb3J0YW50O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpIC5ob21lX2xvZ28ge1xcbiAgd2lkdGg6IGNhbGMoOTkuOSUgKiA0LzQgLSAoMzBweCAtIDMwcHggKiA0LzQpKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIGRhdGEtbmFtZT0nTGF5ZXIgMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTU0IDE0NCclM0UlM0NnIGRhdGEtbmFtZT0nSG9tZXBhZ2UtKy1iYWcnJTNFJTNDcGF0aCBkPSdNMTcwLjYzIDEyNS42N2g2Ljg3bC0zLjQ2LTguNjctMy40MiA4LjY3em03LjI4IDFoLTcuNjdsLTEuMDcgMi43MmE1Ljc0IDUuNzQgMCAwIDAtLjQyIDIuMTggMi44IDIuOCAwIDAgMCAuNjkgMS44OSAyLjU0IDIuNTQgMCAwIDAgMS45Mi44N3YuODhoLTcuNXYtLjg4YzEuNjctLjI0IDMtMS42NyA0LjA2LTQuMjlsNS42MS0xNC4yNGEyLjU1IDIuNTUgMCAwIDAtLjkzLTEgMy42MiAzLjYyIDAgMCAwLTEuNDMtLjM4di0uNzZsMy44OS0xLjMxaDEuNDlsNy41IDE5YTYgNiAwIDAgMCAxLjMgMi4xOCA0LjQ0IDQuNDQgMCAwIDAgMiAuODZ2Ljg4aC05LjY0di0uODhjMS42Ny0uMTggMi40OS0uNCAyLjQ5LTEuMzlhNC40MiA0LjQyIDAgMCAwLS40Ny0xLjY4bC0xLjc4LTQuNjN6TTIxNC4xNCAxMjkuNzVsNy4wOS0xNy4xN2g3di44N2E0Ljg1IDQuODUgMCAwIDAtMi4zLjQyIDEuNjIgMS42MiAwIDAgMC0uNzggMS4xNSAyMS42NiAyMS42NiAwIDAgMC0uMTIgMi43OHYxMy44OGEzLjc1IDMuNzUgMCAwIDAgLjI4IDEuNiAxLjU1IDEuNTUgMCAwIDAgLjkyLjc3IDguNTQgOC41NCAwIDAgMCAyIC4zdi44OGgtMTAuNDZ2LS44OGE1LjcgNS43IDAgMCAwIDIuMjYtLjM5IDEuNDUgMS40NSAwIDAgMCAuODItMSAxMS4zNiAxMS4zNiAwIDAgMCAuMTMtMi4wNnYtMTUuNWwtOC4wMyAxOS44M2gtMWwtOC0xOS4xOHYxMy4xN2MwIDIuOTUgMSA0LjU1IDMuNjkgNS4xNHYuODhoLTguMjF2LS44OGMyLjMyLS4yNCAzLjYyLTEuOCAzLjYyLTQuNjF2LTE0LjlhNC41IDQuNSAwIDAgMC0zLjYyLTEuNHYtLjg3aDcuNTJ6TTI0NC4wNiAxMjcuMDdoMS4wOGMxLjggNS4xNCA0Ljc2IDcuNjYgOCA3LjY2YTUuMTMgNS4xMyAwIDAgMCAzLjQ3LTEuMjUgNC4wOCA0LjA4IDAgMCAwIDEuNDQtMy4yMSA0IDQgMCAwIDAtMS0yLjg0IDUgNSAwIDAgMC0yLjI5LTEuNDMgMjcuNzkgMjcuNzkgMCAwIDAtMy41LS43NyAyMS4wNiAyMS4wNiAwIDAgMS0zLjA4LS42NyA2IDYgMCAwIDEtNC40MS01Ljg2IDYuMzUgNi4zNSAwIDAgMSA2LjQzLTYuNTQgMTMuMTQgMTMuMTQgMCAwIDEgMi41OC4zIDEzIDEzIDAgMCAwIDIuMjQuMjkgMy42OSAzLjY5IDAgMCAwIDEuNjYtLjM4aDEuMjdsLjcgNi42MWgtMS4xM2ExNS44MiAxNS44MiAwIDAgMC0zLjM1LTQuNTEgNS44NSA1Ljg1IDAgMCAwLTQuMDgtMS41NiA0LjI3IDQuMjcgMCAwIDAtNC40IDQuMTFjMCAyLjE0IDEuNDkgMy4xNiA0LjM2IDMuNzVzNS4yNi44OCA2LjYgMS41MmE2LjU5IDYuNTkgMCAwIDEgMy45IDYuMDggNy4yOSA3LjI5IDAgMCAxLTcuMzggNy4yOSA3LjQgNy40IDAgMCAxLTEuNzgtLjE4Yy0uNDEtLjEzLTEuMDktLjM1LTIuMDYtLjY5YTcuNzYgNy43NiAwIDAgMC0yLjI0LS41MiAyLjQ0IDIuNDQgMCAwIDAtMi4wNiAxaC0uOTN2LTguMTZ6TTI3NS44MiAxNDRoMi4zNnYtMzYuMjhoLTIuMzZWMTQ0ek0zMTUuNjUgMTEyLjU3aDguNjh2Ljg3YTMuNTYgMy41NiAwIDAgMC0zLjY2IDMuODZsLjI4IDE4LjQzaC0xbC0xNi41NS0xOS4xOS4yMyAxMi45MWMuMSAzLjEuNjYgNC41NSA0IDQuOXYuODhoLTguNTh2LS44OGE0IDQgMCAwIDAgMi40OS0uOSAzLjI5IDMuMjkgMCAwIDAgMS0xLjkxIDEzLjc1IDEzLjc1IDAgMCAwIC4xMy0yLjlsLS4yMi0xMy4xNWMtMS4yNC0xLjMzLTIuMzctMi0zLjYyLTJoLS4xOXYtLjg3aDYuN2wxNC42MSAxNi44NC0uMjEtMTEuM2MwLTEuNzQtLjMzLTIuOTQtMS4xNy0zLjY5YTMuNTMgMy41MyAwIDAgMC0xLjMxLS43NSA0LjcyIDQuNzIgMCAwIDAtMS42MS0uMjl2LS44N3pNMzUwLjU4IDExMy40NHYtLjg3aDcuMjR2Ljg3Yy0xLjQ1LjItMi44OSAxLjY4LTQuNTcgNC41NWwtNC43OSA4LjE3djUuNzhhMiAyIDAgMCAwIC43NiAxLjkzIDcuOSA3LjkgMCAwIDAgMi42OS41MXYuODhoLTEwLjk2di0uODhoLjI5YTQuNjEgNC42MSAwIDAgMCAyLjA5LS4zNmMuOTMtLjUgMS0xLjE3IDEtMi40di00LjY4bC02LjktMTEuNDlhNyA3IDAgMCAwLTEuMTQtMS41MiAyLjU4IDIuNTggMCAwIDAtMS44NS0uNDV2LS44N2gxMC42OHYuODdhMTAuMzcgMTAuMzcgMCAwIDAtMi4yNS4yNCAxIDEgMCAwIDAtLjc5IDEuMDcgNi43MiA2LjcyIDAgMCAwIDEuMTUgMi41N2w0LjcyIDcuNyAzLjE0LTUuMjJjMS4xNS0xLjkxIDEuNjktMy4xNyAxLjY5LTQuMzVhMiAyIDAgMCAwLS41OS0xLjQgMS44OCAxLjg4IDAgMCAwLTEuNDctLjY0aC0uMTd6TTM4OS4yMSAxMTIuMjd2Ny4xMWgtMWMtMi00LjI0LTQuNjctNi4zMy03LjkzLTYuMzNhNi40IDYuNCAwIDAgMC01LjQyIDIuODkgMTMuNiAxMy42IDAgMCAwLTIuMDYgNy42NGMtLjA2IDYuMjkgMy41NSAxMC45IDguNDMgMTAuODIgMyAwIDUuNzUtMS40OCA4LTQuNDlsMSAuNTNhMTEuODMgMTEuODMgMCAwIDEtMTAuMjkgNS4yOCAxMS41IDExLjUgMCAwIDEtMTEuODUtMTEuNjggMTEuOTMgMTEuOTMgMCAwIDEgMy40Ny04LjU3IDExLjg4IDExLjg4IDAgMCAxIDguMjctMy4zMSA4LjcyIDguNzIgMCAwIDEgMS42OS4xNWMuNTMuMDggMS4xNS4yMyAxLjg4LjQxbDEuNDYuNGE1LjM4IDUuMzggMCAwIDAgLjg5LjA3IDIuOCAyLjggMCAwIDAgMi4xMi0uODloMS4zNHpNMjYuMTcgNDUuNkw5Ljc5IDI2LjA3di0yLjA2aDUuOTNjNi44MyAwIDEwLjQ0LTQuOTQgMTAuNDQtOS41MnMtMy40Mi05LjQ3LTEwLTkuNDdINC4zMlY0NS42SDBWLjZoMTYuMmM5Ljg1IDAgMTQuMzQgNy4yIDE0LjM0IDEzLjg4IDAgNi44Ni00LjQ2IDEyLjA5LTExLjM1IDEzLjI3bC0yLjE2LjM4IDE0LjggMTcuNDZoLTUuNjZ6bTE5Mi41OCAwVi42N2gyNi42NHY0LjM1SDIyMy4ydjE1Ljg3aDIxLjc1djQuNDJIMjIzLjJ2MTUuOTNoMjIuMjZ2NC4zNmgtMjYuNzF6bTY5LjI3IDBWLjY3aDI2djQuMzVoLTIxLjYxdjE1Ljg3aDE5LjE4djQuNDJoLTE5LjE4VjQ1LjZoLTQuMzh6bTYzLjI5IDBoNC4zOVYuNjdoLTQuMzlWNDUuNnptNDQuNzUgMFYuNjdoMjYuNjR2NC4zNWgtMjIuMTd2MTUuODdoMjEuN3Y0LjQyaC0yMS43djE1LjkzaDIyLjI1djQuMzZoLTI2Ljcyem02Mi4zNiAwVi42N2g0LjR2NDAuNTdoMjIuNTJ2NC4zNmgtMjYuOTJ6bTYxLjc2LTQuMzZoMTEuNTRjMTEuNzkgMCAxOC05LjEgMTgtMTguMDhzLTYuMTYtMTguMTQtMTgtMTguMTRoLTExLjU0djM2LjIyem0tNC40IDQuMzZWLjY3aDE1Ljk0YzE1LjMxIDAgMjIuMjkgMTEuNjUgMjIuMjkgMjIuNDlzLTcgMjIuNDMtMjIuMjkgMjIuNDNoLTE1Ljk0em0tMzU0LjE1LjQxYy03LjE0IDAtMTUuMTUtNC4xLTE2LTExLjY2bDQuNDctLjA2aC4wNmMuODQgNC44MSA2LjUzIDcuNCAxMS41MyA3LjQgNS45MSAwIDEyLTMuMzcgMTItOWE4LjQ5IDguNDkgMCAwIDAtLjI0LTEuOTJjLTEtNC42LTYuOTItNS4xNy0xMS42NC01LjY0LTcuNjYtLjc4LTE1LjE4LTIuMjctMTUuODYtMTEuMTRhMTEuNDUgMTEuNDUgMCAwIDEgMi4zNi04LjA5YzIuNzktMy42IDgtNS44NCAxMy41MS01Ljg0IDUuNzggMCAxMyAyLjY2IDE0Ljc4IDEwbC00LjQuMThjLTEuNTMtNC4xNC02LjMyLTYtMTAuNDktNi00LjM0LjEtOCAxLjYtOS45MiA0LjFhNy4zMyA3LjMzIDAgMCAwLTEuNDMgNS4yN2MuNDIgNiA3LjEzIDYuNjkgMTIgNy4xNCA2Ljc0LjgxIDEzLjg2IDIuNTcgMTUuNDYgOS4xM2ExNi40MyAxNi40MyAwIDAgMSAuMzEgMi44NGMwIDguMjUtOC40MSAxMy4yLTE2LjUzIDEzLjJ6TTg4LjE0IDQuNDJhMTguNjEgMTguNjEgMCAwIDAtMTMuMTkgNS41MiAxOC4zMyAxOC4zMyAwIDAgMC01LjUgMTMuMTYgMTguMzcgMTguMzcgMCAwIDAgNS41IDEzLjE1IDE4LjY2IDE4LjY2IDAgMCAwIDEzLjE2IDUuNTIgMTkuMDYgMTkuMDYgMCAwIDAgMTMuMjgtNS41MiAxOC42MiAxOC42MiAwIDAgMCA1LjQ0LTEzLjE1IDE4LjY1IDE4LjY1IDAgMCAwLTUuNDMtMTMuMTYgMTkuMDcgMTkuMDcgMCAwIDAtMTMuMy01LjUzem0wIDQxLjc4YTIzIDIzIDAgMCAxLTE2LjM1LTYuODIgMjMuMiAyMy4yIDAgMCAxLTYuNzctMTYuMjggMjMuMjcgMjMuMjcgMCAwIDEgNi43Ny0xNi4zQTIzLjIyIDIzLjIyIDAgMCAxIDg4LjE0IDBhMjMuMzMgMjMuMzMgMCAwIDEgMTYuNDMgNi44IDIzLjMyIDIzLjMyIDAgMCAxIDYuNzQgMTYuMyAyMy4yMiAyMy4yMiAwIDAgMS02Ljc2IDE2LjI4IDIzIDIzIDAgMCAxLTE2LjQxIDYuNzh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKSBuby1yZXBlYXQgNTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNTBweDsvKiB0ZXh0LWhpZGUgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWluZGVudDogMTAxJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmhlYWRlciBuYXYgbGkgLmhvbWVfbG9nbzpudGgtY2hpbGQoMW4pIHsvKiB0ZXh0LWhpZGUgKi9cXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbmhlYWRlciBuYXYgbGkgLmhvbWVfbG9nbzpsYXN0LWNoaWxkIHsvKiB0ZXh0LWhpZGUgKi9cXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuaGVhZGVyIG5hdiBsaSAuaG9tZV9sb2dvOm50aC1jaGlsZCg0bikgey8qIHRleHQtaGlkZSAqL1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpIC5ob21lX2xvZ286bnRoLWNoaWxkKDRuICsgMSkgey8qIHRleHQtaGlkZSAqL1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbmhlYWRlciBuYXYgbGkuY2FydCB7XFxuICB3aWR0aDogY2FsYyg5OS45JSAqIDIvMjAgLSAoMzBweCAtIDMwcHggKiAyLzIwKSk7XFxuICBiYWNrZ3JvdW5kOiAjZmVkNmNjO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpLmNhcnQ6bnRoLWNoaWxkKDFuKSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIGNsZWFyOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpLmNhcnQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbmhlYWRlciBuYXYgbGkuY2FydDpudGgtY2hpbGQoMjBuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmhlYWRlciBuYXYgbGkuY2FydDpudGgtY2hpbGQoMjBuICsgMSkge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbmhlYWRlciBuYXYgbGkuY2FydCBzdmcge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMnB4O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpIHN2Zy5hbmdsZV9kb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTFweDtcXG59XFxuXFxuaGVhZGVyIG5hdiBsaSAuc3ViLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZGRkODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdG9wOiA2M3B4O1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbmhlYWRlciBuYXYgbGkgLnN1Yi1tZW51IGxpIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVyIG5hdiBsaSAuc3ViLW1lbnUgYSB7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpIC5zd2l0Y2hlci1zdWItbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNkZGQ4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IGF1dG87XFxuICB0b3A6IDYzcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuaGVhZGVyIG5hdiBsaSAuc3dpdGNoZXItc3ViLW1lbnUgbGFiZWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbmhlYWRlciBuYXYgbGkgLnN3aXRjaGVyLXN1Yi1tZW51IHNlbGVjdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuaGVhZGVyLmhhc19iYW5uZXIgbmF2IHVsIGxpIGEge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmhlYWRlci5oYXNfYmFubmVyIG5hdiB1bCBsaSBhLmhvbWVfbG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU1NCAxNDQnJTNFJTNDZyBkYXRhLW5hbWU9J0hvbWVwYWdlLSstYmFnJyUzRSUzQ3BhdGggZD0nTTE3MC42MyAxMjUuNjdoNi44N2wtMy40Ni04LjY3LTMuNDIgOC42N3ptNy4yOCAxaC03LjY3bC0xLjA3IDIuNzJhNS43NCA1Ljc0IDAgMCAwLS40MiAyLjE4IDIuOCAyLjggMCAwIDAgLjY5IDEuODkgMi41NCAyLjU0IDAgMCAwIDEuOTIuODd2Ljg4aC03LjV2LS44OGMxLjY3LS4yNCAzLTEuNjcgNC4wNi00LjI5bDUuNjEtMTQuMjRhMi41NSAyLjU1IDAgMCAwLS45My0xIDMuNjIgMy42MiAwIDAgMC0xLjQzLS4zOHYtLjc2bDMuODktMS4zMWgxLjQ5bDcuNSAxOWE2IDYgMCAwIDAgMS4zIDIuMTggNC40NCA0LjQ0IDAgMCAwIDIgLjg2di44OGgtOS42NHYtLjg4YzEuNjctLjE4IDIuNDktLjQgMi40OS0xLjM5YTQuNDIgNC40MiAwIDAgMC0uNDctMS42OGwtMS43OC00LjYzek0yMTQuMTQgMTI5Ljc1bDcuMDktMTcuMTdoN3YuODdhNC44NSA0Ljg1IDAgMCAwLTIuMy40MiAxLjYyIDEuNjIgMCAwIDAtLjc4IDEuMTUgMjEuNjYgMjEuNjYgMCAwIDAtLjEyIDIuNzh2MTMuODhhMy43NSAzLjc1IDAgMCAwIC4yOCAxLjYgMS41NSAxLjU1IDAgMCAwIC45Mi43NyA4LjU0IDguNTQgMCAwIDAgMiAuM3YuODhoLTEwLjQ2di0uODhhNS43IDUuNyAwIDAgMCAyLjI2LS4zOSAxLjQ1IDEuNDUgMCAwIDAgLjgyLTEgMTEuMzYgMTEuMzYgMCAwIDAgLjEzLTIuMDZ2LTE1LjVsLTguMDMgMTkuODNoLTFsLTgtMTkuMTh2MTMuMTdjMCAyLjk1IDEgNC41NSAzLjY5IDUuMTR2Ljg4aC04LjIxdi0uODhjMi4zMi0uMjQgMy42Mi0xLjggMy42Mi00LjYxdi0xNC45YTQuNSA0LjUgMCAwIDAtMy42Mi0xLjR2LS44N2g3LjUyek0yNDQuMDYgMTI3LjA3aDEuMDhjMS44IDUuMTQgNC43NiA3LjY2IDggNy42NmE1LjEzIDUuMTMgMCAwIDAgMy40Ny0xLjI1IDQuMDggNC4wOCAwIDAgMCAxLjQ0LTMuMjEgNCA0IDAgMCAwLTEtMi44NCA1IDUgMCAwIDAtMi4yOS0xLjQzIDI3Ljc5IDI3Ljc5IDAgMCAwLTMuNS0uNzcgMjEuMDYgMjEuMDYgMCAwIDEtMy4wOC0uNjcgNiA2IDAgMCAxLTQuNDEtNS44NiA2LjM1IDYuMzUgMCAwIDEgNi40My02LjU0IDEzLjE0IDEzLjE0IDAgMCAxIDIuNTguMyAxMyAxMyAwIDAgMCAyLjI0LjI5IDMuNjkgMy42OSAwIDAgMCAxLjY2LS4zOGgxLjI3bC43IDYuNjFoLTEuMTNhMTUuODIgMTUuODIgMCAwIDAtMy4zNS00LjUxIDUuODUgNS44NSAwIDAgMC00LjA4LTEuNTYgNC4yNyA0LjI3IDAgMCAwLTQuNCA0LjExYzAgMi4xNCAxLjQ5IDMuMTYgNC4zNiAzLjc1czUuMjYuODggNi42IDEuNTJhNi41OSA2LjU5IDAgMCAxIDMuOSA2LjA4IDcuMjkgNy4yOSAwIDAgMS03LjM4IDcuMjkgNy40IDcuNCAwIDAgMS0xLjc4LS4xOGMtLjQxLS4xMy0xLjA5LS4zNS0yLjA2LS42OWE3Ljc2IDcuNzYgMCAwIDAtMi4yNC0uNTIgMi40NCAyLjQ0IDAgMCAwLTIuMDYgMWgtLjkzdi04LjE2ek0yNzUuODIgMTQ0aDIuMzZ2LTM2LjI4aC0yLjM2VjE0NHpNMzE1LjY1IDExMi41N2g4LjY4di44N2EzLjU2IDMuNTYgMCAwIDAtMy42NiAzLjg2bC4yOCAxOC40M2gtMWwtMTYuNTUtMTkuMTkuMjMgMTIuOTFjLjEgMy4xLjY2IDQuNTUgNCA0Ljl2Ljg4aC04LjU4di0uODhhNCA0IDAgMCAwIDIuNDktLjkgMy4yOSAzLjI5IDAgMCAwIDEtMS45MSAxMy43NSAxMy43NSAwIDAgMCAuMTMtMi45bC0uMjItMTMuMTVjLTEuMjQtMS4zMy0yLjM3LTItMy42Mi0yaC0uMTl2LS44N2g2LjdsMTQuNjEgMTYuODQtLjIxLTExLjNjMC0xLjc0LS4zMy0yLjk0LTEuMTctMy42OWEzLjUzIDMuNTMgMCAwIDAtMS4zMS0uNzUgNC43MiA0LjcyIDAgMCAwLTEuNjEtLjI5di0uODd6TTM1MC41OCAxMTMuNDR2LS44N2g3LjI0di44N2MtMS40NS4yLTIuODkgMS42OC00LjU3IDQuNTVsLTQuNzkgOC4xN3Y1Ljc4YTIgMiAwIDAgMCAuNzYgMS45MyA3LjkgNy45IDAgMCAwIDIuNjkuNTF2Ljg4aC0xMC45NnYtLjg4aC4yOWE0LjYxIDQuNjEgMCAwIDAgMi4wOS0uMzZjLjkzLS41IDEtMS4xNyAxLTIuNHYtNC42OGwtNi45LTExLjQ5YTcgNyAwIDAgMC0xLjE0LTEuNTIgMi41OCAyLjU4IDAgMCAwLTEuODUtLjQ1di0uODdoMTAuNjh2Ljg3YTEwLjM3IDEwLjM3IDAgMCAwLTIuMjUuMjQgMSAxIDAgMCAwLS43OSAxLjA3IDYuNzIgNi43MiAwIDAgMCAxLjE1IDIuNTdsNC43MiA3LjcgMy4xNC01LjIyYzEuMTUtMS45MSAxLjY5LTMuMTcgMS42OS00LjM1YTIgMiAwIDAgMC0uNTktMS40IDEuODggMS44OCAwIDAgMC0xLjQ3LS42NGgtLjE3ek0zODkuMjEgMTEyLjI3djcuMTFoLTFjLTItNC4yNC00LjY3LTYuMzMtNy45My02LjMzYTYuNCA2LjQgMCAwIDAtNS40MiAyLjg5IDEzLjYgMTMuNiAwIDAgMC0yLjA2IDcuNjRjLS4wNiA2LjI5IDMuNTUgMTAuOSA4LjQzIDEwLjgyIDMgMCA1Ljc1LTEuNDggOC00LjQ5bDEgLjUzYTExLjgzIDExLjgzIDAgMCAxLTEwLjI5IDUuMjggMTEuNSAxMS41IDAgMCAxLTExLjg1LTExLjY4IDExLjkzIDExLjkzIDAgMCAxIDMuNDctOC41NyAxMS44OCAxMS44OCAwIDAgMSA4LjI3LTMuMzEgOC43MiA4LjcyIDAgMCAxIDEuNjkuMTVjLjUzLjA4IDEuMTUuMjMgMS44OC40MWwxLjQ2LjRhNS4zOCA1LjM4IDAgMCAwIC44OS4wNyAyLjggMi44IDAgMCAwIDIuMTItLjg5aDEuMzR6TTI2LjE3IDQ1LjZMOS43OSAyNi4wN3YtMi4wNmg1LjkzYzYuODMgMCAxMC40NC00Ljk0IDEwLjQ0LTkuNTJzLTMuNDItOS40Ny0xMC05LjQ3SDQuMzJWNDUuNkgwVi42aDE2LjJjOS44NSAwIDE0LjM0IDcuMiAxNC4zNCAxMy44OCAwIDYuODYtNC40NiAxMi4wOS0xMS4zNSAxMy4yN2wtMi4xNi4zOCAxNC44IDE3LjQ2aC01LjY2em0xOTIuNTggMFYuNjdoMjYuNjR2NC4zNUgyMjMuMnYxNS44N2gyMS43NXY0LjQySDIyMy4ydjE1LjkzaDIyLjI2djQuMzZoLTI2Ljcxem02OS4yNyAwVi42N2gyNnY0LjM1aC0yMS42MXYxNS44N2gxOS4xOHY0LjQyaC0xOS4xOFY0NS42aC00LjM4em02My4yOSAwaDQuMzlWLjY3aC00LjM5VjQ1LjZ6bTQ0Ljc1IDBWLjY3aDI2LjY0djQuMzVoLTIyLjE3djE1Ljg3aDIxLjd2NC40MmgtMjEuN3YxNS45M2gyMi4yNXY0LjM2aC0yNi43MnptNjIuMzYgMFYuNjdoNC40djQwLjU3aDIyLjUydjQuMzZoLTI2Ljkyem02MS43Ni00LjM2aDExLjU0YzExLjc5IDAgMTgtOS4xIDE4LTE4LjA4cy02LjE2LTE4LjE0LTE4LTE4LjE0aC0xMS41NHYzNi4yMnptLTQuNCA0LjM2Vi42N2gxNS45NGMxNS4zMSAwIDIyLjI5IDExLjY1IDIyLjI5IDIyLjQ5cy03IDIyLjQzLTIyLjI5IDIyLjQzaC0xNS45NHptLTM1NC4xNS40MWMtNy4xNCAwLTE1LjE1LTQuMS0xNi0xMS42Nmw0LjQ3LS4wNmguMDZjLjg0IDQuODEgNi41MyA3LjQgMTEuNTMgNy40IDUuOTEgMCAxMi0zLjM3IDEyLTlhOC40OSA4LjQ5IDAgMCAwLS4yNC0xLjkyYy0xLTQuNi02LjkyLTUuMTctMTEuNjQtNS42NC03LjY2LS43OC0xNS4xOC0yLjI3LTE1Ljg2LTExLjE0YTExLjQ1IDExLjQ1IDAgMCAxIDIuMzYtOC4wOWMyLjc5LTMuNiA4LTUuODQgMTMuNTEtNS44NCA1Ljc4IDAgMTMgMi42NiAxNC43OCAxMGwtNC40LjE4Yy0xLjUzLTQuMTQtNi4zMi02LTEwLjQ5LTYtNC4zNC4xLTggMS42LTkuOTIgNC4xYTcuMzMgNy4zMyAwIDAgMC0xLjQzIDUuMjdjLjQyIDYgNy4xMyA2LjY5IDEyIDcuMTQgNi43NC44MSAxMy44NiAyLjU3IDE1LjQ2IDkuMTNhMTYuNDMgMTYuNDMgMCAwIDEgLjMxIDIuODRjMCA4LjI1LTguNDEgMTMuMi0xNi41MyAxMy4yek04OC4xNCA0LjQyYTE4LjYxIDE4LjYxIDAgMCAwLTEzLjE5IDUuNTIgMTguMzMgMTguMzMgMCAwIDAtNS41IDEzLjE2IDE4LjM3IDE4LjM3IDAgMCAwIDUuNSAxMy4xNSAxOC42NiAxOC42NiAwIDAgMCAxMy4xNiA1LjUyIDE5LjA2IDE5LjA2IDAgMCAwIDEzLjI4LTUuNTIgMTguNjIgMTguNjIgMCAwIDAgNS40NC0xMy4xNSAxOC42NSAxOC42NSAwIDAgMC01LjQzLTEzLjE2IDE5LjA3IDE5LjA3IDAgMCAwLTEzLjMtNS41M3ptMCA0MS43OGEyMyAyMyAwIDAgMS0xNi4zNS02LjgyIDIzLjIgMjMuMiAwIDAgMS02Ljc3LTE2LjI4IDIzLjI3IDIzLjI3IDAgMCAxIDYuNzctMTYuM0EyMy4yMiAyMy4yMiAwIDAgMSA4OC4xNCAwYTIzLjMzIDIzLjMzIDAgMCAxIDE2LjQzIDYuOCAyMy4zMiAyMy4zMiAwIDAgMSA2Ljc0IDE2LjMgMjMuMjIgMjMuMjIgMCAwIDEtNi43NiAxNi4yOCAyMyAyMyAwIDAgMS0xNi40MSA2Ljc4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MTNweCkge1xcbiAgaGVhZGVyIHtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBsaSB7XFxuICAgIHBhZGRpbmc6IDAgMTlweDtcXG4gIH0gICAgXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0OThweCkge1xcbiAgaGVhZGVyIHtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBsaSB7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAubmF2LWNhcnQge1xcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxuICB9XFxuICBoZWFkZXIge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5sZWZ0LW5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5sZWZ0LW5hdiBsaSB7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLmxlZnQtbmF2IGxpIGEge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTRweCkge1xcbiAgaGVhZGVyIHtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBsaSB7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIxOXB4KSB7XFxuICBoZWFkZXIge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5yaWdodC1uYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IGxpIHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBsaSBhIHtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5sZWZ0LW5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5sZWZ0LW5hdiBsaSB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5sZWZ0LW5hdiBsaSBhIHtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzNweCkge1xcbiAgaGVhZGVyIHtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiBsaSB7XFxuICAgIHBhZGRpbmc6IDAgN3B4O1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IC5uYXYtY2FydCB7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA5M3B4KSB7XFxuICBoZWFkZXIge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5yaWdodC1uYXYge1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAucmlnaHQtbmF2IGxpIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5yaWdodC1uYXYgLm5hdi1jYXJ0IHtcXG4gICAgcGFkZGluZzogMCAxM3B4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDM3cHgpIHtcXG4gIGhlYWRlciB7XFxuICB9XFxuICBoZWFkZXIgbmF2IHtcXG4gIH1cXG4gIGhlYWRlciBuYXYgLnJpZ2h0LW5hdiB7XFxuICB9XFxuICBoZWFkZXIgbmF2IC5yaWdodC1uYXYgbGkge1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuXFxuICBoZWFkZXIge1xcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnRcXG4gIH1cXG5cXG4gIGhlYWRlci5maXhlZCB7XFxuICB9XFxuXFxuICBoZWFkZXIuZml4ZWQgbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4gIGhlYWRlci5maXhlZCBuYXYgbGkge1xcbiAgfVxcblxcbiAgaGVhZGVyLmZpeGVkIG5hdiBsaSAubW9iaWxlX2xvZ28ge1xcbiAgICB3aWR0aDogY2FsYyg5OS45JSAqIDMvNCAtICgzMHB4IC0gMzBweCAqIDMvNCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU1NCAxNDQnJTNFJTNDZyBkYXRhLW5hbWU9J0hvbWVwYWdlLSstYmFnJyUzRSUzQ3BhdGggZD0nTTE3MC42MyAxMjUuNjdoNi44N2wtMy40Ni04LjY3LTMuNDIgOC42N3ptNy4yOCAxaC03LjY3bC0xLjA3IDIuNzJhNS43NCA1Ljc0IDAgMCAwLS40MiAyLjE4IDIuOCAyLjggMCAwIDAgLjY5IDEuODkgMi41NCAyLjU0IDAgMCAwIDEuOTIuODd2Ljg4aC03LjV2LS44OGMxLjY3LS4yNCAzLTEuNjcgNC4wNi00LjI5bDUuNjEtMTQuMjRhMi41NSAyLjU1IDAgMCAwLS45My0xIDMuNjIgMy42MiAwIDAgMC0xLjQzLS4zOHYtLjc2bDMuODktMS4zMWgxLjQ5bDcuNSAxOWE2IDYgMCAwIDAgMS4zIDIuMTggNC40NCA0LjQ0IDAgMCAwIDIgLjg2di44OGgtOS42NHYtLjg4YzEuNjctLjE4IDIuNDktLjQgMi40OS0xLjM5YTQuNDIgNC40MiAwIDAgMC0uNDctMS42OGwtMS43OC00LjYzek0yMTQuMTQgMTI5Ljc1bDcuMDktMTcuMTdoN3YuODdhNC44NSA0Ljg1IDAgMCAwLTIuMy40MiAxLjYyIDEuNjIgMCAwIDAtLjc4IDEuMTUgMjEuNjYgMjEuNjYgMCAwIDAtLjEyIDIuNzh2MTMuODhhMy43NSAzLjc1IDAgMCAwIC4yOCAxLjYgMS41NSAxLjU1IDAgMCAwIC45Mi43NyA4LjU0IDguNTQgMCAwIDAgMiAuM3YuODhoLTEwLjQ2di0uODhhNS43IDUuNyAwIDAgMCAyLjI2LS4zOSAxLjQ1IDEuNDUgMCAwIDAgLjgyLTEgMTEuMzYgMTEuMzYgMCAwIDAgLjEzLTIuMDZ2LTE1LjVsLTguMDMgMTkuODNoLTFsLTgtMTkuMTh2MTMuMTdjMCAyLjk1IDEgNC41NSAzLjY5IDUuMTR2Ljg4aC04LjIxdi0uODhjMi4zMi0uMjQgMy42Mi0xLjggMy42Mi00LjYxdi0xNC45YTQuNSA0LjUgMCAwIDAtMy42Mi0xLjR2LS44N2g3LjUyek0yNDQuMDYgMTI3LjA3aDEuMDhjMS44IDUuMTQgNC43NiA3LjY2IDggNy42NmE1LjEzIDUuMTMgMCAwIDAgMy40Ny0xLjI1IDQuMDggNC4wOCAwIDAgMCAxLjQ0LTMuMjEgNCA0IDAgMCAwLTEtMi44NCA1IDUgMCAwIDAtMi4yOS0xLjQzIDI3Ljc5IDI3Ljc5IDAgMCAwLTMuNS0uNzcgMjEuMDYgMjEuMDYgMCAwIDEtMy4wOC0uNjcgNiA2IDAgMCAxLTQuNDEtNS44NiA2LjM1IDYuMzUgMCAwIDEgNi40My02LjU0IDEzLjE0IDEzLjE0IDAgMCAxIDIuNTguMyAxMyAxMyAwIDAgMCAyLjI0LjI5IDMuNjkgMy42OSAwIDAgMCAxLjY2LS4zOGgxLjI3bC43IDYuNjFoLTEuMTNhMTUuODIgMTUuODIgMCAwIDAtMy4zNS00LjUxIDUuODUgNS44NSAwIDAgMC00LjA4LTEuNTYgNC4yNyA0LjI3IDAgMCAwLTQuNCA0LjExYzAgMi4xNCAxLjQ5IDMuMTYgNC4zNiAzLjc1czUuMjYuODggNi42IDEuNTJhNi41OSA2LjU5IDAgMCAxIDMuOSA2LjA4IDcuMjkgNy4yOSAwIDAgMS03LjM4IDcuMjkgNy40IDcuNCAwIDAgMS0xLjc4LS4xOGMtLjQxLS4xMy0xLjA5LS4zNS0yLjA2LS42OWE3Ljc2IDcuNzYgMCAwIDAtMi4yNC0uNTIgMi40NCAyLjQ0IDAgMCAwLTIuMDYgMWgtLjkzdi04LjE2ek0yNzUuODIgMTQ0aDIuMzZ2LTM2LjI4aC0yLjM2VjE0NHpNMzE1LjY1IDExMi41N2g4LjY4di44N2EzLjU2IDMuNTYgMCAwIDAtMy42NiAzLjg2bC4yOCAxOC40M2gtMWwtMTYuNTUtMTkuMTkuMjMgMTIuOTFjLjEgMy4xLjY2IDQuNTUgNCA0Ljl2Ljg4aC04LjU4di0uODhhNCA0IDAgMCAwIDIuNDktLjkgMy4yOSAzLjI5IDAgMCAwIDEtMS45MSAxMy43NSAxMy43NSAwIDAgMCAuMTMtMi45bC0uMjItMTMuMTVjLTEuMjQtMS4zMy0yLjM3LTItMy42Mi0yaC0uMTl2LS44N2g2LjdsMTQuNjEgMTYuODQtLjIxLTExLjNjMC0xLjc0LS4zMy0yLjk0LTEuMTctMy42OWEzLjUzIDMuNTMgMCAwIDAtMS4zMS0uNzUgNC43MiA0LjcyIDAgMCAwLTEuNjEtLjI5di0uODd6TTM1MC41OCAxMTMuNDR2LS44N2g3LjI0di44N2MtMS40NS4yLTIuODkgMS42OC00LjU3IDQuNTVsLTQuNzkgOC4xN3Y1Ljc4YTIgMiAwIDAgMCAuNzYgMS45MyA3LjkgNy45IDAgMCAwIDIuNjkuNTF2Ljg4aC0xMC45NnYtLjg4aC4yOWE0LjYxIDQuNjEgMCAwIDAgMi4wOS0uMzZjLjkzLS41IDEtMS4xNyAxLTIuNHYtNC42OGwtNi45LTExLjQ5YTcgNyAwIDAgMC0xLjE0LTEuNTIgMi41OCAyLjU4IDAgMCAwLTEuODUtLjQ1di0uODdoMTAuNjh2Ljg3YTEwLjM3IDEwLjM3IDAgMCAwLTIuMjUuMjQgMSAxIDAgMCAwLS43OSAxLjA3IDYuNzIgNi43MiAwIDAgMCAxLjE1IDIuNTdsNC43MiA3LjcgMy4xNC01LjIyYzEuMTUtMS45MSAxLjY5LTMuMTcgMS42OS00LjM1YTIgMiAwIDAgMC0uNTktMS40IDEuODggMS44OCAwIDAgMC0xLjQ3LS42NGgtLjE3ek0zODkuMjEgMTEyLjI3djcuMTFoLTFjLTItNC4yNC00LjY3LTYuMzMtNy45My02LjMzYTYuNCA2LjQgMCAwIDAtNS40MiAyLjg5IDEzLjYgMTMuNiAwIDAgMC0yLjA2IDcuNjRjLS4wNiA2LjI5IDMuNTUgMTAuOSA4LjQzIDEwLjgyIDMgMCA1Ljc1LTEuNDggOC00LjQ5bDEgLjUzYTExLjgzIDExLjgzIDAgMCAxLTEwLjI5IDUuMjggMTEuNSAxMS41IDAgMCAxLTExLjg1LTExLjY4IDExLjkzIDExLjkzIDAgMCAxIDMuNDctOC41NyAxMS44OCAxMS44OCAwIDAgMSA4LjI3LTMuMzEgOC43MiA4LjcyIDAgMCAxIDEuNjkuMTVjLjUzLjA4IDEuMTUuMjMgMS44OC40MWwxLjQ2LjRhNS4zOCA1LjM4IDAgMCAwIC44OS4wNyAyLjggMi44IDAgMCAwIDIuMTItLjg5aDEuMzR6TTI2LjE3IDQ1LjZMOS43OSAyNi4wN3YtMi4wNmg1LjkzYzYuODMgMCAxMC40NC00Ljk0IDEwLjQ0LTkuNTJzLTMuNDItOS40Ny0xMC05LjQ3SDQuMzJWNDUuNkgwVi42aDE2LjJjOS44NSAwIDE0LjM0IDcuMiAxNC4zNCAxMy44OCAwIDYuODYtNC40NiAxMi4wOS0xMS4zNSAxMy4yN2wtMi4xNi4zOCAxNC44IDE3LjQ2aC01LjY2em0xOTIuNTggMFYuNjdoMjYuNjR2NC4zNUgyMjMuMnYxNS44N2gyMS43NXY0LjQySDIyMy4ydjE1LjkzaDIyLjI2djQuMzZoLTI2Ljcxem02OS4yNyAwVi42N2gyNnY0LjM1aC0yMS42MXYxNS44N2gxOS4xOHY0LjQyaC0xOS4xOFY0NS42aC00LjM4em02My4yOSAwaDQuMzlWLjY3aC00LjM5VjQ1LjZ6bTQ0Ljc1IDBWLjY3aDI2LjY0djQuMzVoLTIyLjE3djE1Ljg3aDIxLjd2NC40MmgtMjEuN3YxNS45M2gyMi4yNXY0LjM2aC0yNi43MnptNjIuMzYgMFYuNjdoNC40djQwLjU3aDIyLjUydjQuMzZoLTI2Ljkyem02MS43Ni00LjM2aDExLjU0YzExLjc5IDAgMTgtOS4xIDE4LTE4LjA4cy02LjE2LTE4LjE0LTE4LTE4LjE0aC0xMS41NHYzNi4yMnptLTQuNCA0LjM2Vi42N2gxNS45NGMxNS4zMSAwIDIyLjI5IDExLjY1IDIyLjI5IDIyLjQ5cy03IDIyLjQzLTIyLjI5IDIyLjQzaC0xNS45NHptLTM1NC4xNS40MWMtNy4xNCAwLTE1LjE1LTQuMS0xNi0xMS42Nmw0LjQ3LS4wNmguMDZjLjg0IDQuODEgNi41MyA3LjQgMTEuNTMgNy40IDUuOTEgMCAxMi0zLjM3IDEyLTlhOC40OSA4LjQ5IDAgMCAwLS4yNC0xLjkyYy0xLTQuNi02LjkyLTUuMTctMTEuNjQtNS42NC03LjY2LS43OC0xNS4xOC0yLjI3LTE1Ljg2LTExLjE0YTExLjQ1IDExLjQ1IDAgMCAxIDIuMzYtOC4wOWMyLjc5LTMuNiA4LTUuODQgMTMuNTEtNS44NCA1Ljc4IDAgMTMgMi42NiAxNC43OCAxMGwtNC40LjE4Yy0xLjUzLTQuMTQtNi4zMi02LTEwLjQ5LTYtNC4zNC4xLTggMS42LTkuOTIgNC4xYTcuMzMgNy4zMyAwIDAgMC0xLjQzIDUuMjdjLjQyIDYgNy4xMyA2LjY5IDEyIDcuMTQgNi43NC44MSAxMy44NiAyLjU3IDE1LjQ2IDkuMTNhMTYuNDMgMTYuNDMgMCAwIDEgLjMxIDIuODRjMCA4LjI1LTguNDEgMTMuMi0xNi41MyAxMy4yek04OC4xNCA0LjQyYTE4LjYxIDE4LjYxIDAgMCAwLTEzLjE5IDUuNTIgMTguMzMgMTguMzMgMCAwIDAtNS41IDEzLjE2IDE4LjM3IDE4LjM3IDAgMCAwIDUuNSAxMy4xNSAxOC42NiAxOC42NiAwIDAgMCAxMy4xNiA1LjUyIDE5LjA2IDE5LjA2IDAgMCAwIDEzLjI4LTUuNTIgMTguNjIgMTguNjIgMCAwIDAgNS40NC0xMy4xNSAxOC42NSAxOC42NSAwIDAgMC01LjQzLTEzLjE2IDE5LjA3IDE5LjA3IDAgMCAwLTEzLjMtNS41M3ptMCA0MS43OGEyMyAyMyAwIDAgMS0xNi4zNS02LjgyIDIzLjIgMjMuMiAwIDAgMS02Ljc3LTE2LjI4IDIzLjI3IDIzLjI3IDAgMCAxIDYuNzctMTYuM0EyMy4yMiAyMy4yMiAwIDAgMSA4OC4xNCAwYTIzLjMzIDIzLjMzIDAgMCAxIDE2LjQzIDYuOCAyMy4zMiAyMy4zMiAwIDAgMSA2Ljc0IDE2LjMgMjMuMjIgMjMuMjIgMCAwIDEtNi43NiAxNi4yOCAyMyAyMyAwIDAgMS0xNi40MSA2Ljc4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMSU7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgaGVhZGVyLmZpeGVkIG5hdiBsaSAubW9iaWxlX2xvZ286bnRoLWNoaWxkKDFuKSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgfVxcblxcbiAgaGVhZGVyLmZpeGVkIG5hdiBsaSAubW9iaWxlX2xvZ286bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG5cXG4gIGhlYWRlci5maXhlZCBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0bikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIGhlYWRlci5maXhlZCBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0biArIDEpIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICB9XFxuXFxuICBoZWFkZXIgbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICBoZWFkZXIgbmF2IC5kZXNrdG9wLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaGVhZGVyIG5hdiAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIGhlYWRlciBuYXYgbGkge1xcbiAgfVxcblxcbiAgaGVhZGVyIG5hdiBsaSAubW9iaWxlX2xvZ28ge1xcbiAgICB3aWR0aDogY2FsYyg5OS45JSAqIDMvNCAtICgzMHB4IC0gMzBweCAqIDMvNCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU1NCAxNDQnJTNFJTNDZyBkYXRhLW5hbWU9J0hvbWVwYWdlLSstYmFnJyUzRSUzQ3BhdGggZD0nTTE3MC42MyAxMjUuNjdoNi44N2wtMy40Ni04LjY3LTMuNDIgOC42N3ptNy4yOCAxaC03LjY3bC0xLjA3IDIuNzJhNS43NCA1Ljc0IDAgMCAwLS40MiAyLjE4IDIuOCAyLjggMCAwIDAgLjY5IDEuODkgMi41NCAyLjU0IDAgMCAwIDEuOTIuODd2Ljg4aC03LjV2LS44OGMxLjY3LS4yNCAzLTEuNjcgNC4wNi00LjI5bDUuNjEtMTQuMjRhMi41NSAyLjU1IDAgMCAwLS45My0xIDMuNjIgMy42MiAwIDAgMC0xLjQzLS4zOHYtLjc2bDMuODktMS4zMWgxLjQ5bDcuNSAxOWE2IDYgMCAwIDAgMS4zIDIuMTggNC40NCA0LjQ0IDAgMCAwIDIgLjg2di44OGgtOS42NHYtLjg4YzEuNjctLjE4IDIuNDktLjQgMi40OS0xLjM5YTQuNDIgNC40MiAwIDAgMC0uNDctMS42OGwtMS43OC00LjYzek0yMTQuMTQgMTI5Ljc1bDcuMDktMTcuMTdoN3YuODdhNC44NSA0Ljg1IDAgMCAwLTIuMy40MiAxLjYyIDEuNjIgMCAwIDAtLjc4IDEuMTUgMjEuNjYgMjEuNjYgMCAwIDAtLjEyIDIuNzh2MTMuODhhMy43NSAzLjc1IDAgMCAwIC4yOCAxLjYgMS41NSAxLjU1IDAgMCAwIC45Mi43NyA4LjU0IDguNTQgMCAwIDAgMiAuM3YuODhoLTEwLjQ2di0uODhhNS43IDUuNyAwIDAgMCAyLjI2LS4zOSAxLjQ1IDEuNDUgMCAwIDAgLjgyLTEgMTEuMzYgMTEuMzYgMCAwIDAgLjEzLTIuMDZ2LTE1LjVsLTguMDMgMTkuODNoLTFsLTgtMTkuMTh2MTMuMTdjMCAyLjk1IDEgNC41NSAzLjY5IDUuMTR2Ljg4aC04LjIxdi0uODhjMi4zMi0uMjQgMy42Mi0xLjggMy42Mi00LjYxdi0xNC45YTQuNSA0LjUgMCAwIDAtMy42Mi0xLjR2LS44N2g3LjUyek0yNDQuMDYgMTI3LjA3aDEuMDhjMS44IDUuMTQgNC43NiA3LjY2IDggNy42NmE1LjEzIDUuMTMgMCAwIDAgMy40Ny0xLjI1IDQuMDggNC4wOCAwIDAgMCAxLjQ0LTMuMjEgNCA0IDAgMCAwLTEtMi44NCA1IDUgMCAwIDAtMi4yOS0xLjQzIDI3Ljc5IDI3Ljc5IDAgMCAwLTMuNS0uNzcgMjEuMDYgMjEuMDYgMCAwIDEtMy4wOC0uNjcgNiA2IDAgMCAxLTQuNDEtNS44NiA2LjM1IDYuMzUgMCAwIDEgNi40My02LjU0IDEzLjE0IDEzLjE0IDAgMCAxIDIuNTguMyAxMyAxMyAwIDAgMCAyLjI0LjI5IDMuNjkgMy42OSAwIDAgMCAxLjY2LS4zOGgxLjI3bC43IDYuNjFoLTEuMTNhMTUuODIgMTUuODIgMCAwIDAtMy4zNS00LjUxIDUuODUgNS44NSAwIDAgMC00LjA4LTEuNTYgNC4yNyA0LjI3IDAgMCAwLTQuNCA0LjExYzAgMi4xNCAxLjQ5IDMuMTYgNC4zNiAzLjc1czUuMjYuODggNi42IDEuNTJhNi41OSA2LjU5IDAgMCAxIDMuOSA2LjA4IDcuMjkgNy4yOSAwIDAgMS03LjM4IDcuMjkgNy40IDcuNCAwIDAgMS0xLjc4LS4xOGMtLjQxLS4xMy0xLjA5LS4zNS0yLjA2LS42OWE3Ljc2IDcuNzYgMCAwIDAtMi4yNC0uNTIgMi40NCAyLjQ0IDAgMCAwLTIuMDYgMWgtLjkzdi04LjE2ek0yNzUuODIgMTQ0aDIuMzZ2LTM2LjI4aC0yLjM2VjE0NHpNMzE1LjY1IDExMi41N2g4LjY4di44N2EzLjU2IDMuNTYgMCAwIDAtMy42NiAzLjg2bC4yOCAxOC40M2gtMWwtMTYuNTUtMTkuMTkuMjMgMTIuOTFjLjEgMy4xLjY2IDQuNTUgNCA0Ljl2Ljg4aC04LjU4di0uODhhNCA0IDAgMCAwIDIuNDktLjkgMy4yOSAzLjI5IDAgMCAwIDEtMS45MSAxMy43NSAxMy43NSAwIDAgMCAuMTMtMi45bC0uMjItMTMuMTVjLTEuMjQtMS4zMy0yLjM3LTItMy42Mi0yaC0uMTl2LS44N2g2LjdsMTQuNjEgMTYuODQtLjIxLTExLjNjMC0xLjc0LS4zMy0yLjk0LTEuMTctMy42OWEzLjUzIDMuNTMgMCAwIDAtMS4zMS0uNzUgNC43MiA0LjcyIDAgMCAwLTEuNjEtLjI5di0uODd6TTM1MC41OCAxMTMuNDR2LS44N2g3LjI0di44N2MtMS40NS4yLTIuODkgMS42OC00LjU3IDQuNTVsLTQuNzkgOC4xN3Y1Ljc4YTIgMiAwIDAgMCAuNzYgMS45MyA3LjkgNy45IDAgMCAwIDIuNjkuNTF2Ljg4aC0xMC45NnYtLjg4aC4yOWE0LjYxIDQuNjEgMCAwIDAgMi4wOS0uMzZjLjkzLS41IDEtMS4xNyAxLTIuNHYtNC42OGwtNi45LTExLjQ5YTcgNyAwIDAgMC0xLjE0LTEuNTIgMi41OCAyLjU4IDAgMCAwLTEuODUtLjQ1di0uODdoMTAuNjh2Ljg3YTEwLjM3IDEwLjM3IDAgMCAwLTIuMjUuMjQgMSAxIDAgMCAwLS43OSAxLjA3IDYuNzIgNi43MiAwIDAgMCAxLjE1IDIuNTdsNC43MiA3LjcgMy4xNC01LjIyYzEuMTUtMS45MSAxLjY5LTMuMTcgMS42OS00LjM1YTIgMiAwIDAgMC0uNTktMS40IDEuODggMS44OCAwIDAgMC0xLjQ3LS42NGgtLjE3ek0zODkuMjEgMTEyLjI3djcuMTFoLTFjLTItNC4yNC00LjY3LTYuMzMtNy45My02LjMzYTYuNCA2LjQgMCAwIDAtNS40MiAyLjg5IDEzLjYgMTMuNiAwIDAgMC0yLjA2IDcuNjRjLS4wNiA2LjI5IDMuNTUgMTAuOSA4LjQzIDEwLjgyIDMgMCA1Ljc1LTEuNDggOC00LjQ5bDEgLjUzYTExLjgzIDExLjgzIDAgMCAxLTEwLjI5IDUuMjggMTEuNSAxMS41IDAgMCAxLTExLjg1LTExLjY4IDExLjkzIDExLjkzIDAgMCAxIDMuNDctOC41NyAxMS44OCAxMS44OCAwIDAgMSA4LjI3LTMuMzEgOC43MiA4LjcyIDAgMCAxIDEuNjkuMTVjLjUzLjA4IDEuMTUuMjMgMS44OC40MWwxLjQ2LjRhNS4zOCA1LjM4IDAgMCAwIC44OS4wNyAyLjggMi44IDAgMCAwIDIuMTItLjg5aDEuMzR6TTI2LjE3IDQ1LjZMOS43OSAyNi4wN3YtMi4wNmg1LjkzYzYuODMgMCAxMC40NC00Ljk0IDEwLjQ0LTkuNTJzLTMuNDItOS40Ny0xMC05LjQ3SDQuMzJWNDUuNkgwVi42aDE2LjJjOS44NSAwIDE0LjM0IDcuMiAxNC4zNCAxMy44OCAwIDYuODYtNC40NiAxMi4wOS0xMS4zNSAxMy4yN2wtMi4xNi4zOCAxNC44IDE3LjQ2aC01LjY2em0xOTIuNTggMFYuNjdoMjYuNjR2NC4zNUgyMjMuMnYxNS44N2gyMS43NXY0LjQySDIyMy4ydjE1LjkzaDIyLjI2djQuMzZoLTI2Ljcxem02OS4yNyAwVi42N2gyNnY0LjM1aC0yMS42MXYxNS44N2gxOS4xOHY0LjQyaC0xOS4xOFY0NS42aC00LjM4em02My4yOSAwaDQuMzlWLjY3aC00LjM5VjQ1LjZ6bTQ0Ljc1IDBWLjY3aDI2LjY0djQuMzVoLTIyLjE3djE1Ljg3aDIxLjd2NC40MmgtMjEuN3YxNS45M2gyMi4yNXY0LjM2aC0yNi43MnptNjIuMzYgMFYuNjdoNC40djQwLjU3aDIyLjUydjQuMzZoLTI2Ljkyem02MS43Ni00LjM2aDExLjU0YzExLjc5IDAgMTgtOS4xIDE4LTE4LjA4cy02LjE2LTE4LjE0LTE4LTE4LjE0aC0xMS41NHYzNi4yMnptLTQuNCA0LjM2Vi42N2gxNS45NGMxNS4zMSAwIDIyLjI5IDExLjY1IDIyLjI5IDIyLjQ5cy03IDIyLjQzLTIyLjI5IDIyLjQzaC0xNS45NHptLTM1NC4xNS40MWMtNy4xNCAwLTE1LjE1LTQuMS0xNi0xMS42Nmw0LjQ3LS4wNmguMDZjLjg0IDQuODEgNi41MyA3LjQgMTEuNTMgNy40IDUuOTEgMCAxMi0zLjM3IDEyLTlhOC40OSA4LjQ5IDAgMCAwLS4yNC0xLjkyYy0xLTQuNi02LjkyLTUuMTctMTEuNjQtNS42NC03LjY2LS43OC0xNS4xOC0yLjI3LTE1Ljg2LTExLjE0YTExLjQ1IDExLjQ1IDAgMCAxIDIuMzYtOC4wOWMyLjc5LTMuNiA4LTUuODQgMTMuNTEtNS44NCA1Ljc4IDAgMTMgMi42NiAxNC43OCAxMGwtNC40LjE4Yy0xLjUzLTQuMTQtNi4zMi02LTEwLjQ5LTYtNC4zNC4xLTggMS42LTkuOTIgNC4xYTcuMzMgNy4zMyAwIDAgMC0xLjQzIDUuMjdjLjQyIDYgNy4xMyA2LjY5IDEyIDcuMTQgNi43NC44MSAxMy44NiAyLjU3IDE1LjQ2IDkuMTNhMTYuNDMgMTYuNDMgMCAwIDEgLjMxIDIuODRjMCA4LjI1LTguNDEgMTMuMi0xNi41MyAxMy4yek04OC4xNCA0LjQyYTE4LjYxIDE4LjYxIDAgMCAwLTEzLjE5IDUuNTIgMTguMzMgMTguMzMgMCAwIDAtNS41IDEzLjE2IDE4LjM3IDE4LjM3IDAgMCAwIDUuNSAxMy4xNSAxOC42NiAxOC42NiAwIDAgMCAxMy4xNiA1LjUyIDE5LjA2IDE5LjA2IDAgMCAwIDEzLjI4LTUuNTIgMTguNjIgMTguNjIgMCAwIDAgNS40NC0xMy4xNSAxOC42NSAxOC42NSAwIDAgMC01LjQzLTEzLjE2IDE5LjA3IDE5LjA3IDAgMCAwLTEzLjMtNS41M3ptMCA0MS43OGEyMyAyMyAwIDAgMS0xNi4zNS02LjgyIDIzLjIgMjMuMiAwIDAgMS02Ljc3LTE2LjI4IDIzLjI3IDIzLjI3IDAgMCAxIDYuNzctMTYuM0EyMy4yMiAyMy4yMiAwIDAgMSA4OC4xNCAwYTIzLjMzIDIzLjMzIDAgMCAxIDE2LjQzIDYuOCAyMy4zMiAyMy4zMiAwIDAgMSA2Ljc0IDE2LjMgMjMuMjIgMjMuMjIgMCAwIDEtNi43NiAxNi4yOCAyMyAyMyAwIDAgMS0xNi40MSA2Ljc4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMSU7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgaGVhZGVyIG5hdiBsaSAubW9iaWxlX2xvZ286bnRoLWNoaWxkKDFuKSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgfVxcblxcbiAgaGVhZGVyIG5hdiBsaSAubW9iaWxlX2xvZ286bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG5cXG4gIGhlYWRlciBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0bikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIGhlYWRlciBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0biArIDEpIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICB9XFxuXFxuICBoZWFkZXIgbmF2IGxpLm5hdi1jYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDZjYztcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIG5hdiBsaS5uYXYtY2FydCAuY2FydC1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL25hdi1jYXJ0LWJsYWNrLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICB9XFxuXFxuICBoZWFkZXIgbmF2IGxpLm5hdi1jYXJ0IHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciBuYXYgbGkubmF2LWNhcnQgYSB7XFxuICAgIHBhZGRpbmc6IDIzcHggMDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2Uge1xcbiAgfVxcblxcbiAgLmhhc19pbWFnZSBoZWFkZXIge1xcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlci5maXhlZCB7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlci5maXhlZCBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgfVxcblxcbiAgLmhhc19pbWFnZSBoZWFkZXIuZml4ZWQgbmF2IGxpIHtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyLmZpeGVkIG5hdiBsaSAubW9iaWxlX2xvZ28ge1xcbiAgICB3aWR0aDogY2FsYyg5OS45JSAqIDMvNCAtICgzMHB4IC0gMzBweCAqIDMvNCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyBkYXRhLW5hbWU9J0xheWVyIDEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU1NCAxNDQnJTNFJTNDZyBkYXRhLW5hbWU9J0hvbWVwYWdlLSstYmFnJyUzRSUzQ3BhdGggZD0nTTE3MC42MyAxMjUuNjdoNi44N2wtMy40Ni04LjY3LTMuNDIgOC42N3ptNy4yOCAxaC03LjY3bC0xLjA3IDIuNzJhNS43NCA1Ljc0IDAgMCAwLS40MiAyLjE4IDIuOCAyLjggMCAwIDAgLjY5IDEuODkgMi41NCAyLjU0IDAgMCAwIDEuOTIuODd2Ljg4aC03LjV2LS44OGMxLjY3LS4yNCAzLTEuNjcgNC4wNi00LjI5bDUuNjEtMTQuMjRhMi41NSAyLjU1IDAgMCAwLS45My0xIDMuNjIgMy42MiAwIDAgMC0xLjQzLS4zOHYtLjc2bDMuODktMS4zMWgxLjQ5bDcuNSAxOWE2IDYgMCAwIDAgMS4zIDIuMTggNC40NCA0LjQ0IDAgMCAwIDIgLjg2di44OGgtOS42NHYtLjg4YzEuNjctLjE4IDIuNDktLjQgMi40OS0xLjM5YTQuNDIgNC40MiAwIDAgMC0uNDctMS42OGwtMS43OC00LjYzek0yMTQuMTQgMTI5Ljc1bDcuMDktMTcuMTdoN3YuODdhNC44NSA0Ljg1IDAgMCAwLTIuMy40MiAxLjYyIDEuNjIgMCAwIDAtLjc4IDEuMTUgMjEuNjYgMjEuNjYgMCAwIDAtLjEyIDIuNzh2MTMuODhhMy43NSAzLjc1IDAgMCAwIC4yOCAxLjYgMS41NSAxLjU1IDAgMCAwIC45Mi43NyA4LjU0IDguNTQgMCAwIDAgMiAuM3YuODhoLTEwLjQ2di0uODhhNS43IDUuNyAwIDAgMCAyLjI2LS4zOSAxLjQ1IDEuNDUgMCAwIDAgLjgyLTEgMTEuMzYgMTEuMzYgMCAwIDAgLjEzLTIuMDZ2LTE1LjVsLTguMDMgMTkuODNoLTFsLTgtMTkuMTh2MTMuMTdjMCAyLjk1IDEgNC41NSAzLjY5IDUuMTR2Ljg4aC04LjIxdi0uODhjMi4zMi0uMjQgMy42Mi0xLjggMy42Mi00LjYxdi0xNC45YTQuNSA0LjUgMCAwIDAtMy42Mi0xLjR2LS44N2g3LjUyek0yNDQuMDYgMTI3LjA3aDEuMDhjMS44IDUuMTQgNC43NiA3LjY2IDggNy42NmE1LjEzIDUuMTMgMCAwIDAgMy40Ny0xLjI1IDQuMDggNC4wOCAwIDAgMCAxLjQ0LTMuMjEgNCA0IDAgMCAwLTEtMi44NCA1IDUgMCAwIDAtMi4yOS0xLjQzIDI3Ljc5IDI3Ljc5IDAgMCAwLTMuNS0uNzcgMjEuMDYgMjEuMDYgMCAwIDEtMy4wOC0uNjcgNiA2IDAgMCAxLTQuNDEtNS44NiA2LjM1IDYuMzUgMCAwIDEgNi40My02LjU0IDEzLjE0IDEzLjE0IDAgMCAxIDIuNTguMyAxMyAxMyAwIDAgMCAyLjI0LjI5IDMuNjkgMy42OSAwIDAgMCAxLjY2LS4zOGgxLjI3bC43IDYuNjFoLTEuMTNhMTUuODIgMTUuODIgMCAwIDAtMy4zNS00LjUxIDUuODUgNS44NSAwIDAgMC00LjA4LTEuNTYgNC4yNyA0LjI3IDAgMCAwLTQuNCA0LjExYzAgMi4xNCAxLjQ5IDMuMTYgNC4zNiAzLjc1czUuMjYuODggNi42IDEuNTJhNi41OSA2LjU5IDAgMCAxIDMuOSA2LjA4IDcuMjkgNy4yOSAwIDAgMS03LjM4IDcuMjkgNy40IDcuNCAwIDAgMS0xLjc4LS4xOGMtLjQxLS4xMy0xLjA5LS4zNS0yLjA2LS42OWE3Ljc2IDcuNzYgMCAwIDAtMi4yNC0uNTIgMi40NCAyLjQ0IDAgMCAwLTIuMDYgMWgtLjkzdi04LjE2ek0yNzUuODIgMTQ0aDIuMzZ2LTM2LjI4aC0yLjM2VjE0NHpNMzE1LjY1IDExMi41N2g4LjY4di44N2EzLjU2IDMuNTYgMCAwIDAtMy42NiAzLjg2bC4yOCAxOC40M2gtMWwtMTYuNTUtMTkuMTkuMjMgMTIuOTFjLjEgMy4xLjY2IDQuNTUgNCA0Ljl2Ljg4aC04LjU4di0uODhhNCA0IDAgMCAwIDIuNDktLjkgMy4yOSAzLjI5IDAgMCAwIDEtMS45MSAxMy43NSAxMy43NSAwIDAgMCAuMTMtMi45bC0uMjItMTMuMTVjLTEuMjQtMS4zMy0yLjM3LTItMy42Mi0yaC0uMTl2LS44N2g2LjdsMTQuNjEgMTYuODQtLjIxLTExLjNjMC0xLjc0LS4zMy0yLjk0LTEuMTctMy42OWEzLjUzIDMuNTMgMCAwIDAtMS4zMS0uNzUgNC43MiA0LjcyIDAgMCAwLTEuNjEtLjI5di0uODd6TTM1MC41OCAxMTMuNDR2LS44N2g3LjI0di44N2MtMS40NS4yLTIuODkgMS42OC00LjU3IDQuNTVsLTQuNzkgOC4xN3Y1Ljc4YTIgMiAwIDAgMCAuNzYgMS45MyA3LjkgNy45IDAgMCAwIDIuNjkuNTF2Ljg4aC0xMC45NnYtLjg4aC4yOWE0LjYxIDQuNjEgMCAwIDAgMi4wOS0uMzZjLjkzLS41IDEtMS4xNyAxLTIuNHYtNC42OGwtNi45LTExLjQ5YTcgNyAwIDAgMC0xLjE0LTEuNTIgMi41OCAyLjU4IDAgMCAwLTEuODUtLjQ1di0uODdoMTAuNjh2Ljg3YTEwLjM3IDEwLjM3IDAgMCAwLTIuMjUuMjQgMSAxIDAgMCAwLS43OSAxLjA3IDYuNzIgNi43MiAwIDAgMCAxLjE1IDIuNTdsNC43MiA3LjcgMy4xNC01LjIyYzEuMTUtMS45MSAxLjY5LTMuMTcgMS42OS00LjM1YTIgMiAwIDAgMC0uNTktMS40IDEuODggMS44OCAwIDAgMC0xLjQ3LS42NGgtLjE3ek0zODkuMjEgMTEyLjI3djcuMTFoLTFjLTItNC4yNC00LjY3LTYuMzMtNy45My02LjMzYTYuNCA2LjQgMCAwIDAtNS40MiAyLjg5IDEzLjYgMTMuNiAwIDAgMC0yLjA2IDcuNjRjLS4wNiA2LjI5IDMuNTUgMTAuOSA4LjQzIDEwLjgyIDMgMCA1Ljc1LTEuNDggOC00LjQ5bDEgLjUzYTExLjgzIDExLjgzIDAgMCAxLTEwLjI5IDUuMjggMTEuNSAxMS41IDAgMCAxLTExLjg1LTExLjY4IDExLjkzIDExLjkzIDAgMCAxIDMuNDctOC41NyAxMS44OCAxMS44OCAwIDAgMSA4LjI3LTMuMzEgOC43MiA4LjcyIDAgMCAxIDEuNjkuMTVjLjUzLjA4IDEuMTUuMjMgMS44OC40MWwxLjQ2LjRhNS4zOCA1LjM4IDAgMCAwIC44OS4wNyAyLjggMi44IDAgMCAwIDIuMTItLjg5aDEuMzR6TTI2LjE3IDQ1LjZMOS43OSAyNi4wN3YtMi4wNmg1LjkzYzYuODMgMCAxMC40NC00Ljk0IDEwLjQ0LTkuNTJzLTMuNDItOS40Ny0xMC05LjQ3SDQuMzJWNDUuNkgwVi42aDE2LjJjOS44NSAwIDE0LjM0IDcuMiAxNC4zNCAxMy44OCAwIDYuODYtNC40NiAxMi4wOS0xMS4zNSAxMy4yN2wtMi4xNi4zOCAxNC44IDE3LjQ2aC01LjY2em0xOTIuNTggMFYuNjdoMjYuNjR2NC4zNUgyMjMuMnYxNS44N2gyMS43NXY0LjQySDIyMy4ydjE1LjkzaDIyLjI2djQuMzZoLTI2Ljcxem02OS4yNyAwVi42N2gyNnY0LjM1aC0yMS42MXYxNS44N2gxOS4xOHY0LjQyaC0xOS4xOFY0NS42aC00LjM4em02My4yOSAwaDQuMzlWLjY3aC00LjM5VjQ1LjZ6bTQ0Ljc1IDBWLjY3aDI2LjY0djQuMzVoLTIyLjE3djE1Ljg3aDIxLjd2NC40MmgtMjEuN3YxNS45M2gyMi4yNXY0LjM2aC0yNi43MnptNjIuMzYgMFYuNjdoNC40djQwLjU3aDIyLjUydjQuMzZoLTI2Ljkyem02MS43Ni00LjM2aDExLjU0YzExLjc5IDAgMTgtOS4xIDE4LTE4LjA4cy02LjE2LTE4LjE0LTE4LTE4LjE0aC0xMS41NHYzNi4yMnptLTQuNCA0LjM2Vi42N2gxNS45NGMxNS4zMSAwIDIyLjI5IDExLjY1IDIyLjI5IDIyLjQ5cy03IDIyLjQzLTIyLjI5IDIyLjQzaC0xNS45NHptLTM1NC4xNS40MWMtNy4xNCAwLTE1LjE1LTQuMS0xNi0xMS42Nmw0LjQ3LS4wNmguMDZjLjg0IDQuODEgNi41MyA3LjQgMTEuNTMgNy40IDUuOTEgMCAxMi0zLjM3IDEyLTlhOC40OSA4LjQ5IDAgMCAwLS4yNC0xLjkyYy0xLTQuNi02LjkyLTUuMTctMTEuNjQtNS42NC03LjY2LS43OC0xNS4xOC0yLjI3LTE1Ljg2LTExLjE0YTExLjQ1IDExLjQ1IDAgMCAxIDIuMzYtOC4wOWMyLjc5LTMuNiA4LTUuODQgMTMuNTEtNS44NCA1Ljc4IDAgMTMgMi42NiAxNC43OCAxMGwtNC40LjE4Yy0xLjUzLTQuMTQtNi4zMi02LTEwLjQ5LTYtNC4zNC4xLTggMS42LTkuOTIgNC4xYTcuMzMgNy4zMyAwIDAgMC0xLjQzIDUuMjdjLjQyIDYgNy4xMyA2LjY5IDEyIDcuMTQgNi43NC44MSAxMy44NiAyLjU3IDE1LjQ2IDkuMTNhMTYuNDMgMTYuNDMgMCAwIDEgLjMxIDIuODRjMCA4LjI1LTguNDEgMTMuMi0xNi41MyAxMy4yek04OC4xNCA0LjQyYTE4LjYxIDE4LjYxIDAgMCAwLTEzLjE5IDUuNTIgMTguMzMgMTguMzMgMCAwIDAtNS41IDEzLjE2IDE4LjM3IDE4LjM3IDAgMCAwIDUuNSAxMy4xNSAxOC42NiAxOC42NiAwIDAgMCAxMy4xNiA1LjUyIDE5LjA2IDE5LjA2IDAgMCAwIDEzLjI4LTUuNTIgMTguNjIgMTguNjIgMCAwIDAgNS40NC0xMy4xNSAxOC42NSAxOC42NSAwIDAgMC01LjQzLTEzLjE2IDE5LjA3IDE5LjA3IDAgMCAwLTEzLjMtNS41M3ptMCA0MS43OGEyMyAyMyAwIDAgMS0xNi4zNS02LjgyIDIzLjIgMjMuMiAwIDAgMS02Ljc3LTE2LjI4IDIzLjI3IDIzLjI3IDAgMCAxIDYuNzctMTYuM0EyMy4yMiAyMy4yMiAwIDAgMSA4OC4xNCAwYTIzLjMzIDIzLjMzIDAgMCAxIDE2LjQzIDYuOCAyMy4zMiAyMy4zMiAwIDAgMSA2Ljc0IDE2LjMgMjMuMjIgMjMuMjIgMCAwIDEtNi43NiAxNi4yOCAyMyAyMyAwIDAgMS0xNi40MSA2Ljc4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMSU7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmhhc19pbWFnZSBoZWFkZXIuZml4ZWQgbmF2IGxpIC5tb2JpbGVfbG9nbzpudGgtY2hpbGQoMW4pIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlci5maXhlZCBuYXYgbGkgLm1vYmlsZV9sb2dvOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlci5maXhlZCBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0bikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyLmZpeGVkIG5hdiBsaSAubW9iaWxlX2xvZ286bnRoLWNoaWxkKDRuICsgMSkge1xcbiAgICBjbGVhcjogYm90aDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyLmZpeGVkIG5hdiBsaS5uYXYtY2FydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWQ2Y2M7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlci5maXhlZCBuYXYgbGkubmF2LWNhcnQgc3BhbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyLmZpeGVkIG5hdiBsaS5uYXYtY2FydCAuY2FydC1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL25hdi1jYXJ0LWJsYWNrLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyIG5hdiAuZGVza3RvcC1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyIG5hdiAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyIG5hdiBsaSB7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYgbGkgLm1vYmlsZV9sb2dvIHtcXG4gICAgd2lkdGg6IGNhbGMoOTkuOSUgKiAzLzQgLSAoMzBweCAtIDMwcHggKiAzLzQpKTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgZGF0YS1uYW1lPSdMYXllciAxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NTQgMTQ0JyBmaWxsPSclMjNmZmYnJTNFJTNDZyBkYXRhLW5hbWU9J0hvbWVwYWdlLSstYmFnJyUzRSUzQ3BhdGggZD0nTTE3MC42MyAxMjUuNjdoNi44N2wtMy40Ni04LjY3LTMuNDIgOC42N3ptNy4yOCAxaC03LjY3bC0xLjA3IDIuNzJhNS43NCA1Ljc0IDAgMCAwLS40MiAyLjE4IDIuOCAyLjggMCAwIDAgLjY5IDEuODkgMi41NCAyLjU0IDAgMCAwIDEuOTIuODd2Ljg4aC03LjV2LS44OGMxLjY3LS4yNCAzLTEuNjcgNC4wNi00LjI5bDUuNjEtMTQuMjRhMi41NSAyLjU1IDAgMCAwLS45My0xIDMuNjIgMy42MiAwIDAgMC0xLjQzLS4zOHYtLjc2bDMuODktMS4zMWgxLjQ5bDcuNSAxOWE2IDYgMCAwIDAgMS4zIDIuMTggNC40NCA0LjQ0IDAgMCAwIDIgLjg2di44OGgtOS42NHYtLjg4YzEuNjctLjE4IDIuNDktLjQgMi40OS0xLjM5YTQuNDIgNC40MiAwIDAgMC0uNDctMS42OGwtMS43OC00LjYzek0yMTQuMTQgMTI5Ljc1bDcuMDktMTcuMTdoN3YuODdhNC44NSA0Ljg1IDAgMCAwLTIuMy40MiAxLjYyIDEuNjIgMCAwIDAtLjc4IDEuMTUgMjEuNjYgMjEuNjYgMCAwIDAtLjEyIDIuNzh2MTMuODhhMy43NSAzLjc1IDAgMCAwIC4yOCAxLjYgMS41NSAxLjU1IDAgMCAwIC45Mi43NyA4LjU0IDguNTQgMCAwIDAgMiAuM3YuODhoLTEwLjQ2di0uODhhNS43IDUuNyAwIDAgMCAyLjI2LS4zOSAxLjQ1IDEuNDUgMCAwIDAgLjgyLTEgMTEuMzYgMTEuMzYgMCAwIDAgLjEzLTIuMDZ2LTE1LjVsLTguMDMgMTkuODNoLTFsLTgtMTkuMTh2MTMuMTdjMCAyLjk1IDEgNC41NSAzLjY5IDUuMTR2Ljg4aC04LjIxdi0uODhjMi4zMi0uMjQgMy42Mi0xLjggMy42Mi00LjYxdi0xNC45YTQuNSA0LjUgMCAwIDAtMy42Mi0xLjR2LS44N2g3LjUyek0yNDQuMDYgMTI3LjA3aDEuMDhjMS44IDUuMTQgNC43NiA3LjY2IDggNy42NmE1LjEzIDUuMTMgMCAwIDAgMy40Ny0xLjI1IDQuMDggNC4wOCAwIDAgMCAxLjQ0LTMuMjEgNCA0IDAgMCAwLTEtMi44NCA1IDUgMCAwIDAtMi4yOS0xLjQzIDI3Ljc5IDI3Ljc5IDAgMCAwLTMuNS0uNzcgMjEuMDYgMjEuMDYgMCAwIDEtMy4wOC0uNjcgNiA2IDAgMCAxLTQuNDEtNS44NiA2LjM1IDYuMzUgMCAwIDEgNi40My02LjU0IDEzLjE0IDEzLjE0IDAgMCAxIDIuNTguMyAxMyAxMyAwIDAgMCAyLjI0LjI5IDMuNjkgMy42OSAwIDAgMCAxLjY2LS4zOGgxLjI3bC43IDYuNjFoLTEuMTNhMTUuODIgMTUuODIgMCAwIDAtMy4zNS00LjUxIDUuODUgNS44NSAwIDAgMC00LjA4LTEuNTYgNC4yNyA0LjI3IDAgMCAwLTQuNCA0LjExYzAgMi4xNCAxLjQ5IDMuMTYgNC4zNiAzLjc1czUuMjYuODggNi42IDEuNTJhNi41OSA2LjU5IDAgMCAxIDMuOSA2LjA4IDcuMjkgNy4yOSAwIDAgMS03LjM4IDcuMjkgNy40IDcuNCAwIDAgMS0xLjc4LS4xOGMtLjQxLS4xMy0xLjA5LS4zNS0yLjA2LS42OWE3Ljc2IDcuNzYgMCAwIDAtMi4yNC0uNTIgMi40NCAyLjQ0IDAgMCAwLTIuMDYgMWgtLjkzdi04LjE2ek0yNzUuODIgMTQ0aDIuMzZ2LTM2LjI4aC0yLjM2VjE0NHpNMzE1LjY1IDExMi41N2g4LjY4di44N2EzLjU2IDMuNTYgMCAwIDAtMy42NiAzLjg2bC4yOCAxOC40M2gtMWwtMTYuNTUtMTkuMTkuMjMgMTIuOTFjLjEgMy4xLjY2IDQuNTUgNCA0Ljl2Ljg4aC04LjU4di0uODhhNCA0IDAgMCAwIDIuNDktLjkgMy4yOSAzLjI5IDAgMCAwIDEtMS45MSAxMy43NSAxMy43NSAwIDAgMCAuMTMtMi45bC0uMjItMTMuMTVjLTEuMjQtMS4zMy0yLjM3LTItMy42Mi0yaC0uMTl2LS44N2g2LjdsMTQuNjEgMTYuODQtLjIxLTExLjNjMC0xLjc0LS4zMy0yLjk0LTEuMTctMy42OWEzLjUzIDMuNTMgMCAwIDAtMS4zMS0uNzUgNC43MiA0LjcyIDAgMCAwLTEuNjEtLjI5di0uODd6TTM1MC41OCAxMTMuNDR2LS44N2g3LjI0di44N2MtMS40NS4yLTIuODkgMS42OC00LjU3IDQuNTVsLTQuNzkgOC4xN3Y1Ljc4YTIgMiAwIDAgMCAuNzYgMS45MyA3LjkgNy45IDAgMCAwIDIuNjkuNTF2Ljg4aC0xMC45NnYtLjg4aC4yOWE0LjYxIDQuNjEgMCAwIDAgMi4wOS0uMzZjLjkzLS41IDEtMS4xNyAxLTIuNHYtNC42OGwtNi45LTExLjQ5YTcgNyAwIDAgMC0xLjE0LTEuNTIgMi41OCAyLjU4IDAgMCAwLTEuODUtLjQ1di0uODdoMTAuNjh2Ljg3YTEwLjM3IDEwLjM3IDAgMCAwLTIuMjUuMjQgMSAxIDAgMCAwLS43OSAxLjA3IDYuNzIgNi43MiAwIDAgMCAxLjE1IDIuNTdsNC43MiA3LjcgMy4xNC01LjIyYzEuMTUtMS45MSAxLjY5LTMuMTcgMS42OS00LjM1YTIgMiAwIDAgMC0uNTktMS40IDEuODggMS44OCAwIDAgMC0xLjQ3LS42NGgtLjE3ek0zODkuMjEgMTEyLjI3djcuMTFoLTFjLTItNC4yNC00LjY3LTYuMzMtNy45My02LjMzYTYuNCA2LjQgMCAwIDAtNS40MiAyLjg5IDEzLjYgMTMuNiAwIDAgMC0yLjA2IDcuNjRjLS4wNiA2LjI5IDMuNTUgMTAuOSA4LjQzIDEwLjgyIDMgMCA1Ljc1LTEuNDggOC00LjQ5bDEgLjUzYTExLjgzIDExLjgzIDAgMCAxLTEwLjI5IDUuMjggMTEuNSAxMS41IDAgMCAxLTExLjg1LTExLjY4IDExLjkzIDExLjkzIDAgMCAxIDMuNDctOC41NyAxMS44OCAxMS44OCAwIDAgMSA4LjI3LTMuMzEgOC43MiA4LjcyIDAgMCAxIDEuNjkuMTVjLjUzLjA4IDEuMTUuMjMgMS44OC40MWwxLjQ2LjRhNS4zOCA1LjM4IDAgMCAwIC44OS4wNyAyLjggMi44IDAgMCAwIDIuMTItLjg5aDEuMzR6TTI2LjE3IDQ1LjZMOS43OSAyNi4wN3YtMi4wNmg1LjkzYzYuODMgMCAxMC40NC00Ljk0IDEwLjQ0LTkuNTJzLTMuNDItOS40Ny0xMC05LjQ3SDQuMzJWNDUuNkgwVi42aDE2LjJjOS44NSAwIDE0LjM0IDcuMiAxNC4zNCAxMy44OCAwIDYuODYtNC40NiAxMi4wOS0xMS4zNSAxMy4yN2wtMi4xNi4zOCAxNC44IDE3LjQ2aC01LjY2em0xOTIuNTggMFYuNjdoMjYuNjR2NC4zNUgyMjMuMnYxNS44N2gyMS43NXY0LjQySDIyMy4ydjE1LjkzaDIyLjI2djQuMzZoLTI2Ljcxem02OS4yNyAwVi42N2gyNnY0LjM1aC0yMS42MXYxNS44N2gxOS4xOHY0LjQyaC0xOS4xOFY0NS42aC00LjM4em02My4yOSAwaDQuMzlWLjY3aC00LjM5VjQ1LjZ6bTQ0Ljc1IDBWLjY3aDI2LjY0djQuMzVoLTIyLjE3djE1Ljg3aDIxLjd2NC40MmgtMjEuN3YxNS45M2gyMi4yNXY0LjM2aC0yNi43MnptNjIuMzYgMFYuNjdoNC40djQwLjU3aDIyLjUydjQuMzZoLTI2Ljkyem02MS43Ni00LjM2aDExLjU0YzExLjc5IDAgMTgtOS4xIDE4LTE4LjA4cy02LjE2LTE4LjE0LTE4LTE4LjE0aC0xMS41NHYzNi4yMnptLTQuNCA0LjM2Vi42N2gxNS45NGMxNS4zMSAwIDIyLjI5IDExLjY1IDIyLjI5IDIyLjQ5cy03IDIyLjQzLTIyLjI5IDIyLjQzaC0xNS45NHptLTM1NC4xNS40MWMtNy4xNCAwLTE1LjE1LTQuMS0xNi0xMS42Nmw0LjQ3LS4wNmguMDZjLjg0IDQuODEgNi41MyA3LjQgMTEuNTMgNy40IDUuOTEgMCAxMi0zLjM3IDEyLTlhOC40OSA4LjQ5IDAgMCAwLS4yNC0xLjkyYy0xLTQuNi02LjkyLTUuMTctMTEuNjQtNS42NC03LjY2LS43OC0xNS4xOC0yLjI3LTE1Ljg2LTExLjE0YTExLjQ1IDExLjQ1IDAgMCAxIDIuMzYtOC4wOWMyLjc5LTMuNiA4LTUuODQgMTMuNTEtNS44NCA1Ljc4IDAgMTMgMi42NiAxNC43OCAxMGwtNC40LjE4Yy0xLjUzLTQuMTQtNi4zMi02LTEwLjQ5LTYtNC4zNC4xLTggMS42LTkuOTIgNC4xYTcuMzMgNy4zMyAwIDAgMC0xLjQzIDUuMjdjLjQyIDYgNy4xMyA2LjY5IDEyIDcuMTQgNi43NC44MSAxMy44NiAyLjU3IDE1LjQ2IDkuMTNhMTYuNDMgMTYuNDMgMCAwIDEgLjMxIDIuODRjMCA4LjI1LTguNDEgMTMuMi0xNi41MyAxMy4yek04OC4xNCA0LjQyYTE4LjYxIDE4LjYxIDAgMCAwLTEzLjE5IDUuNTIgMTguMzMgMTguMzMgMCAwIDAtNS41IDEzLjE2IDE4LjM3IDE4LjM3IDAgMCAwIDUuNSAxMy4xNSAxOC42NiAxOC42NiAwIDAgMCAxMy4xNiA1LjUyIDE5LjA2IDE5LjA2IDAgMCAwIDEzLjI4LTUuNTIgMTguNjIgMTguNjIgMCAwIDAgNS40NC0xMy4xNSAxOC42NSAxOC42NSAwIDAgMC01LjQzLTEzLjE2IDE5LjA3IDE5LjA3IDAgMCAwLTEzLjMtNS41M3ptMCA0MS43OGEyMyAyMyAwIDAgMS0xNi4zNS02LjgyIDIzLjIgMjMuMiAwIDAgMS02Ljc3LTE2LjI4IDIzLjI3IDIzLjI3IDAgMCAxIDYuNzctMTYuM0EyMy4yMiAyMy4yMiAwIDAgMSA4OC4xNCAwYTIzLjMzIDIzLjMzIDAgMCAxIDE2LjQzIDYuOCAyMy4zMiAyMy4zMiAwIDAgMSA2Ljc0IDE2LjMgMjMuMjIgMjMuMjIgMCAwIDEtNi43NiAxNi4yOCAyMyAyMyAwIDAgMS0xNi40MSA2Ljc4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IDEwMSU7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmhhc19pbWFnZSBoZWFkZXIgbmF2IGxpIC5tb2JpbGVfbG9nbzpudGgtY2hpbGQoMW4pIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgY2xlYXI6IG5vbmU7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYgbGkgLm1vYmlsZV9sb2dvOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYgbGkgLm1vYmlsZV9sb2dvOm50aC1jaGlsZCg0bikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyIG5hdiBsaSAubW9iaWxlX2xvZ286bnRoLWNoaWxkKDRuICsgMSkge1xcbiAgICBjbGVhcjogYm90aDtcXG4gIH1cXG5cXG4gIC5oYXNfaW1hZ2UgaGVhZGVyIG5hdiBsaS5uYXYtY2FydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYgbGkubmF2LWNhcnQgLmNhcnQtaWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9uYXYtY2FydC13aGl0ZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgfVxcblxcbiAgLmhhc19pbWFnZSBoZWFkZXIgbmF2IGxpLm5hdi1jYXJ0IHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAuaGFzX2ltYWdlIGhlYWRlciBuYXYgbGkubmF2LWNhcnQgYSB7XFxuICAgIHBhZGRpbmc6IDIzcHggMDtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIG5hdiBsaTpob3ZlciA+IHVsLnN1Yi1tZW51IHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxufVxcblxcbmhlYWRlciBuYXYgbGk6aG92ZXIgPiB1bC5zdWItbWVudSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkNmNjO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpOmhvdmVyID4gdWwuc3ViLW1lbnUgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGxpOmhvdmVyID4gZGl2LnN3aXRjaGVyLXN1Yi1tZW51IHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gQ291bnRyeSBhbmQgTGFuZ3VhZ2UqL1xcblxcbi5yZi1tb2QtbGFuZ3VhZ2VCYXJfX2lubmVyV3JhcHBlciB7ZmxvYXQ6IGxlZnQ7cGFkZGluZzogMTVweDt3aWR0aDogYXV0bzt9XFxuXFxuLnJmLW1vZC1sb2NhdGlvblNlbGVjdG9yIHtiYWNrZ3JvdW5kOiNmOGY4ZjggdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjBpZCUzRCUyMkxheWVyXzElMjIlMjBkYXRhLW5hbWUlM0QlMjJMYXllciUyMDElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDY4JTIwNDAlMjIlM0UlM0N0aXRsZSUzRXJmLXNlbGVjdC1hcnJvdy13JTNDJTJGdGl0bGUlM0UlM0NnJTIwaWQlM0QlMjJIb21lcGFnZS1fLWJhZyUyMiUyMGRhdGEtbmFtZSUzRCUyMkhvbWVwYWdlLSUyQi1iYWclMjIlM0UlM0NnJTIwaWQlM0QlMjJIb21lLWlwaG9uZSUyMiUzRSUzQ2clMjBpZCUzRCUyMkZvb3RlciUyMiUzRSUzQ2clMjBpZCUzRCUyMlBhdGgtNjgwJTIyJTNFJTNDcG9seWdvbiUyMHBvaW50cyUzRCUyMjAlMjA0LjU0JTIwNC44MyUyMDAuMDElMjAzMy45MSUyMDMwLjQzJTIwNjMuMTklMjAwJTIwNjglMjA0LjU1JTIwMzMuODklMjA0MCUyMDAlMjA0LjU0JTIyJTIwc3R5bGUlM0QlMjJmaWxsJTNBJTIzZmZmJTIyJTJGJTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScpIG5vLXJlcGVhdCBzY3JvbGwgOTQlIGNlbnRlciAvIDEwcHggYXV0bzsgXFxuYm9yZGVyOiAxcHggc29saWQgIzlmOWQ5ZTtjb2xvcjogIzAwMDAwMDtmbG9hdDogbm9uZTtoZWlnaHQ6IDQwcHg7bWFyZ2luOiAwIGF1dG87b3V0bGluZTogMCBub25lO292ZXJmbG93OiBoaWRkZW47d2lkdGg6IDIyMHB4O31cXG5cXG4uY291bnRyeS1pbWcge2Zsb2F0OiBsZWZ0O21hcmdpbjogMDtvdXRsaW5lOiBub25lO3BhZGRpbmc6IDlweCAwIDExcHggMDtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDI1cHg7fVxcblxcbi5jb3VudHJ5LXNlbGVjdCB7LW1vei1hcHBlYXJhbmNlOm5vbmU7IC8qIEZpcmVmb3ggKi8gLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyUyMGlkJTNEJTIyTGF5ZXJfMSUyMiUyMGRhdGEtbmFtZSUzRCUyMkxheWVyJTIwMSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNjglMjA0MCUyMiUzRSUzQ3RpdGxlJTNFcmYtc2VsZWN0LWFycm93JTNDJTJGdGl0bGUlM0UlM0NnJTIwaWQlM0QlMjJIb21lcGFnZS1fLWJhZyUyMiUyMGRhdGEtbmFtZSUzRCUyMkhvbWVwYWdlLSUyQi1iYWclMjIlM0UlM0NnJTIwaWQlM0QlMjJIb21lLWlwaG9uZSUyMiUzRSUzQ2clMjBpZCUzRCUyMkZvb3RlciUyMiUzRSUzQ2clMjBpZCUzRCUyMlBhdGgtNjgwJTIyJTNFJTNDcG9seWdvbiUyMHBvaW50cyUzRCUyMjAlMjA0LjU0JTIwNC44MyUyMDAuMDElMjAzMy45MSUyMDMwLjQzJTIwNjMuMTklMjAwJTIwNjglMjA0LjU1JTIwMzMuODklMjA0MCUyMDAlMjA0LjU0JTIyJTIwc3R5bGUlM0QlMjJmaWxsJTNBJTIzNjg2OTY5JTIyJTJGJTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScpIG5vLXJlcGVhdCBzY3JvbGwgOTQlIGNlbnRlciAvIDEwcHggYXV0bzsgYm9yZGVyOiAwcHggc29saWQgIzlmOWQ5ZTtjb2xvcjogIzAwMDtmbG9hdDogbGVmdDtmb250LXNpemU6IDEwcHg7aGVpZ2h0OiA0MHB4O2xldHRlci1zcGFjaW5nOiAzcHg7b3V0bGluZTogbWVkaXVtIG5vbmU7cGFkZGluZy1sZWZ0OiAzNXB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7d2lkdGg6IDIyMHB4O31cXG5cXG4uY291bnRyeS1zZWxlY3Qgb3B0aW9uLCAubGFuZ3VhZ2Utc2VsZWN0IG9wdGlvbiB7Y29sb3I6ICMwMDAwMDA7cGFkZGluZzogNXB4O31cXG5cXG4ucmYtbW9kLWxhbmd1YWdlU2VsZWN0b3Ige2JhY2tncm91bmQ6I2Y4ZjhmOCB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyUyMGlkJTNEJTIyTGF5ZXJfMSUyMiUyMGRhdGEtbmFtZSUzRCUyMkxheWVyJTIwMSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNjglMjA0MCUyMiUzRSUzQ3RpdGxlJTNFcmYtc2VsZWN0LWFycm93LXclM0MlMkZ0aXRsZSUzRSUzQ2clMjBpZCUzRCUyMkhvbWVwYWdlLV8tYmFnJTIyJTIwZGF0YS1uYW1lJTNEJTIySG9tZXBhZ2UtJTJCLWJhZyUyMiUzRSUzQ2clMjBpZCUzRCUyMkhvbWUtaXBob25lJTIyJTNFJTNDZyUyMGlkJTNEJTIyRm9vdGVyJTIyJTNFJTNDZyUyMGlkJTNEJTIyUGF0aC02ODAlMjIlM0UlM0Nwb2x5Z29uJTIwcG9pbnRzJTNEJTIyMCUyMDQuNTQlMjA0LjgzJTIwMC4wMSUyMDMzLjkxJTIwMzAuNDMlMjA2My4xOSUyMDAlMjA2OCUyMDQuNTUlMjAzMy44OSUyMDQwJTIwMCUyMDQuNTQlMjIlMjBzdHlsZSUzRCUyMmZpbGwlM0ElMjNmZmYlMjIlMkYlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFJykgbm8tcmVwZWF0IHNjcm9sbCA5NCUgY2VudGVyIC8gMTBweCBhdXRvOyBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZDllO2NvbG9yOiAjMDAwMDAwO2Zsb2F0OiBub25lO2hlaWdodDogNDBweDtsZXR0ZXItc3BhY2luZzogM3B4O21hcmdpbjogMjBweCBhdXRvO291dGxpbmU6IDAgbm9uZTtvdmVyZmxvdzogaGlkZGVuO3dpZHRoOiAyMjBweDt9XFxuXFxuLmxhbmd1YWdlLXNlbGVjdCB7LW1vei1hcHBlYXJhbmNlOm5vbmU7IC8qIEZpcmVmb3ggKi8gLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjBpZCUzRCUyMkxheWVyXzElMjIlMjBkYXRhLW5hbWUlM0QlMjJMYXllciUyMDElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDY4JTIwNDAlMjIlM0UlM0N0aXRsZSUzRXJmLXNlbGVjdC1hcnJvdyUzQyUyRnRpdGxlJTNFJTNDZyUyMGlkJTNEJTIySG9tZXBhZ2UtXy1iYWclMjIlMjBkYXRhLW5hbWUlM0QlMjJIb21lcGFnZS0lMkItYmFnJTIyJTNFJTNDZyUyMGlkJTNEJTIySG9tZS1pcGhvbmUlMjIlM0UlM0NnJTIwaWQlM0QlMjJGb290ZXIlMjIlM0UlM0NnJTIwaWQlM0QlMjJQYXRoLTY4MCUyMiUzRSUzQ3BvbHlnb24lMjBwb2ludHMlM0QlMjIwJTIwNC41NCUyMDQuODMlMjAwLjAxJTIwMzMuOTElMjAzMC40MyUyMDYzLjE5JTIwMCUyMDY4JTIwNC41NSUyMDMzLjg5JTIwNDAlMjAwJTIwNC41NCUyMiUyMHN0eWxlJTNEJTIyZmlsbCUzQSUyMzY4Njk2OSUyMiUyRiUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnKSBuby1yZXBlYXQgc2Nyb2xsIDk0JSBjZW50ZXIgLyAxMHB4IGF1dG87IGNvbG9yOiAjMDAwO2JvcmRlcjogMHB4IHNvbGlkICM5ZjlkOWU7ZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAxMHB4O2hlaWdodDogNDBweDtsZXR0ZXItc3BhY2luZzogMXB4O21hcmdpbjogMDtvdXRsaW5lOiBtZWRpdW0gbm9uZTtwYWRkaW5nLWxlZnQ6IDE1cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt3aWR0aDogMjIwcHg7fVxcblxcbi5zZWxlY3QtYnV0dG9uIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3JkZXI6IDAgbm9uZTtjb2xvcjogIzAwMDAwMDtjdXJzb3I6IHBvaW50ZXI7ZmxvYXQ6IHJpZ2h0O21hcmdpbjogMDtwYWRkaW5nOiAxNXB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt3aWR0aDogMTIwcHg7ei1pbmRleDogMDt9XFxuXFxuLnNlbGVjdC1idXR0b246YmVmb3Jle2NvbnRlbnQ6IFxcXCJcXFwiO3Bvc2l0aW9uOiBhYnNvbHV0ZTt6LWluZGV4OiAtMTt0b3A6IDA7bGVmdDogMDtyaWdodDogMDtib3R0b206IDA7YmFja2dyb3VuZDogI2ZmZDZjYzstd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuNSk7dHJhbnNmb3JtOiBzY2FsZVgoMC41KTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO3RyYW5zZm9ybS1vcmlnaW46IDAgNTAlO3RyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLW91dDt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O3RyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLW91dDt9XFxuXFxuLnNlbGVjdC1idXR0b246aG92ZXI6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7dHJhbnNmb3JtOiBzY2FsZVgoMSk7fVxcblxcbi5zZWxlY3QtYnV0dG9uOmFmdGVye2JvdHRvbTogMTBweDtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0cHg7d2lkdGg6IGNhbGMoMSAtICRsZXR0ZXJTcGFjaW5nKTsgcmlnaHQ6IDE1cHg7bGVmdDogMTVweDttYXJnaW4tdG9wOiA0cHg7Y29udGVudDogJyAnO2Rpc3BsYXk6IGJsb2NrO2JhY2tncm91bmQ6ICMzOTM5Mzk7fVxcblxcbi5zZWxlY3QtYnV0dG9uOmhvdmVyOmFmdGVyIHtwb3NpdGlvbjogYWJzb2x1dGU7ZGlzcGxheTogYmxvY2s7aGVpZ2h0OiA0cHg7bWFyZ2luOiAwNHB4IGF1dG8gMDsgLXdlYmtpdC1hbmltYXRpb246IGxpbmVXaWR0aCAwLjRzO2FuaW1hdGlvbjogbGluZVdpZHRoIDAuNHM7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NywwLjIxLDAuODYsMC4zOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTcsMC4yMSwwLjg2LDAuMzkpO2JhY2tncm91bmQ6ICMxODE4MTg7fVxcblxcbi5zZWxlY3QtYnV0dG9uIGEge3dpZHRoOiBhdXRvO2ZvbnQtc2l6ZTogMTFweDtjb2xvcjogIzAwMDsgbGV0dGVyLXNwYWNpbmc6IDRweDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBwYWRkaW5nOiAwcHg7fVxcblxcbi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xcblxcbi5ibS1idXJnZXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgbGVmdDogMTdweDtcXG4gIHRvcDogMTdweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQuOTcgMzg0Ljk3JyB3aWR0aD0nMjgnIGhlaWdodD0nMjInJTNFJTNDZyBmaWxsPSclMjNGRkYnJTNFJTNDcGF0aCBkPSdNMTIuMDMgODQuMjEyaDM2MC45MDljNi42NDEgMCAxMi4wMy01LjM5IDEyLjAzLTEyLjAzIDAtNi42NDEtNS4zOS0xMi4wMy0xMi4wMy0xMi4wM0gxMi4wM0M1LjM5IDYwLjE1MiAwIDY1LjU0MSAwIDcyLjE4MmMwIDYuNjQxIDUuMzkgMTIuMDMgMTIuMDMgMTIuMDN6TTM3Mi45MzkgMTgwLjQ1NUgxMi4wM2MtNi42NDEgMC0xMi4wMyA1LjM5LTEyLjAzIDEyLjAzczUuMzkgMTIuMDMgMTIuMDMgMTIuMDNoMzYwLjkwOWM2LjY0MSAwIDEyLjAzLTUuMzkgMTIuMDMtMTIuMDNzLTUuMzg5LTEyLjAzLTEyLjAzLTEyLjAzek0zNzIuOTM5IDMwMC43NThIMTIuMDNjLTYuNjQxIDAtMTIuMDMgNS4zOS0xMi4wMyAxMi4wMyAwIDYuNjQxIDUuMzkgMTIuMDMgMTIuMDMgMTIuMDNoMzYwLjkwOWM2LjY0MSAwIDEyLjAzLTUuMzkgMTIuMDMtMTIuMDMuMDAxLTYuNjQxLTUuMzg5LTEyLjAzLTEyLjAzLTEyLjAzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gIHotaW5kZXg6IDkxICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cXG5cXG4uYm0tYnVyZ2VyLWJhcnMge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXFxuXFxuLmJtLWNyb3NzIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxufVxcblxcbi8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cXG5cXG4uYm0tbWVudSB7XFxuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xcbiAgLypwYWRkaW5nOiAyLjVlbSAxLjVlbSAwOyovXFxuICAvKmZvbnQtc2l6ZTogMS4xNWVtOyovXFxufVxcblxcbi8qIE1vcnBoIHNoYXBlIG5lY2Vzc2FyeSB3aXRoIGJ1YmJsZSBvciBlbGFzdGljICovXFxuXFxuLmJtLW1vcnBoLXNoYXBlIHtcXG4gIGZpbGw6ICMzNzNhNDc7XFxufVxcblxcbi8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xcblxcbi5ibS1pdGVtLWxpc3Qge1xcbiAgY29sb3I6ICNiOGI3YWQ7XFxufVxcblxcbi8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xcblxcbi5ibS1vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibS1tZW51LXdyYXAge1xcbiAgei1pbmRleDogOTIgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuYm0tYnVyZ2VyLWJhcnMsIC5ibS1idXJnZXItYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbm1haW4ge1xcblxcdC8qdGVtcCovXFxuXFx0LyptaW4taGVpZ2h0OiA0MDBweDsqL1xcbn1cXG5cXG5tYWluLCBuYXYge1xcblxcdC8qbG9zdC1jZW50ZXI6IDEyNzhweDsqL1xcbn1cXG5cXG5tYWluOmJlZm9yZSwgbmF2OmJlZm9yZSB7Lypsb3N0LWNlbnRlcjogMTI3OHB4OyovXFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG5tYWluOmFmdGVyLCBuYXY6YWZ0ZXIgey8qbG9zdC1jZW50ZXI6IDEyNzhweDsqL1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogMCAwIDNlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuICB3aWR0aDogYXV0bztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG5mb290ZXIgc2VjdGlvbi5pY29ucyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiBjYWxjKDk5LjklICogNC8xMiAtICgzMHB4IC0gMzBweCAqIDQvMTIpKTtcXG4gIHBhZGRpbmc6IDM2cHggMCAzOHB4IDEwcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlclxcbn1cXG5cXG5mb290ZXIgc2VjdGlvbi5pY29uczpudGgtY2hpbGQoMW4pIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbmZvb3RlciBzZWN0aW9uLmljb25zOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG5mb290ZXIgc2VjdGlvbi5pY29uczpudGgtY2hpbGQoMTJuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmZvb3RlciBzZWN0aW9uLmljb25zOm50aC1jaGlsZCgxMm4gKyAxKSB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuZm9vdGVyIHNlY3Rpb24uaWNvbnMgaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG59XFxuXFxuZm9vdGVyIC5zb2NpYWwtY29weXJpZ2h0LW1haW4ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGNEY0RjQ7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLW5hdi1saW5rcyB7XFxuICB3aWR0aDogY2FsYyg5OS45JSAqIDIvMTIgLSAoMzBweCAtIDMwcHggKiAyLzEyKSk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRjRGNEY0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogNzBweCA1MHB4IDI4cHggMDtcXG4gIG1hcmdpbi1sZWZ0OiA4JVxcbn1cXG5cXG4uZm9vdGVyLW5hdi1saW5rczpudGgtY2hpbGQoMW4pIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbi5mb290ZXItbmF2LWxpbmtzOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4uZm9vdGVyLW5hdi1saW5rczpudGgtY2hpbGQoMTJuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5mb290ZXItbmF2LWxpbmtzOm50aC1jaGlsZCgxMm4gKyAxKSB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmZvb3Rlci1uYXYtbGlua3MgaDIge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiA2LjMzcHg7XFxuICBtYXJnaW46IDAgMCAzOHB4O1xcbiAgY29sb3I6ICMzYzNjM2M7XFxufVxcblxcbi5mb290ZXItbmF2LWxpbmtzIGEge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzNjM2MzYztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjA0cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvb3Rlci1zaWdudXAge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOjcwcHggNTBweCA0NHB4IDBweDtcXG4gIG1hcmdpbi1sZWZ0OjglO1xcbiAgd2lkdGg6IGNhbGMoOTkuOSUgKiA1LzEyIC0gKDMwcHggLSAzMHB4ICogNS8xMikpXFxufVxcblxcbi5mb290ZXItc2lnbnVwOm50aC1jaGlsZCgxbikge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBjbGVhcjogbm9uZTtcXG59XFxuXFxuLmZvb3Rlci1zaWdudXA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5mb290ZXItc2lnbnVwOm50aC1jaGlsZCgxMm4pIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZvb3Rlci1zaWdudXA6bnRoLWNoaWxkKDEybiArIDEpIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uZm9vdGVyLXNpZ251cCBoMiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDYuMzNweDtcXG4gIG1hcmdpbjogMCAwIDM4cHg7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuXFxuLmZvb3Rlci1zaWdudXAgcCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICMzYzNjM2M7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMTYwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5mb290ZXItc2lnbnVwIGZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5mb290ZXItZW1haWxiZyB7XFxuICB3aWR0aDogMjg1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWVhO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnRcXG59XFxuXFxuLmZvb3Rlci1lbWFpbGJnIGlucHV0LmZvb3Rlci1lbWFpbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IDIzOHB4O1xcbiAgaGVpZ2h0OiA0MXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgY29sb3I6ICM1YTU4NTk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWE1ODU5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZm9vdGVyLWVtYWlsYmcgaW5wdXQuZm9vdGVyLWVtYWlsOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YTU4NTk7XFxufVxcblxcbi5mb290ZXItZW1haWxiZyBpbnB1dC5mb290ZXItZW1haWxhcm93IHtcXG4gIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9yZi1lbWFpbC1hcnJvdy5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk7XFxuICByaWdodDogLTM0cHg7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgd2lkdGg6IGNhbGMoOTkuOSUgKiA3LzEyIC0gKDMwcHggLSAzMHB4ICogNy8xMikpO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDM2cHhcXG59XFxuXFxuLmNvcHlyaWdodDpudGgtY2hpbGQoMW4pIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbi5jb3B5cmlnaHQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5jb3B5cmlnaHQ6bnRoLWNoaWxkKDEybikge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uY29weXJpZ2h0Om50aC1jaGlsZCgxMm4gKyAxKSB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmNvcHlyaWdodCBwIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTQwcHg7XFxufVxcblxcbi5jb3B5cmlnaHQtbGlua3Mge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDo4cHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlclxcbn1cXG5cXG4uY29weXJpZ2h0LWxpbmtzIGEge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgY29sb3I6ICNlM2E3OTc7XFxuICBmb250LXNpemU6IDExcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb3B5cmlnaHQtbGlua3MgYTpob3ZlciB7XFxuICBjb2xvcjogI2UzYTc5NztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcXG4gIC5mb290ZXItbmF2LWxpbmtzIHtcXG4gICAgd2lkdGg6IGNhbGMoOTkuOSUgKiA5LzEyIC0gKDMwcHggLSAzMHB4ICogOS8xMikpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC5mb290ZXItbmF2LWxpbmtzOm50aC1jaGlsZCgxbikge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBjbGVhcjogbm9uZTtcXG4gIH1cXG4gIC5mb290ZXItbmF2LWxpbmtzOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuZm9vdGVyLW5hdi1saW5rczpudGgtY2hpbGQoMTJuKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcbiAgLmZvb3Rlci1uYXYtbGlua3M6bnRoLWNoaWxkKDEybiArIDEpIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICB9XFxuICAuZm9vdGVyLXNpZ251cCB7XFxuICAgIHdpZHRoOiBjYWxjKDk5LjklICogMTEvMTIgLSAoMzBweCAtIDMwcHggKiAxMS8xMikpO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIH1cXG4gIC5mb290ZXItc2lnbnVwOm50aC1jaGlsZCgxbikge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBjbGVhcjogbm9uZTtcXG4gIH1cXG4gIC5mb290ZXItc2lnbnVwOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAuZm9vdGVyLXNpZ251cDpudGgtY2hpbGQoMTJuKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcbiAgLmZvb3Rlci1zaWdudXA6bnRoLWNoaWxkKDEybiArIDEpIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICB9XFxuICBmb290ZXIgc2VjdGlvbi5pY29ucyB7XFxuICAgIHdpZHRoOiBjYWxjKDk5LjklICogMTEvMTIgLSAoMzBweCAtIDMwcHggKiAxMS8xMikpO1xcbiAgICBwYWRkaW5nLWJvdHRvbToxOHB4O1xcbiAgfVxcbiAgZm9vdGVyIHNlY3Rpb24uaWNvbnM6bnRoLWNoaWxkKDFuKSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgfVxcbiAgZm9vdGVyIHNlY3Rpb24uaWNvbnM6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIGZvb3RlciBzZWN0aW9uLmljb25zOm50aC1jaGlsZCgxMm4pIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICB9XFxuICBmb290ZXIgc2VjdGlvbi5pY29uczpudGgtY2hpbGQoMTJuICsgMSkge1xcbiAgICBjbGVhcjogYm90aDtcXG4gIH1cXG4gIC5jb3B5cmlnaHQgcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuY29weXJpZ2h0IHtcXG4gICAgd2lkdGg6IGNhbGMoOTkuOSUgKiAxMS8xMiAtICgzMHB4IC0gMzBweCAqIDExLzEyKSk7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAuY29weXJpZ2h0Om50aC1jaGlsZCgxbikge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBjbGVhcjogbm9uZTtcXG4gIH1cXG4gIC5jb3B5cmlnaHQ6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIC5jb3B5cmlnaHQ6bnRoLWNoaWxkKDEybikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG4gIC5jb3B5cmlnaHQ6bnRoLWNoaWxkKDEybiArIDEpIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICB9XFxuICAuY29weXJpZ2h0LWxpbmtzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZm9vdGVyLWVtYWlsYmcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuICAuZm9vdGVyLWVtYWlsYmcgaW5wdXQuZm9vdGVyLWVtYWlsIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cXG5cXG4jbnByb2dyZXNzIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbnByb2dyZXNzIC5iYXIge1xcbiAgYmFja2dyb3VuZDogIzI5ZDtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMzE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG59XFxuXFxuLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cXG5cXG4jbnByb2dyZXNzIC5wZWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xcbiAgb3BhY2l0eTogMS4wO1xcblxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XFxufVxcblxcbi8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXFxuXFxuI25wcm9ncmVzcyAuc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMzE7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcXG4gIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcbiAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHVCBXYWxzaGVpbSc7XFxuICBzcmM6IHVybChcXFwiL3N0YXRpYy9mb250cy9ndC13YWxzaGVpbS9ndC13YWxzaGVpbS13ZWIuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwiL3N0YXRpYy9mb250cy9ndC13YWxzaGVpbS9ndC13YWxzaGVpbS13ZWIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgdXJsKFxcXCIvc3RhdGljL2ZvbnRzL2d0LXdhbHNoZWltL2d0LXdhbHNoZWltLXdlYi53b2ZmXFxcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgIHVybChcXFwiL3N0YXRpYy9mb250cy9ndC13YWxzaGVpbS9ndC13YWxzaGVpbS13ZWIudHRmXFxcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICB1cmwoXFxcIi9zdGF0aWMvZm9udHMvZ3Qtd2Fsc2hlaW0vZ3Qtd2Fsc2hlaW0td2ViLnN2Z1xcXCIpIGZvcm1hdCgnc3ZnJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncHVibGljbyc7XFxuICBzcmM6IHVybChcXFwiL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tQm9sZC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvc3RhdGljL2ZvbnRzL3B1YmxpY28vUHVibGljby1Cb2xkLmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgIHVybChcXFwiL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tQm9sZC53b2ZmXFxcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgIHVybChcXFwiL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tQm9sZC50dGZcXFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgIHVybChcXFwiL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tQm9sZC5zdmdcXFwiKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAnR1QgV2Fsc2hlaW0nO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcblxcbmgxIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7ICBcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMiB7XFxuICBmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjojMTYxNjE2O1xcbn1cXG5cXG5oMyB7XFxuICBmbG9hdDpsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiMxODE4MTg7XFxuICBmb250LXNpemU6MzZweDtcXG4gIGxldHRlci1zcGFjaW5nOjFweDtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIGxpbmUtaGVpZ2h0OjEyMCU7XFxufVxcblxcbmg0IHtcXG4gIGZsb2F0OmxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzYzNjM2M7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG5cXG5oNSB7XFxuICBmbG9hdDpsZWZ0O3dpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuXFxuaDYge1xcbiAgZmxvYXQ6bGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6ICMyMjI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnAge1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRsaW5lLWhlaWdodDogMjtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciBzdmcge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDJlbTtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnJlcXVpcmVkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT1wYXNzd29yZF0ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTYgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHdpZHRoOiA5OCU7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGNvbG9yOiAjNWE1ODU5O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogIzVhNTg1OTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5waW5rLWJsYWNrLWJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNmNjO1xcbiAgcGFkZGluZzogMTZweCA0MHB4O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBjb2xvcjogIzNjM2MzYztcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndoaXRlLWJsYWNrLWJvcmRlci1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzE4MTgxODtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDE0cHggMjZweDtcXG4gIG1hcmdpbjogMjVweCAwIDEwcHggMDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4ud2hpdGUtYm9yZGVyLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMTRweCAyNnB4O1xcbiAgbWFyZ2luOiAyNXB4IDAgMTBweCAwO1xcbiAgY3Vyc29yOnBvaW50ZXI7IFxcbn1cXG5cXG4uYmFjay1idXR0b257XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgXFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDE2cHggNDBweDtcXG59XFxuXFxuLndoaXRlLXBsYXktdmlkZW8tYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICBjbGVhcjogYm90aDtcXG4gIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy93aGl0ZS1wbGF5LWJ0bi5zdmcpIG5vLXJlcGVhdCAyMnB4IDEycHg7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XFxuICBwYWRkaW5nOiAxNnB4IDMwcHggMTZweCA1MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmJsYWNrLXBsYXktdmlkZW8tYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICBjbGVhcjogYm90aDtcXG4gIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9ibGFjay1wbGF5LWJ0bi5zdmcpIG5vLXJlcGVhdCAyMnB4IDEycHg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxuICBwYWRkaW5nOiAxNnB4IDMwcHggMTZweCA1MHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMzBweCAwIDAgMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbW1vbi1yb3cge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRoZW1lLWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZmE7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEzODZweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzoxNXB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZC1oZWFkZXItYmFubmVyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgaGVpZ2h0OiA2NjdweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJhbm5lci1vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMywgNSwgLjYpO1xcbiAgaGVpZ2h0OiA2NjdweDtcXG59XFxuXFxuLmludHJvLXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzE2MTYxNjtcXG4gIHdpZHRoOiBjYWxjKDk5LjklICogMTIvMTIgLSAoMzBweCAtIDMwcHggKiAxMi8xMikpO1xcbn1cXG5cXG4uaW50cm8tdGl0bGU6bnRoLWNoaWxkKDFuKSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIGNsZWFyOiBub25lO1xcbn1cXG5cXG4uaW50cm8tdGl0bGU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5pbnRyby10aXRsZTpudGgtY2hpbGQoMTJuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5pbnRyby10aXRsZTpudGgtY2hpbGQoMTJuICsgMSkge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDE0cHggMCAwIDA7XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMxNjE2MTY7XFxuICBmb250LXNpemU6IDIuOGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHdpZHRoOiBjYWxjKDk5LjklICogMTIvMTIgLSAoMzBweCAtIDMwcHggKiAxMi8xMikpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTpudGgtY2hpbGQoMW4pIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY2xlYXI6IG5vbmU7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTpudGgtY2hpbGQoMTJuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlOm50aC1jaGlsZCgxMm4gKyAxKSB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLyo9PT09PT09PT09PT09PT0gVGVybXMgYW5kIFByaXZhY3kgY3NzIHN0YXJ0IGhlcmUgPT09PT09PT09PT09PT09Ki9cXG5cXG4uY29tbW9uLXJvdy50ZXJtcy1wcml2YWN5LW1haW4ge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICB3aWR0aDogNTMlXFxufVxcblxcbi5jb21tb24tcm93LnRlcm1zLXByaXZhY3ktbWFpbiBoMSB7XFxuICBmb250LWZhbWlseTogJ3B1YmxpY28nO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmNvbW1vbi1yb3cudGVybXMtcHJpdmFjeS1tYWluIGgzIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbW1vbi1yb3cudGVybXMtcHJpdmFjeS1tYWluIHAgc3BhbiB7XFxuICBtYXJnaW46IDAgMCAxNXB4O1xcbiAgY29sb3I6ICMxODE4MTg7XFxuICBsaW5lLWhlaWdodDogMTYwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29tbW9uLXJvdy50ZXJtcy1wcml2YWN5LW1haW4gdWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5jb21tb24tcm93LnRlcm1zLXByaXZhY3ktbWFpbiB1bCBsaSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiAjMTgxODE4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmNvbW1vbi1yb3cudGVybXMtcHJpdmFjeS1tYWluIHVsIGxpIHAge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBjb2xvcjogIzE4MTgxODtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XFxuICAuY29tbW9uLXJvdy50ZXJtcy1wcml2YWN5LW1haW4ge1xcbiAgICB3aWR0aDogOTYlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxufVxcblxcbi8qPT09PT09PT09PT09PT09IFRlcm1zIGFuZCBQcml2YWN5IGNzcyBzdGFydCBoZXJlID09PT09PT09PT09PT09PSovXFxuXFxuLnNsaWNrLXNsaWRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG5cXG4uc2xpY2stc2xpZGUgaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2xpY2stZG90cyB7XFxuICBib3R0b206IC01NXB4O1xcbn1cXG5cXG4vKiBTbGlkZXIgKi9cXG5cXG4uc2xpY2stc2xpZGVyXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stbGlzdFxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2xpY2stbGlzdDpmb2N1c1xcbntcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNsaWNrLWxpc3QuZHJhZ2dpbmdcXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY3Vyc29yOiBoYW5kO1xcbn1cXG5cXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0XFxue1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWNrLXRyYWNrXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zbGljay10cmFjazpiZWZvcmUsXFxuLnNsaWNrLXRyYWNrOmFmdGVyXFxue1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG5cXG4gICAgY29udGVudDogJyc7XFxufVxcblxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFja1xcbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXNsaWRlXFxue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5zbGljay1zbGlkZS5zbGljay1sb2FkaW5nIGltZ1xcbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZ1xcbntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stc2xpZGVcXG57XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZVxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AY2hhcnNldCAnVVRGLTgnO1xcblxcbi8qIFNsaWRlciAqL1xcblxcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0XFxue1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi9hamF4LWxvYWRlci5naWYnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnc2xpY2snO1xcbiAgc3JjOiB1cmwoXFxcIi9zdGF0aWMvZm9udHMvc2xpY2svc2xpY2suZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwiL3N0YXRpYy9mb250cy9zbGljay9zbGljay5lb3Q/I2llZml4XFxcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICB1cmwoXFxcIi9zdGF0aWMvZm9udHMvc2xpY2svc2xpY2sud29mZlxcXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICB1cmwoXFxcIi9zdGF0aWMvZm9udHMvc2xpY2svc2xpY2sudHRmXFxcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICB1cmwoXFxcIi9zdGF0aWMvZm9udHMvc2xpY2svc2xpY2suc3ZnXFxcIikgZm9ybWF0KCdzdmcnKTtcXG59XFxuXFxuLyogQXJyb3dzICovXFxuXFxuLnNsaWNrLXByZXYsXFxuLnNsaWNrLW5leHRcXG57XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMyU7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1wcmV2OmhvdmVyLFxcbi5zbGljay1wcmV2OmZvY3VzLFxcbi5zbGljay1uZXh0OmhvdmVyLFxcbi5zbGljay1uZXh0OmZvY3VzXFxue1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stcHJldjpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpmb2N1czpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zbGljay1wcmV2LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcXG4uc2xpY2stbmV4dC5zbGljay1kaXNhYmxlZDpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IC4yNTtcXG59XFxuXFxuLnNsaWNrLXByZXY6YmVmb3JlLFxcbi5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG9wYWNpdHk6IC43NTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLnNsaWNrLXByZXZcXG57XFxuICAgIGxlZnQ6IC02MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXByZXZcXG57XFxuICAgIHJpZ2h0OiAtMjVweDtcXG4gICAgbGVmdDogYXV0bztcXG59XFxuXFxuLnNsaWNrLXByZXY6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZDp1cmwoL3N0YXRpYy9pbWFnZXMvcHJlLWFycm93LnBuZykgbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXByZXY6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAn4oaSJztcXG59XFxuXFxuLnNsaWNrLW5leHRcXG57XFxuICAgIHJpZ2h0OiAtNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbltkaXI9J3J0bCddIC5zbGljay1uZXh0XFxue1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogLTI1cHg7XFxufVxcblxcbi5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6dXJsKC9zdGF0aWMvaW1hZ2VzL25leHQtYXJyb3cucG5nKSBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogMjlweDtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG5bZGlyPSdydGwnXSAuc2xpY2stbmV4dDpiZWZvcmVcXG57XFxuICAgIGNvbnRlbnQ6ICfihpAnO1xcbn1cXG5cXG4vKiBEb3RzICovXFxuXFxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXJcXG57XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zbGljay1kb3RzXFxue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zbGljay1kb3RzIGxpXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b25cXG57XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzXFxue1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXI6YmVmb3JlLFxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmVcXG57XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmVcXG57XFxuICAgIGZvbnQtZmFtaWx5OiAnc2xpY2snO1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBjb250ZW50OiAn4oCiJztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBvcGFjaXR5OiAuMjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlXFxue1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2M3NzM1YztcXG59XFxuXFxuLnBvcHVwYm94e1xcbiAgd2lkdGg6MTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ucG9wdXBib3hbaGlkZGVuXXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cGJveC1vdmVybGF5e1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6MTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAgei1pbmRleDoxMDAyO1xcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlICMwMDA7XFxufVxcblxcbi5wb3B1cGJveC1jb250ZW50IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cGJveC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgei1pbmRleDogMTAwMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcHVwYm94LXRpdGxlQmFyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcHVwYm94LWJ0bi0tY2xvc2Uge1xcbiAgei1pbmRleDogMTAwNDtcXG59XFxuXFxuLnBvcHVwYm94W2RhdGEtdGl0bGU9J2JvdHRvbSddIC5wb3B1cGJveC1jb250ZW50IHsgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjsgLW1zLWZsZXgtb3JkZXI6IDE7IG9yZGVyOiAxIH1cXG5cXG4ucG9wdXBib3hbZGF0YS10aXRsZT0nYm90dG9tJ10gLnBvcHVwYm94LXRpdGxlQmFyIHsgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMzsgLW1zLWZsZXgtb3JkZXI6IDI7IG9yZGVyOiAyIH1cXG5cXG4vKiAtLS0tLSBkZWZhdWx0IHRoZW1lIC0tLS0tICovXFxuXFxuLnBvcHVwYm94LXdyYXBwZXIge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3B1cGJveC1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHggMjRweCAzMHB4O1xcbn1cXG5cXG4ucG9wdXBib3gtdGl0bGVCYXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gIHBhZGRpbmc6IDExcHggMzdweCAxMXB4IDI0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBzb2xpZDtcXG59XFxuXFxuLnBvcHVwYm94LWJ0bi0tY2xvc2Uge1xcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMXB4O1xcbiAgdG9wOiAxMXB4O1xcbiAgY29sb3I6ICNjMWMxYzE7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwYm94LWJ0bi0tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5wb3B1cGJveC5pcy1hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ucG9wdXBib3hbZGF0YS10aXRsZT0nYm90dG9tJ10gLnBvcHVwYm94LWNvbnRlbnQgeyBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgfVxcblxcbi5wb3B1cGJveFtkYXRhLXRpdGxlPSdib3R0b20nXSAucG9wdXBib3gtdGl0bGVCYXIgeyBib3gtc2hhZG93OiBub25lOyBib3JkZXItdG9wOiAxcHggI2NjYyBzb2xpZCB9XFxuXFxuLyogaUNoZWNrIHBsdWdpbiBNaW5pbWFsIHNraW5cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIHJlZCAqL1xcblxcbi5pY2hlY2tib3hfbWluaW1hbC1yZWQsXFxuLmlyYWRpb19taW5pbWFsLXJlZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvaUNoZWNrL3JlZC5wbmcpIG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1yZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1yZWQuaG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwcHggMDtcXG4gICAgfVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1yZWQuY2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDBweCAwO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9taW5pbWFsLXJlZC5kaXNhYmxlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjBweCAwO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9taW5pbWFsLXJlZC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7XFxuICAgIH1cXG5cXG4uaXJhZGlvX21pbmltYWwtcmVkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxufVxcblxcbi5pcmFkaW9fbWluaW1hbC1yZWQuaG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMHB4IDA7XFxuICAgIH1cXG5cXG4uaXJhZGlvX21pbmltYWwtcmVkLmNoZWNrZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0MHB4IDA7XFxuICAgIH1cXG5cXG4uaXJhZGlvX21pbmltYWwtcmVkLmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAwO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLXJlZC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xODBweCAwO1xcbiAgICB9XFxuXFxuLyogSGlEUEkgc3VwcG9ydCAqL1xcblxcbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjI1KSwgKG1pbi1yZXNvbHV0aW9uOiAxMjBkcGkpIHtcXG4gICAgLmljaGVja2JveF9taW5pbWFsLXJlZCxcXG4gICAgLmlyYWRpb19taW5pbWFsLXJlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvaUNoZWNrL3JlZEAyeC5wbmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIGdyZWVuICovXFxuXFxuLmljaGVja2JveF9taW5pbWFsLWdyZWVuLFxcbi5pcmFkaW9fbWluaW1hbC1ncmVlbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2lDaGVjay9ncmVlbi5wbmcpIG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLmljaGVja2JveF9taW5pbWFsLWdyZWVuLmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMHB4IDA7XFxuICAgIH1cXG5cXG4uaWNoZWNrYm94X21pbmltYWwtZ3JlZW4uY2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDBweCAwO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9taW5pbWFsLWdyZWVuLmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02MHB4IDA7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG5cXG4uaWNoZWNrYm94X21pbmltYWwtZ3JlZW4uY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwO1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLWdyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxufVxcblxcbi5pcmFkaW9fbWluaW1hbC1ncmVlbi5ob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTIwcHggMDtcXG4gICAgfVxcblxcbi5pcmFkaW9fbWluaW1hbC1ncmVlbi5jaGVja2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDBweCAwO1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLWdyZWVuLmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAwO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLWdyZWVuLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4MHB4IDA7XFxuICAgIH1cXG5cXG4vKiBIaURQSSBzdXBwb3J0ICovXFxuXFxuQG1lZGlhICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMjUpLCAobWluLXJlc29sdXRpb246IDEyMGRwaSkge1xcbiAgICAuaWNoZWNrYm94X21pbmltYWwtZ3JlZW4sXFxuICAgIC5pcmFkaW9fbWluaW1hbC1ncmVlbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvaUNoZWNrL2dyZWVuQDJ4LnBuZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogZ3JleSAqL1xcblxcbi5pY2hlY2tib3hfbWluaW1hbC1ncmV5LFxcbi5pcmFkaW9fbWluaW1hbC1ncmV5IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAqZGlzcGxheTogaW5saW5lO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9pQ2hlY2svZ3JleS5wbmcpIG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4uaWNoZWNrYm94X21pbmltYWwtZ3JleS5ob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjBweCAwO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9taW5pbWFsLWdyZXkuY2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDBweCAwO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9taW5pbWFsLWdyZXkuZGlzYWJsZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTYwcHggMDtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgfVxcblxcbi5pY2hlY2tib3hfbWluaW1hbC1ncmV5LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDtcXG4gICAgfVxcblxcbi5pcmFkaW9fbWluaW1hbC1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDA7XFxufVxcblxcbi5pcmFkaW9fbWluaW1hbC1ncmV5LmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjBweCAwO1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLWdyZXkuY2hlY2tlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQwcHggMDtcXG4gICAgfVxcblxcbi5pcmFkaW9fbWluaW1hbC1ncmV5LmRpc2FibGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAwO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLmlyYWRpb19taW5pbWFsLWdyZXkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTgwcHggMDtcXG4gICAgfVxcblxcbi8qIEhpRFBJIHN1cHBvcnQgKi9cXG5cXG5AbWVkaWEgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4yNSksIChtaW4tcmVzb2x1dGlvbjogMTIwZHBpKSB7XFxuICAgIC5pY2hlY2tib3hfbWluaW1hbC1ncmV5LFxcbiAgICAuaXJhZGlvX21pbmltYWwtZ3JleSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvaUNoZWNrL2dyZXlAMngucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMjBweDtcXG4gICAgfVxcbn1cXG5cXG4vKiBpQ2hlY2sgcGx1Z2luIExpbmUgc2tpblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogZ3JleSAqL1xcblxcbi5pY2hlY2tib3hfbGluZS1ncmV5LFxcbi5pcmFkaW9fbGluZS1ncmV5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMzhweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICM3MzcxNmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY2hlY2tib3hfbGluZS1ncmV5IC5pY2hlY2tfbGluZS1pY29uLFxcbiAgICAuaXJhZGlvX2xpbmUtZ3JleSAuaWNoZWNrX2xpbmUtaWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDEzcHg7XFxuICAgICAgICB3aWR0aDogMTNweDtcXG4gICAgICAgIGhlaWdodDogMTFweDtcXG4gICAgICAgIG1hcmdpbjogLTVweCAwIDAgMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2lDaGVjay9saW5lLnBuZykgbm8tcmVwZWF0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9saW5lLWdyZXkuaG92ZXIsXFxuICAgIC5pY2hlY2tib3hfbGluZS1ncmV5LmNoZWNrZWQuaG92ZXIsXFxuICAgIC5pcmFkaW9fbGluZS1ncmV5LmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4Qjg5ODY7XFxuICAgIH1cXG5cXG4uaWNoZWNrYm94X2xpbmUtZ3JleS5jaGVja2VkLFxcbiAgICAuaXJhZGlvX2xpbmUtZ3JleS5jaGVja2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM3MzcxNmU7XFxuICAgIH1cXG5cXG4uaWNoZWNrYm94X2xpbmUtZ3JleS5jaGVja2VkIC5pY2hlY2tfbGluZS1pY29uLFxcbiAgICAgICAgLmlyYWRpb19saW5lLWdyZXkuY2hlY2tlZCAuaWNoZWNrX2xpbmUtaWNvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1cHggMDtcXG4gICAgICAgIH1cXG5cXG4uaWNoZWNrYm94X2xpbmUtZ3JleS5kaXNhYmxlZCxcXG4gICAgLmlyYWRpb19saW5lLWdyZXkuZGlzYWJsZWQge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0Q1RDREMztcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgfVxcblxcbi5pY2hlY2tib3hfbGluZS1ncmV5LmRpc2FibGVkIC5pY2hlY2tfbGluZS1pY29uLFxcbiAgICAgICAgLmlyYWRpb19saW5lLWdyZXkuZGlzYWJsZWQgLmljaGVja19saW5lLWljb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMHB4IDA7XFxuICAgICAgICB9XFxuXFxuLmljaGVja2JveF9saW5lLWdyZXkuY2hlY2tlZC5kaXNhYmxlZCxcXG4gICAgLmlyYWRpb19saW5lLWdyZXkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENEQzO1xcbiAgICB9XFxuXFxuLmljaGVja2JveF9saW5lLWdyZXkuY2hlY2tlZC5kaXNhYmxlZCAuaWNoZWNrX2xpbmUtaWNvbixcXG4gICAgICAgIC5pcmFkaW9fbGluZS1ncmV5LmNoZWNrZWQuZGlzYWJsZWQgLmljaGVja19saW5lLWljb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NXB4IDA7XFxuICAgICAgICB9XFxuXFxuLyogSGlEUEkgc3VwcG9ydCAqL1xcblxcbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjI1KSwgKG1pbi1yZXNvbHV0aW9uOiAxMjBkcGkpIHtcXG4gICAgLmljaGVja2JveF9saW5lLWdyZXkgLmljaGVja19saW5lLWljb24sXFxuICAgIC5pcmFkaW9fbGluZS1ncmV5IC5pY2hlY2tfbGluZS1pY29uIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9pQ2hlY2svbGluZUAyeC5wbmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDEzcHg7XFxuICAgIH1cXG59XFxuXFxuLypAaW1wb3J0IFxcXCJmb3Jtc1xcXCIqL1xcblxcbi8qQGltcG9ydCBcXFwiZGV2LXV0aWxzXFxcIjsqL1xcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2xvYmFsX3N0eWxlcy9pbmRleC5jc3MiLCJpbXBvcnQgcG9wdWxhaXJQcm9kdWN0c0RhdGEgZnJvbSAnLi9kdW1teV9kYXRhL3BvcHVsYWlyX3Byb2R1Y3RzLmpzb24nO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVsZW1lbnQgPSAoe2xhbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkXCI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZlYXR1cmVkIHtcbiAgICAgICAgbG9zdC11dGlsaXR5OiBjbGVhcmZpeDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZGU5YzhjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgIH1cblxuICAgICAgYS5mYW5jeV9idXR0b24ge1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4MTgxODtcbiAgICAgICAgbWFyZ2luOiAyZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZToxMXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMnB4O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1vcmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuXG4gICAgPGgxPk9uemUgcG9wdWxhaXJzdGUgaG9ybG9nZXM8L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxuICAgICAgeyBwb3B1bGFpclByb2R1Y3RzRGF0YS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiA8UHJvZHVjdCBrZXk9e2luZGV4fSB7Li4ucHJvZHVjdH0gbGFuZz17bGFuZ30gLz4pIH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImZhbmN5X2J1dHRvblwiPkJla2lqayBhbGxlIGhvcmxvZ2VzPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG59O1xuXG5FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgbGFuZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BvcHVsYWlyUHJvZHVjdHMuanMiLCJpbXBvcnQgSW1naXggZnJvbSAncmVhY3QtaW1naXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbmZpZy9yb3V0ZXMnO1xuY29uc3QgRWxlbWVudCA9ICh7IGlkLCBwcmljZSwgaW1hZ2UsIGxhbmcgfSkgPT4ge1xuICBjb25zdCBzcmMgPSBpbWFnZTtcbiAgY29uc29sZS5sb2cobGFuZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgbG9zdC13YWZmbGU6IDEvNDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgIGxvc3Qtd2FmZmxlOiAxLzI7XG5cbiAgICAgICAgICAgICYgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8TGluayByb3V0ZT1cInNob3dfd2F0Y2hcIiBwYXJhbXM9e3sgbGFuZywgaWQgfX0+XG4gICAgICAgIDxhIHdpZHRoPVwiMzAwcHhcIj5cbiAgICAgICAgICB7IC8qIDxoMz57bmFtZX08L2gzPiAqLyB9XG4gICAgICAgICAgPEltZ2l4IHNyYz17c3JjfSB0eXBlPVwicGljdHVyZVwiPlxuICAgICAgICAgICAgPEltZ2l4IHNyYz17c3JjfSB3aWR0aD17MzAwfSBhdXRvPXtbJ2NvbXByZXNzJywgJ2Zvcm1hdCddfSB0eXBlPVwic291cmNlXCIgaW1nUHJvcHM9e3sgbWVkaWE6ICcobWluLXdpZHRoOiA3NjhweCknIH19IGZpdD1cImNsaXBcIiBmYWNlcz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8SW1naXggc3JjPXtzcmN9IHdpZHRoPXsyMDB9IGF1dG89e1snY29tcHJlc3MnLCAnZm9ybWF0J119IHR5cGU9XCJzb3VyY2VcIiBpbWdQcm9wcz17eyBtZWRpYTogJyhtaW4td2lkdGg6IDMyMHB4KScgfX0gZml0PVwiY2xpcFwiIGZhY2VzPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDxJbWdpeCBzcmM9e3NyY30gd2lkdGg9ezI2MH0gYXV0bz17Wydjb21wcmVzcycsICdmb3JtYXQnXX0gZml0PVwiY2xpcFwiIGZhY2VzPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L0ltZ2l4PlxuXG4gICAgICAgICAgPGg0PiZldXJvO3twcmljZX08L2g0PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcHJpY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9jb25maWcvcm91dGVzJztcblxuLyoqXG4gICAqIEhvbWUgMTUgTWluIHdpdGggQ2xhc3NcbiAqL1xuY2xhc3MgSG9tZTE1bWluV2l0aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAqIHZhcmlhYmxlIGRlY2xhcmF0aW9uXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IG15RGF0YSA9IHJlcXVpcmUoJy4uLy4uL2xvY2FsZS8nK3Byb3BzLmxhbmcrJy9ob21lLTE1bWluLXdpdGguanNvbicpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLFxuICAgICAgbGFuZzogcHJvcHMubGFuZyxcbiAgICAgIHJlc19kYXRhOiBteURhdGEsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgKiBSZW5kZXJzIFwiVGV4dFwiIVxuICAqIEByZXR1cm4gSlNYXG4gICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAubWFpbi13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIH0gIFxuICAgICAgICAgIFxuICAgICAgICAubGVmdC1pbmZvIHtcbiAgICAgICAgICB3aWR0aDozNzZweDtcbiAgICAgICAgICBwYWRkaW5nOjI1cHggMCA1MHB4IDA7XG4gICAgICAgICAgbWFyZ2luOjAgMCAwIDUlO1xuXG4gICAgICAgICAgJiBoMiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiMxNjE2MTY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBoMyB7XG4gICAgICAgICAgICBjb2xvcjojMTYxNjE2O1xuICAgICAgICAgICAgZm9udC1zaXplOjIuMjI1ZW07XG4gICAgICAgICAgICBwYWRkaW5nOjE0cHggMCAwIDA7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDAgMCAwO1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzE4MTgxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgbWFyZ2luOjIwcHggMCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjOWU5ZTllO1xuICAgICAgICAgICAgcGFkZGluZzowIDAgNnB4IDA7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG5cbiAgICAgICAgICAgICYgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbW9uLXJvd3tcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG5cbiAgICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnVybCgvc3RhdGljL3RlbXBfaW1hZ2VzL2hvbWUtMTVtaW4ucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6ODA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQtcm93e1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZzogMjUwcHggMCAwO1xuICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtcm93IHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XG4gICAgICAgICAgXG4gICAgICAgICAgLmxlZnQtcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwIDA7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmlnaHQtcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIC5jb21tb24tcm93e1xuICAgICAgICAgICAgJiBzcGFuIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDozODBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZWZ0LWluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYgaDMge1xuICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBwIHtcbiAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgYSB7XG4gICAgICAgICAgICAgIG1hcmdpbjozMHB4IDAgMzBweCAwO1xuICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1yb3cgcmlnaHQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXJvd1wiPjxzcGFuPiZuYnNwOzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1yb3cgbGVmdC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxoZ3JvdXA+XG4gICAgICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnJlc19kYXRhLk1haW5UaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5yZXNfZGF0YS5OYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDwvaGdyb3VwPlxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXNfZGF0YS5EZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiMTUtbWludXRlcy13aXRoLXN0ZXBoYW5pZVwiIHBhcmFtcz17eyBsYW5nOnRoaXMuc3RhdGUubGFuZyB9fT5cbiAgICAgICAgICAgICAgICA8YT57dGhpcy5zdGF0ZS5yZXNfZGF0YS5MaW5rVGV4dH08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUxNW1pbldpdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hvbWUvMTVNaW5XaXRoLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmltZW8gPSByZXF1aXJlKCdyZWFjdC12aW1lbycpO1xuXG4vKipcbiAgICogQmVoaW5kIEJyYW5kIENsYXNzXG4gKi9cbmNsYXNzIEJlaGluZEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICogdmFyaWFibGUgZGVjbGFyYXRpb25cbiAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgbXlEYXRhID0gcmVxdWlyZSgnLi4vLi4vbG9jYWxlLycrcHJvcHMubGFuZysnL2hvbWUtYmVoaW5kLWJyYW5kLmpzb24nKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXJsOiBwcm9wcyxcbiAgICAgIGxhbmc6IHByb3BzLmxhbmcsXG4gICAgICByZXNfZGF0YTogbXlEYXRhLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICogUmVuZGVycyBcIlRleHRcIiFcbiAgKiBAcmV0dXJuIEpTWFxuICAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG4gICAgICAgIC5pbmZvLWJveCB7IFxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOCU7XG4gICAgICAgICAgcGFkZGluZzogMTA4cHggMCAwIDA7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIFxuXG4gICAgICAgICAgJiBoMiB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBoMyB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncHVibGljbyc7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDAgMCAwO1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBwe1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTZweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL3doaXRlLXBsYXktYnRuLnN2Zykgbm8tcmVwZWF0IDIycHggMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzBweCAxNnB4IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC52aW1lbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aW1lby1pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmltZW8tbG9hZGluZyB7IFxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aW1lby1wbGF5LWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL3ZpZGVvLXBsYXktYnV0dG9uL3ZpZGVvLXBsYXktYnV0dG9uLXcucG5nKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB0b3A6IDc5JTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmltZW8tZW1iZWQgaWZyYW1lIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpbWVvLXBsYXktYnV0dG9uIHN2ZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIgLnZpZGVvLXdyYXBwZXIgdmlkZW8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAgICAgICAuaW5mby1ib3gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA2JTtcbiAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VmltZW8gdmlkZW9JZD17MjI1ODM4NzgyfSBhdXRvcGxheT17ZmFsc2V9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxuICAgICAgICAgICAgPGhncm91cD5cbiAgICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnJlc19kYXRhLkFNU05ZQ308L2gyPlxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUucmVzX2RhdGEuVGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDwvaGdyb3VwPlxuICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUucmVzX2RhdGEuRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlaGluZEJyYW5kO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ob21lL0JlaGluZEJyYW5kLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21tb24tcm93IHRoZW1lLWJnIHBob3Rvc2x1cnBiZ1wiPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAncHVibGljbyBpdGFsaWMnO1xuICAgICAgZm9udC1wYXRoOiAnL3N0YXRpYy9mb250cy9wdWJsaWNvL1B1YmxpY28tSXRhbGljLVdlYmZvbnQnO1xuICAgIH1cbiAgICAucGhvdG9zbHVycGJnIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOjYwcHg7XG4gICAgICAmIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9yZ2lhLFRpbWVzLCBUaW1lcyBOZXcgUm9tYW4sc2Fucy1zZXJpZic7XG4gICAgICAgIHBhZGRpbmc6MjhweCAwIDI4cHggMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6MjFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NyU7XG4gICAgICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIHdpZHRoOiBhdXRvOyAgXG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucGhvdG9zbHVycC1pbWctd3JhcCB7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICAuaW1nLWJveCB7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgd2lkdGg6MjUlO1xuICAgICAgJiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAgIC5pbWctYm94IHtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgfVxuICAgICAgLmltZy1ib3guZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICBgfTwvc3R5bGU+XG4gICAgPGgzPkhvZSBkcmFhZyBqaWogamUgUm9zZWZpZWxkPzwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NsdXJwLWltZy13cmFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdGVtcF9pbWFnZXMvcGhvdG8tc2x1cnAtMS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdGVtcF9pbWFnZXMvcGhvdG8tc2x1cnAtMi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3ggZGVza3RvcFwiPlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy90ZW1wX2ltYWdlcy9waG90by1zbHVycC0zLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJveCBkZXNrdG9wXCI+XG4gICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3RlbXBfaW1hZ2VzL3Bob3RvLXNsdXJwLTIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ob21lL1Bob3RvU2x1cnBTZWN0aW9uLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUvbGliL21lbnVzL3B1c2gnO1xuaW1wb3J0IHsgZGVjb3JhdG9yIGFzIHJlZHV4QnVyZ2VyTWVudSB9IGZyb20gJ3JlZHV4LWJ1cmdlci1tZW51JztcblxuaW1wb3J0IENhcnRJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJ0LWFycm93LWRvd24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbmZpZy9yb3V0ZXMnO1xuaW1wb3J0IENvbGxhcHNpYmxlIGZyb20gJ3JlYWN0LWNvbGxhcHNpYmxlJztcblxuY29uc3QgQ29tcG9uZW50ID0gKHsgbGFuZyB9KSA9PiAoXG4gIDxNZW51IHBhZ2VXcmFwSWQ9eydwYWdlLXdyYXAnfSBvdXRlckNvbnRhaW5lcklkPXsnX19uZXh0J30gY3VzdG9tQnVyZ2VySWNvbj17PGRpdiAvPn0+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNsZGViYXItbG9naW4tbWFpbiB7XG4gICAgICAgIHdpZHRoOiA5OS4zJTtcbiAgICAgICAgaGVpZ2h0OjQxcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZjNmM2Y7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbiwgLmNhcnQge1xuICAgICAgICBsb3N0LWNvbHVtbjogMS8yO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjM2YzZjNmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzozcHg7XG5cblxuICAgICAgICAmIGEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAmIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmZseXBhbmVscy10cmVlbWVudSA6Z2xvYmFsKGEpIHtcbiAgICAgICAgcGFkZGluZzogMThweCA4cHggNnB4IDMycHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7dHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwdWJsaWNvJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5mbHlwYW5lbHMtdHJlZW1lbnV7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5tb2JpbGUtc3VibWVudS1tYWluIC5Db2xsYXBzaWJsZSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1zdWJtZW51LW1haW4gLkNvbGxhcHNpYmxlX190cmlnZ2VyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDhweCA2cHggMjBweDtcbiAgICAgICAgbWFyZ2luOiAwIDUlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ3B1YmxpY28nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1zdWJtZW51LW1haW4gLkNvbGxhcHNpYmxlX190cmlnZ2VyLmlzLW9wZW46YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZDp1cmwoL3N0YXRpYy9pbWFnZXMvbW9iaWxlLW1lbnUtdXAtYXJyb3cuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1zdWJtZW51LW1haW4gLkNvbGxhcHNpYmxlX190cmlnZ2VyLmlzLWNsb3NlZDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kOnVybCgvc3RhdGljL2ltYWdlcy9tb2JpbGUtbWVudS1kb3duLWFycm93LnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5tb2JpbGUtc3VibWVudS1tYWluIC5jb2xsYXBzYWJsZS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICM1YTU4NTk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgICAgICAgJiAubW9iaWxlLXN1Ym1lbnUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICAgICYgbGkge1xuICAgICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweCA2cHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xkZWJhci1sb2dpbi1tYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+bG9naW48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgPENhcnRJY29uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiMTZweFwiIC8+PHNwYW4+MDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8bmF2IGNsYXNzTmFtZT1cImZseXBhbmVscy10cmVlbWVudVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXNjaGlsZHJlblwiPlxuICAgICAgICAgIDxkaXY+PExpbmsgcm91dGU9XCJ3YXRjaGVzXCIgcGFyYW1zPXt7IGxhbmcgfX0+PGE+V2F0Y2hlczwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoYXNjaGlsZHJlblwiPlxuICAgICAgICAgIDxkaXY+PExpbmsgcm91dGU9XCJzdHJhcHNcIiBwYXJhbXM9e3sgbGFuZyB9fT48YT5TdHJhcHM8L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGFzY2hpbGRyZW5cIj5cbiAgICAgICAgICA8ZGl2PjxMaW5rIHJvdXRlPVwiamV3ZWxyeVwiIHBhcmFtcz17eyBsYW5nIH19PjxhPkpld2Vscnk8L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGFzY2hpbGRyZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1zdWJtZW51LW1haW5cIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZSB0cmlnZ2VyPVwiV29ybGQgT2YgUm9zZWZpZWxkXCIgdHJhbnNpdGlvblRpbWU9ezE2MH0gZWFzaW5nPVwiZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzYWJsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJkb3dudG93bi1jaGljXCIgcGFyYW1zPXt7IGxhbmcgfX0+RG93bnRvd24gQ2hpYzwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwidXBwZXItZWFzdC1zaWRlXCIgcGFyYW1zPXt7IGxhbmcgfX0+VXBwZXIgRWFzdCBTaWRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJ3ZXN0LXZpbGxhZ2VcIiBwYXJhbXM9e3sgbGFuZyB9fT5XZXN0IFZpbGxhZ2U8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cImNhbXBhaWduXCIgcGFyYW1zPXt7IGxhbmcgfX0+TGF0ZXN0IENhbXBhaWduPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCIxNS1taW51dGVzLXdpdGgtc3RlcGhhbmllXCIgcGFyYW1zPXt7IGxhbmcgfX0+MTUgTWludXRlcyBXaXRoPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJteXJvc2VmaWVsZG1vbWVudFwiIHBhcmFtcz17eyBsYW5nIH19PiNNeXJvc2VmaWVsZG1vbWVudDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwib3VyLXN0b3J5XCIgcGFyYW1zPXt7IGxhbmcgfX0+T3VyIHN0b3J5PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGFzY2hpbGRyZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1zdWJtZW51LW1haW5cIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZSB0cmlnZ2VyPVwiU2VydmljZVwiIHRyYW5zaXRpb25UaW1lPXsxNjB9IGVhc2luZz1cImVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2FibGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwic3VwcG9ydFwiIHBhcmFtcz17eyBsYW5nIH19PlN1cHBvcnQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiXCIgPkNvbnRhY3Q8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cInN0b3Jlc1wiIHBhcmFtcz17eyBsYW5nIH19PlN0b3JlczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gIDwvTWVudT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4QnVyZ2VyTWVudShDb21wb25lbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvQnVyZ2VyTWVudS5qcyIsImltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSGVhZCA9ICh7IHRpdGxlIH0pID0+IChcbiAgPE5leHRIZWFkPlxuICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICA8L05leHRIZWFkPlxuKTtcblxuSGVhZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSGVhZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9IZWFkLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgaW1hZ2UsIGNoaWxkcmVuLCBsYW5nIH0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBsZXQgc3R5bGVzID0ge307XG4gIGxldCBoaWRlY2xhc3MgPSAnJztcbiAgY29uc3QganNEYXRhID0gcmVxdWlyZSgnLi4vLi4vbG9jYWxlLycrbGFuZysnL2hvbWUtbWFpbi1iYW5uZXIuanNvbicpO1xuICBcbiAgaWYgKGltYWdlKSB7XG4gICAgY2xhc3NOYW1lID0gJ2hhc19pbWFnZSc7XG4gICAgc3R5bGVzID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1hZ2V9JylgIH07XG4gIH0gZWxzZSB7XG4gICAgaGlkZWNsYXNzID0gJ2hpZGUtYmFubmVyLXRleHQnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlc30+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmhpZGUtYmFubmVyLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICA1MCUgNTAlO1xuICAgICAgICAgIGhlaWdodDogNjY3cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXItaW5mby1ib3gge1xuICAgICAgICAgIGxvc3QtY29sdW1uOiA0LzEyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxNyU7XG5cbiAgICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwdWJsaWNvJztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgbG9zdC1jb2x1bW46IDEwLzEyO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTgwJTsgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hpZGVjbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWluZm8tYm94XCI+XG4gICAgICAgICAgPGhncm91cD5cbiAgICAgICAgICAgIDxoMj57anNEYXRhLkludHJvZHVjaW5nVGV4dH08L2gyPlxuICAgICAgICAgICAgPGgzPntqc0RhdGEuVGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2hncm91cD5cbiAgICAgICAgICA8cD57anNEYXRhLkRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwid2hpdGUtYm9yZGVyLWJ1dHRvblwiPntqc0RhdGEuU2hvcE5vd0J0bn08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0ltYWdlV3JhcHBlci5qcyIsImltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmdsZURvd24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2FuZ2xlLWRvd24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9OYXZpZ2F0aW9uTGluayc7XG5pbXBvcnQgV2Vic2l0ZVN0b3Jlc0RhdGEgZnJvbSAnLi4vZHVtbXlfZGF0YS93ZWJzaXRlX3N0b3Jlcy5qc29uJztcblxuY29uc3Qgb3B0aW9ucyA9IFdlYnNpdGVTdG9yZXNEYXRhO1xuXG4vKipcbiAqIEVtcHR5IFNlbGVjdCBib3hcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3Rib3ggT2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBub25lXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU9wdGlvbnMoc2VsZWN0Ym94KSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSBzZWxlY3Rib3gub3B0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIHNlbGVjdGJveC5yZW1vdmUoaSk7XG4gIH1cbn1cbi8qKlxuICogU2V0IENvdW50cnkgbGFuZ3VhZ2VcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJlZGlyZWN0IG9yIFJlZnJlc2hcbiAqL1xuZnVuY3Rpb24gc2V0Q291bnRyeUxhbmcoKSB7XG4gIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZ19jb2RlJykudmFsdWU7XG4gIGNvbnN0IGNvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vycl93ZWJfY29kZScpLmlubmVySFRNTDtcbiAgY29uc3QgY3VyclVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UobGFuZywgY29kZSk7XG4gIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oY3VyclVSTCk7XG59XG4vLyBjb25zdCBkZWZhdWx0Q09wdGlvbiA9IG9wdGlvbnNbMF07XG5jb25zdCBkcm9wRG93bk9uQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICBjb25zdCB3ZWJJZCA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgbGV0IHN0b3Jlb3B0ZGF0YSA9IFtdO1xuICBsZXQgd2ViRmxhZyA9ICcnO1xuICBsZXQgY29kZSA9ICcnO1xuICBjb25zdCBzdG9yZUREID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3JlcycpO1xuICBXZWJzaXRlU3RvcmVzRGF0YS5tYXAod3NkYXRhID0+ICgod3NkYXRhLndlYnNpdGVJZCA9PSB3ZWJJZCkgPyBzdG9yZW9wdGRhdGEgPSB3c2RhdGEuc3RvcmVzIDogJycpKTtcbiAgV2Vic2l0ZVN0b3Jlc0RhdGEubWFwKHdzZGF0YSA9PiAoKHdzZGF0YS53ZWJzaXRlSWQgPT0gd2ViSWQpID8gd2ViRmxhZyA9IHdzZGF0YS5mbGFnIDogJycpKTtcbiAgV2Vic2l0ZVN0b3Jlc0RhdGEubWFwKHdzZGF0YSA9PiAoKHdzZGF0YS53ZWJzaXRlSWQgPT0gd2ViSWQpID8gY29kZSA9IHdzZGF0YS5jb2RlIDogJycpKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeV9mbGFnX2ltZycpLnNyYyA9IHdlYkZsYWc7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5X2ZsYWdfaW1nMicpLnNyYyA9IHdlYkZsYWc7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5X2ZsYWdfbWFpbicpLnNyYyA9IHdlYkZsYWc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyX3dlYl9jb2RlJykuaW5uZXJIVE1MID0gY29kZTtcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215RHJvcGRvd24yJykudmFsdWUgPSB3ZWJfaWQ7XG4gIC8vIHZhciBzdG9yZV9kZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcmVzMicpO1xuICByZW1vdmVPcHRpb25zKHN0b3JlREQpO1xuICAvLyByZW1vdmVPcHRpb25zKHN0b3JlX2RkMik7XG4gIHN0b3Jlb3B0ZGF0YS5mb3JFYWNoKG9wdCA9PiBzdG9yZURELm9wdGlvbnMuYWRkKG5ldyBPcHRpb24ob3B0Lm5hbWUsIG9wdC5zdG9yZUlkLCBmYWxzZSkpKTtcbiAgLy8gc3RvcmVvcHRkYXRhLmZvckVhY2goKG9wdCk9PnN0b3JlX2RkMi5vcHRpb25zLmFkZChuZXcgT3B0aW9uKG9wdC5uYW1lLCBvcHQuc3RvcmVJZCxmYWxzZSkpKTtcbn07XG5jb25zdCBEcm9wZG93biA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShcbiAgICAgIFtcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgXVxuICApLFxuICAgIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWxGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgdmFsdWVGaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGxhYmVsRmllbGQ6ICdsYWJlbCcsXG4gICAgICBvbkNoYW5nZTogbnVsbCxcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0U2VsRlBybyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgfTtcbiAgfSxcbiAgZ2V0U2VsRlBybyhwcm9wcykge1xuICAgIGxldCBzZWxlY3RlZDtcbiAgICBpZiAocHJvcHMudmFsdWUgPT09IG51bGwgJiYgcHJvcHMub3B0aW9ucy5sZW5ndGggIT09IDApIHtcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMub3B0aW9uc1swXVtwcm9wcy52YWx1ZUZpZWxkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9LFxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGNoYW5nZSA9IHsgb2xkVmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWQsIG5ld1ZhbHVlOiBlLnRhcmdldC52YWx1ZSB9O1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShjaGFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBkZG9wdGlvbnMgPSBzZWxmLnByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb25bc2VsZi5wcm9wcy52YWx1ZUZpZWxkXX0gdmFsdWU9e29wdGlvbltzZWxmLnByb3BzLnZhbHVlRmllbGRdfT5cbiAgICAgICAgICB7b3B0aW9uW3NlbGYucHJvcHMubGFiZWxGaWVsZF19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdCBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwiY291bnRyeS1zZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb3JtLWNvbnRyb2x7ZmxvYXQ6bGVmdDsgaGVpZ2h0OjMwcHg7IHdpZHRoOjIwMHB4O31cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7ZGRvcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgY3VycmVudFBhdGgsIGxhbmcgfSkgPT4gKFxuICA8bmF2PlxuICAgIDx1bCBjbGFzc05hbWU9XCJkZXNrdG9wLW1lbnVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwid2F0Y2hlc1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+V2F0Y2hlczwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwic3RyYXBzXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5TdHJhcHM8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayByb3V0ZT1cImpld2VscnlcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9Pkpld2Vscnk8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLW5hdlwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCJob21lXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSBjbGFzc05hbWU9XCJob21lX2xvZ29cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LW5hdlwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWNhcnRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiY2FydFwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25hdi1jYXJ0LWJsYWNrLnBuZ1wiIGFsdD1cIlwiIC8+PHNwYW4+MDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbG9naW5cIj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cImxvZ2luXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5Mb2dpbjwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlxuICAgICAgICAgICAgPGltZyBpZD1cImNvdW50cnlfZmxhZ19tYWluXCIgd2lkdGg9XCIxMlwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25sLnN2Z1wiIGFsdD1cIlwiIC8+Jm5ic3A7PHNwYW4gaWQ9XCJjdXJyX3dlYl9jb2RlXCI+Tkw8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItc3ViLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmYtbW9kLWxhbmd1YWdlQmFyX19pbm5lcldyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZi1tb2QtbG9jYXRpb25TZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRyeS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQ291bnRyeSBGbGFnXCIgaWQ9XCJjb3VudHJ5X2ZsYWdfaW1nXCIgc3JjPVwiaHR0cHM6Ly9kZXYucm9zZWZpZWxkd2F0Y2hlcy5jb20vc2tpbi9mcm9udGVuZC93YXRjaGVzL2RlZmF1bHQvaW1hZ2VzL2ZsYWcvd3cucG5nXCIgd2lkdGg9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZi1tb2QtbG9jYXRpb25TZWxlY3Rvcl9fYXJyb3dcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpZD1cIm15RHJvcGRvd24zXCIgb3B0aW9ucz17b3B0aW9uc30gdmFsdWU9XCJiXCIgbGFiZWxGaWVsZD1cIm5hbWVcIiB2YWx1ZUZpZWxkPVwid2Vic2l0ZUlkXCIgb25DaGFuZ2U9e2Ryb3BEb3duT25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJmLW1vZC1sYW5ndWFnZUJhcl9fcmYtbW9kLWxhbmd1YWdlU2VsZWN0b3IgcmYtbW9kLWxhbmd1YWdlU2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImxhbmd1YWdlLXNlbGVjdFwiIG5hbWU9XCJzdG9yZXNcIiBpZD1cInN0b3Jlc1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJsYW5nX2NvZGVcIiBpZD1cImxhbmdfY29kZVwiIHZhbHVlPXtsYW5nfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlbGVjdC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2V0Q291bnRyeUxhbmd9PjxhPkNvbnRpbnVlPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9ID5TZXJ2aWNlIDxBbmdsZURvd24gY2xhc3NOYW1lPVwiYW5nbGVfZG93blwiIC8+PC9MaW5rPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwic3VwcG9ydFwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+U3VwcG9ydDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCJcIiBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PkNvbnRhY3Q8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cInN0b3Jlc1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+U3RvcmVzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJvc2VmaWVsZC1tZW51XCI+XG4gICAgICAgICAgPExpbmsgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5Xb3JsZCBPZiBSb3NlZmllbGQgPEFuZ2xlRG93biBjbGFzc05hbWU9XCJhbmdsZV9kb3duXCIgLz48L0xpbms+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJkb3dudG93bi1jaGljXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5Eb3dudG93biBDaGljPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJ1cHBlci1lYXN0LXNpZGVcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlVwcGVyIEVhc3QgU2lkZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwid2VzdC12aWxsYWdlXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5XZXN0IFZpbGxhZ2U8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cImNhbXBhaWduXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5MYXRlc3QgQ2FtcGFpZ248L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIjE1LW1pbnV0ZXMtd2l0aC1zdGVwaGFuaWVcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PjE1IE1pbnV0ZXMgV2l0aDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwibXlyb3NlZmllbGRtb21lbnRcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PiNNeXJvc2VmaWVsZG1vbWVudDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwib3VyLXN0b3J5XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5PdXIgc3Rvcnk8L0xpbms+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9kaXY+XG4gICAgPC91bD5cbiAgICA8dWwgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnVcIj5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgcm91dGU9XCJob21lXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSBjbGFzc05hbWU9XCJtb2JpbGVfbG9nb1wiPkhvbWU8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1jYXJ0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJjYXJ0XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaWNvblwiPjxzcGFuPjA8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG4pO1xuXG5OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5OYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVudFBhdGg6ICcvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9OYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JvdXRlcyc7XG5cbmNvbnN0IE5hdmlnYXRpb25MaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYsIGN1cnJlbnRQYXRoLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICBpZiAoY2xhc3NOYW1lKSBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHsuLi5wcm9wc30+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0+e2NoaWxkcmVufTwvYT48L0xpbms+XG4gICk7XG59O1xuXG5OYXZpZ2F0aW9uTGluay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjdXJyZW50UGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5ub2RlLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkxpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9OYXZpZ2F0aW9uTGluay5qcyIsImltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvcm91dGVzJztcbmV4cG9ydCBkZWZhdWx0ICh7bGFuZ30pID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG4gICAgPHA+JmNvcHk7IHsobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKX0gUk9TRUZJRUxEIEJWLiBBbGxlIHJlY2h0ZW4gdm9vcmJlaG91ZGVuLiZuYnNwOzwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1saW5rc1wiPlxuICAgICAgPExpbmsgcm91dGU9XCJwcml2YWN5XCIgcGFyYW1zPXt7IGxhbmcgfX0+XG4gICAgICBcdDxhPlByaXZhY3liZWxlaWQ8L2E+XG4gICAgICA8L0xpbms+Jm5ic3A7fCZuYnNwOyBcbiAgICAgIDxMaW5rIHJvdXRlPVwidGVybXNcIiBwYXJhbXM9e3sgbGFuZyB9fT5cbiAgICAgIFx0IDxhPkFsZ2VtZW5lIHZvb3J3YWFyZGVuPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0NvcHlyaWdodEluZm8uanMiLCJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvcm91dGVzJztcblxuY29uc3QgRm9vdGVyTmF2aWdhdGlvbkxpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiwgY3VycmVudFBhdGgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gW107XG4gIGlmIChjbGFzc05hbWUpIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gey4uLnByb3BzfT48YSBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfT57Y2hpbGRyZW59PC9hPjwvTGluaz5cbiAgKTtcbn07XG5cbkZvb3Rlck5hdmlnYXRpb25MaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLm5vZGUsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJOYXZpZ2F0aW9uTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Gb290ZXJOYXZMaW5rcy5qcyIsImltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9Gb290ZXJOYXZMaW5rcyc7XG5cblxuY29uc3QgRm9vdGVyTmF2aWdhdGlvbiA9ICh7IGN1cnJlbnRQYXRoLCBsYW5nIH0pID0+IHtcbiAgY29uc3QgbGFibGVEYXRhID0gcmVxdWlyZSgnLi4vLi4vLi4vbG9jYWxlLycrbGFuZysnL3RyYW5zbGF0aW9uX2xhYmVsLmpzb24nKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXYtbGlua3NcIj5cbiAgICAgIDxoMj57bGFibGVEYXRhLk5FRURfSEVMUH08L2gyPlxuICAgICAgPExpbmsgcm91dGU9XCJzdXBwb3J0XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT57bGFibGVEYXRhLkN1c3RvbWVyU3VwcG9ydH08L0xpbms+XG4gICAgICA8TGluayByb3V0ZT1cInNoaXBwaW5nLXJldHVybnNcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PntsYWJsZURhdGEuU2hpcHBpbmdSZXR1cm5zfTwvTGluaz5cbiAgICAgIDxMaW5rIHJvdXRlPVwic3RvcmVzXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT57bGFibGVEYXRhLlN0b3Jlc308L0xpbms+XG4gICAgICA8TGluayByb3V0ZT1cImxvZ2luXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSA+e2xhYmxlRGF0YS5Mb2dJbl9TaWduVXB9PC9MaW5rPlxuICAgICAgPExpbmsgcm91dGU9XCJjYXJlZXJcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PntsYWJsZURhdGEuQ2FyZWVyfTwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZvb3Rlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICBjdXJyZW50UGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkZvb3Rlck5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBjdXJyZW50UGF0aDogJy8nLFxuICBsYW5nOiAnd3cnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTmF2aWdhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Gb290ZXJOYXZpZ2F0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zaWdudXBcIj5cbiAgICA8aDI+U2lnbiBVcDwvaDI+XG4gICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLXNpZ251cC10eHRcIj5TaWduIHVwIGZvciBvdXIgbmV3c2xldHRlciBhbmQgYmUgdGhlIGZpcnN0IHRvIGtub3cuPC9wPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmcm0tbmV3c2xldHRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItZW1haWxiZ1wiPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9vdGVyLWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvb3Rlci1lbWFpbGFyb3dcIiB0eXBlPVwiYnV0dG9uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL05ld3NsZXR0ZXJFbWFpbC5qcyIsImltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2ZhY2Vib29rJztcbmltcG9ydCBQaW50ZXJlc3RJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9waW50ZXJlc3QtcCc7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9pbnN0YWdyYW0nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Sb3NlZmllbGR3YXRjaGVzXCI+PEZhY2Vib29rSWNvbiAvPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9yb3NlZmllbGR3YXRjaC9cIj48UGludGVyZXN0SWNvbiAvPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Jvc2VmaWVsZHdhdGNoZXMvXCI+PEluc3RhZ3JhbSAvPjwvYT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9Tb2NpYWwuanMiLCJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0aWNreUNvbnRhaW5lciwgU3RpY2t5IH0gZnJvbSAncmVhY3Qtc3RpY2t5JztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCc7XG5pbXBvcnQgTmV3c2xldHRlckVtYWlsIGZyb20gJy4vZm9vdGVyL05ld3NsZXR0ZXJFbWFpbCc7XG5pbXBvcnQgRm9vdGVyTmF2aWdhdGlvbiBmcm9tICcuL2Zvb3Rlci9Gb290ZXJOYXZpZ2F0aW9uJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9mb290ZXIvU29jaWFsJztcbmltcG9ydCBDb3B5cmlnaHRJbmZvIGZyb20gJy4vZm9vdGVyL0NvcHlyaWdodEluZm8nO1xuXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi8uLi9nbG9iYWxfc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tICcuL0J1cmdlck1lbnUnO1xuaW1wb3J0IEltYWdlV3JhcHBlciBmcm9tICcuL0ltYWdlV3JhcHBlcic7XG5cblxuaW1wb3J0ICcuLi8uLi9saWIvcHJvZ3Jlc3NiYXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGN1cnJlbnRQYXRoLCB0b3BCYW5uZXJJbWFnZSwgbGFuZyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPFN0aWNreUNvbnRhaW5lcj5cbiAgICAgIDxzdHlsZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fVxuICAgICAgLz5cblxuICAgICAgPEhlYWQgdGl0bGU9e3RpdGxlfSAvPlxuXG4gICAgICA8QnVyZ2VyTWVudSBsYW5nPXtsYW5nfSAvPlxuXG4gICAgICA8ZGl2IGlkPVwicGFnZS13cmFwXCI+XG4gICAgICAgIDxJbWFnZVdyYXBwZXIgaW1hZ2U9e3RvcEJhbm5lckltYWdlfSBsYW5nPXtsYW5nfT5cbiAgICAgICAgICA8U3RpY2t5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAoeyBzdHlsZSwgZGlzdGFuY2VGcm9tVG9wIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tVG9wIDwgLTEwMCkgY2xhc3NOYW1lcy5wdXNoKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIGlmICh0b3BCYW5uZXJJbWFnZSkgY2xhc3NOYW1lcy5wdXNoKCdoYXNfYmFubmVyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSBsYW5nPXtsYW5nfSAvPlxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU3RpY2t5PlxuICAgICAgICA8L0ltYWdlV3JhcHBlcj5cblxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPEZvb3Rlck5hdmlnYXRpb24gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSBsYW5nPXtsYW5nfSAvPlxuICAgICAgICAgIDxOZXdzbGV0dGVyRW1haWwgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1jb3B5cmlnaHQtbWFpblwiPlxuICAgICAgICAgICAgPFNvY2lhbCAvPlxuICAgICAgICAgICAgPENvcHlyaWdodEluZm8gbGFuZz17bGFuZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0aWNreUNvbnRhaW5lcj5cbiAgPC9kaXY+XG4pO1xuXG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvcEJhbm5lckltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdXJyZW50UGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ0x1eGUgZGFtZXNob3Jsb2dlcyDigJMgT2ZmaWNpw6tsZSBPbmxpbmUgU2hvcCB2YW4gUk9TRUZJRUxEIFdhdGNoZXMnLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgdG9wQmFubmVySW1hZ2U6IG51bGwsXG4gIGxhbmc6ICd3dycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBwZXJzaXN0IGZyb20gJy4vcGVyc2lzdCdcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgQXBvbGxvIGNvbm5lY3Rpb25cbiAqIEByZXR1cm5zIHtBcG9sbG9DbGllbnR9IEFwb2xsb0NsaWVudCBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBpbml0QXBvbGxvKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsXG4gICAgZGF0YUlkRnJvbU9iamVjdDogcmVzdWx0ID0+IHJlc3VsdC5pZCB8fCBudWxsLFxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dyYXBocWwnLFxuICAgICAgb3B0czoge1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgLy8gUGFzcyBoZWFkZXJzIGhlcmUgaWYgeW91ciBncmFwaHFsIHNlcnZlciByZXF1aXJlcyB0aGVtXG4gICAgICB9LFxuICAgIH0pLnVzZShbe1xuICAgIGFwcGx5TWlkZGxld2FyZShyZXEsIG5leHQpIHtcbiAgICAgIGlmICghcmVxLm9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICByZXEub3B0aW9ucy5oZWFkZXJzID0ge30gIC8vIENyZWF0ZSB0aGUgaGVhZGVyIG9iamVjdCBpZiBuZWVkZWQuXG4gICAgICB9XG5cbiAgICAgIC8vIGdldCB0aGUgYXV0aGVudGljYXRpb24gdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGl0IGV4aXN0c1xuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBwZXJzaXN0LndpbGxHZXRTZXNzaW9uVG9rZW4oKVxuICAgICAgICByZXEub3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogbnVsbFxuICAgICAgICBuZXh0KClcbiAgICAgIH0pKClcbiAgICB9XG4gIH1dKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChoZWFkZXJzLCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBpbml0QXBvbGxvKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBpbml0QXBvbGxvKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGFwb2xsb0NsaWVudDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdEFwb2xsby5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGdldFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBjcmVhdGVNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZSc7XG5cbmxldCByZWR1eFN0b3JlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgKGNsaWVudCwgaW5pdGlhbFN0YXRlKSA9PiB7XG4gIGxldCBzdG9yZTtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIgfHwgIXJlZHV4U3RvcmUpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gY3JlYXRlTWlkZGxld2FyZShjbGllbnQubWlkZGxld2FyZSgpKTtcbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKGdldFJlZHVjZXIoY2xpZW50KSwgaW5pdGlhbFN0YXRlLCBtaWRkbGV3YXJlKTtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbiAgICByZWR1eFN0b3JlID0gc3RvcmU7XG4gIH1cbiAgcmV0dXJuIHJlZHV4U3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luaXRSZWR1eC5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuLyoqXG4gKiBSZWR1YyBtaWRkbGV3YXJlXG4gKiBAcGFyYW0ge2ludH0gY2xpZW50TWlkZGxld2FyZSBUaGUgZmlyc3QgbnVtYmVyLlxuICogQHJldHVybnMge2ludH0gY29tcG9zZWQgb2JqZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlKGNsaWVudE1pZGRsZXdhcmUpIHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShjbGllbnRNaWRkbGV3YXJlKTtcbiAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24pIHtcbiAgICByZXR1cm4gY29tcG9zZShtaWRkbGV3YXJlLCB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbiAgcmV0dXJuIG1pZGRsZXdhcmU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbWlkZGxld2FyZS5qcyIsImltcG9ydCAqIGFzIGxvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuY2xhc3MgcGVyc2lzdCB7XG4gIHN0YXRpYyBnZXQgU0VTU0lPTl9UT0tFTl9LRVkoKSB7IHJldHVybiAnc2Vzc2lvblRva2VuJyB9O1xuICBzdGF0aWMgZ2V0IEFDQ0VTU19UT0tFTl9LRVkoKSB7IHJldHVybiAnYWNjZXNzVG9rZW4nIH07XG5cbiAgc3RhdGljIGFzeW5jIHdpbGxHZXRTZXNzaW9uVG9rZW4oKSB7XG4gICAgcmV0dXJuIGxvY2FsRm9yYWdlLmdldEl0ZW0ocGVyc2lzdC5TRVNTSU9OX1RPS0VOX0tFWSkuY2F0Y2goZXJyID0+IGVycik7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgd2lsbFNldFNlc3Npb25Ub2tlbih2YWx1ZSkge1xuICAgIHJldHVybiBsb2NhbEZvcmFnZS5zZXRJdGVtKHBlcnNpc3QuU0VTU0lPTl9UT0tFTl9LRVksIHZhbHVlKS5jYXRjaChlcnIgPT4gZXJyKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyB3aWxsUmVtb3ZlU2Vzc2lvblRva2VuKCkge1xuICAgIHJldHVybiBsb2NhbEZvcmFnZS5yZW1vdmVJdGVtKHBlcnNpc3QuU0VTU0lPTl9UT0tFTl9LRVkpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHdpbGxHZXRBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gbG9jYWxGb3JhZ2UuZ2V0SXRlbShwZXJzaXN0LkFDQ0VTU19UT0tFTl9LRVkpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHdpbGxTZXRBY2Nlc3NUb2tlbih2YWx1ZSkge1xuICAgIHJldHVybiBsb2NhbEZvcmFnZS5zZXRJdGVtKHBlcnNpc3QuQUNDRVNTX1RPS0VOX0tFWSwgdmFsdWUpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHdpbGxSZW1vdmVBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gbG9jYWxGb3JhZ2UucmVtb3ZlSXRlbShwZXJzaXN0LkFDQ0VTU19UT0tFTl9LRVkpLmNhdGNoKGVyciA9PiBlcnIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGVyc2lzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wZXJzaXN0LmpzIiwiaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcHJvZ3Jlc3NiYXIuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGJ1cmdlck1lbnUgfSBmcm9tICdyZWR1eC1idXJnZXItbWVudSc7XG5cbi8qKlxuICogQ29tYmluZXMgdGhlIHJlZHVjZXJzIGZvciB0aGUgYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gY2xpZW50IFRoZSBmaXJzdCBudW1iZXIuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcmVkdWNlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZWR1Y2VyKGNsaWVudCkge1xuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICBidXJnZXJNZW51LFxuICAgIGFwb2xsbzogY2xpZW50LnJlZHVjZXIoKSxcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcmVkdWNlci5qcyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vaW5pdEFwb2xsbyc7XG5pbXBvcnQgaW5pdFJlZHV4IGZyb20gJy4vaW5pdFJlZHV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4gKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzIDoge307XG4gICAgICBjb25zdCBjbGllbnQgPSBpbml0QXBvbGxvKGhlYWRlcnMpO1xuICAgICAgY29uc3QgcmVkdXggPSBpbml0UmVkdXgoY2xpZW50LCBjbGllbnQuaW5pdGlhbFN0YXRlKTtcblxuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHVybDogeyBxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lIH0sXG4gICAgICAgIC4uLmF3YWl0IChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pLFxuICAgICAgfTtcblxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBwID0gKFxuICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0gc3RvcmU9e3JlZHV4fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShhcHApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGF0ZSA9IHJlZHV4LmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGFwb2xsbzoge1xuICAgICAgICAgICAgZGF0YTogY2xpZW50LmdldEluaXRpYWxTdGF0ZSgpLmRhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmNsaWVudCA9IGluaXRBcG9sbG8odGhpcy5wcm9wcy5oZWFkZXJzLCB0aGlzLnByb3BzLmluaXRpYWxTdGF0ZSk7XG4gICAgICB0aGlzLnN0b3JlID0gaW5pdFJlZHV4KHRoaXMuY2xpZW50LCB0aGlzLnByb3BzLmluaXRpYWxTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5jbGllbnR9IHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXQvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjUwLFxuXHRcIi4vYXRfZW4vaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjU0LFxuXHRcIi4vYXUvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjU4LFxuXHRcIi4vYmUvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjYyLFxuXHRcIi4vYmVfZW4vaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjY2LFxuXHRcIi4vYmVfZnIvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjcwLFxuXHRcIi4vY3ovaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjc0LFxuXHRcIi4vY3pfZW4vaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjc4LFxuXHRcIi4vZGUvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjgyLFxuXHRcIi4vZW5fdXMvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjg2LFxuXHRcIi4vZnIvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjkwLFxuXHRcIi4vanAvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjk0LFxuXHRcIi4vbmwvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNjk4LFxuXHRcIi4vbmxfZW4vaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNzAyLFxuXHRcIi4vd3cvaG9tZS0xNW1pbi13aXRoLmpzb25cIjogNzA2XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzk5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlIF5cXC5cXC8uKlxcL2hvbWVcXC0xNW1pblxcLXdpdGhcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gNzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBtYXAgPSB7XG5cdFwiLi9hdC9ob21lLWJlaGluZC1icmFuZC5qc29uXCI6IDY1MSxcblx0XCIuL2F0X2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cIjogNjU1LFxuXHRcIi4vYXUvaG9tZS1iZWhpbmQtYnJhbmQuanNvblwiOiA2NTksXG5cdFwiLi9iZS9ob21lLWJlaGluZC1icmFuZC5qc29uXCI6IDY2Myxcblx0XCIuL2JlX2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cIjogNjY3LFxuXHRcIi4vYmVfZnIvaG9tZS1iZWhpbmQtYnJhbmQuanNvblwiOiA2NzEsXG5cdFwiLi9jei9ob21lLWJlaGluZC1icmFuZC5qc29uXCI6IDY3NSxcblx0XCIuL2N6X2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cIjogNjc5LFxuXHRcIi4vZGUvaG9tZS1iZWhpbmQtYnJhbmQuanNvblwiOiA2ODMsXG5cdFwiLi9lbl91cy9ob21lLWJlaGluZC1icmFuZC5qc29uXCI6IDY4Nyxcblx0XCIuL2ZyL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cIjogNjkxLFxuXHRcIi4vanAvaG9tZS1iZWhpbmQtYnJhbmQuanNvblwiOiA2OTUsXG5cdFwiLi9ubC9ob21lLWJlaGluZC1icmFuZC5qc29uXCI6IDY5OSxcblx0XCIuL25sX2VuL2hvbWUtYmVoaW5kLWJyYW5kLmpzb25cIjogNzAzLFxuXHRcIi4vd3cvaG9tZS1iZWhpbmQtYnJhbmQuanNvblwiOiA3MDdcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA4MDA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2NhbGUgXlxcLlxcLy4qXFwvaG9tZVxcLWJlaGluZFxcLWJyYW5kXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXQvaG9tZS1tYWluLWJhbm5lci5qc29uXCI6IDY1Mixcblx0XCIuL2F0X2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblwiOiA2NTYsXG5cdFwiLi9hdS9ob21lLW1haW4tYmFubmVyLmpzb25cIjogNjYwLFxuXHRcIi4vYmUvaG9tZS1tYWluLWJhbm5lci5qc29uXCI6IDY2NCxcblx0XCIuL2JlX2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblwiOiA2NjgsXG5cdFwiLi9iZV9mci9ob21lLW1haW4tYmFubmVyLmpzb25cIjogNjcyLFxuXHRcIi4vY3ovaG9tZS1tYWluLWJhbm5lci5qc29uXCI6IDY3Nixcblx0XCIuL2N6X2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblwiOiA2ODAsXG5cdFwiLi9kZS9ob21lLW1haW4tYmFubmVyLmpzb25cIjogNjg0LFxuXHRcIi4vZW5fdXMvaG9tZS1tYWluLWJhbm5lci5qc29uXCI6IDY4OCxcblx0XCIuL2ZyL2hvbWUtbWFpbi1iYW5uZXIuanNvblwiOiA2OTIsXG5cdFwiLi9qcC9ob21lLW1haW4tYmFubmVyLmpzb25cIjogNjk2LFxuXHRcIi4vbmwvaG9tZS1tYWluLWJhbm5lci5qc29uXCI6IDcwMCxcblx0XCIuL25sX2VuL2hvbWUtbWFpbi1iYW5uZXIuanNvblwiOiA3MDQsXG5cdFwiLi93dy9ob21lLW1haW4tYmFubmVyLmpzb25cIjogNzA4XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gODAxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlIF5cXC5cXC8uKlxcL2hvbWVcXC1tYWluXFwtYmFubmVyXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXQvdHJhbnNsYXRpb25fbGFiZWwuanNvblwiOiA2NTMsXG5cdFwiLi9hdF9lbi90cmFuc2xhdGlvbl9sYWJlbC5qc29uXCI6IDY1Nyxcblx0XCIuL2F1L3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cIjogNjYxLFxuXHRcIi4vYmUvdHJhbnNsYXRpb25fbGFiZWwuanNvblwiOiA2NjUsXG5cdFwiLi9iZV9lbi90cmFuc2xhdGlvbl9sYWJlbC5qc29uXCI6IDY2OSxcblx0XCIuL2JlX2ZyL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cIjogNjczLFxuXHRcIi4vY3ovdHJhbnNsYXRpb25fbGFiZWwuanNvblwiOiA2NzcsXG5cdFwiLi9jel9lbi90cmFuc2xhdGlvbl9sYWJlbC5qc29uXCI6IDY4MSxcblx0XCIuL2RlL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cIjogNjg1LFxuXHRcIi4vZW5fdXMvdHJhbnNsYXRpb25fbGFiZWwuanNvblwiOiA2ODksXG5cdFwiLi9mci90cmFuc2xhdGlvbl9sYWJlbC5qc29uXCI6IDY5Myxcblx0XCIuL2pwL3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cIjogNjk3LFxuXHRcIi4vbmwvdHJhbnNsYXRpb25fbGFiZWwuanNvblwiOiA3MDEsXG5cdFwiLi9ubF9lbi90cmFuc2xhdGlvbl9sYWJlbC5qc29uXCI6IDcwNSxcblx0XCIuL3d3L3RyYW5zbGF0aW9uX2xhYmVsLmpzb25cIjogNzA5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gODAyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9jYWxlIF5cXC5cXC8uKlxcL3RyYW5zbGF0aW9uX2xhYmVsXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDgwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        