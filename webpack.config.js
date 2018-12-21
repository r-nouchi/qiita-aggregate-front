const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
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
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    contentBase: path.join(__dirname, 'public'),
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
};
