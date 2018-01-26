/* eslint-disable */

import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initApollo from './initApollo';
import initRedux from './initRedux';


export default Component => (
  class extends React.Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const client = initApollo(headers);
      const redux = initRedux(client, client.initialState);

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={redux}>
            <Component {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const state = redux.getState();

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data,
          },
        },
        headers,
        ...props,
      };
    }

    constructor(props) {
      super(props);
      this.client = initApollo(this.props.headers, this.props.initialState);
      this.store = initRedux(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  }
);
