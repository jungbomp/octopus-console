import type { History } from 'history';
import { createBrowserHistory } from 'history';

import type { HistoryPushParams } from './types';

const history: History = createBrowserHistory();

export const push = ({ path, param = {}, state = {} }: HistoryPushParams) => {
  let route: string = path;

  Object.entries(param).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      const regex = new RegExp(/:id(\(*.*\))?\?*/g);
      route = route.replace(regex, value);
    }
  });

  history.push({ pathname: route.replaceAll(/:id(\(*.*\))?\?{1}/g, ''), state });
};

export default history;
