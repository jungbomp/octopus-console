import type { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from 'src/components/redux/reducer';
import { REDUCER_SCOPES } from 'src/constants';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [REDUCER_SCOPES.GLOBAL]: globalReducer,
  });

export default createRootReducer;
