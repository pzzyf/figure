// 定义resolve，reject函数
// 执行传入的executor函数,并传入resolve和reject作为参数
// 执行 executor 函数:
// 调用resolve,reject函数
// 构造函数执行完毕，afe1实例创建完成

const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class Afe1Promise {
  constructor(executor){
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log("resolve被调用")
      }
    }

    const reject = (reason) => {
      if(this.status === PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log('reject被调用');
      }
    }

    executor(resolve,reject)

  }
}

const afe1 = new Afe1Promise((resolve,reject) => {
  console.log('executor立刻执行');
  resolve('调用构造函数里面的resolve函数');
  reject('调用构造函数里面的reject函数')
})
