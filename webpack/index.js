const path = require('path');
const { intersection } = require('lodash');

const ALIAS = require('./alias');
const { APP_PORT, DIRECTORIES, ENV } = require('./constants');
const RULES = require('./rules');
const PLUGINS = require('./plugins');

module.exports = (envObj, args) => {
  const [env] = intersection(Object.values(ENV), Object.keys(envObj));
  const { mode } = args;
  return {
    entry: {
      index: path.resolve(DIRECTORIES.SRC, 'index.ts'),
    },
    devtool: 'inline-source-map',
    experiments: {
      asset: true,
    },
    output: {
      clean: true,
      path: path.resolve(DIRECTORIES.ROOT, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        // RULES.SOURCE_MAP_LOADER,
        RULES.BABEL_LOADER,
        RULES.TYPESCRIPT_LOADER,
        RULES.STYLE_LOADER(mode),
        RULES.IMAGE_LOADER,
        RULES.HTML_LOADER,
        RULES.MJS,
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css'],
      alias: {
        ...ALIAS.SRC,
        ...ALIAS.PUBLIC,
        ...ALIAS.IMAGES,
      },
    },
    plugins: [
      PLUGINS.DOTENV(env),
      // Remove/clean the build folder
      PLUGINS.CLEAN_WEBPACK,
      // Update react components in real time
      PLUGINS.HOT_MODULE_REPLACEMENT,
      // Create an index.html in build folder
      PLUGINS.HTML_WEBPACK(env, args.env),
      PLUGINS.ESLINT,
      ...(mode === 'development' ? [] : [PLUGINS.MINI_CSS_EXTRACT]),
    ],
    devServer: {
      static: {
        directory: path.resolve('public/assets'),
        publicPath: '/assets',
      },
      port: APP_PORT,
      historyApiFallback: true,
      hot: true,
      allowedHosts: 'all',
    },
  };
};
