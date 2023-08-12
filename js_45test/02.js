/**
 * 2、添加元素(末尾添加)
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1, 2, 3, 4], 10
 * 输出
 * [1, 2, 3, 4, 10]
 */

const arr = [1, 2, 3, 4];

function pushItem(arr, num) {
  const newArr = [...arr];
  newArr.push(num);
  return newArr;
}

console.log(pushItem(arr, 10), arr);
// console.log();

// 其他解题方法：
// for循环+push
// concat合并
// slice拷贝+push
