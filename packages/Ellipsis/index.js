/*
 * @Author: 
 * @Date: 2021-12-13 14:22:10
 * @LastEditTime: 2021-12-13 14:44:51
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Ellipsis from './src/Ellipsis'
 
// 为组件提供 install 安装方法，供按需引入
Ellipsis.install = function (Vue) {
 Vue.component(Ellipsis.name, Ellipsis)
}
// 默认导出组件
export default Ellipsis