import { JsonParam } from './types';

export const toQueryParamStr = (param: JsonParam): string => {
  const queryParams: string[] = Object.keys(param).map(
    (key: string): string => `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`,
  );

  return queryParams.length > 0 ? queryParams.join('&') : '';
};
