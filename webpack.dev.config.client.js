const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'inline-sourcemap',
  mode: 'development',
  entry: [
    'react-hot-loader/babel',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/browser/index.js'
  ],
  output: {
    hotUpdateChunkFilename: 'hot/client-hot-update.js',
    hotUpdateMainFilename: 'hot/client-hot-update.json',
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: 'http://localhost:3001/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ManifestPlugin(),
    new CleanWebpackPlugin(['public'], { watch: true }),
    new CopyWebpackPlugin([
      { from: 'src/browser/pwa/PWAManifest.json', to: 'PWAManifest.json' },
      { from: 'src/browser/pwa/icons', to: 'icons' }
    ])
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      builtAt: false,
      children: false,
      modules: false
    }
  }
}
