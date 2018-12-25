const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    context: __dirname,
    entry: [
      'babel-polyfill',
      './src/main/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'dist/main'),
      filename: 'main.js',
    },
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.js?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader',
        },
        { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            configFile: './.eslintrc.json',
          },
        },
      }),
    ],
  },
  {
    context: __dirname,
    entry: [
      'babel-polyfill',
      './src/renderer/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'dist/renderer'),
      filename: 'renderer.js',
    },
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.js?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader',
        },
        { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
        {
          test: /\.css/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { url: false } },
          ],
        },

      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            configFile: './.eslintrc.json',
          },
        },
      }),
    ],
  },
];
