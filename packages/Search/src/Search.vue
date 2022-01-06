<!--
 * @Author: 
 * @Date: 2022-01-05 11:23:59
 * @LastEditTime: 2022-01-06 16:13:42
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <div class="search-box" :style="{'background' : background}">
    <div class="search-content" :style="{'borderRadius': shape == 'round' ? '999px' : ''}">
      <div class="search-field">
      <div class="search-left-icon">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="search-value-box">
        <input type="search" class="search-value" :readonly="readonly" :disabled="disabled == true" @keyup.enter="inputChange" v-model="modelValue" :placeholder="placeholder" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  components: {},
  name: "Search",
  props: {
    modelValue:{ // 选中值
      type: String,
    },
    shape:{ // 搜索框形状，可选值为 round
      type:String,
      default:'square'
    },
    placeholder:{// 占位提示文字
      type:String,
      default:'请输入搜索关键词'
    },
    disabled:{ // 是否禁用输入框
      type:Boolean,
      default:false,
    },
    readonly:{ // 是否只读
      type:Boolean,
      default:false,
    },
    background:{ // 搜索框外部背景色
      type:String,
      default:'#f2f2f2',
    }
  },
  setup(props, context) {
    const inputChange = function(){
      context.emit('search',props.modelValue);
    };
    return {
      inputChange,
    };
    
  }
};
</script>

<style scoped>
input:focus, textarea:focus {
    outline: none;
}
.search-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 12px;
  background: #fff;
}
.search-box .search-content {
  display: flex;
  flex: 1;
  padding-left: 12px;
  background: #f7f8fa;
  border-radius: 2px;
}
.search-box .search-content .search-field{
    flex: 1;
    padding: 5px 8px 5px 0;
    background-color: transparent;
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
}
.search-box .search-content .search-field .search-left-icon {
  color: #969799;
  margin-right: 4px;
  line-height: 32px;
  font-size: 24px;
}
.search-box .search-content  .search-field .search-left-icon .iconfont {
  display: block;
  font-size: 24px;
  line-height: inherit;
}
.search-box .search-content  .search-field .search-value-box{
    flex: 1;
    display: flex;
    align-items: center;
    color: #323233;
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    word-wrap: break-word;
}
.search-box .search-content  .search-field  .search-value-box .search-value{
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
     font-size: 16px;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    user-select: auto;
}
</style>