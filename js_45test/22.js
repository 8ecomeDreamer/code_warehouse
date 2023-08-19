/**
 * 22、函数的上下文
 * 将函数 fn 的执行上下文改为 obj 对象
 */

// 输入

const obj = ["Hello", "Reebecca", "!!!"];
function fn(greeting, name, punctuation) {
  return greeting + "," + name + "," + (punctuation || "!");
}

// 输出
// Hello, Reebecca!!!

// 错误答案：
// fn.bind(obj,obj.greeting,obj.name,obj.punctuation)

console.log(fn.call(obj));
