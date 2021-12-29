/*
 * @Author: 
 * @Date: 2021-12-29 14:36:34
 * @LastEditTime: 2021-12-29 14:40:31
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Swipe from './src/Swipe'
 
// 为组件提供 install 安装方法，供按需引入
Swipe.install = function (Vue) {
 Vue.component(Swipe.name, Swipe)
}
// 默认导出组件
export default Swipe