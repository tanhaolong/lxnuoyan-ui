<!--
 * @Author: 
 * @Date: 2021-12-03 14:35:37
 * @LastEditTime: 2021-12-08 17:58:39
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
        <div class="dialog">
        <div class="dialog-content">
          <p class="title">{{title}}</p>
          <div class="content-box" :style="{textAlign:align}">
            <p class="dialog-text-content" :style="{color:contentColor,fontSize:contentFontSize}">{{content}}</p>
            <p class="dialog-text-description" :style="{color:descriptionColor,fontSize:descriptionFontSize}">{{description}}</p>
          </div>
          <div class="button-box" v-if="DisalogType == 'confirm'">
            <div class="double-button cancel-button" :style="{color:cancelColor}" @click="CancelClick">{{cancelText}}</div>
            <div class="line"></div>
            <div class="double-button confirm-button" :style="{color:confirmColor}" @click="ConfirmClick">{{confirmText}}</div>
          </div>
          <div class="button-box" v-if="DisalogType == 'alert'">
              <div class="alert-button" :style="{color:confirmColor}" @click="ConfirmClick">{{confirmText}}</div>
          </div>
        </div>
      </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  props: {
    title: { // 标题
      type: String,
      default: "温馨提示"
    },
    align:{ // 对齐方式
      type:String,
      default:"center",
    },
    content: { // 弹窗内容
      type: String,
      default: ""
    },
    contentColor:{// 弹窗内容颜色
      type:String,
      default:"#1E223B"
    },
    contentFontSize:{ // 弹窗内容字体大小
      type:String,
      default:"18px"
    },
    description:{ // 描述内容
      type:String,
      default:""
    },
    descriptionColor:{//描述内容颜色
      type:String,
      default:"#7B7F93"
    },
    descriptionFontSize:{ // 描述内容字体大小
      type:String,
      default:"14px"
    },
    DisalogType:{ // 弹窗类型(alert、confirm)
        type:String,
        default:"alert"
    },
    cancelText:{ // 取消按钮文本
        type:String,
        default:'取消'
    },
    cancelColor:{// 取消按钮颜色
        type:String,
        default:"#727585"
    },
    confirmText:{// 确认按钮文本
        type:String,
        default:"确认"
    },
    confirmColor:{ // 确认按钮颜色
        type:String,
        default:"#29C594"
    }
  },
  setup(props,context) {
        const CancelClick = function(){context.emit('CancelClick')};
        const ConfirmClick = function(){context.emit('ConfirmClick')};
    return {
        CancelClick,
        ConfirmClick,
    };
  }
};
</script>

<style scoped>
.dialog {
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
.dialog .dialog-content {
  background-color: #fff;
  border-radius: 16px;
  max-width: calc(100% - 80px);
  overflow: hidden;
  animation: mymove 0.5s infinite;
  animation-iteration-count: 1;
}
@keyframes mymove {
  0% {
    transform: scale(0); /*开始为原始大小*/
  }
  100% {
    transform: scale(1);
  }
}
.dialog .dialog-content .title {
  text-align: center;
  margin: 0;
  margin-top:20px;
  font-size:18px;
}

.dialog .dialog-content .content-box {
  padding: 0 20px;
}
.dialog .dialog-content .button-box {
  display: flex;
  border-top: 1px solid #ebedf0;
  font-size: 18px;
}
.dialog .dialog-content .button-box .double-button {
  width: calc(50% - 1px);
  height: 50px;
  line-height:50px;
  text-align: center;
}
.dialog .dialog-content .button-box .line {
  background: #ebedf0;
  width: 1px;
  height:50px;
}
.dialog .dialog-content .button-box .alert-button{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>