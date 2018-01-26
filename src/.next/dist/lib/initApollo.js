'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactApollo = require('react-apollo');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _persist = require('./persist');

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