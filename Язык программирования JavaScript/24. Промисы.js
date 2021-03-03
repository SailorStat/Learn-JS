//? Промисы
let promise1 = new Promise(function (resolve, reject) {
  // функция - исполнитель (executor)
})

// resolve - результат выполнения функции
// reject - error

// Promise имеет свойства: state, result (undefined => resolve(value) или reject(error))
// state имеет состояния pending(ожидание), fulfilled (успешно выполнено) и rejected (выполнено с ошибкой)

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(console.log("done")), 1000)
})// функция отработала и выдала результат

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Что-то пошло не так...")), 2000)
})


// Функция возвращает первый resolve/reject, остальные игнорируются

// reject нужно возвращать только с Error или подобными, и наоборот

// resolve/reject можно вызвать не дожидаясь конца функции, например, если результат закеширован

// state - внутреннее свойство


//? Потребители: then, catch, finally
promise2.then(
  function (result) {console.log('result')},
  function (error) {console.log("error")}
)
// Если нас интересует только успешный результат, то 2-я функция откидывается


// .catch игнорирует успешное выполение, и выполняется при ошибке // равно .then(null, function)
promise3.catch(
  function (error) {console.log("error")}
)


// .finally не знает результат промиса и пропускает их дальше
// Подходит для выполнения общих операций, независимых от результата


//* после выполнения промиса .then/.catch/.finally выполняются сразу

function delay(ms) {
   return new Promise(
     resolve => setTimeout(resolve, ms)
   )
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// let promise = new Promise(function(resolve, reject) {

// })
function sum(a, b) {
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(a = a + b), 4000)
  })
  .then(
    () => console.log(a),
    () => console.log(a)
  )
  .finally(
    console.log("123123")
  )
}

sum(2, 5)