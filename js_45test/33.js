/**
 * 33、二进制转换(十进制转二进制)
 * 获取数字 num 二进制形式第 bit 位的值。注意:
 * 1、bit 从1开始
 * 2、返回0或1
 * 3、举例: 2的二进制为 10，第1位为 0，第2 位为 1
 * 输入
 * 128，8
 * 输出
 * 1
 */

function tran2bit(num1,num2){
  const tranNum = num1.toString(2)
  return tranNum.slice(-num2,1)
}

console.log(tran2bit(128,8))