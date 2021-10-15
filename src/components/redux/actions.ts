import type { MenuItemContext } from 'src/types';
import { SET_SELECTED_MENU } from './actionType';

export const setSelectedMenu = (menuItem: MenuItemContext | undefined) => ({
  type: SET_SELECTED_MENU,
  payload: {
    menuItem,
  },
});
