const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

dotenv.config({ path: './.env' });

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/my-cloud-vue/',
  },
  devtool: isProduction ? undefined : 'inline-source-map',
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
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /.(png|jpe?g)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@const': path.resolve(__dirname, 'src', 'constants'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@icons': path.resolve(__dirname, 'src', 'icons'),
      '@router': path.resolve(__dirname, 'src', 'router'),
      '@firebase': path.resolve(__dirname, 'src', 'firebase'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      inject: 'body',
    }),
    new ESLintWebpackPlugin(),
    isProduction && new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ].filter(Boolean),
};
