import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';

/**
 * Combines the reducers for the app
 * @param {object} client The first number.
 * @returns {object} The reducer
 */
export default function getReducer(client) {
  return combineReducers({
    burgerMenu,
    apollo: client.reducer(),
  });
}
