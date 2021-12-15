/*
 * @Author: 
 * @Date: 2021-12-10 11:08:36
 * @LastEditTime: 2021-12-10 11:08:36
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入组件，组件必须声明 name
import Tag from './src/Tag'
 
// 为组件提供 install 安装方法，供按需引入
Tag.install = function (Vue) {
 Vue.component(Tag.name, Tag)
}
// 默认导出组件
export default Tag