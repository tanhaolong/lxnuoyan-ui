/*
 * @Author: 
 * @Date: 2021-12-15 14:11:21
 * @LastEditTime: 2021-12-15 14:14:15
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Actionsheet from './src/Actionsheet'
 
// 为组件提供 install 安装方法，供按需引入
Actionsheet.install = function (Vue) {
 Vue.component(Actionsheet.name, Actionsheet)
}
// 默认导出组件
export default Actionsheet