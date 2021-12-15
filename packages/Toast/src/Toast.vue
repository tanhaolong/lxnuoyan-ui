<!--
 * @Author: 
 * @Date: 2021-12-07 14:32:10
 * @LastEditTime: 2021-12-09 16:30:18
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
<Transition name="fade" v-if="type == 'none'">
    <div class="toast-box" v-show="ToastShow" @click.stop="denyClick">
        <div class="toast" :class="position">{{message}}</div>
    </div>
</Transition>
<Transition name="fade" v-if="type != 'none'">
    <div class="toast-box" v-show="ToastShow" @click.stop="denyClick">
        <div class="toast" :class="position">
          <i v-if="type == 'success'" class="iconfont toast-icon icon-check-circle"></i>
          <i v-if="type == 'warning'" class="iconfont toast-icon icon-warning-circle"></i>
          <i v-if="type == 'error'" class="iconfont toast-icon icon-close-circle"></i>
          <p class="toast-text">{{message}}</p>
        </div>
    </div>
</Transition>
</template>

<script>
import { ref,watch,onMounted } from 'vue'
export default {
  props:{
      message:{ // 提示的内容
          type:String,
          default:''
      },
      position:{ // 显示位置（top、center、bottom）
        type:String,
        default:'center'
      },
      type:{ // 提示类型（success、error、warning、none）
        type:String,
        default:'none'
      },
      duration:{ // 提示的延迟时间
          type:Number,
          default:3000,
      },
    },
   setup(props) {
        const ToastShow = ref(false);
        const time = ref(null)
        const denyClick = function(){};
        onMounted(() => {
           ToastShow.value = true;
           clearTimeout(time.value);
            time.value = setTimeout(() => {
            ToastShow.value = false;
            }, props.duration - 500)
        });
        return {
            ToastShow,
            denyClick,
        }
    }
}
</script>
 
<style scoped>
.toast-box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999999;
    pointer-events:none;
}
.top{
  top:10%;
}
.bottom{
  top:90%;
}
.center{
  top:50%;
}
.toast {
  position: fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  transform:translate(-50%,-50%);
  padding: 0.4rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.4rem;
  color: #FFF;
  font-size: 16px;
  animation: mymove 0.2s infinite;
  animation-iteration-count: 1;
  text-align: center;
}
.toast .toast-icon{
  font-size: 60px;
  text-align: center;
  display: block;
  margin-top: 0.2rem;
}
@keyframes mymove {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-leave-active{
    animation: myremove 0.2s infinite;
    animation-iteration-count: 1;
}
@keyframes myremove {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>