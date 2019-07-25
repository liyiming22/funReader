const path = require('path')
const baseConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true //  write logs to console
    }),
  ]
})