/**
 * 41、检查重复字符串
 * 给定字符串 str，检查其是否包含连续重复的字母 (a-zA-Z)，包含返回 rue，否则返回 false
 * 输入
 * 'rattler'
 * 输出
 * true
 */

function ifRepeatString(str) {
  const regex = /[a-z]/gi;
  return !!str.match(regex);
}

console.log(ifRepeatString("rattler"));
