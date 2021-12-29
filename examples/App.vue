<!--
 * @Author: 
 * @Date: 2021-12-03 14:13:15
 * @LastEditTime: 2021-12-29 15:52:13
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
<NavBar fixed placeholder title="标题" left-arrow></NavBar>
  
  <Rate @RateChange="testClick" />
  <Rate half @RateChange="testClick" />
  <Rate :value="3.2" mode="fill" readonly half @RateChange="testClick" />
  <Tag type="primary">标签</Tag>
  <Tag type="success">标签</Tag>
  <Tag type="danger">标签</Tag>
  <Tag type="warning">标签</Tag>
  <!-- <NavBar left-arrow left-text="返回" title="标题">
    <template  #right>
    <span>搜索</span>
  </template>
  </NavBar> -->
  <Ellipsis :lineClamp="2">的撒个回调事件开个黑担惊受恐干活就但是搞活动是个厉害快乐的时光鉴定考试了个巨坑代理商个的数据库过段时间看搞活艰苦的撒花鼓就巅峰时刻感觉还得沙鲁克汗个巨坑但是感觉刻度身高金卡戴珊高科技和</Ellipsis>
  <Tabbar v-model="active" selectColor="red" :border="true" @tabbarChange="testClick">
    <Tabbar-item name="测试1"  badge="2" icon="icon-user">测试1</Tabbar-item>
    <Tabbar-item name="测试2" dot icon="icon-location">测试2</Tabbar-item>
    <Tabbar-item name="测试3" icon="icon-location">测试3</Tabbar-item>
    <Tabbar-item name="测试4" icon="icon-location">测试4</Tabbar-item>
  </Tabbar>
  <Swipe></Swipe>
</template>

<script>
import { getCurrentInstance,ref,  } from "vue";
// import {Notify} from '../packages/index';
export default {
  name: 'App',
  components: {
    // Tabbar,
    // TabbarItem,
  },
  mounted(){
    // this.$Notify({text:'这是测试'});
  },
  setup(props,context) {
        const list = [{id:1,value:'测试内容1'},{id:2,value:'测试内容2'},{id:3,value:'测试内容3'}];
        const num = ref(0);
        const switchvalue = ref(false);
        const upstyle = {color:'red'};
        const active = ref('13');
        const { ctx } = getCurrentInstance(); //获取上下文实例
    //      onMounted(() => {
    //       //  console.log(ctx,localComponents);
    //        Notify({text:'这是测试'});
    //       //  ctx.$root.$Loading({type:true});
    //       // ctx.$root.$Notify({text:'这是测试'});
    // });
        const testClick=function(e){
          console.log('testClick',e);
          active.value = e;
        };
        const testClick2 = function(e){switchvalue.value =!e;console.log('click2',switchvalue.value);}
        const CancelClick = function(){console.log('取消')}
        const ConfirmClick = function(){console.log('确认')};
    return {
        num,
        upstyle,
        switchvalue,
        testClick,
        testClick2,
        CancelClick,
        ConfirmClick,
        list,
        active,
    };
  }
}
</script>

<style lang="scss">
body{
margin: 0;
  padding: 0;
}
#app {
  overflow: hidden;
  // background-color: grey;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
