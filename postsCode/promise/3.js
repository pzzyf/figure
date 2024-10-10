const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class Afe1Promise {
  constructor(executor){
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if(this.status === PROMISE_STATUS_PENDING){
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason)
          })
        })
      }
    }

    executor(resolve,reject)

  }

  then(onFulfilled,onRejected){
    if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled){
      onFulfilled(this.value)
    }
    if(this.status === PROMISE_STATUS_REJECTED && onRejected){
      onRejected(this.reason)
    }
    if(this.status === PROMISE_STATUS_PENDING){
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const afe1 = new Afe1Promise((resolve,reject) => {
  console.log('executor立刻执行');
  resolve('调用构造函数里面的resolve函数');
})


afe1.then((res) => {
  console.log('then回调函数执行了1');
  console.log(res);
})

afe1.then((res) => {
  console.log('then回调函数执行了2');
  console.log(res);
})

// 在确定Promise状态之后, 再次调用then
setTimeout(() => {
  afe1.then(res => {
    console.log("res3:", res)
  }, err => {
    console.log("err3:", err)
  })
}, 1000)

