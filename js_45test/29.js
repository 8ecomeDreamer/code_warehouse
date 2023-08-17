/**
 * 29、柯里化
 * 已知fn 为一个预定义函数，实现函数 currylt，调用之后满足如下条件:
 * 1、返回一个函数 a，a的length 属性值为 1 (即显声明 a 接收一个参数)
 * 2、调用a 之后，返回一个函数b,b的length 属性值为 1
 * 3、调用b 之后，返回一个函数c,c的length 属性值为 1
 * 4、调用c之后，返回的结果与调用 fn 的返回值一致
 * 5、fn 的参数依次为函数 a,b,c的调用参数
 *
 * 输入
 * var fn = function (a, b,c) {return a + b + c}; curryIt(fn) (1) (2) (3);
 * 输出
 * 6
 */

// 错误答案：
// var fn = function (a, b, c) {
//   return a + b + c;
// };

// var curryIt = function (fn) {
//   return (curryItem = function (...args) {
//     return fn.bind(...args)();
//   });
// };

// console.log(curryIt(fn)(1)(2)(3));

// 正确答案：

var fn = function (a, b, c) {
  return a + b + c;
};

function curryIt(fn) {
  var args = [];
  var result = function (arg) {
    args.push(arg);
    if (args.length < fn.length) {
      return result;
    } else return fn.apply(this, args);
  };
  return result;
}

console.log(curryIt(fn)(1)(2)(3));

// 总结：没看懂
