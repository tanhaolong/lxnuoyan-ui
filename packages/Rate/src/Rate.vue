<!--
 * @Author: 
 * @Date: 2021-12-20 10:06:45
 * @LastEditTime: 2021-12-20 15:14:17
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="rate-box">
      <div class="star-box" v-for="(item,index) in count" @click="readonly == false && RateChange(index)" :style="{margin:'0 ' + margin}">
        <i class="iconfont icon-star2" v-if="mode == 'line'" :style="{fontSize:size,color:borderColor}"></i>
        <i class="iconfont icon-star2 half" v-if="mode == 'line' && half == true" style="color: transparent;" :style="{fontSize:size}" @click.stop="readonly == false && halfChange(index)"></i>
        <i class="iconfont icon-pingfen_xuanzhong" v-if="mode == 'fill'" :style="{fontSize:size,color:fillColor}"></i>
        <i class="iconfont icon-pingfen_xuanzhong half" v-if="mode == 'fill' && half == true" style="color: transparent;" :style="{fontSize:size}" @click.stop="readonly == false && halfChange(index)"></i>
        <i class="iconfont icon-pingfen_xuanzhong selected" v-if="rateArray[index] == 1" :style="{fontSize:size,color:color}"></i>
        <i class="iconfont icon-pingfen_xuanzhong selected half" @click.stop="readonly == false && halfChange(index)" v-if="rateArray[index] == 0.5 && half == true" :style="{fontSize:size,color:color}"></i>
      </div>
  </div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default{
  components:{},
  name: 'Rate',
  props:{
        size:{ // 图标大小
            type:String, 
            default:'30px'
        },
        mode:{ // 填充模式
            type:String,
            default:'line'
        },
        margin:{ // 元素距离
            type:String,
            default:'2px'
        },
        borderColor:{ // 未选中边框颜色
            type:String,
            default:'#c8c9cc'
        },
        half:{ // 是否半星
            type:Boolean,
            default:false,
        },
        readonly:{ // 是否只读
            type:Boolean,
            default:false,
        },
        fillColor:{// 填充颜色
            type:String,
            default:'#eeeeee'
        },
        color:{ // 选中颜色
            type:String,
            default:'#FFD31F'
        },
        count:{ // 图标总数
            type:Number,
            default:5,
        },
        value:{ // 当前值
            type:Number,
            default:null
        },
  },
  setup(props,context){
      const rateArray = ref([]);
      onMounted(()=>{
          let rateArr = [];
          if(props.value == null){
            for (let i= 0;i < props.count;i++) {
                rateArr.push(0);
            }   
          }else{
              for (let i= 0;i < props.count;i++) {
                if(props.value >= i){
                    if(props.value >= i + 1){
                        rateArr.push(1);
                    }else if(props.value > i && props.value < i + 1){
                        rateArr.push(0.5);
                    }
                }else{
                     rateArr.push(0);
                }
            }
          }
          rateArray.value = rateArr;
      })
      const RateChange = function(index){
          let value = 0;
          let arr = rateArray.value;
          for(let i = 0; i < arr.length; i ++){
              if(i <= index){
                  arr[i] = 1;
              }else{
                  arr[i] = 0;
              }
              value = value + arr[i];
          }
          rateArray.value = arr;
          context.emit('RateChange',value);
      };
      const halfChange = function(index){
        let value = 0;
        let arr = rateArray.value;
        for(let i = 0; i < arr.length; i ++){
              if(i <= index){
                  arr[i] = 1;
                  value = value + 1;
              }else{
                  arr[i] = 0;
              }
        } 
          arr[index] = 0.5;
          value = (value - 1) + 0.5;
          rateArray.value = arr;
          context.emit('RateChange',value);
    };
    return {
        rateArray,
        halfChange,
        RateChange,
    }
  },
}
</script>

<style scoped>
.rate-box{
    display: flex;
}
.rate-box .star-box{
    position: relative;
    overflow: hidden;
}
.rate-box .star-box .selected{
    position: absolute;
    left: 0;
    top:0;
}
.rate-box .star-box .half{
    position: absolute;
    left: 0;
    top:0;
    width: 50%;
    overflow: hidden;
    z-index: 1;
}
</style>