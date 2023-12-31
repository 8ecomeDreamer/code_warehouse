/**
 * 27、使用 apply 调用函数
 * 实现函数 calllt，调用之后满足如下条件
 * 1、返回的结果为调用 fn 之后的结果
 * 2、fn 的调用参数为 calllt 的第一个参数之后的全部参数
 */

function callIt(fn) {
  return fn.apply(this, [].slice.call(arguments, 1));
}

// 总结：思路 方法均想不出
