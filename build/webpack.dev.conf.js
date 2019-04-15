const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '192.168.43.115',
    port: 8080,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})