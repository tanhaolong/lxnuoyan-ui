<!--
 * @Author: 
 * @Date: 2021-12-03 14:13:15
 * @LastEditTime: 2022-01-07 16:32:51
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
  <!-- <Tabbar v-model="active" selectColor="red" :border="true" @tabbarChange="testClick">
    <Tabbar-item name="测试1"  badge="2" icon="icon-user">测试1</Tabbar-item>
    <Tabbar-item name="测试2" dot icon="icon-location">测试2</Tabbar-item>
    <Tabbar-item name="测试3" icon="icon-location">测试3</Tabbar-item>
    <Tabbar-item name="测试4" icon="icon-location">测试4</Tabbar-item>
  </Tabbar> -->
  <!-- <Swipe class="swiper" style="height:300px;" :height="250" :loop="true" :vertical="true" @change="testClick1" :initial-swipe="1">
    <Swipe-item @click="testClick"><img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt=""></Swipe-item>
    <Swipe-item><img src="https://img01.yzcdn.cn/vant/apple-3.jpg" alt=""></Swipe-item>
    <Swipe-item><img src="https://img01.yzcdn.cn/vant/apple-4.jpg" alt=""></Swipe-item>
    <template #indicator>
       <div class="custom-indicator">{{swiperIndex + 1}}/3</div>
    </template>
  </Swipe> -->
  <Search :show-action="true">
    <!-- <template #action>
    <div>搜索</div>
  </template> -->
  </Search>
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
        const testtext = ref('');
        const swiperIndex = ref(0);
        const switchvalue = ref(false);
        const upstyle = {color:'red'};
        const active = ref('13');
		console.log('E',Math.E);
        const { ctx } = getCurrentInstance(); //获取上下文实例
    //      onMounted(() => {
    //       //  console.log(ctx,localComponents);
    //        Notify({text:'这是测试'});
    //       //  ctx.$root.$Loading({type:true});
    //       // ctx.$root.$Notify({text:'这是测试'});
    // });
        const testClick=function(money,num){
			
          // active.value = e;
        };
		ctx.$root.$RedEnvelopes(100,4,false);
        const testClick1 = function(e){console.log('testClick1',e),swiperIndex.value = e;};
        const testClick2 = function(e){switchvalue.value =!e;console.log('click2',switchvalue.value);}
        const CancelClick = function(){console.log('取消')}
        const ConfirmClick = function(){console.log('确认')};
    return {
        num,
        upstyle,
        swiperIndex,
        switchvalue,
        testtext,
        testClick,
        testClick1,
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
.swiper .swipe-item{
  background-color: #39a9ed;
  text-align: center;
  line-height: 220px;
  color: white;
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
