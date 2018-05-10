const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const devtool = isProd ? 'source-map' : 'cheap-module-eval-source-map';
const plugins = [
  new CopyWebpackPlugin([
    { from: 'src/manifest.json', to: 'manifest.json', cache: true },
  ]),
];

if (isProd) {
  plugins.push([
    new UglifyJSPlugin({ sourceMap: true }),
  ]);
}

module.exports = {
  entry: [
    './src/index.js',
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: __dirname + '/dist',
    filename: 'background.js',
  },

  plugins,

  devtool,
};
