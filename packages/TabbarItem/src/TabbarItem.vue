<!--
 * @Author: 
 * @Date: 2021-12-24 15:06:04
 * @LastEditTime: 2021-12-28 13:44:46
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="tabbar-item-box" @click="tabbarChange">
        <div class="tabbar-item-icon">
          <i class="iconfont" :class="icon"></i>
          <div class="dot" v-if="dot && !badge"></div>
          <div class="badge" v-if="badge">{{badge}}</div>
        </div>
        <div class="tabbar-item-text"><slot></slot></div>
    </div>
</template>

<script>
import { ref,getCurrentInstance,reactive,onMounted } from 'vue'
export default{
  components:{},
  name: 'TabbarItem',
  props:{
      icon:{
        type:String,
        default:'',
      },
      dot:{ // 是否显示图标右上角小红点
        type:Boolean,
        default:null
      },
      badge:{ // 图标右上角徽标的内容
        type:String || Number,
        default:null
      },
  },
  mounted(){
    
  },
  setup(props,context){
    const ctx = reactive(getCurrentInstance());
    const tabbarChange = function(){
      console.log(ctx,context);
      ctx.parent.proxy.selected = context.attrs.name;
    };
    return {
      tabbarChange,
    }
  },
}
</script>

<style scoped>
.tabbar-item-box{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 14px;
    line-height: 1;
}
.tabbar-item-box .tabbar-item-icon{
    position: relative;
    margin-bottom: 4px;
    font-size: 24px;
}
.tabbar-item-box .iconfont {
    font-size: 28px;
}
.tabbar-item-box .dot{
  background-color: #ee0a24;
  width: 8px;
  height: 8px;
  transform: translate(50%,0%);
  border-radius: 100%;
  position: absolute;
  top:0;
  right: 0;
}
.badge{
  background-color: #ee0a24;
  color: white;
  font-size: 12px;
  padding: 0 3px;
  transform: translate(50%,0%);
  position: absolute;
  top: 0;
  right: 0;
  border-radius:999px;
  line-height: 1.2;
  text-align: center;
}
</style> 