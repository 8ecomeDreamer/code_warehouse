/**
 * 3、移除数组中的元素(返回原数组)
 * 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
 *
 * 输入
 * [1，2，2，3，4，2，2]，2
 * 输出
 * [1, 3, 4]
 */

// 错误写法： filter会返回新数组

function reduceItem(arr, num) {
  return arr.filter((el) => el !== num);
}

// 正确写法： 普通for循环+splice

function removeWithoutCopy(arr, num) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));
