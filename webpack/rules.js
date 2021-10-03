const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SOURCE_MAP_LOADER = {
  enforce: 'pre',
  test: /\.((js)|(ts))|x?$/,
  use: ['source-map-loader'],
  exclude: /node_modules/,
};

const TYPESCRIPT_LOADER = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: ['ts-loader'],
};

const BABEL_LOADER = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
};

const STYLE_LOADER = (mode) => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});

const HTML_LOADER = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const IMAGE_LOADER = {
  test: /\.(png|jpg|svg|ico|jp(e*)g|gif)$/i,
  type: 'asset/resource',
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024, // 10kb
    },
  },
  generator: {
    filename: 'assets/images/[hash]-[name][ext]',
  },
};

const MJS = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

module.exports = {
  SOURCE_MAP_LOADER,
  BABEL_LOADER,
  TYPESCRIPT_LOADER,
  STYLE_LOADER,
  IMAGE_LOADER,
  HTML_LOADER,
  MJS,
};
