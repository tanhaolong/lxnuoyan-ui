<!--
 * @Author: 
 * @Date: 2021-12-03 14:13:34
 * @LastEditTime: 2022-01-06 17:30:38
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
<h1 align="center">lxnuoyan-UI </h1>
<p align="center">轻量、实用的移动端 Vue 组件库</p> 
<p align="center">请在Vue3版本以上使用</p>


<p align="center">目前处于开发阶段，组件兼容问题及变动较大。请留意最新版本自行更新。</p>
<p align="center">
  🔥 <a href="https://gitee.com/tanhaolong/lxnuoyan-ui/wikis/%E4%BB%8B%E7%BB%8D">gitee wiki文档</a>
  &nbsp;
  &nbsp;
  🚀 <a href="https://gitee.com/tanhaolong/lxnuoyan-ui" target="_blank">gitee源码</a>
  &nbsp;
  &nbsp;
   🚀 <a href="https://github.com/z294326927/lxnuoyan-ui" target="_blank">gitHub源码</a>
  &nbsp;
  &nbsp;
    🔥 <a href="https://github.com/z294326927/lxnuoyan-ui/wiki">gitHub wiki文档</a>
  &nbsp;
  &nbsp;
  🌈 <a href="https://www.npmjs.com/package/lxnuoyan-ui" target="_blank">npm</a>
</p>

---

## 介绍
龙蝎诺言UI组件库，一个尝试，一个新的开始。


## 特性

- 🚀 性能极佳，组件平均体积小于 5KB
- 📖 提供完善的中文文档
- 🍭 支持 Vue 3
- 🍭 支持按需引入
- 🍭 支持服务器端渲染


## 浏览器支持

**支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。**


## 安装
在现有项目中使用 Vant 时，可以通过 `npm` 进行安装：
```bash
npm i lxnuoyan-ui
```
当然，你也可以通过 `yarn` 或 `pnpm` 进行安装：
```bash
# 通过 yarn 安装
yarn add lxnuoyan-ui

# 通过 pnpm 安装
pnpm add lxnuoyan-ui
```

## 快速上手

```js
import { createApp } from 'vue'
import App from './App.vue'
import lxnuoyanUI from '../packages/index';

const app = createApp(App);
app.use(lxnuoyanUI);
app.mount('#app');
```
lxnuoyan-ui 也支持按需引入方式，详细说明见 [快速上手](https://gitee.com/tanhaolong/lxnuoyan-ui/wikis/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8).

## 开源协议

本项目基于 **[MulanPSL-2.0](http://license.coscl.org.cn/MulanPSL2/)** 协议，请自由地享受和参与开源
