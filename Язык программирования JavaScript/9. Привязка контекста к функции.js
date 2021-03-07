// При вызове метода объекта вне объекта, он теряет контекст
// Вот так функция не сработает
let user = {
  firstName: 'Вася',
  sayHi() {
    console.log('Привет, ' + this.firstName)
  }
}

setTimeout(user.sayHi, 1000)


// Есть динамическое решение, которое примет конечное значение, если оно было изменено до исполнения
// Функция-обёртка вернёт последнее принятое значение, пока исполнялась функция (.js : 21)
setTimeout(() => user.sayHi(), 1000)


// Приаязать this к конексту помогает метод bind
let sayHi = user.sayHi.bind(user)
setTimeout(sayHi, 2000)
user = { sayHi() { console.log("Другой пользователь в 'setTimeout'!"); } };


// Применить метот можно для всех функций объекта в цикле bindAll
for (let key in user) {
  user[key] = user[key].bind(user)
}


// Частичное применение
// Мы можем 'застолбить' значение для функции через метод bind
function sum(a, b) {
  console.log(a + b)
}

let sumWithTen = sum.bind(null, 10)

sumWithTen(3)
sumWithTen(5)
sumWithTen(7)


// Частичное применение без контекста
// Иногда нам не нужен контекст, он будет досоздан позже
function partial(func, ...argsBind) {
  return function(...args) {
    return func.call(this, ...argsBind, ...args)
  }
}

let userin = {
  firstName: "Егор",
  say(time, phrase) {
    console.log(time + " " + this.firstName + ", " + phrase)
  }
}

userin.sayNow = partial(userin.say, new Date().getHours() + ':' + new Date().getMinutes())

userin.sayNow('доброе утро')

