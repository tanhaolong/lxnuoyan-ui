/*
 * @Author: 
 * @Date: 2021-12-15 16:35:32
 * @LastEditTime: 2021-12-15 16:35:32
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Switch from './src/Switch'
 
// 为组件提供 install 安装方法，供按需引入
Switch.install = function (Vue) {
 Vue.component(Switch.name, Switch)
}
// 默认导出组件
export default Switch