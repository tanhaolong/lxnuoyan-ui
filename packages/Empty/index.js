/*
 * @Author: 
 * @Date: 2021-12-10 09:54:30
 * @LastEditTime: 2021-12-10 10:00:22
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Empty from './src/Empty'
 
// 为组件提供 install 安装方法，供按需引入
Empty.install = function (Vue) {
 Vue.component(Empty.name, Empty)
}
// 默认导出组件
export default Empty