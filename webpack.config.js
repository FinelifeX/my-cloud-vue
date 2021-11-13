const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: isProduction ? 'hidden-source-map' : 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /.js$/i,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /.s?css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      inject: 'body',
    }),
  ],
};
