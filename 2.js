const PROMISE_STATUS_PENDING = 'pengding'
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
        queueMicrotask(() => {
          this.value = value
          // this.onFulfilled(this.value)
        })
      }
    }

    const reject = (value) => {
      if(this.status === PROMISE_STATUS_PENDING){
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = value
          // this.onRejected(this.reason)
        })
      }
    }

    executor(resolve,reject)

  }

  // then(onFulfilled,onRejected){
  //   this.onFulfilled = onFulfilled
  //   this.onRejected = onRejected
  // }
}

const afe1 = new Afe1Promise((resolve,reject) => {
  console.log('executor立刻执行');
  resolve('调用构造函数里面的resolve函数');
})


// afe1.then((res) => {
//   console.log('then回调函数执行了');
//   console.log(res);
// })
