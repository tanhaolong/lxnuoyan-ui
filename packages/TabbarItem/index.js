/*
 * @Author: 
 * @Date: 2021-12-24 15:05:23
 * @LastEditTime: 2021-12-24 15:05:24
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import TabbarItem from './src/TabbarItem'
 
// 为组件提供 install 安装方法，供按需引入
TabbarItem.install = function (Vue) {
 Vue.component(TabbarItem.name, TabbarItem)
}
// 默认导出组件
export default TabbarItem