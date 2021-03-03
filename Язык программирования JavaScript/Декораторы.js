// // Можно создавать cache обёртку для функций, чтобы не проводить сложные вычисления много раз
// function consoleFunc(num) {
//   return Math.pow(num, 10);
// }

// function consoleFunc2(num) {
//   return Math.pow(num, 2);
// }


// function cacheMap(func) {
//   let cache = new Map()

//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x)
//     }

//     let result = func(x)

//     cache.set(x, result)
//     return result;
//   }
// }

// consoleFunc = cacheMap(consoleFunc);
// consoleFunc2 = cacheMap(consoleFunc2);

// consoleFunc(2)
// consoleFunc2(2)


// // Декоратор-шпион
// function work(a, b) {
//   console.log( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// // Задерживающий декоратор
// function f(x) {
//   console.log(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);

// f100("test", 89);

// function delay(f, ms) {
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms)
//   }
// }

// let f = debounce(alert, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последне

// // function debounce(f, ms) {
// //   let time = Date.now()
// //   return function(...args) {
// //     if (Date.now() - time >= ms) {
// //       time = Date.now()
// //       f.apply(this, args)
// //     }
// //   }
// // }

// function debounce(f, ms) {

//   let isCooldown = false;

//   return function() {
//     if (isCooldown) return;
    
//     f.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => isCooldown = false, ms);
//   };
// }

function f(a) {
  console.log(a)
}

let f1000 = throttle(f, 1000);

// function throttle(f, ms) {
//   let resultArgs = 0
//   let flag = false
//   return function(...args) {
//     if (flag) {
//       resultArgs = args
//       return setTimeout(function () {
//         if (!flag) {
//           flag = true
//           return f.apply(this, resultArgs)
//         }
//       }, ms)
//     }
    
//     flag = true
//     setTimeout(() => flag = false, ms)
//     return f.apply(this, args)
//   } 
// }

// function throttle(f, ms) {
//   let resultArgs = 0
//   let flag = false
//   let tothArgs = 0
//   return function(...args) {
//     if (resultArgs || flag) {
//       flag = true
//       tothArgs = args
//       return setTimeout(function() {
//         if (flag) {
//           flag = false
//           return f.apply(this, tothArgs)
//         }
//       }, ms)
//     }

//     resultArgs = args
//     setTimeout(() => resultArgs = 0, ms)
//     return f.apply(this, resultArgs)
//   }
// }

// function throttle(f, ms) {
//   let timeUse = Date.now()
//   let resultArgs = 0
//   return function(...args) {
//     let time = Date.now()
//     if (time - timeUse > 1000) {
//       timeUse = time
//       return f.apply(this, resultArgs)
//     }

//     if (time - timeUse < 1000) {
//       timeUse = time
//       resultArgs = args
//       setTimeout(() => f.apply(this, resultArgs), ms)
//     }
//     resultArgs = args
//     return f.apply(this, resultArgs)
//   }
// }


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

f1000(1, 2, 3)
f1000(123)
f1000(2)
f1000(3)
setTimeout(f1000(4), 996)
setTimeout(f1000(5), 2006)
// setTimeout(f1000(6), 3000)
// setTimeout(f1000(7), 4100)
// setTimeout(f1000(8), 4500)
// f1000(4)