import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import history from 'src/History';

import createRootReducer from './reducers';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  );

  return store;
};

export default configureStore;
