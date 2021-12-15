<!--
 * @Author: 
 * @Date: 2021-12-06 16:08:42
 * @LastEditTime: 2021-12-09 17:08:37
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <Transition name="down">
    <div class="message-box" :class="type" v-show="visible" :style="{'backgroundColor':bgcolor != '' ? bgcolor : ''}">
      <p class="message-text" :style="{'color': color != '' ? color : ''}">{{text}}</p>
    </div>
  </Transition>

</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'Message',
  props: {
    text: { // 显示文本
      type: String,
      default: ''
    },
    type: { // 弹窗类型（primary 正常 warning 警告  error 错误  success 成功）
      type: String, 
      default: 'primary'
    },
    bgcolor:{ // 背景颜色
      type:String,
      default:'',
    },
    color:{ // 文本颜色
      type:String,
      default:''
    },
    duration:{ // 显示时长
      type:Number,
      default:3000,
    }
  },
  setup (props) {
    // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const visible = ref(false);
    const time = ref(null)
    onMounted(()=>{
      visible.value = true;
      clearTimeout(time.value);
            time.value = setTimeout(() => {
            visible.value = false;
            }, props.duration - 500)
    })
    return {visible,time }
  }
}
</script>
<style scoped>
  .message-box{
    width: 100%;
    min-height:20px;
    position: fixed;
    background-color: #1989fa;
    top: 0;
    left: 0;
    animation: mymove 0.5s 1;
    animation-fill-mode:none;
    animation-iteration-count: 1;
    overflow: hidden;
    z-index: 80000;
  }
  .danager{
    background-color: red;
  }
  .success{
    background-color: #07c160;
  }
  .primary{
    background-color: #1989fa;
  }
  .warning{
    background-color: #ff976a;
  }
  @keyframes mymove {
  0% {
    opacity: 0;
    transform: translate(0,-100px);
  }
  100% {
    opacity: 1;
    transform: translate(0,0);
  }
}
  .message-box .message-text{
    color: white;
    text-align: center;
  }
  .down-leave-active{
    animation: myremove 0.2s infinite;
    animation-iteration-count: 1;
}
@keyframes myremove {
  0% {
    transform: translate(0,0);
    opacity: 1;
  }
  100% {
    transform: translate(0,-100px);
    opacity: 0;
  }
}
</style>
