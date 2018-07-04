var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: '/'
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
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new ExtractTextPlugin('styles.css'),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 6,
        warnings: false,
        output: {
          comments: false,
          beautify: false
        },
        ie8: false,
        safari10: false
      }
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin(['public'], {watch: true}),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/browser/pwa/PWAManifest.json'), to: 'PWAManifest.json' },
      { from: path.resolve(__dirname, 'src/browser/pwa/icons'), to: 'icons' }
    ]),
    new GenerateSW({
      runtimeCaching: [
        {
          // Match any same-origin request that contains ‘api’.
          urlPattern: /images/,
          // Apply a network-first strategy.
          handler: 'cacheFirst'
        },
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'cacheFirst'
        },
        {
          // Match any same-origin request that contains ‘api’.
          urlPattern: /.*/,
          // Apply a network-first strategy.
          handler: 'networkFirst'
        }
      ]
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'serverbundle.js',
    publicPath: '/'
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
      __isBrowser__: 'false'
    }),
    new UglifyJsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
}

module.exports = [browserConfig, serverConfig]
