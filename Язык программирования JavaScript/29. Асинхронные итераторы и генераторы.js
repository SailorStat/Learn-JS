//? Асинхронные итераторы и генераторы
// Асинхронные интераторы
let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      
      async next() { // (2)
        await new Promise(resolve => setTimeout(resolve, 1000))

        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } 
        return { done: true }
      }
    }
  }
};

(async () => {

  for await (let value of range) {
    console.log(value)
  }

})()


// Асинхронные генераторы
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    yield i;
  }
};

(async () => {
  let generator = generateSequence(1, 5)
  for await (let value of generator) {
  console.log(value)
  }
})()

// Асинхронно перебираемые объекты
let range2 = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      yield value;
    }
  }
};

(async () => {
  for await (let value of range2) {
    console.log(value)
  }
})()