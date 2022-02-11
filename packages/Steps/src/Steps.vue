<!--
 * @Author: 
 * @Date: 2022-01-10 10:14:29
 * @LastEditTime: 2022-01-12 17:36:39
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="steps-box" :class="{'steps-box-horizontal': direction == 'horizontal','steps-box-vertical': direction !='horizontal'}">
      <div class="step-item-box">
         <slot></slot>
      </div>
  </div>
</template>

<script>
import { ref,nextTick,watch,onMounted } from 'vue'
export default{
  components:{},
  name: 'Steps',
  props:{
    active:{ // 当前下标值
      type:Number || String,
      default:0
    },
    direction:{ // 步骤条方向，可选值为 vertical
      type:String,
      default:'horizontal'
    },
    activeIcon:{// 当前步骤对应的底部图标，可选值见 Icon
      type:String,
      default:'icon-success',
    },
    inactiveIcon:{ // 非当前步骤对应的底部图标，可选值见 Icon 
       type:String,
       default:null,
    },
    finishIcon:{ // 已完成步骤对应的底部图标，优先级高于 inactive-icon，可选值见 Icon 
      type:String,
      default:null,
    },
  },
  setup(props,context){
    let domList = [];
    nextTick(()=>{
      domList = document.querySelectorAll('.step-item');
    })
    onMounted(()=>{
      domList = document.querySelectorAll('.step-item');
      let index = parseInt(props.active);
      for (let i = 0; i < domList.length; i++) {
        if(i < index){
          stepfinish(i);
        }else if(i > index){
          stepNormal(i);
        }else if (i == index){
          stepProcess(i);
        }
      }
    });
    watch(() => props.active,(count, prevCount) => {
      console.log(count,prevCount);
      for (let i = 0; i < domList.length; i++) {
        if(i < count){
          stepfinish(i);
        }else if(i > count){
          stepNormal(i);
        }else if (i == count){
          stepProcess(i);
        }
      }
  })
    const stepNormal = function(index){
      if(props.direction == 'horizontal'){
        domList[index].setAttribute('class','step-item-horizontal step-item');
      }else{
        domList[index].setAttribute('class','step-item-vertical step-item');
      }
      domList[index].children[0].setAttribute('class','step-title');
      if(props.inactiveIcon == null){
        domList[index].children[1].children[0].setAttribute('class','step-circle');
      }else{
        domList[index].children[1].children[0].setAttribute('class','iconfont ' + props.inactiveIcon);
      }
    };
    const stepfinish = function(index){
      if(props.direction == 'horizontal'){
        domList[index].setAttribute('class','step-item-horizontal step-item step-finish');
      }else{
        domList[index].setAttribute('class','step-item-vertical step-item step-finish');
      }
      domList[index].children[0].setAttribute('class','step-title');
      if(props.finishIcon == null){
        domList[index].children[1].children[0].setAttribute('class','step-circle step-icon-active');
      }else{
        domList[index].children[1].children[0].setAttribute('class','step-icon-active iconfont' + props.finishIcon);
      }
    };
    const stepProcess = function(index){
      if(props.direction == 'horizontal'){
        domList[index].setAttribute('class','step-item-horizontal step-item');
      }else{
        domList[index].setAttribute('class','step-item-vertical step-item');
      }
      domList[index].children[0].setAttribute('class','step-title step-title-active');
      domList[index].children[1].children[0].setAttribute('class','step-icon-active iconfont ' + props.activeIcon);
    };
    return {
    }
  },
}
</script>

<style scoped>
.steps-box{
    overflow: hidden;
    background-color: #fff;
}
.steps-box-horizontal {
    padding: 10px 10px 0;
}
.steps-box-vertical{
    padding: 0 0 0 32px;
}
.steps-box-horizontal .step-item-box{
    position: relative;
    display: flex;
    margin: 0 0 10px;
    padding-bottom: 22px;
}
</style>