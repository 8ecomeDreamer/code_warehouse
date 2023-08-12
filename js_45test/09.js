/**
 * 9、合并数组
 * 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]，['a',b','c'，1]
 * 输出
 * [1，2，3，4,'a','b','c'，1]
 */
const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", 1];

function concatArr(arr1, arr2) {
  // return arr1.concat(arr2);
  return [...arr1, ...arr2];
}

console.log(concatArr(arr1, arr2), arr1, arr2);

// 其他解题方法：
// slice + push
