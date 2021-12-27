<!--
 * @Author: 
 * @Date: 2021-12-21 16:28:12
 * @LastEditTime: 2021-12-27 15:52:34
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->`
<template>
  <div class="tabbar-box">
      <slot></slot>    
  </div>
</template>

<script>
import { ref,reactive,watch,onMounted,getCurrentInstance } from 'vue'
export default{
  components:{},
  name: 'Tabbar',
  props:{
    modelValue:{ // 选中值
      type: String,
    },
    fixed:{ // 是否固定在底部
      type:Boolean,
      default:false,
    },
    color:{ // 图标字体颜色
      type:String,
      default:'#646566'
    },
    selectColor:{// 选中图表字体颜色
      type:String,
      default:'#1989fa',
    },
    List:{ // tabbar列表项列表
      type:Array,
      default:[]
    },
  },
  setup(props,context){
    const ctx = reactive(getCurrentInstance());
    let item = document.getElementsByClassName('tabbar-item-box');
    let selected = ref(props.modelValue);
    onMounted(()=>{
      for (let i = 0; i < item.length; i++) {
        if(item[i].getAttribute('name') == selected.value){
          item[i].setAttribute('style', 'color:'+ props.selectColor);
        }else{
          item[i].setAttribute('style', 'color:'+ props.color);
        }
      }
    });
    const TabbarChange = function(){
      for (let i = 0; i < item.length; i++) {
        if(item[i].getAttribute('name') == selected.value){
          item[i].setAttribute('style', 'color:'+ props.selectColor);
        }else{
          item[i].setAttribute('style', 'color:'+ props.color);
        }
      }
    };
    watch(selected,(newProps, oldProps) => {
      selected.value = newProps;
      TabbarChange();
      context.emit('update:modelValue',newProps);
      context.emit('tabbarChange',newProps);
    });
    return {
      selected,
    }
  },
}
</script>

<style scoped>
.tabbar-box{
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
}
.tabbar-fixed{
  position: fixed;
  bottom:0;
  left: 0;
}
</style>