
// 给所有函数添加一个zyfbind方法
Function.prototype.zyfcall = function(thisArg, ...argArray){
  
  // 获取被执行函数
  let fn = this

  // 处理null和undefined情况 thisArg转为对象类型
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // bind的返回值是一个函数
  function proxyFn(...args){
    // 把执行函数赋值给thisArg的fn属性，thisArg.fn(...finalArgs)进行了隐式绑定this指向thisArg
    thisArg.fn = fn
    // 特殊: 对两个传入的参数进行合并
    let finalArgs = [...argArray, ...args]
    const result = thisArg.fn(...finalArgs)
    delete thisArg.fn
  
    return result
  }

  return proxyFn
}
