const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '192.168.12.1',
    port: 8080,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://novel.juhe.im',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
})