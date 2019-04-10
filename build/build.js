const webpack = require('webpack')
const config = require('./webpack.prod.conf')

webpack(config, (err, statas) => {
  if (err || statas.hasErrors()) {
    console.error(err)
    return
  } else {
    console.log(statas.toString({
      chunks: false,  //  使构建过程更静默无输出
      colors: true  //  控制台显示颜色
    }))
  }
})