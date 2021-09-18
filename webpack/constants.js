const path = require('path');

const APP_PORT = 3000;

const DIRECTORIES = {
  ROOT: path.resolve(''),
  PUBLIC: path.resolve('public'),
  SRC: path.resolve('src'),
};

const ENV = {
  PROD: 'production',
  PREVIEW: 'preview',
  LOCAL: 'local',
};

const MODES = {
  PROD: 'production',
  DEV: 'development',
};

module.exports = {
  APP_PORT,
  DIRECTORIES,
  ENV,
  MODES,
};
