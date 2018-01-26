import { applyMiddleware, compose } from 'redux';

/**
 * Reduc middleware
 * @param {int} clientMiddleware The first number.
 * @returns {int} composed object.
 */
export default function createMiddleware(clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware);
  if (process.browser && window.devToolsExtension) {
    return compose(middleware, window.devToolsExtension());
  }
  return middleware;
}
