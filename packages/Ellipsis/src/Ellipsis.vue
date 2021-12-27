<!--
 * @Author: 
 * @Date: 2021-12-13 14:22:27
 * @LastEditTime: 2021-12-27 15:40:09
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="ellipsis-box">
      <div class="ellipsis-text" :style="[{WebkitLineClamp : lineClamp},ellipsisStyle]"><slot></slot></div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'Ellipsis',
  props:{
      ellipsisStyle:{ // 文本样式自定义
          type:Object,
          default:{}
      },
      lineClamp:{ // 显示行数
          type:Number,
          default:1,
      },
  },
  setup(props,context){
    return {
    }
  },
}
</script>

<style scoped>
.ellipsis-box .ellipsis-text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>