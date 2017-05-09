/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');

var entries;
/* eslint-enable */
if (process.env.NODE_ENV === 'production') {
  entries = {
    app: './list/app.js',
  };
} else {
  entries = {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './list/app.js',
      // adding this package will ensure that the perf tools will be included in the dev bundle
      'react-addons-perf'
    ]
  };
}

module.exports = {
  devtool: 'source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/bundles/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader'] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      // expose loader will expose the perf tools to the browser as `Perf`
      { test: require.resolve('react-addons-perf'), use: [{ loader: 'expose-loader', options: 'Perf' }] }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      react: 'react'
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': nodeEnv }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.bundle.js'
    })
  ]
};
