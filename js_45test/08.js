/**
 * 8、删除数组第一个元素
 * 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]
 * 输出
 * [2，3，4]
 */
const arr = [1, 2, 3, 4];

function curtail(arr, item) {
  let resArr = [...arr];
  resArr.shift(item);
  return resArr;
}

console.log(prepend(arr, 10), arr);
