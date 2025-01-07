
// 给所有函数添加一个zyfcall方法
Function.prototype.zyfcall = function(thisArg, ...args){
  
  // 获取被执行函数
  let fn = this

  // 处理null和undefined情况 thisArg转为对象类型
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // 把执行函数赋值给thisArg的fn属性，thisArg.fn(...args)进行了隐式绑定this指向thisArg
  thisArg.fn = fn
  const result = thisArg.fn(...args)
  delete thisArg.fn

  return result
}
