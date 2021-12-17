<!--
 * @Author: 
 * @Date: 2021-12-15 14:11:28
 * @LastEditTime: 2021-12-15 16:12:53
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="Actionsheet-box" v-if="modelType">
      <div class="Actionsheet-dialog">
        <div class="Actionsheet-item" @click="ActionChange(item)" v-for="(item,index) in Action">{{item.value}}</div>
        <div class="Actionsheet-item cancel-item" @click="CancelClick">取消</div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  name: 'Actionsheet',
  props:{
        modelType:{
            type:Boolean,
            default:false,
        },
        Action:{ // 列表
            type:Array,
            default:[],
        },
    },
    setup(props,context){
        const ActionChange = function(item){
            context.emit('ActionChange',item);
        }
        const CancelClick = function(){
            context.emit('CancelClick');
        }
        return {
            ActionChange,
            CancelClick,
        }
    },
}
</script>

<style scoped>
.Actionsheet-box{
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
}
.Actionsheet-box .Actionsheet-dialog{
    position: fixed;
    width: 100%;
    bottom:0;
    left: 0;
    animation: mymove 0.5s infinite;
    animation-iteration-count: 1;
    background-color: #e0e0e0;
    padding-bottom:constant(safe-area-inset-bottom);
    padding-bottom:env(safe-area-inset-bottom);
}
@keyframes mymove {
  0% {
    transform:translate(-0%,100%);
  }
  100% {
     transform:translate(0%,0%);
  }
}
.Actionsheet-box .Actionsheet-dialog .Actionsheet-item{
    width: 100%;
    background-color: white;
    text-align: center;
    height:50px;
    line-height: 50px;
    border-bottom:1px solid #e0e0e0;
}
.Actionsheet-box .Actionsheet-dialog .cancel-item{
    margin-top: 5px;
}
</style>