/*
 * @Author: 
 * @Date: 2021-12-07 14:31:56
 * @LastEditTime: 2021-12-10 09:41:03
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createVNode, render } from 'vue'
import Toast from './src/Toast'

// 2. 准备一个DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'Toast-wrapper');
document.body.appendChild(div)
div.style.cssText='position:fixed;width:100%;height:100vh;top:0;left:0;display:none;z-index:999';

let time = null
export default ({ message,type,duration }) => {
    duration = duration ? duration : 3000;
    // 3. 创建虚拟dom(组件对象， props)
    const vnode = createVNode(Toast, { message,type,duration })
    div.style.display = 'block';
    render(null, div)
    clearTimeout(time);
    // 4. 把虚拟dom渲染到div
    render(vnode, div)
    // 5. 设置定时器清空
    time = setTimeout(() => {
        render(null, div)
        div.style.display = 'none';
    }, duration)
}