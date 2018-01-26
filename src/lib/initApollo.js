import { ApolloClient, createNetworkInterface } from 'react-apollo';
import fetch from 'isomorphic-fetch';

import persist from './persist'

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

/**
 * Initializes the Apollo connection
 * @returns {ApolloClient} ApolloClient instance
 */
function initApollo(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:8080/graphql',
      opts: {
        credentials: 'same-origin',
        // Pass headers here if your graphql server requires them
      },
    }).use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}  // Create the header object if needed.
      }

      // get the authentication token from local storage if it exists
      (async () => {
        const token = await persist.willGetSessionToken()
        req.options.headers.authorization = token ? `Bearer ${token}` : null
        next()
      })()
    }
  }]),
  });
}

export default (headers, initialState = {}) => {
  if (!process.browser) {
    return initApollo(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = initApollo(headers, initialState);
  }
  return apolloClient;
};
