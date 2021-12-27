<!--
 * @Author: 
 * @Date: 2021-12-20 15:24:25
 * @LastEditTime: 2021-12-21 14:52:20
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="NavBar-box">
      <div class="NavBar-content-box" :style="{position:fixed == true && 'fixed',top:fixed == true && '0px',left:fixed == true && '0px',zIndex:zIndex}">
        <div class="left-box">
            <i class="iconfont icon-left" v-if="leftArrow" :style="{color:leftColor}"></i>
            <slot name="left"></slot>
            <span v-if="leftText != ''" :style="{color:leftColor}">{{leftText}}</span>
        </div>
        <div class="NavBar-title" :style="{fontSize:size,color:color}"><slot name="title"></slot>{{title}}</div>
        <div class="right-box"><slot name="right"></slot><span v-if="rightText != ''" :style="{color:rightColor}">{{rightText}}</span></div>
      </div>
      <div class="NavBar-placeholder" v-if="placeholder"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'NavBar',
  props:{
      title:{ // 标题
          type:String,
          default:''
      },
      leftText:{ // 左侧文案
          type:String,
          default:''
      },
      rightText:{ // 右侧文案
          type:String,
          default:''
      },
      leftColor:{ // 左侧文案颜色
          type:String,
          default:'#1989fa'
      },
      color:{ // 标题颜色
          type:String,
          default:'black'
      },
      rightColor:{ // 右侧文案颜色
          type:String,
          default:'#1989fa'
      },
      leftArrow:{ // 是否显示左侧箭头
          type:Boolean,
          default:false,
      },
      fixed:{ // 是否固定顶部
          type:Boolean,
          default:false,
      },
      placeholder:{ // 固定在顶部时，是否在标签位置生成一个等高的占位元素
          type:Boolean,
          default:false,
      },
      zIndex:{ // 导航栏 z-index
          type:Number,
          default:1,
      }
  },
  setup(props,context){
    return {
    }
  },
}
</script>

<style scoped>
.NavBar-box{
    position: relative;
}
.NavBar-box .NavBar-content-box{
    width: 100%;
    overflow: hidden;
    background-color: white;
    align-items: center;
    height: 46px;
    display: flex;
    position: relative;
    margin:auto;
}
.NavBar-box .NavBar-content-box .left-box{
    position: absolute;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
}
.NavBar-box .NavBar-content-box .left-box .iconfont,.NavBar-box .NavBar-content-box .right-box .iconfont{
    margin-right: 4px;
}
.NavBar-box .NavBar-content-box .right-box {
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
}
.NavBar-box .NavBar-content-box .NavBar-title{
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: 16px;
}
.NavBar-box .NavBar-placeholder{
    width: 100%;
    height: 46px;
    position: relative;
    top: 0;
    left: 0;
}
</style>