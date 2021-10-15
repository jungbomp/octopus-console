import type { AnyAction } from 'redux';
import type { GlobalState } from 'src/types';

import { SET_SELECTED_MENU } from './actionType';

const initialState: GlobalState = {};

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_SELECTED_MENU:
      return {
        ...state,
        menuItem: payload.menuItem,
      };
    default:
      return state;
  }
};

export default reducer;
