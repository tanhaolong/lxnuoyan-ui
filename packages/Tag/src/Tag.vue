<!--
 * @Author: 
 * @Date: 2021-12-10 11:08:46
 * @LastEditTime: 2021-12-10 15:59:41
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="tag-box " :class="{'plain' : plain,'round' : round,'mark' : mark}" :style="{'backgroundColor': bgcolor == '' ? plain ? 'transparent' : typeStyle[type] : bgcolor,'color': color == '' ? plain ? typeStyle[type] : 'white' : color,'borderColor': plain ? color=='' ? typeStyle[type] : color : 'none','fontSize': size}">
      <span class="tag-text">{{text}}</span> <i v-if="closeable" class="iconfont icon-guanbi" @click="CloseClick" :style="{'fontSize': size}"></i>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  components:{},
  name: 'Tag',
  props:{
        text:{ // 显示文本
            type:String,
            default:'标签'
        },
        plain:{ // 是否空心
            type:Boolean,
            default:false
        },
        round:{ // 是否圆角
            type:Boolean,
            default:false,
        },
        mark:{ // 是否标记
            type:Boolean,
            default:false,
        },
        closeable:{// 是否为可关闭标签
            type:Boolean,
            default:false,
        },
        type:{ // 标签类型
            type:String,
            default:'primary'
        },
        size:{ // 标签大小
            type:String,
            default:'14px'
        },
        color:{ // 文本颜色
            type:String,
            default:''
        },
        bgcolor:{ // 背景颜色
            type:String,
            default:''
        }
  },
  setup(props,context){
        const typeStyle = {
                'primary':'#1989fa',
                'success':'#07c160',
                'danger':'#ee0a24',
                'warning':'#ff976a'
        };
        const CloseClick = function(){context.emit('CloseClick')};
    return {
        typeStyle,
        CloseClick,
    }
  },
}
</script>

<style scoped>
.tag-box{
    background-color: #1989fa;
    width: fit-content;
    font-size: 14px;
    padding: 0 4px;
    color: white;
    display: inline-flex;
    align-items: center;
    -webkit-box-align:center;
}
.tag-box .tag-text{
    display: block;
}
.plain{
    border-style: solid;
    border-width: 1px;
}
.round{
    border-radius: 999px;
}
.mark{
    border-radius: 0 999px 999px 0;
}

</style>