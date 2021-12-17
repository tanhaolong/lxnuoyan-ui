<!--
 * @Author: 
 * @Date: 2021-12-15 16:35:42
 * @LastEditTime: 2021-12-16 14:22:31
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="switch-box" :class="{'switch-on': Switchvalue == true}" :style="{fontSize:size,backgroundColor: Switchvalue ? color : ''}" @click="SwitchChange">
       <div class="switch-icon"></div>
  </div>
  <p>{{Switchvalue}}</p>
</template>

<script>
import { ref,onMounted,watch } from 'vue'
export default{
  name: 'Switch',
  props:{
      color:{
          type:String,
          default:'#1989fa'
      },
      size:{
          type:String,
          default:'30px'
      },
      value:{
          type:Boolean,
          default:null,
      }
  },
  setup(props,context){
    let Switchvalue = ref(props.value);
    watch(props, () => {
        Switchvalue.value = props.value;
        console.log('watch',props.value);
    })
    onMounted(()=>{
        if(props.value == null){
            Switchvalue.value = false;     
        }else{
            Switchvalue.value = props.value;
        }
    })
    const SwitchChange = function(){
        if(props.value == null){
            Switchvalue.value = !Switchvalue.value;
            context.emit('SwitchChange',Switchvalue.value);
        }else{
            console.log('props',props.value);
            Switchvalue.value = props.value;
            context.emit('input',Switchvalue.value);
        }
    }
    return {
        Switchvalue,
        SwitchChange,
    }
  },
}
</script>

<style scoped>
    .switch-box{
        position: relative;
        display: inline-block;
        box-sizing: content-box;
        width: 2em;
        height: 1em;
        font-size: 30px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 1em;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
    }
    .switch-box .switch-icon{
        position: absolute;
        top: 0;
        left: 0;
        width: 1em;
        height: 1em;
        font-size: inherit;
        background-color: #fff;
        border-radius: 100%;
        box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%), 0 2px 2px 0 rgb(0 0 0 / 10%), 0 3px 3px 0 rgb(0 0 0 / 5%);
        -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
        transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
        transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
        transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05), -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05)
    }
    .switch-on .switch-icon{
        transform: translateX(1em);
    }
</style>