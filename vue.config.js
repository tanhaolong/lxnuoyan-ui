/*
 * @Author: 
 * @Date: 2021-12-03 14:15:24
 * @LastEditTime: 2021-12-08 14:50:34
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages/')
        .end()
      .include.add(/examples/)
      .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
};