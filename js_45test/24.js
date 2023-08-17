/**
 * 24、使用闭包
 * 实现函数 makeClosures，调用之后满足如下条件:
 * 1、返回一个函数数组 result，长度与 arr 相同
 * 2、运行result 中第i个函数，即 resultql0)，结果与 fn(arrw) 相同
 */

// 输入
// [1,2,3],function(x){
//     return x*x
// }

// 输出
// 4

function makeClosures(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = function (x) {
      return x * x;
    };
  }
  return result;
}

console.log(makeClosures([1, 2, 3]));

// 总结：思路 方法均想不出
