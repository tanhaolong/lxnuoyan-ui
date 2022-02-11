/*
 * @Author: 
 * @Date: 2022-01-10 10:09:47
 * @LastEditTime: 2022-01-10 10:11:36
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Steps from './src/Steps'
 
// 为组件提供 install 安装方法，供按需引入
Steps.install = function (Vue) {
 Vue.component(Steps.name, Steps)
}
// 默认导出组件
export default Steps