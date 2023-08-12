/**
 * 4、移除数组中的元素(返回新的数组)
 * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4，2]，2
 * 输出
 * [1, 3, 4]
 */

function reduceItemInNewArr(arr, num) {
  const newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  newArr.forEach((el, index) => {
    if (el === num) {
      newArr.splice(index, 1);
    }
  });
  return newArr;
}

console.log(reduceItemInNewArr([1, 2, 3, 4, 2], 2));

// 其他解题方法：
// filter
// for/foreach + push
// for + slice
