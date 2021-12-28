/*
 * @Author: 
 * @Date: 2021-12-06 16:08:28
 * @LastEditTime: 2021-12-28 13:50:09
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createVNode, render } from 'vue'
import Notify from './src/Notify'

// 2. 准备一个DOM容器
const body = document.getElementById('app');
const div = document.getElementsByClassName('lxnuoyan-wrapper')[0];

let time = null
export default ({ text, type,duration = 3000,bgcolor,color }) => {
    // 3. 创建虚拟dom(组件对象， props)
    render(null, div)
    clearTimeout(time)
    body.setAttribute('class','app-mantle');
    div.setAttribute('class','lxnuoyan-wrapper lxnuoyan-wrapper-active');
    const vnode = createVNode(Notify, { text,type,duration,bgcolor,color })
    // 4. 把虚拟dom渲染到div
    render(vnode, div)
    // 5. 设置定时器清空
    time = setTimeout(() => {
        render(null, div);
        div.setAttribute('class','lxnuoyan-wrapper');
        body.setAttribute('class','');
    }, duration)
}