/**
 * 36、乘法
 * 求 a和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
 * 输入
 * 3,0.0001
 * 输出
 * 0.0003
 */

function multiply(num1, num2) {
  // 先将数字转换为字符串
  let str1 = num1.toString();
  let str2 = num2.toString();
  console.log(str1, str2);
  // 获取两个数的小数位数
  let lenA = str1.indexOf(".") == -1 ? 0 : str1.length - str1.indexOf(".") - 1;
  let lenB = str2.indexOf(".") == -1 ? 0 : str2.length - str2.indexOf(".") - 1;
  console.log(lenA, lenB);
  // 比较两数的精度/位数，精度大的作为结果数精度
  let len = Math.max(lenA, lenB);
  // 运算结果
  let result = parseFloat(num1 * num2).toFixed(len);
  return result;
}
console.log(multiply(3, 0.0001));

//总结： 存在精度问题时不能简单的使用*进行乘法运算
// 思路：使用parseFloat进行浮点数运算 再使用toFixed保留小数位
