const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // open: true,
    proxy: {
      '/api': {
        target: 'http://novel.juhe.im',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})