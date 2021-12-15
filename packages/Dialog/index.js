/*
 * @Author: 
 * @Date: 2021-12-03 14:38:04
 * @LastEditTime: 2021-12-03 14:38:59
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// src/index.js
// 导入组件，组件必须声明 name
import Dialog from './src/Dialog'
 
// 为组件提供 install 安装方法，供按需引入
Dialog.install = function (Vue) {
 Vue.component(Dialog.name, Dialog)
}
// 默认导出组件
export default Dialog