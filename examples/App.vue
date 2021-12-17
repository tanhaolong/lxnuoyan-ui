<!--
 * @Author: 
 * @Date: 2021-12-03 14:13:15
 * @LastEditTime: 2021-12-17 15:07:04
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<template>
  <!-- <Cell  @CellClick="ConfirmClick" :isIcon="true" /> -->
  <!-- <Toast /> -->
  <!-- <div style="font-size:18px;" @click="testClick">测试按钮</div> -->
  <!-- <Empty /> -->
  <!-- <Tag type="danger" mark closeable /> -->
   <Evaluate icon="like"></Evaluate>
   <Evaluate icon="praise" mode="fill" @evaluateChange="testClick2" :value="switchvalue" selectedcolor="green" size="50px"></Evaluate>
  <Evaluate icon="collection" size="50px"></Evaluate>
  <!-- <Switch :value="switchvalue" @input="testClick2" @SwitchChange="testClick" />  -->
  <!-- <Actionsheet :Action="list" :modelType="false" @ActionChange="testClick" @CancelClick="testClick"  /> -->
  <!-- <Ellipsis :ellipsisStyle="{color:'red',fontSize:'20px'}" text="搜噶是感觉爱化工角度看帅哥尽快送达和更好的数据库个好地方就开始咖喱鸡块闪电发货格拉卡打发时间格拉卡后来就开发导航三跪九叩列表机构不经理开发但是不管尽快立法但是过了啥的混个了开奖号复活甲都烧开后改接口导致爆世界购卡巴个" /> -->
  <!-- <CountUp :Textnumber="3000.54" :duration="3000" :CountUpStyle="{color:'red',fontSize:'20px'}" /> -->
  <!-- <Dialog title="系统提示" content="这是测试内容" description="温馨提示：确认交易即授权手机号给体脂师，以提供更好减脂服务。如需取消授权，可在“我的-设置-系统设置-账号与安全-授权手机号给体脂师”中取消。" DisalogType="confirm" @CancelClick="CancelClick" @ConfirmClick="ConfirmClick" /> -->
</template>

<script>
import { getCurrentInstance,ref, onMounted } from "vue";
export default {
  name: 'App',
  setup(props,context) {
        const list = [{id:1,value:'测试内容1'},{id:2,value:'测试内容2'},{id:3,value:'测试内容3'}];
        const num = ref(0);
        const switchvalue = ref(false);
        const upstyle = {color:'red'};
        const { ctx } = getCurrentInstance(); //获取上下文实例
         onMounted(() => {
          //  console.log(context);
          // ctx.$root.$Loading({type:true,loadingType:'spinner'});
          // console.log(ctx.$root.$Numeral({num:11110000.12,type:'CHINESENUMERAL'}));
          // console.log(ctx.$root.$Numeral({num:11110000.12,type:'COMMASEPARATED'}));
          // console.log(ctx.$root.$Numeral({num:'111,100,00.124',type:'UNCOMMASEPARATED'}));
    });
        const testClick=function(e){
          console.log('testClick',e);
          // ctx.$root.$Message({text:'测试但是感觉刻度身高金卡戴珊更健康但是搞活动就是开个黑科技啥的混个框架但是高科技',type:'warning',duration:3000})
          // ctx.$root.$Toast({type:'warning',message:'大使馆但是啥搞的撒广东省个大使馆但是啥搞的撒广东省个大使馆但是啥搞的撒广东省个',duration:300000});
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
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
