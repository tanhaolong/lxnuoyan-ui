/*
 * @Author: 
 * @Date: 2022-01-10 10:09:56
 * @LastEditTime: 2022-01-10 10:17:53
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import StepItem from './src/StepItem'
 
// 为组件提供 install 安装方法，供按需引入
StepItem.install = function (Vue) {
 Vue.component(StepItem.name, StepItem)
}
// 默认导出组件
export default StepItem