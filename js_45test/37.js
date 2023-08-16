/**
 * 37、改变上下文
 * 将函数fn 的执行上下文改为 obj，返回 fn 执行后的值
 * 输入
 * alterContext(function(){return this.greeting + ',' + this.name + '!'}, {name:'Rebecca',greeting:'Yo'})
 * 输出
 * Yo,Rebecca!
 */

function alterContext(fn, obj) {
  // 错误答案：
  // console.log(fn.bind(obj));
  // 正确答案：
  return fn.bind(obj)();
}

alterContext(
  function () {
    return this.greeting + "," + this.name + "!";
  },
  { name: "Rebecca", greeting: "Yo" }
);

// 总结：返回值可以是个立即执行函数
