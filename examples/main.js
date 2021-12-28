/*
 * @Author: 
 * @Date: 2021-12-03 14:13:15
 * @LastEditTime: 2021-12-28 15:22:18
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import lxnuoyanUI from '../packages/index';

const app = createApp(App);
app.use(lxnuoyanUI);
app.mount('#app');

