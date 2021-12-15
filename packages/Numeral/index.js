/*
 * @Author: 
 * @Date: 2021-12-13 15:18:30
 * @LastEditTime: 2021-12-13 18:06:38
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */

 /**
  * @description: Numeral 数字格式化
  * @Author: tanhaolong
  * @Date: 2021-12-13 15:34:08
  * @param {Number} num 需转换数字
  * @param {Int} type 转换类型（CHINESENUMERAL：转换为中文大小写 、COMMASEPARATED：转换为逗号分割数字、UNCOMMASEPARATED：逗号分割数字转换为普通数字类型）
  * @return {Array} 返回组装好的分页数据
  */
export default function Numeral ({num , type}){
        if(type.toUpperCase() ==  'CHINESENUMERAL'){
            // 转换为中文大小写       
            if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)){
                //判断数据是否大于0
                return "数据非法";  
            }
            var unit = "千百拾亿千百拾万千百拾元角分", str = "";
            num += "00";  
            var indexpoint = num.indexOf('.');  // 如果是小数，截取小数点前面的位数
            if (indexpoint >= 0){
                num = num.substring(0, indexpoint) + num.substr(indexpoint+1, 2);   // 若为小数，截取需要使用的unit单位
            }
            unit = unit.substr(unit.length - num.length);  // 若为整数，截取需要使用的unit单位
            for (var i=0; i < num.length; i++){
                str += "零壹贰叁肆伍陆柒捌玖".charAt(num.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
            }
            return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整"); // 替换掉数字里面的零字符，得到结果
        }else if(type.toUpperCase() == 'COMMASEPARATED'){
            // 转换为逗号分割数字
            if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)){
                //判断数据是否大于0
                return "数据非法";  
            }
            num=num.toString().split(".");  // 分隔小数点
            var arr=num[0].split("").reverse();  // 转换成字符数组并且倒序排列
            var res=[];
            for(var i=0,len=arr.length;i<len;i++){
              if(i%3===0&&i!==0){
                 res.push(",");   // 添加分隔符
              }
              res.push(arr[i]);
            }
            res.reverse(); // 再次倒序成为正确的顺序
            if(num[1]){  // 如果有小数的话添加小数部分
              res=res.join("").concat("."+num[1]);
            }else{
              res=res.join("");
            }
            return res;
        }else if(type.toUpperCase() == 'UNCOMMASEPARATED'){
            //逗号分割数字转换为普通数字类型
            let str =num
            str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
            return Number(str);
        }else{
           return "缺少type参数";
        } 

}