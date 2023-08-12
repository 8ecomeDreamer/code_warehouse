/**
 * 6、删除数组最后一个元素
 * 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]
 * 输出
 * [1，2，3]
 */

const arr = [1, 2, 3, 4];

function removeLastItem(arr) {
  return [...arr].splice(0, arr.length - 1);
}

console.log(removeLastItem(arr), arr);

// 其他解题方法： (slice、concat、filter都会返回新数组)
// slice
// concat/slice+pop
