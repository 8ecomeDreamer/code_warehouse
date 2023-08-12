/**
 * 11、计数
 * 统计数组arr 中值等于 item 的元素出现的次数
 *
 * 输入
 * [1，2，4，4，3，4，3]，4
 * 输出
 * 3
 */

function accumulate(arr, num) {
  let count = 0;
  arr.forEach((element) => {
    if (element === num) {
      count += 1;
    }
  });
  return count;
}

console.log(accumulate([1, 2, 4, 4, 3, 4, 3], 4));

// 其他解题方法：其实就是遍历 map filter for
