<!--
 * @Author: 
 * @Date: 2021-12-10 09:54:41
 * @LastEditTime: 2021-12-10 11:06:04
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="Empty-box">
      <i class="iconfont empty-icon icon-zanwushuju" v-if="type == 'empty'"></i>
      <i class="iconfont empty-icon icon-wushuju" v-if="type == 'search'"></i>
      <i class="iconfont empty-icon icon-wangluocuowu" v-if="type == 'error'"></i>
      <p class="empty-text">暂无内容</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'Empty',
  props:{
      text:{ // 文本内容
          type:String,
          default:'暂无内容'
      },
      type:{ // 显示类型(empty:空数据、search:搜索空数据、error：网络错误)
          type:String,
          default:'search'
      }
  },
  setup(props,context){
    return {
    }
  },
}
</script>

<style scoped>
.Empty-box{
     overflow: hidden;
}
.Empty-box .empty-icon{
    font-size:10rem;
    display: block;
    text-align: center;
    margin-top: 3rem;
    color: #e5e2e9;
}
.Empty-box .empty-text{
    text-align: center;
    color: #969799;
}
</style>