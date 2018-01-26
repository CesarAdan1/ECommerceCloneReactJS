'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReducer;

var _redux = require('redux');

var _reduxBurgerMenu = require('redux-burger-menu');

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