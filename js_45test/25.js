/**
 * 25、二次封装函数
 * 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件:
 * 1、返回一个函数 result，该函数接受一个参数
 * 2、执行 result(str3)，返回的结果与 fn(str1,str2, str3) 一致
 */

// 输入
var sayIt = function (greeting, name, punctuation) {
  return greeting + "," + name + (punctuation || "!");
};

// 输出
// partial(sayIt, 'Hello', 'Ellie')('!!!')
// Hello,Ellie!!!

function partial(fn, str1, str2) {
  return (result = (str3) => {
    return fn(str1, str2, str3);
  });
}

console.log(partial(sayIt, "Hello", "Ellie")("!!!"));

// 总结：思路 方法均想不出
