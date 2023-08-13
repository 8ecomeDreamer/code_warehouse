/**
 * 15、避免全局变量
 * 给定的js 代码中存在全局变量，请修复
 *
 * 输入
 * ['a','b','c','d','e','f','a','b','c'] 'a'
 * 输出
 * [0,6]
 */

function globals() {
    myObject = {
        name : 'Jory'
    }
    return myObject;
}

// 解决办法: 函数中myObject 没有使用标识符定义 可以使用const或者let定义
