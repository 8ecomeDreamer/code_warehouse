/**
 * 5、数组求和
 * 计算给定数组 arr 中所有元素的总和
 *
 * 输入
 * [1，2，3，4]
 * 输出
 * 10
 */

function sumItem(arr) {
  return arr.reduce((pre, next) => {
    return pre + next;
  }, 0);
}

function sumItem(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumItem([1, 2, 3, 4]));

// 其他解题方法：
// eval
function sumItem(arr) {
  // console.log(arr.join("+"));
  return eval(arr.join("+"));
}
console.log(sumItem([1, 2, 3, 4]));
