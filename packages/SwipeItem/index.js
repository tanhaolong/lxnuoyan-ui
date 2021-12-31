/*
 * @Author: 
 * @Date: 2021-12-29 14:38:06
 * @LastEditTime: 2021-12-30 15:58:05
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import SwipeItem from './src/SwipeItem'
 
// 为组件提供 install 安装方法，供按需引入
SwipeItem.install = function (Vue) {
 Vue.component(SwipeItem.name, SwipeItem)
}
// 默认导出组件
export default SwipeItem