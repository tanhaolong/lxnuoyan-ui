/*
 * @Author: 
 * @Date: 2021-12-07 14:31:56
 * @LastEditTime: 2021-12-28 11:20:52
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createVNode, render } from 'vue'
import Toast from './src/Toast';

// 2. 准备一个DOM容器
const body = document.getElementById('app');
const div = document.getElementsByClassName('lxnuoyan-wrapper')[0];
let time = null;
export default ({ message,type,duration }) => {
    duration = duration ? duration : 3000;
    // 3. 创建虚拟dom(组件对象， props)
    const vnode = createVNode(Toast, { message,type,duration });
    render(null, div)
    clearTimeout(time);
    body.setAttribute('class','app-mantle');
    div.setAttribute('class','lxnuoyan-wrapper lxnuoyan-wrapper-active');
    // 4. 把虚拟dom渲染到div
    render(vnode, div)
    // 5. 设置定时器清空
    time = setTimeout(() => {
        render(null, div)
        div.setAttribute('class','lxnuoyan-wrapper');
        body.setAttribute('class','');
    }, duration)
}