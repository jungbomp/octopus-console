import axios, { Method } from 'axios';
import { JsonParam } from './types';
import { toQueryParamStr } from './utils';

const request = (url: string, method: Method, headers?: Headers, params?: JsonParam, data?: any): Promise<any> => {
  const queryParam: string = toQueryParamStr(params ?? {});

  return axios({
    method,
    url: `${url}${queryParam.length > 0 ? `?${queryParam}` : ''}`,
    headers: {
      'Content-Type': 'application/JSON; charset=utf=8',
      ...headers,
    },
    data,
    validateStatus: (status: number): boolean => status >= 200 && status < 501,
  });
};

export default request;
