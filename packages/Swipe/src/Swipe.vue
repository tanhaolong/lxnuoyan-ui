<!--
 * @Author: 
 * @Date: 2021-12-29 14:36:43
 * @LastEditTime: 2021-12-31 16:03:37
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="swipe-box">
      <div class="swipe-track" v-if="vertical == false" @touchstart="touchStartChange" @touchmove="moveChange" @touchend="touchEndChange" :style="{'width':clientWidth + 'px','transition-duration':ismove == true ? '0ms' : '500ms','transform':'translateX('+ -enddistance + 'px)'}">
        <slot></slot>
      </div>
      <div class="swipe-track-vertical" v-if="vertical == true" @touchstart="scrolltouchStartChange" @touchmove="scrolltouchMoveChange" @touchend="scrolltouchEndChange" :style="{'height':clientHeight + 'px','transition-duration':ismove == true ? '0ms' : '500ms','transform':'translateY('+ -enddistance + 'px)'}">
          <slot></slot>
      </div>
      <div class="swipe-indicators swipe-indicators-vertical">
          <div class="swipe-indicators-item" v-for="(item,indexs) in swiperDomNum" :class="{'swipe-indicators-item-active': indexs == 0}" :style="{'background': indexs == index && indicatorColor }"></div>
      </div>
  </div>
</template>

