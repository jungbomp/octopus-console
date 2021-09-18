const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { DIRECTORIES } = require('./constants');

const DOTENV = (env) => (env ? new Dotenv({ path: path.resolve(DIRECTORIES.ROOT, `.env.${env}`) }) : null);

// Create an index.html in build folder
const HTML_WEBPACK = (env, args) => {
  console.log(env);
  console.log(args);
  return new HtmlWebpackPlugin({
    // favicon: path.resolve(DIRECTORIES.PUBLIC, 'favcon.png'),
    template: path.resolve(DIRECTORIES.PUBLIC, 'index.html'),
  });
};

// Remove/clean the build folder
const CLEAN_WEBPACK = new CleanWebpackPlugin();

// Update react components in real time
const HOT_MODULE_REPLACEMENT = new HotModuleReplacementPlugin();

const ESLINT = new ESLintPlugin({
  extensions: ['js', 'jsx', 'ts', 'tsx'],
});

const MINI_CSS_EXTRACT = new MiniCssExtractPlugin();

module.exports = {
  DOTENV,
  HTML_WEBPACK,
  CLEAN_WEBPACK,
  HOT_MODULE_REPLACEMENT,
  ESLINT,
  MINI_CSS_EXTRACT,
};
