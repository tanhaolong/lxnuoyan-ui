/*
 * @Author: 
 * @Date: 2022-01-17 13:53:10
 * @LastEditTime: 2022-01-17 15:00:13
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */

 /**
  * @description: Numeral 获取多样化日期
  * @Author: tanhaolong
  * @Date: 2021-12-13 15:34:08
  * @param {String} type 转换类型（day：获取
  * @param {Number} num 需转换数字
  * @return {Array} 返回组装好的分页数据
  */
export default function GetDate(type,year,month){
    if(type.toUpperCase() ==  'DAY'){
        let date = new Date(year, month, 1); 
        return new Date(date.getTime() - 864e5).getDate(); 
    }
}