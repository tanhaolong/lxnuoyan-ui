/*
 * @Author: 
 * @Date: 2021-12-09 11:25:43
 * @LastEditTime: 2021-12-15 10:13:31
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createVNode, render } from 'vue'
import Loading from './src/Loading'

// 2. 准备一个DOM容器
const div = document.getElementsByClassName('Toast-wrapper')[0];
let time = null
export default ({ title,type,loadingType }) => {
    // 3. 创建虚拟dom(组件对象， props)
    if(type == true){
        const vnode = createVNode(Loading, { title,type,loadingType })
        div.style.display = 'block';
        render(null, div)
        // 4. 把虚拟dom渲染到div
        render(vnode, div)
    }else if(type == false){
        render(null, div)
        div.style.display = 'none';
    }
}