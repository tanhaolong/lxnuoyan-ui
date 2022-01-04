<!--
 * @Author: 
 * @Date: 2021-12-29 14:36:43
 * @LastEditTime: 2022-01-04 17:20:18
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="swipe-box">
      <div class="swipe-track" :class="{'swipe-track-vertical' : vertical == true}" @touchstart="touchStartChange" @touchmove="moveChange" @touchend="touchEndChange" :style="{'transition-duration': ismove == true ? '0ms' : duration + 'ms','transform': vertical == true ? 'translateY('+ -enddistance + 'px)' : 'translateX('+ -enddistance + 'px)'}">
        <slot></slot>
      </div>
      <div class="swipe-indicators" :class="{'swipe-indicators-vertical' : vertical == true}">
          <slot name="indicator">
              <div class="swipe-indicators-item" v-for="(item,indexs) in swiperDomNum" :style="{'background': indexs == index && indicatorColor }"></div>
          </slot>
      </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, nextTick } from "vue";
export default {
  components: {},
  name: "Swipe",
  props: {
    vertical: {// 是否为纵向滚动
      type: Boolean,
      default: false
    },
    width:{ // 滑块宽度，单位为px
      type:Number,
      default:null,
    },
    height:{ // 滑块高度，单位为px
      type:Number,
      default:null,
    },
    initialSwipe:{ // 初始位置索引值
        type:Number,
        default:0
    },
    autoplay:{ // 自动轮播间隔，单位为 ms
      type:Number,
      default:null,
    },
    duration:{// 动画时长，单位为 ms
        type:Number,
        default:500
    },
    showIndicators: {// 是否显示指示器
      type: Boolean,
      default: true
    },
    loop: {// 是否开启循环播放
      type: Boolean,
      default: true
    },
    indicatorColor: {// 指示器颜色
      type: String,
      default: "#1989fa"
    }
  },
  setup(props, context) {
    const sceenUnit = ref(0); // 屏幕计量单位
    const timer = ref(null); // 计时器对象
    const timerOut = ref(null); // 延迟器对象
    const loops = ref(props.loop); // 是否开启循环播放
    const DomData = reactive({
      swiperDom: document.querySelectorAll(".swipe-box .swipe-item"), // 获取幻灯片dom元素列表
      indicatorDom: document.querySelectorAll(
        ".swipe-box .swipe-indicators-item"
      ), // 获取指示器dom元素列表
      boxDom: document.querySelector(".swipe-box") // 获取swiper盒子的dom元素
    });
    const swiperDomNum = ref(0); // 指示器总数量（跟幻灯片数量挂钩）
    const ismove = ref(false); //是否人工移动中状态
    const index = ref(props.initialSwipe); // 当前幻灯片显示DOM元素下标
    let startdistance = 0; // 触摸开始坐标
    let movedistance = 0; // 触摸结束坐标
    const enddistance = ref(0); // 实际距离（移动坐标）
    nextTick(() => {
      DomData.boxDom = document.querySelector(".swipe-box");
      DomData.swiperDom = document.querySelectorAll(".swipe-box .swipe-item");
      swiperDomNum.value = DomData.swiperDom.length;
      if(props.vertical == true){
          sceenUnit.value = props.height == null ? DomData.boxDom.clientHeight : props.height; // swipe盒子高度
      }else{
          sceenUnit.value = props.width == null ? DomData.boxDom.clientWidth : props.width; // swipe盒子宽度
      }
      nextTick(() => {
        DomData.indicatorDom = document.querySelectorAll(".swipe-box .swipe-indicators-item");
        init();
      });
    });
    /**
     * 组件初始化事件
     */
    const init = function(){
        ismove.value = true;
        if (DomData.indicatorDom.length > 0) {
        DomData.indicatorDom[0].setAttribute("class","swipe-indicators-item");
        DomData.indicatorDom[0].removeAttribute("style");
        DomData.indicatorDom[index.value].setAttribute("class","swipe-indicators-item swipe-indicators-item-active");
        DomData.indicatorDom[index.value].setAttribute("style","background:" + props.indicatorColor);
        }
        enddistance.value = index.value * sceenUnit.value;
        if((props.width !=null || props.height !=null) && loops.value == true){
          console.warn('目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。');
          loops.value = false;
        }
        autoplayChange();
    };
    /**
     * 自动轮播触发事件
     */
    const autoplayChange = function(){
      if(props.autoplay !=null){
        timer.value = setInterval(() => {
            ismove.value = false;
            DomData.indicatorDom[index.value].setAttribute("class","swipe-indicators-item");
            DomData.indicatorDom[index.value].removeAttribute("style");
            index.value = index.value + 1;
            if(index.value > DomData.swiperDom.length - 1){
              index.value = 0;
            }
            swiperMoveChange();
        }, props.autoplay);
      }
    };
    /**
     * 触摸开始触发事件
     */
    const touchStartChange = function(e) {
      movedistance = 0; // 每次触摸重新计算移动距离
      startdistance = 0;
      if(props.autoplay != null){
        clearInterval(timer.value);
        clearTimeout(timerOut.value);
      }
      if (props.vertical == true) {
        startdistance = e.changedTouches[0].clientY; // 记录点击Y轴
      } else {
        startdistance = e.changedTouches[0].clientX; // 记录点击X轴
      }
      ismove.value = false;
      if (loops.value == true) {
        if (index.value == 0) {
          // 判断当前显示是否第一个（即无缝衔接最后一个）;还原回原来的位置
          ismove.value = true;
          DomData.swiperDom[0].setAttribute("style",(props.vertical == true ? "height:"  : "width:")  + sceenUnit.value + "px;");
          enddistance.value = 0;
        } else if (index.value == swiperDomNum.value - 1) {
          // 判断当前显示是否最后一个（即无缝衔接第一个）;还原回原来的位置
            ismove.value = true;
            DomData.swiperDom[DomData.swiperDom.length - 1].setAttribute("style",(props.vertical == true ? "height:"  : "width:") + sceenUnit.value + "px;");
            enddistance.value = index.value * sceenUnit.value; //最后显示滑动的距离
        }
      }
    };
    /**
     * 触摸移动触发事件
     */
    const moveChange = function(e) {
      ismove.value = true; // 去掉动画延迟
       if (props.vertical == true) {// 计算触摸移动距离
            movedistance = startdistance - e.changedTouches[0].clientY;
        }else{
            movedistance = startdistance - e.changedTouches[0].clientX;
        }
      if (loops.value == false) {
        if ((index.value == DomData.swiperDom.length - 1 && movedistance > 0) || (index.value == 0 && movedistance < 0)) {
            enddistance.value = index.value * sceenUnit.value;
            movedistance = 0;
            return;
        }
      }
        if (index.value == DomData.swiperDom.length - 1 && movedistance > 0) {
            // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
            DomData.swiperDom[0].setAttribute("style",(props.vertical == true ? "height:" : "width:") + sceenUnit.value +"px;transform: translate" + (props.vertical == true ? 'Y' : 'X') + "(" +sceenUnit.value * DomData.swiperDom.length + "px);");
        }else if (index.value == 0 && movedistance < 0) {
          // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
          console.log('第一个往最后一个滑动');
          console.log(index.value,movedistance);
          DomData.swiperDom[DomData.swiperDom.length - 1].setAttribute("style",(props.vertical == true ? "height:" : "width:") + sceenUnit.value +"px;transform: translate"+ (props.vertical == true ? 'Y' : 'X') + "(" + -sceenUnit.value * DomData.swiperDom.length +"px);");
        }
      enddistance.value = index.value * sceenUnit.value + movedistance; // 当前滑动的距离
    };
    /**
     * 触摸结束触发事件
     */
    const touchEndChange = function() {
      let limitValue = 0; // 滑动临界值
      ismove.value = false; // 滑动动画开启
      if (DomData.indicatorDom.length > 0) {
        DomData.indicatorDom[index.value].setAttribute("class","swipe-indicators-item");
        DomData.indicatorDom[index.value].removeAttribute("style");
      }
      limitValue = sceenUnit.value / 7; // 临界值为高度 7 / 1
      if (movedistance >= limitValue) {
        // 往（右、下）滑动屏幕宽度的临界值
        index.value = index.value + 1;
      } else if (movedistance <= -limitValue) {
        // 往（左、上）滑动屏幕宽度的临界值
        index.value = index.value - 1;
      }
      if(loops.value == false){
          if(index.value > DomData.swiperDom.length - 1 && movedistance >= limitValue){
              index.value = DomData.swiperDom.length - 1;
          }else if(index.value < 0 && movedistance <= -limitValue){
              index.value = 0;
          }
      }
      swiperMoveChange();
      if(props.autoplay != null){
        timerOut.value = setTimeout(autoplayChange(),props.duration);
      } 
    };
    /**
     * 幻灯片滚动触发事件
     */
    const swiperMoveChange = function(){
      if (index.value < 0) {
        // 判断当前显示是否最后一个（即无缝衔接第一个）,防止滑动时白屏
        DomData.swiperDom[DomData.swiperDom.length - 1].setAttribute("style",(props.vertical == true ? "height:" :"width:") + sceenUnit.value + "px;transform: translate"+(props.vertical == true ? "Y" :"X") + "(" + -sceenUnit.value * DomData.swiperDom.length + "px);");
        index.value = DomData.swiperDom.length - 1;
        enddistance.value = - sceenUnit.value;
        if (DomData.indicatorDom.length > 0) {
          DomData.indicatorDom[index.value].setAttribute("class","swipe-indicators-item swipe-indicators-item-active");
          DomData.indicatorDom[index.value].setAttribute("style","background:" + props.indicatorColor);
        }
        context.emit("change", index.value);
        return;
      } else if (index.value > DomData.swiperDom.length) {
        // 判断当前显示是否最后一个（即第一个往最后一个滑动）无缝衔接;防止滑动时白屏
        DomData.swiperDom[0].setAttribute("style",(props.vertical == true ? "height:" : "width:") + sceenUnit.value + "px;");
        index.value = 0;
        if (DomData.indicatorDom.length > 0) {
          DomData.indicatorDom[0].setAttribute( "class", "swipe-indicators-item swipe-indicators-item-active");
        }
        enddistance.value = 0;
        context.emit("change", index.value);
        return;
      } else if (index.value == DomData.swiperDom.length) {
        if (DomData.indicatorDom.length > 0) {
          DomData.indicatorDom[0].setAttribute("class","swipe-indicators-item swipe-indicators-item-active");
          DomData.indicatorDom[0].setAttribute("style","background:" + props.indicatorColor);
        }
        enddistance.value = index.value * sceenUnit.value; // 最后显示滑动的距离
        index.value = 0;
        context.emit("change", index.value);
        return;
      }
      DomData.swiperDom[index.value].setAttribute("style",(props.vertical == true ? "height:" : "width:") + sceenUnit.value + "px;");
      if (DomData.indicatorDom.length > 0) {
        DomData.indicatorDom[index.value].setAttribute("class","swipe-indicators-item swipe-indicators-item-active");
        DomData.indicatorDom[index.value].setAttribute("style","background:" + props.indicatorColor);
      }
      context.emit("change", index.value);
      enddistance.value = index.value * sceenUnit.value; // 最后显示滑动的距离
      setTimeout(function(){
        
      },props.duration);
    };
    return {
      touchStartChange,
      touchEndChange,
      moveChange,
      enddistance,
      index,
      ismove,
      swiperDomNum,
    };
  }
};
</script>

<style scoped>
.swipe-box {
  position: relative;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  cursor: grab;
  -webkit-user-select: none;
  user-select: none;
}
.swipe-box .swipe-track {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100%;
}
.swipe-box .swipe-track-vertical {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.swipe-box .swipe-indicators {
  position: absolute;
  bottom: 12px;
  left: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.swipe-box .swipe-indicators-vertical {
  top: 50%;
  bottom: auto;
  left: 12px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.swipe-box .swipe-indicators .swipe-indicators-item {
  width: 6px;
  height: 6px;
  background-color: #ebedf0;
  border-radius: 100%;
  opacity: 0.3;
  -webkit-transition: opacity 0.2s, background-color 0.2s;
  transition: opacity 0.2s, background-color 0.2s;
}
.swipe-box .swipe-indicators .swipe-indicators-item:not(:last-child) {
  margin-right: 6px;
}
.swipe-box .swipe-indicators-vertical .swipe-indicators-item:not(:last-child) {
  margin-bottom: 6px;
}
.swipe-box .swipe-indicators .swipe-indicators-item-active {
  opacity: 1;
}
</style>