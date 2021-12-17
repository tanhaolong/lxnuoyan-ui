<!--
 * @Author: 
 * @Date: 2021-12-16 14:54:53
 * @LastEditTime: 2021-12-17 15:05:21
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="evaluate-box" @click="evaluateChange">
      <i v-if="icon == 'like' && mode == 'line'" class="iconfont icon-xihuan1" :style="{fontSize:size,color : active == true ? 'transparent' : ''}"></i>
      <i v-if="icon == 'like' && mode == 'fill'" class="iconfont con-xihuan" :style="{fontSize:size,color : active == true ? 'transparent' : fillcolor == null ? '#F1F1F3' : fillcolor}"></i>
      <i v-if="icon == 'like' && type" class="iconfont icon-xihuan selected liked" :class="{animation : value != true }" :style="{fontSize:size,color: selectedcolor == null ? '' : selectedcolor,borderColor: selectedcolor == null ? '' : selectedcolor}"></i>
      <i v-if="icon == 'collection' && mode == 'line'" class="iconfont icon-shoucang" :style="{fontSize:size,color : active == true ? 'transparent' : ''}"></i>
      <i v-if="icon == 'collection' && mode == 'fill'" class="iconfont icon-B-pingfen" :style="{fontSize:size,color : active == true ? 'transparent' : fillcolor == null ? '#F1F1F3' : fillcolor}"></i>
      <i v-if="icon == 'collection' && type" class="iconfont icon-B-pingfen selected collectioned" :class="{animation : value != true }" :style="{fontSize:size,color: selectedcolor == null ? '' : selectedcolor,borderColor: selectedcolor == null ? '' : value != true ? selectedcolor : 'transparent'}"></i>
      <i v-if="icon == 'praise' && mode == 'line'" class="iconfont icon-dianzan" :style="{fontSize:size,color : active == true ? 'transparent' : ''}"></i>
      <i v-if="icon == 'praise' && mode == 'fill'" class="iconfont icon-dianzan1" :style="{fontSize:size,color : active == true ? 'transparent' : fillcolor == null ? '#F1F1F3' : fillcolor}"></i>
      <i v-if="icon == 'praise' && type" class="iconfont icon-dianzan1 selected liked" :class="{animation : value != true }" :style="{fontSize:size,color: selectedcolor == null ? '' : selectedcolor,borderColor: selectedcolor == null ? '' : value != true ? selectedcolor : 'transparent'}"></i>
  </div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default{
  name: 'Evaluate',
  props:{
    mode:{ // line：线条模式、fill：填充模式
      type:String,
      default:'line'
    },
    fillcolor:{ // 未选中状态填充颜色(仅填充模式生效)
      type:String,
      default:null,
    },
    selectedcolor:{// 选中状态填充颜色
      type:String,
      default:null
    },
    size:{ // 图标显示大小
      type:String,
      default:'30px',
    },
    icon:{ // 图标类型(like：喜欢【心形】、collection:收藏【五角星】、praise: 点赞【大拇指】)
      type:String,
      default:'like'
    },
    value:{ //当前是否选中
      type:Boolean,
      default:null,
    },

  },
  setup(props,context){
    const active = ref(false);
    const type = ref(props.value);
    const timer = ref(null);
    const evaluateChange = function(){
      type.value = !type.value;
      if(type.value == true){
        timer.value = setTimeout(function(){
          active.value = true;
        },400);
      }else{
        clearTimeout(timer.value);
        active.value = false;
      }
      context.emit('evaluateChange',type.value)};
    return {
      type,
      timer,
      active,
      evaluateChange,
    }
  },
}
</script>

<style scoped>
.evaluate-box{
  position: relative;
  width: fit-content;
  overflow: hidden;
  text-align: center; 
}
.evaluate-box .iconfont{
  font-size: 30px;
  border-radius: 100%;
  border:1px solid transparent;
  color: #2A2E3D;
}
.evaluate-box .animation{
  animation: collection 0.8s infinite;
  animation-iteration-count: 1;
  animation-fill-mode:forwards;
}
.evaluate-box .liked{
  color: #F36F6F;
  border-color: #F36F6F;
}
.evaluate-box .collectioned{
  color:#FFD31F;
  border-color: #FFD31F;
}
.selected{
  position: absolute;
  left: 0;
  top: -1px;
}
@keyframes like {
  0% {
    transform: scale(0);
    clip-path: circle(0% at 50% 50%);
    
  }
  30%{
    transform: scale(0.5);
    border-style:solid;
    border-width:1px;
  }
  60% {
     transform: scale(1);
     border-width:2px;
     border-style:solid;
     clip-path: circle(50% at 50% 50%);
  }
  80% {
      transform: scale(1.1);
  }
  100% {
      border:none;
      transform: scale(1);
  }
}
@keyframes collection {
  0% {
    transform: scale(0);
    clip-path: circle(0% at 50% 50%);
    
  }
  30%{
    transform: scale(0.5);
    border-style:solid;
    border-width:1px;
  }
  60% {
     transform: scale(1);
     border-width:2px;
     border-style:solid;
     clip-path: circle(50% at 50% 50%);
  }
  80% {
      transform: scale(1.1);
  }
  100% {
      border:none;
      transform: scale(1);
  }
}
</style>