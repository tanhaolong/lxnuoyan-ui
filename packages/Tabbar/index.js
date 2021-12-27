/*
 * @Author: 
 * @Date: 2021-12-21 16:28:03
 * @LastEditTime: 2021-12-21 16:28:03
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Tabbar from './src/Tabbar'
 
// 为组件提供 install 安装方法，供按需引入
Tabbar.install = function (Vue) {
 Vue.component(Tabbar.name, Tabbar)
}
// 默认导出组件
export default Tabbar