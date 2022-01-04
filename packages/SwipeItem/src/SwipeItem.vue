<!--
 * @Author: 
 * @Date: 2021-12-29 14:38:13
 * @LastEditTime: 2022-01-04 17:27:17
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="swipe-item" @click.stop="itemClick">
      <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'SwipeItem',
  props:{},
  setup(props,context){
    const itemClick = function(){
      context.emit('click');
    };
    return {
      itemClick,
    }
  },
}
</script>

<style scoped>
.swipe-item{
    position: relative;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}

</style>