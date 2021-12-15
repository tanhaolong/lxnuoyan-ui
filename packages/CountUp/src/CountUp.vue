<!--
 * @Author: 
 * @Date: 2021-12-10 17:39:45
 * @LastEditTime: 2021-12-13 13:47:18
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="Count-Up-box" :style="CountUpStyle">
      <span class="Count-Up-item" v-for="(item,index) in TextValue">{{item}}</span>
  </div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default{
  components:{},
  name: 'CountUp',
  props:{
      Textnumber:{ // 显示数字滚动文本
          type:Number,
          default:0
      },
      CountUpStyle:{ // 样式
          type:Object,
          default:{}
      },
      duration:{ // 动画滚动时长
          type:Number,
          default:3000
      }
  },
  setup(props,context){
        const TextValue = ref([]);
        let Textnumbers = props.Textnumber;
    onMounted(()=>{
        let arr = [];
        let durationTime = props.duration / 1000;
        let timerArr = [];
        let roundArr = [];
        Textnumbers = Textnumbers.toString();
        for (let index = 0; index < Textnumbers.length; index++) {
            timerArr.push(null);
            let num = Textnumbers.substring(index,index + 1);
            if(num != '.'){
                num = parseInt(num)
                TextValue.value.push(0);
            }else{
                TextValue.value.push(num);
            }
            roundArr.push(durationTime * index * 2);
            arr.push(num);
        }
        for (let index = 0; index < arr.length; index++) {
            if(arr[index]!= '.'){
                timerArr[index] = setInterval(function(){
                    if(TextValue.value[index] >= 9){
                        TextValue.value[index] = 0;
                    }else{
                        TextValue.value[index] =  TextValue.value[index] + 1;
                    }
                    if(arr[index] == TextValue.value[index] && roundArr[index] > 0){
                        roundArr[index] = roundArr[index] - 1;
                    }
                    if(roundArr[index] == 0 && arr[index] == TextValue.value[index]){
                        clearInterval(timerArr[index])
                    }
                }, 10);
            }
        }
    })
    return {
        TextValue,
    }
  },
}
</script>

<style scoped>
</style>