/**
 * 1、查找数组元素位置
 * 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
 *
 * 输入
 * [1, 2, 3, 4], 3
 * 输出
 * 2
 */

function findItemIndex(arr, item) {
  return arr.findIndex((el) => el === item);
}

console.log(findItemIndex([1, 2, 3, 4], 3));
console.log(findItemIndex([1, 2, 3, 4], 8));
