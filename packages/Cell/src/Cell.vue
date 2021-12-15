<!--
 * @Author: 
 * @Date: 2021-12-06 14:21:42
 * @LastEditTime: 2021-12-09 11:19:17
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class='Cell-box' :class="{'border' : border == 'true'}" :style="{fontSize:fontsize,borderColor:borderColor}">
    <div class="cell-left-box">
        <p class="cell-title" :style="{fontWeight:titleWeight,color:titleColor}">{{title}}</p>
    </div>
    <div class="cell-right-box" @click="CellClick">
        <p class="cell-value">{{content}}</p>
        <div class="right-icon" v-if="isIcon" :style="{marginTop:fontsize,height:fontsize}">
            <i class="iconfont icon-right" :style="{color:contentColor}"></i>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  name: "Cell",
  components:{
      
  },
  props:{
      title:{// 标题文本
          type:String,
          default:'标题'
      },
      border:{// 是否允许边框
        type:String,
        default:'true'
      },
      borderColor:{
        type:String,
        default:'#E4E5ED'
      },
      titleWeight:{// 标题粗细(normal、bold、bolder)
          type:String,
          default:'bold'
      },
      titleColor:{ // 标题颜色
          type:String,
          default:'#1E223B'
      },
      content:{// 内容文本
          type:String,
          default:'显示内容'
      },
      contentColor:{// 内容颜色
          type:String,
          default:'#7B7F93'
      },
      isIcon:{// 是否显示跳转icon
          type:Boolean,
          default:false,
      },
      fontsize:{ // 字体大小
          type:String,
          default:"16px"
      },
  },
  setup(props,context){
      const CellClick = function(){context.emit('CellClick')};
    return {
        CellClick,
    }
  },
}
</script>

<style scoped>
    .border{
        border-style: solid;
        border-width: 1px;
        border-left:none;
        border-right:none;
    }
    .Cell-box{
        overflow: hidden;
    }
    .Cell-box .cell-left-box{
        float: left;
    }
    .Cell-box .cell-right-box{
        float: right;
        display: flex;
    }
    .Cell-box .cell-right-box .right-icon{
        margin-left:4px;
    }
    .Cell-box .cell-right-box .right-icon .icon-right{
        margin-top:2px;
        height: 100%;
        display: block;
    }
</style>