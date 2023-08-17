/**
 * 40、判断是否包含数字
 * 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 * 输入
 * var C = function(){this.foo = 'bar'; this.baz = 'bim';}
 * 'abc123'
 * 输出
 * true
 */

function ifIncludeNumber(str) {
  return /\d/g.test(str);
  // return !!str.match(/\d/g);
}

console.log(ifIncludeNumber("abc123"));
