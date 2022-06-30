/*
 * @Author: 
 * @Date: 2022-06-29 18:27:12
 * @LastEditTime: 2022-06-29 18:27:17
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
    const Math_e = Math.E;
    const Math_Pi=Math.PI;
    const minMoney = 0.01;
Number.prototype.fixed = function(n){
	if(n>0) return parseFloat(this.toFixed(n));
	else return parseInt(this);
}
 
 /**
  * @description: RedEnvelopes 红包发放
  * @Author: tanhaolong
  * @Date: 2022-06-29 18:27:32
  * @param {Number} money 总金额
  * @param {Int} num 发放数量(isRandom为false时失效)
  * @param {Boolean} isRandom 是否随机
  * @return {Array} 返回分配好的数据列表
  */
export default function RedEnvelopes (Money,num = 1,isRandom = true){
	if(num%1 != 0){
		throw new Error ('红包数必须为整数');
	}
	let data = [];
	if(isRandom == true){
    const realMoney = (Money - num * minMoney).fixed(2);
    if(realMoney < 0) return null;
    let currentNum = num;
    let currentMoney = realMoney;
    // console.log(`红包总金额${Money}`);
    // console.log(`红包瓜分人数${num}`);
    while(currentNum != 0){
    	let nowMoney;
    	let {h,r} = compute(currentNum,currentMoney);
    	if(currentNum === 1){
    		nowMoney = currentMoney + 0.01;
    	}else{
    		nowMoney = getNum(0,currentMoney,h,r).fixed(2)+ minMoney;
    	}
    	nowMoney = nowMoney.fixed(2);
		data.push(nowMoney);
    	// console.log(`第${num-currentNum+1}个人红包为${nowMoney}`);
    	currentNum --;
    	currentMoney -=(nowMoney - minMoney).fixed(2);
    	// console.log(`剩余红包为${(currentMoney+minMoney*currentNum).fixed(2)}`)
	}
	}else{
		if(Money%num != 0){
			throw new Error ('该红包不能被均分');
		}else{
			let price = Money / num;
			for(let i = 0; i < num ; i++){
				data.push(price);
			}
		}
		
	}
	// console.log('data',data);
	return data;
}
// 计算期望和方差
function compute(num,money){
	const h = money / num;// 期望金额
	let r = money / (num * 10) // 方差
	r = r < 0.01 ? 0.01 : r;
	return {
		r:r,
		h:h.toFixed(2),
	}
}
// 正态分布表达式
function NormalDistribution(h,r,x){
	const base = (1 / Math.log2(2 * Math_Pi)) * Math_e;
	const expon = -((x - h) ** 2) / (2 * (r ** 2))
	return base ** expon;
}
// 生成从minNum到maxNum的随机数
function randomNum (min,max){
	return Math.random() * (max - min) + min;
}
// 根据正态分布随机生成一个数
function getNum(min,max,h,r){
	if(typeof min !== `number` || typeof max !== `number` || min > max) throw new Error ('数据异常');
	if(min === max) return min;
	while(true){
		const x = randomNum(min,max);
		const y = Math.random();
		if(NormalDistribution(h,r,x) > y){
			return x;
		}
	}
}