<script>
import { ref,reactive,onMounted,nextTick } from 'vue'
export default{
  components:{},
  name: 'Swipe',
  props:{
      vertical:{
        type:Boolean,
      },
      indicatorColor:{ // 指示器颜色
          type:String,
          default:'blue'
      }
  },
  setup(props,context){
      let clientWidth = ref(document.body.clientWidth); // 屏幕宽度
      let clientHeight = ref(document.body.clientHeight); // 屏幕高度
      const DomData = reactive({
          swiperDom:document.querySelectorAll('.swipe-box .swipe-item'),// 获取幻灯片dom元素列表
          indicatorDom:document.querySelectorAll('.swipe-box .swipe-indicators-item'),// 获取指示器dom元素列表
          boxDom:document.querySelector('.swipe-box'),// 获取swiper盒子的dom元素
      });
      const swiperDomNum = ref(0); // 指示器数量
      const ismove = ref(false); //是否移动中状态
      const index = ref(0); // 当前显示下标
      let startdistance = 0; // 开始坐标
      let movedistance = 0; // 移动坐标
      const enddistance = ref(0); // 实际距离
      nextTick(()=>{
            console.log(context);
            DomData.boxDom = document.querySelector('.swipe-box');
            DomData.swiperDom = document.querySelectorAll('.swipe-box .swipe-item');
            swiperDomNum.value =  DomData.swiperDom.length;
            clientWidth.value = DomData.boxDom.clientWidth; // swipe盒子宽度
            clientHeight.value = DomData.boxDom.clientHeight; // swipe盒子高度
            nextTick(()=>{
                DomData.indicatorDom = document.querySelectorAll('.swipe-box .swipe-indicators-item');
            })
            console.log(DomData); 
        });
      const touchStartChange = function(e){
          // 触摸开始触发事件
          movedistance = 0; // 每次触摸重新计算移动距离
          startdistance = e.changedTouches[0].clientX; // 记录点击X轴
            if(index.value == 0){
            // 判断当前显示是否第一个（即无缝衔接最后一个）;还原回原来的位置
              ismove.value = true;
              DomData.swiperDom[0].setAttribute('style','width:'+ clientWidth.value + 'px;'); 
              enddistance.value = 0;
            }else if(index.value == swiperDomNum.value - 1){
            // 判断当前显示是否最后一个（即无缝衔接第一个）;还原回原来的位置
              ismove.value = true;
              DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','width:'+ clientWidth.value + 'px;');
              enddistance.value = index.value * clientWidth.value; //最后显示滑动的距离
            }else{
                ismove.value = false;
            }
      };
      const scrolltouchStartChange = function(e){
          // 触摸开始触发事件
          movedistance = 0; // 每次触摸重新计算移动距离
          startdistance = e.changedTouches[0].clientY; // 记录点击Y轴
            if(index.value == 0){
            // 判断当前显示是否第一个（即无缝衔接最后一个）;还原回原来的位置
              ismove.value = true;
              DomData.swiperDom[0].setAttribute('style','height:'+ clientHeight.value + 'px;'); 
              enddistance.value = 0;
            }else if(index.value == swiperDomNum.value - 1){
            // 判断当前显示是否最后一个（即无缝衔接第一个）;还原回原来的位置
              ismove.value = true;
              DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','height:'+ clientHeight.value + 'px;');
              enddistance.value = index.value * clientHeight.value; //最后显示滑动的距离
            }else{
                ismove.value = false;
            }
            console.log('start',startdistance);
      };
      const scrolltouchMoveChange = function(e){
          // 触摸移动触发事件
          ismove.value = true; // 去掉动画延迟
          movedistance = startdistance - e.changedTouches[0].clientY;// 计算触摸移动距离
          if(index.value ==  DomData.swiperDom.length - 1 && movedistance > 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
             DomData.swiperDom[0].setAttribute('style','height:'+ clientHeight.value + 'px;transform: translateY('+ clientHeight.value *  DomData.swiperDom.length +'px);');
          }else if(index.value == 0 && movedistance < 0){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
             DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','height:'+ clientHeight.value + 'px;transform: translateY('+ -clientHeight.value *  DomData.swiperDom.length +'px);');
          }
          enddistance.value = index.value * clientHeight.value + movedistance; // 当前滑动的距离
      }
       const scrolltouchEndChange = function(){
          // 触摸结束触发事件
           ismove.value = false;// 滑动动画开启
           DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item');
           DomData.indicatorDom[index.value].removeAttribute('style');
           
           if(movedistance >= clientWidth.value / 7){ // 往左滑动屏幕宽度的7 / 1
                index.value = index.value + 1;
          }else if(movedistance <= -clientWidth.value / 7){ // 往右滑动屏幕宽度的7 / 1
                index.value = index.value - 1;
          }
          if(index.value < 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
              DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','height:'+ clientHeight.value + 'px;transform: translateY('+ -clientHeight.value *  DomData.swiperDom.length +'px);');
              index.value =  DomData.swiperDom.length - 1;
              enddistance.value = -clientHeight.value;
              DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              DomData.indicatorDom[index.value].setAttribute('style','background:'+ props.indicatorColor);
              return;
          }else if (index.value >  DomData.swiperDom.length){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
              DomData.swiperDom[0].setAttribute('style','height:'+ clientHeight.value + 'px;');
              index.value = 0;
              DomData.indicatorDom[0].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              enddistance.value = 0;
              return;
          }else if(index.value ==  DomData.swiperDom.length){
              DomData.indicatorDom[0].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              DomData.indicatorDom[0].setAttribute('style','background:'+ props.indicatorColor);
              enddistance.value = index.value * clientHeight.value; // 最后显示滑动的距离
              index.value = 0;
              return;
          }
            DomData.swiperDom[index.value].setAttribute('style','height:'+ clientHeight.value + 'px;');
            DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
            DomData.indicatorDom[index.value].setAttribute('style','background:'+ props.indicatorColor);
            enddistance.value = index.value * clientHeight.value; // 最后显示滑动的距离    
      };
      const moveChange = function(e){
          // 触摸移动触发事件
          ismove.value = true; // 去掉动画延迟
          movedistance = startdistance - e.changedTouches[0].clientX;// 计算触摸移动距离
          if(index.value ==  DomData.swiperDom.length - 1 && movedistance > 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
             DomData.swiperDom[0].setAttribute('style','width:'+ clientWidth.value + 'px;transform: translateX('+ clientWidth.value *  DomData.swiperDom.length +'px);');
          }else if(index.value == 0 && movedistance < 0){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
             DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','width:'+ clientWidth.value + 'px;transform: translateX('+ -clientWidth.value *  DomData.swiperDom.length +'px);');
          }
          enddistance.value =  index.value * clientWidth.value + movedistance; // 当前滑动的距离
      };
      const touchEndChange = function(){
          // 触摸结束触发事件
           ismove.value = false;// 滑动动画开启
           DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item');
           DomData.indicatorDom[index.value].removeAttribute('style');
           
           if(movedistance >= clientWidth.value / 7){ // 往左滑动屏幕宽度的7 / 1
                index.value = index.value + 1;
          }else if(movedistance <= -clientWidth.value / 7){ // 往右滑动屏幕宽度的7 / 1
                index.value = index.value - 1;
          }
          if(index.value < 0){ // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
              DomData.swiperDom[ DomData.swiperDom.length - 1].setAttribute('style','width:'+ clientWidth.value + 'px;transform: translateX('+ -clientWidth.value *  DomData.swiperDom.length +'px);');
              index.value =  DomData.swiperDom.length - 1;
              enddistance.value = -clientWidth.value;
              DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              DomData.indicatorDom[index.value].setAttribute('style','background:'+ props.indicatorColor);
              return;
          }else if (index.value >  DomData.swiperDom.length){ // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
              DomData.swiperDom[0].setAttribute('style','width:'+ clientWidth.value + 'px;');
              index.value = 0;
              DomData.indicatorDom[0].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              enddistance.value = 0;
              return;
          }else if(index.value ==  DomData.swiperDom.length){
              DomData.indicatorDom[0].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
              DomData.indicatorDom[0].setAttribute('style','background:'+ props.indicatorColor);
              enddistance.value = index.value * clientWidth.value; // 最后显示滑动的距离
              index.value = 0;
              return;
          }
            DomData.swiperDom[index.value].setAttribute('style','width:'+ clientWidth.value + 'px;');
            DomData.indicatorDom[index.value].setAttribute('class','swipe-indicators-item swipe-indicators-item-active');
            DomData.indicatorDom[index.value].setAttribute('style','background:'+ props.indicatorColor);
            enddistance.value = index.value * clientWidth.value; // 最后显示滑动的距离    
      };
    return {
        clientWidth,
        clientHeight,
        touchStartChange,
        touchEndChange,
        scrolltouchStartChange,
        scrolltouchMoveChange,
        scrolltouchEndChange,
        moveChange,
        enddistance,
        index,
        ismove,
        swiperDomNum,
        DomData,
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
.swipe-box .swipe-track-vertical{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.swipe-box .swipe-indicators{
    position: absolute;
    bottom: 12px;
    left: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.swipe-box .swipe-indicators .swipe-indicators-item{
    width: 6px;
    height: 6px;
    background-color: #ebedf0;
    border-radius: 100%;
    opacity: 0.3;
    -webkit-transition: opacity 0.2s, background-color 0.2s;
    transition: opacity 0.2s, background-color 0.2s;
}
.swipe-box .swipe-indicators .swipe-indicators-item:not(:last-child){
    margin-right: 6px;
}
.swipe-box .swipe-indicators .swipe-indicators-item-active{
    opacity: 1;
}
</style>