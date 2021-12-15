<!--
 * @Author: 
 * @Date: 2021-12-03 14:13:34
 * @LastEditTime: 2021-12-15 11:37:45
 * @LastEditors: tanhaolong
 * @Descripttion: 
-->
# lxnuoyan-UI 
## 龙蝎诺言的UI组件库，一个尝试，一个新的开始。
**目前处于开发阶段，组件兼容问题及变动较大。请留意最新版本自行更新。**
## 组件库安装
```bash
npm i lxnuoyan-ui
```
## 使用说明
### 一、使用要求
组件库基于Vue3.0中开发，请在Vue3.0版本以上使用。

### 一、全局引用
在src/main.js中引用添加组件并注册
```bash
import lxnuoyanUI from 'lxnuoyan-ui';
import 'lxnuoyan-ui/lib/index.css';
createApp(App).use(lxnuoyanUI)
```

## 组件说明
### 1、Message 状态提示弹窗组件
使用方法：
```bash
this.$Message({text:'测试',type:'success',duration:3000})
```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| text  | String | 空 | 是 | 显示文本 |
| type  | String | primary | 否 | 弹窗类型（primary：正常、warning：警告、error：错误、success：成功）|
| bgcolor | String | 空 | 否 | 背景颜色 | 属性不为空则覆盖弹窗类型颜色 |
| color | String | 空 | 否 | 文本颜色 | 属性不为空则覆盖弹窗类型颜色 |
| duration | Number | 3000 | 否 | 显示时长 |

### 2、Dialog 弹窗组件
使用方法：
```bash
<Dialog title="系统提示" content="这是测试内容" description="温馨提示：确认交易即授权手机号给平台。" DisalogType="confirm" @CancelClick="CancelClick" @ConfirmClick="ConfirmClick" />
```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| content  | String | 空 | 是 | 弹窗内容 |
| title  | String | 温馨提示 | 否 | 弹窗标题 |
| align  | String | center | 否 | 对齐方式 |
| contentColor  | String | #1E223B | 否 | 弹窗内容颜色 |
| contentFontSize  | String | 32px | 否 | 弹窗内容字体大小 |
| description | String | 空 | 否 | 描述内容 |
| descriptionColor | String | #7B7F93 | 否 | 描述内容颜色 |
| descriptionFontSize | String | 22px | 否 | 描述内容字体大小 | 
| DisalogType | String | alert | 否 |  弹窗类型(alert、confirm) | alert为确认弹窗框，confirm为取消确认框 |
| cancelText | String | 取消 | 否 | 取消按钮文本 | 仅confirm取消确认框生效 |
| cancelColor | String | #727585 | 否 | 取消按钮颜色 |
| confirmText | String | 确认 | 否 | 确认按钮文本 |
| confirmColor | String | #29C594 | 否 | 确认按钮颜色 |

#### 回调事件

| 事件名称 | 数据类型 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- |
| CancelClick | function | 是 | 取消按钮点击触发回调事件 | 仅confirm取消确认框生效 |
| ConfirmClick | function | 是 | 确认按钮点击触发回调事件 |

### 3、Toast 提示框组件

使用方法：
```bash
this.$Toast({message:'提示文本内容',duration:3000});
```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| message  | String | 空 | 是 | 弹窗内容 |
| position | String | center | 否 | 显示位置（top、center、bottom） |
| type | String | none | 否 | 提示类型：success：成功、error：错误、warning：警告、none：不显示图标
| duration | Number | 3000 | 否 | 提示的延迟时间 |

### 4、Loading 等待提示框组件
使用方法：
```bash
this.$Loading({title:'测试加载中',type:true}); // 开启等待提示框
this.$Loading({type:false}); // 关闭等待提示框
```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| type | Boolean | true | 是 | 显示状态 |
| loadingType | String | spinner | 否 | 图标类型 | normal、spinner |
| title | String | 加载中 | 否 | 显示文本 | 最多支持输入8个字符长度 |

### 5、Cell 单元格组件

使用方法：
```bash
 <Cell @CellClick="ConfirmClick" :isIcon="true" />
 ```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| title  | String | 标题 | 是 | 标题 |
| content | String | 显示内容 | 是 | 内容文本 |
| border  | String | true | 否 | 是否允许边框 |
| borderColor | String | #E4E5ED | 否 | 边框颜色 |
| titleWeight | String | normal | 否 | 标题粗细(normal、bold、bolder) | 
| titleColor | String | #1E223B | 否 | 标题颜色 |
| contentColor | String | #7B7F93 | 否 | 内容颜色 |
| isIcon | String | false | 否 | 是否显示跳转icon |
| fontsize | String | 16px | 否 | 字体大小 |

### 6、Ellipsis 文本自动省略号

使用方法：
```bash
 <Ellipsis :lineClamp="2" :ellipsisStyle="{color:'red',fontSize:'20px'}" text="这是测试内容" />
 ```
 | 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| text  | String | 标题 | 是 | 标题 |
| lineClamp | Int | 1 | 是 |  显示行数 |
| ellipsisStyle | Object | null | 否 | 自定义样式 | 与vue动态样式写法一致 |

### 7、CountUp 数字动画
使用方法：
```bash
 <CountUp :Textnumber="3000.54" :duration="3000" :CountUpStyle="{color:'red',fontSize:'20px'}" />
 ```
  | 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| Textnumber | Number | null | 是 | 显示数字滚动文本 |
| CountUpStyle | Object | null | 否 | 自定义样式 | 与vue动态样式写法一致 |
| duration | Number | 3000 | 否 | 动画时长 |

### 8、Numeral 数字格式化
使用方法：
```bash
this.$Numeral({num:11110000.12,type:'CHINESENUMERAL'}) // 转换为中文大写 返回：壹千壹百拾壹万元壹角贰分
this.$Numeral({num:11110000.12,type:'COMMASEPARATED'}) // 转换为逗号间隔格式 返回：11,110,000.12
this.$Numeral({num:'111,100,00.124',type:'UNCOMMASEPARATED'})// 反逗号格式化， 返回：11110000.124
 ```
| 参数 | 数据类型 | 默认值 | 必填 | 字段名称 | 备注 |
|  --  | -- | -- | -- | -- | -- |
| num | Number | null | 是 | 显示数字滚动文本 | 当type为UNCOMMASEPARATED时数据类型为String |
| type | String | null | 是 | 转换类型（CHINESENUMERAL：转换为中文大小写 、COMMASEPARATED：转换为逗号分割数字、UNCOMMASEPARATED：逗号分割数字转换为普通数字类型） |