/**
 * 43、获取指定字符串
 * 给定字符串 str，检查其是否包含 连续3个数字
 * 1、如果包含，返回最先出现的 3 个数字的字符串
 * 2、如果不包含，返回 false
 * 输入
 * '9876543'
 * 输出
 * 987
 */

function captureThreeNumbers(str) {
  let arr = str.match(/\d{3}/);
  if (arr) {
    return arr[0];
  } else {
    return false;
  }
}

console.log(captureThreeNumbers("98i76a5423"));
