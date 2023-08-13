/**
 * 21、函数传参
 * 将数组arr中的元素作为调用函数 fn 的参数
 */

const demo = ['Hello','Ellie','!']
function fn(greeting,name, punctuation) {
    return greeting+','+name+','+(punctuation || '!')
}
 
// 这题是知识漏洞
// 方法一: apply/call
function argsAsArray(fn, arr){
    return fn(arr[0], arr[1], arr[2])
}

// apply
function argsAsArray(fn, arr) {
  return fn.apply(fn, arr);
}

// call
function argsAsArray(fn, arr) {
  return fn.call(fn, arr[0],arr[1],arr[2]);
}


// 方法二：...扩展运算符
function argsAsArray(fn, arr) {
    return  fn(...arr);
}


// 总结:
// function.apply(newObj, [argsArray]) 方法可以修改指定函数的调用对象。
// function 是调用对象将被修改的函数，newObj 是函数的新调用对象，argsArray 是传递给function函数的参数，数组或者arguments对象。

