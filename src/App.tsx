import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './History';
import store from './Redux/store';

import Layout from './components/Layout';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} noInitialPop={true}>
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
