<!--
 * @Author: 
 * @Date: 2021-12-09 11:25:53
 * @LastEditTime: 2021-12-15 10:34:41
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="loading-box">
      <i class="iconfont load-icon icon-jiazaizhong" v-if="loadingType == 'normal'"></i>
      <i class="iconfont load-icon icon-loading" v-if="loadingType == 'spinner'"></i>
      <p class="text">{{titletext}}</p>
  </div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default{
  name: 'Loading',
  props:{
        title:{ // 提示的内容
          type:String,
          default:'加载中'
        },
        loadingType:{ // 显示图标类型
            type:String,
            default:'spinner'
        },
        type:{ // 组件状态
            type:Boolean,
            default:true
        }
  },
  setup(props,context){
      let titletext = ref('');
      onMounted(() => {
          if(props.title.length > 8){
              titletext.value = props.title.substr(0,8);
          }else{
              titletext.value = props.title;
          }
    });
    return {
        titletext,
    }
  },
}
</script>

<style scoped>
.loading-box{
  position: fixed;
  left: 50%;
  top:50%;
  text-align: center;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  transform:translate(-50%,-50%);
  padding:0.8rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.4rem;
}
.loading-box .load-icon{
    color: white;
    font-size: 30px;
    display: block;
    animation: myfirst 0.36s infinite;
    -webkit-animation:myfirst 0.36s infinite;
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode:forwards;
    animation-timing-function:linear;
    -webkit-animation-timing-function:linear; /* Safari 和 Chrome */
}
@keyframes myfirst
{
    0%   {transform:rotate(0deg);}
    5%   {transform:rotate(18deg);}
    10%   {transform:rotate(36deg);}
    15%   {transform:rotate(54deg);}
    20%   {transform:rotate(72deg);}
    25%   {transform:rotate(90deg);}
    30%   {transform:rotate(108deg);}
    35%   {transform:rotate(126deg);}
    40%   {transform:rotate(108deg);}
    45%   {transform:rotate(162deg);}
    50%  {transform:rotate(180deg);}
    55%   {transform:rotate(198deg);}
    60%  {transform:rotate(216deg);}
    65%   {transform:rotate(234deg);}
    70%  {transform:rotate(252deg);}
    75%   {transform:rotate(270deg);}
    80%  {transform:rotate(288deg);}
    85%   {transform:rotate(306deg);}
    90%  {transform:rotate(324deg);}
    95%   {transform:rotate(342deg);}
    100% {transform:rotate(360deg);}
}
 
@-webkit-keyframes myfirst /* Safari 与 Chrome */
{
    0%   {transform:rotate(0deg);}
    5%   {transform:rotate(18deg);}
    10%   {transform:rotate(36deg);}
    15%   {transform:rotate(54deg);}
    20%   {transform:rotate(72deg);}
    25%   {transform:rotate(90deg);}
    30%   {transform:rotate(108deg);}
    35%   {transform:rotate(126deg);}
    40%   {transform:rotate(108deg);}
    45%   {transform:rotate(162deg);}
    50%  {transform:rotate(180deg);}
    55%   {transform:rotate(198deg);}
    60%  {transform:rotate(216deg);}
    65%   {transform:rotate(234deg);}
    70%  {transform:rotate(252deg);}
    75%   {transform:rotate(270deg);}
    80%  {transform:rotate(288deg);}
    85%   {transform:rotate(306deg);}
    90%  {transform:rotate(324deg);}
    95%   {transform:rotate(342deg);}
    100% {transform:rotate(360deg);}
}
.loading-box .text{
    color: white;
    font-size: 16px;
    margin-bottom: 0;
}
</style>