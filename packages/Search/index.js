/*
 * @Author: 
 * @Date: 2022-01-05 11:08:09
 * @LastEditTime: 2022-01-05 15:43:21
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Search from './src/Search'
 
// 为组件提供 install 安装方法，供按需引入
Search.install = function (Vue) {
 Vue.component(Search.name, Search)
}
// 默认导出组件
export default Search