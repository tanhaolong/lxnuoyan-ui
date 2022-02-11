<!--
 * @Author: 
 * @Date: 2022-01-10 10:12:55
 * @LastEditTime: 2022-01-12 16:17:10
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
 <div class="step-item">
          <div class="step-title">
            <slot></slot>
          </div>
          <div class="step-circle-container">
              <i class="step-circle"></i> 
          </div>
          <div class="step-line"></div>
        </div>
</template>
<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'StepItem',
  props:{
    
  },
  setup(props,context){
    return {
    }
  },
}
</script>

<style scoped>

.step-item-horizontal{
    float: left;
}
.step-item-vertical{
    display: block;
    float: none;
    padding: 10px 10px 10px 0;
    line-height:18px;
}
.step-item{
    position: relative;
    flex: 1;
    color: #969799;
    font-size: 14px;
}
.step-circle{
  display: block;
  width: 5px;
  height: 5px;
  background-color: #969799;
  border-radius: 50%;
}
.step-line{
    position: absolute;
    background-color:#ebedf0;
    transition: background-color 0.3s;
    
}
.step-icon, .step-title{
    transition: #969799 0.3s;
}
.step-icon-active, .step-title-active, .step-icon-finish, .step-title-finish{
    color: #07c160;
}
.step-finish {
  color: #323233;
}
.step-finish .step-circle, .step-finish .step-line{
    background-color: #07c160;
}

.step-item-horizontal:last-child {
    position: absolute;
    right: 1px;
    width: auto;
}

.step-item-horizontal .step-line{
    top: 30px;
    left: 0;
    width: 100%;
    height: 1px;
}
.step-item-horizontal .iconfont{
  font-size: 12px;
  display: block;
}

.step-item-horizontal .step-title{
  display: inline-block;
  margin-left: 3px;
  font-size: 14px;
  transform: translate(-50%);
}
.step-item-horizontal:last-child {
    position: absolute;
    right: 1px;
    width: auto;
}
.step-item-vertical:not(:last-child):after {
    border-bottom-width: 1px;
}
.step-item-vertical:after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid var(--van-border-color);
    transform: scale(.5);
}
.step-item:last-child .step-line{
  width: 0;
}
.step-item-vertical .step-line {
    top: 16px;
    left: -15px;
    width: 1px;
    height: 100%;
}
.step-item-vertical .step-circle-container {
    position: absolute;
    top: 19px;
    left: -15px;
    z-index: 1;
    font-size: var(--van-step-icon-size);
    line-height: 1;
    transform: translate(-50%,-50%);
}
.step-item-horizontal .step-circle-container {
    position: absolute;
    top: 30px;
    left: -8px;
    z-index: 1;
    padding: 0 8px;
    background-color: #fff;
    transform: translateY(-50%);
}
.step-item-horizontal:last-child .step-circle-container {
    right: -9px;
    left: auto;
}
.step-item-horizontal:first-child .step-title {
    margin-left: 0;
    transform: none;
}
.step-item-horizontal:last-child .step-title {
    margin-left: 0;
    transform: none;
}
</style>