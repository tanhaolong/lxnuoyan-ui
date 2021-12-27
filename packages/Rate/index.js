/*
 * @Author: 
 * @Date: 2021-12-20 10:02:44
 * @LastEditTime: 2021-12-20 10:02:45
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Rate from './src/Rate'
 
// 为组件提供 install 安装方法，供按需引入
Rate.install = function (Vue) {
 Vue.component(Rate.name, Rate)
}
// 默认导出组件
export default Rate