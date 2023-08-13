/**
 * 16、正确的函数定义
 * 请修复给定的is 代码中，函数定义存在的问题
 *
 * 输入
 * true
 * 输出
 * a
 */


// 原代码：
function  functions(flag) {
    if(flag){
        function getValue(){return 'a'}
    }else{
        function getValue(){return 'b'}
    }
    return getValue()
}

// 解决办法 将getValue使用const定义为局部变量