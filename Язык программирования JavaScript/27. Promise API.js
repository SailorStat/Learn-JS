//? Promise API
// У промиса есть 5 статических методов

//* PROMISE.ALL
let promise = Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]) // выполняет промис, когда выполнен весь массив принятых промисов

promise.then(console.log) //  [1, 2, 3]


// Promise.all удобно использовать для обработки большого массива и получения результата
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
]

let requests = urls.map(url => fetch(url))
Promise.all(requests)
  .then(responses => responses.forEach(response => {
    console.log(`${response.url}: ${response.status}`)
  }))

// если один из промисов выдаст ошибку, то Promise.all вернёт ошибку
//! ошибка не отменит выполнение остальных fetch, но их результаты будут проигнорированы

//* Pomise.all(iterable) может принимать не только промисы, но и готовые значения
// удобно применять, когда у нас уже есть результат


//* PROMISE.ALLSETTLED
// Promise.allSettled обработает все вызовы и вернёт массив:
// {status: "fulfilled", value: результат} - для выполненных промисов
// {status: "rejected", reason: ошибка} - для невыполненных промисов


//* PROMISE.RACE
// Promise.race ждёт первый выполненный/невыполненный промис
// остальные промисы игноримуются


//* PROMISE.RESOLVE/REJECT
// Promise.resolve создаёт промис с результатом value
// тоже самое, что и new Promise(resolve => resolve(value))
let cache = new Map()

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url))
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text)
      return text
    })
}

// Promise.reject создаёт промис с ошибкой error
// тоже самое, что и new Promise((resolve, reject) => reject(error))