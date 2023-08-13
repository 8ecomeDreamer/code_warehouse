/**
 * 14、查找元素位置
 * 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 *
 * 输入
 * ['a','b','c','d','e','f','a','b','c'] 'a'
 * 输出
 * [0,6]
 */

function  findItemPosition(arr, item) {
    const result = []
    arr.forEach((element,index) => {
        if(element ===  item) {
            result.push(index)
        }
    });
    return result
}

console.log(findItemPosition(['a','b','c','d','e','f','a','b','c'],'a'));