/**
 * 28、二次封装函数
 * 实现函数 partialUsingArguments，调用之后满足如下条件:
 * 1、返回一个函数 result
 * 2、调用 result 之后，返回的结果与调用函数 n 的结果一致
 * 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
 */

function partialUsingArguments(fn) {
  //先获取p函数第一个参数之后的全部参数
  var args = [].slice.call(arguments, 1);
  //声明result函数
  return (result = function () {
    //使用concat合并两个或多个数组中的元素
    return fn.apply(this, args.concat([].slice.call(arguments)));
  });
}

// 总结：思路 方法均想不出
