/*
 * @Author: 
 * @Date: 2021-12-06 16:08:28
 * @LastEditTime: 2021-12-09 16:50:43
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createVNode, render } from 'vue'
import Message from './src/Message'

// 2. 准备一个DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'message-wrapper')
document.body.appendChild(div)

let time = null
export default ({ text, type,duration = 3000,bgcolor,color }) => {
    // 3. 创建虚拟dom(组件对象， props)
    render(null, div)
    clearTimeout(time)
    const vnode = createVNode(Message, { text,type,duration,bgcolor,color })
    // 4. 把虚拟dom渲染到div
    render(vnode, div)
    // 5. 设置定时器清空
    time = setTimeout(() => {
        render(null, div)
    }, duration)
}