'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _middleware = require('./middleware');

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