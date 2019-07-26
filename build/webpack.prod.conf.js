const baseConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

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
    new BundleAnalyzerPlugin({
      analyzerPort: 8080,
      generateStatsFile: false
    }),
    new SimpleProgressWebpackPlugin()
  ]
})
