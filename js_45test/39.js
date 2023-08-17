/**
 * 39、属性遍历
 * 找出对象 obi 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
 * 1、返回数组，格式为 key: value
 * 2、结果数组不要求顺序
 * 输入
 * var C = function(){this.foo = 'bar'; this.baz = 'bim';}
 * C.prototype.bop = 'bip'
 * iterate(new C())
 * 输出
 * ["foo:baz", "baz:bim"]
 */

var C = function () {
  this.foo = "bar";
  this.baz = "bim";
};

// // 方法一：for in
// function iterate(obj) {
//   let result = [];
//   // 遍历对象 如果是构造函数中自带的属性 则存进数组
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push(key + ": " + obj[key]); //使用obj.key部分代码不能通过
//     }
//   }
//   return result;
// }

// 方法二：map
function iterate(obj) {
  return Object.getOwnPropertyNames(obj).map((key) => {
    return key + ":" + obj[key];
  });
}

C.prototype.bop = "bip";
console.log(iterate(new C()));
