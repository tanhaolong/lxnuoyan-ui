/*
 * @Author: 
 * @Date: 2021-12-20 15:22:23
 * @LastEditTime: 2021-12-20 15:24:14
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import NavBar from './src/NavBar'
 
// 为组件提供 install 安装方法，供按需引入
NavBar.install = function (Vue) {
 Vue.component(NavBar.name, NavBar)
}
// 默认导出组件
export default NavBar