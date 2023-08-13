/**
 * 12、查找重复元素
 * 找出数组 arr 中重复出现过的元素
 *
 * 输入
 * [1，2，4，4，3，3，1，5，3]
 * 输出
 * [1，3，4]
 */

function findRepeatItem(arr) {
    const map = new Map()
    const result = []
    arr.forEach((element) => {
        if(!map.get(element)){
            map.set(element, 0)
        }
        map.set(element, map.get(element)+1)
    });
    for (const [key,value] of map) {
        // console.log(value)
        if(value !== 1) {
            result.push(key)
        }
    }
    return result
  }

console.log(findRepeatItem([1, 2, 4, 4, 3, 3, 1, 5, 3]));


// 其他解题方法：reduce 好像效率不太佳
