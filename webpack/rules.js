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

const STYLE_LOADER = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    'style-loader',
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
};

const HTML_LOADER = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const URL_LOADER = {
  test: /\.(png|jpg|svg|ico|jp(e*)g|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 10000, // Convert images < 10kb to base64 string
        name: 'images/[hash]-[name].[ext]',
        fallback: 'file-loader',
      },
    },
  ],
};

const MJS = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

module.exports = [SOURCE_MAP_LOADER, BABEL_LOADER, TYPESCRIPT_LOADER, STYLE_LOADER, URL_LOADER, HTML_LOADER, MJS];
