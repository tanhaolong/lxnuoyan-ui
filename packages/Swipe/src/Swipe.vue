<!--
 * @Author: 
 * @Date: 2021-12-29 14:36:43
 * @LastEditTime: 2021-12-29 18:29:02
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="swipe-box">
      <div class="swipe-track" @touchstart="touchStartChange" @touchmove="moveChange" @touchend="touchEndChange" :style="{'transition-duration':ismove == true ? '0ms' : '500ms','transform':'translateX('+ -enddistance + 'px)'}">
        <div class="swipe-item" >1</div>
        <div class="swipe-item" >2</div>
        <div class="swipe-item" >3</div>
      </div>
      <div class="swipe-indicators">
          
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'Swipe',
  props:{},
  setup(props,context){
      const clientWidth =  document.body.clientWidth; // 屏幕宽度
      const clientMax = document.getElementsByClassName('swipe-item');// 获取幻灯片dom元素
      const ismove = ref(false); //是否移动中状态
      const index = ref(0); // 当前显示下标
      const startdistance = ref(0); // 开始坐标
      const movedistance = ref(0); // 移动坐标
      const enddistance = ref(0); // 实际距离
      const touchStartChange = function(e){
          // 触摸开始触发事件
          movedistance.value = 0; // 每次触摸重新计算移动距离
          ismove.value = false;
          startdistance.value = e.changedTouches[0].clientX; // 记录点击X轴
            if (index.value >= clientMax.length){ // 判断当前显示是否最后一个（即无缝衔接第一个）;还原回原来的位置
                ismove.value = true;
                clientMax[0].removeAttribute('style');
                index.value = 0;
                enddistance.value = 0;
            }else if(index.value == clientMax.length - 1){// 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;还原回原来的位置
                ismove.value = true;
                clientMax[clientMax.length - 1].removeAttribute('style');
                index.value = clientMax.length - 1;
                enddistance.value = index.value * clientWidth;
            }
      };
      const moveChange = function(e){
          // 触摸移动触发事件
          ismove.value = true; // 去掉动画延迟
          movedistance.value = startdistance.value - e.changedTouches[0].clientX;// 计算触摸移动距离
          if(index.value == clientMax.length - 1 && movedistance.value > 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
                clientMax[0].setAttribute('style','transform: translateX('+ clientWidth * clientMax.length +'px);');
          }else if(index.value == 0 && movedistance.value < 0){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
                clientMax[clientMax.length - 1].setAttribute('style','transform: translateX('+ -clientWidth * clientMax.length +'px);');
          }
          else{
              clientMax[0].removeAttribute('style');
          }
          enddistance.value =  index.value * clientWidth + movedistance.value; // 当前滑动的距离
      };
      const touchEndChange = function(e){
          // 触摸结束触发事件
          ismove.value = false;// 滑动动画开启
           if(movedistance.value >= clientWidth / 7){ // 往左滑动
                index.value = index.value + 1;
          }else if(movedistance.value <= -clientWidth / 7){ // 往右滑动
                index.value = index.value - 1;
          }
          if(index.value < 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
              clientMax[clientMax.length - 1].setAttribute('style','transform: translateX('+ -clientWidth * clientMax.length +'px);');
              index.value = clientMax.length - 1;
              enddistance.value = -clientWidth;
              return;
          }else if (index.value > clientMax.length){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
              clientMax[0].removeAttribute('style');
              index.value = 0;
              enddistance.value = 0;
          }
            enddistance.value = index.value * clientWidth; // 最后显示滑动的距离
      };
    return {
        touchStartChange,
        touchEndChange,
        moveChange,
        enddistance,
        ismove,
    }
  },
}
</script>

<style scoped>
.swipe-box{
    position: relative;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
}
.swipe-box .swipe-track{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 100%;
}
.swipe-box .swipe-track .swipe-item{
    line-height: 350px;
    position: relative;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
    line-height:200px;
    text-align: center;
    background-color: #66c6f2;
    color:white;
}
</style>