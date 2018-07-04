const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: ['./src/server/index.js'],
  watch: true,
  mode: 'development',
  target: 'node',
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  stats: {
    builtAt: false,
    children: false,
    modules: false
  },
  module: {
    rules: [
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ },
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
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
}
