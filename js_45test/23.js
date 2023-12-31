/**
 * 23、返回函数
 * 实现函数 functionFunction，调用之后满足如下条件:
 * 1、返回值为一个函数f
 * 2、调用返回的函数f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即', '
 * 3、所有函数的参数数量为 1，且均为 String 类型
 */

// 输入
// functionFunction("Hello') ('world')

// 输出
// Hello,world

// 核心思路:可以使用柯里化

function functionFunction(str) {
  return (f = function (obj) {
    return str + ", " + obj;
  });
}
console.log(functionFunction("Hello")("world"));

// 总结：思路 方法均想不出
