export interface LocationParam {
  [key: string]: string;
}

export interface LocationState {
  [key: string]: any;
}

export interface HistoryPushParams {
  path: string;
  param?: LocationParam;
  state?: LocationState;
}
