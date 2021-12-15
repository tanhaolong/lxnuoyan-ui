<!--
 * @Author: 
 * @Date: 2021-12-13 14:22:27
 * @LastEditTime: 2021-12-13 14:54:16
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="ellipsis-box">
      <p class="ellipsis-text" :style="[{WebkitLineClamp : lineClamp},ellipsisStyle]">{{text}}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'Ellipsis',
  props:{
      text:{// 文本标题
          type:String,
          default:''
      },
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