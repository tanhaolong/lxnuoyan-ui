/*
 * @Author: 
 * @Date: 2021-12-16 14:54:46
 * @LastEditTime: 2021-12-16 14:57:14
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Evaluate from './src/Evaluate'
 
// 为组件提供 install 安装方法，供按需引入
Evaluate.install = function (Vue) {
 Vue.component(Evaluate.name, Evaluate)
}
// 默认导出组件
export default Evaluate