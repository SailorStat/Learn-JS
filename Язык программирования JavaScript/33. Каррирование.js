//? Каррирование
// Каррирование - это трансформация функций от f(a, b, c) к f(a)(b)(c)
// Каррирование не вызывает функцию, а трансформирует её
// function curry(f) {
//   return function(a) {
//     return function(b) {
//       return f(a, b)
//     }
//   }
// }

// function sum(a, b) {
//   return a + b
// }

// let curriedSum = curry(sum)

// console.log(curriedSum(1)(2))


// Зачем?
function log(date, importance, message) {
  console.log([date.getHours() + ":" + date.getMinutes()] + " " + [importance] + message)
}

// log = curry(log)

// log(new Date(), "DEBUG", "some debug")

// let logNow = log(new Date())
// logNow("INFO", "message")

// let debugNow = logNow("DEBUG");
// debugNow("message")

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
console.log( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
console.log( curriedSum(1)(2)(3) )