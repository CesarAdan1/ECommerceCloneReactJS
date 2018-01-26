'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _localforage = require('localforage');

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