import path from 'path';

import webpack from 'webpack';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import pkg from './package.json';
import './env';

const IS_DEV = process.env.NODE_ENV === 'development';

console.log('process.env.NODE_ENV: %s\n', process.env.NODE_ENV);

export default {
  target: 'web',
  entry: {
    index: path.resolve(__dirname, 'src', 'index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: IS_DEV ? 'development' : 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(mjs|jsx)$/,
        type: 'javascript/esm',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: pkg.babel
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader'}, { loader: 'css-loader' }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.mjs', '.jsx']
  },
  plugins: [
    new cleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: [path.resolve(__dirname, 'dist')],
    host: '0.0.0.0',
    port: process.env.PORT
  }
};
