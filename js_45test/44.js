/**
 * 44、判断是否符合指定格式
 * 给定字符串 str，检查其是否符合如下格式
 * 1、xxxx-xxxx-xxxx
 * 2、其中X为 Number 类型
 * 输入
 * '800-555-1212'
 * 输出
 * true
 */

function matchesPattern(str) {
  return /^\d{3}-\d{3}-\d{4}$/.test(str);
}

console.log(matchesPattern("800-555-1212"));
