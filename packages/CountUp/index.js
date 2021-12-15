/*
 * @Author: 
 * @Date: 2021-12-10 17:39:40
 * @LastEditTime: 2021-12-10 17:49:41
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import CountUp from './src/CountUp'
 
// 为组件提供 install 安装方法，供按需引入
CountUp.install = function (Vue) {
 Vue.component(CountUp.name, CountUp)
}
// 默认导出组件
export default CountUp