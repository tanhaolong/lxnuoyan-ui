/*
 * @Author: 
 * @Date: 2021-12-06 14:20:20
 * @LastEditTime: 2021-12-06 14:20:44
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// src/index.js
// 导入组件，组件必须声明 name
import Cell from './src/Cell'
 
// 为组件提供 install 安装方法，供按需引入
Cell.install = function (Vue) {
 Vue.component(Cell.name, Cell)
}
// 默认导出组件
export default Cell