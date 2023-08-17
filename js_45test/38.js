/**
 * 38、批量改变对象的属性
 * 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
 * 输入
 * var c = function(name){this.name = name; return this;}
 * var obj1 = new c('Rebecca');
 * alertobjects(c,'what\'s up');obj1.greeting;
 * 输出
 * what\'s up
 */

var c = function (name) {
  this.name = name;
  return this;
};

var alterobjects = function (construtor, greeting) {
  construtor.prototype.greeting = greeting;
};

var obj1 = new c("Rebecca");
alterobjects(c, "what's up");
console.log(obj1.greeting);
