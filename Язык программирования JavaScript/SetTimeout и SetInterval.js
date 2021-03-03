// Вызов через определённое время в миллисекундах setTimeout(function, timeout)
setTimeout(hello, 2000)
function hello() {
  console.log('Hello')
}


// Через setTimeout() в функцию передаются аргументы setTimeout(func, timeout, arg1, arg2..)
setTimeout(when, 4000, 'dear friend', 'Boris Vladimirowich')
function when(status, name) {
  console.log("When you bussines, " + status + ' ' + name + '?')
}


// Можно отменить выполнение с помощью clearTimeout()
let poslat = setTimeout(() => console.log("Да пошёл ты.."), 6000)
console.log(poslat)
clearTimeout(poslat)
// Если функция после применения больше не используется, то рекомендуется отчистить память
// от функции через clearTimeout()


// setInterval() прописывается, как и setTimeout(), только срабатывает через каждый промежуток времени
function xaxa() {
  console.log("xaxa")
}
let xixachki = setInterval(xaxa, 1001)


// Прекращение setInterval() происходит черех clearInterval()
setTimeout(() => clearInterval(xixachki), 5000)


// В некоторых ситуациях рекурсивный setTimeout() лучше setInterval(), так как срабатывает
// после завершения предыдущего вызова
let alarmClock = setTimeout(function alarm() {
//  alert("Вставай")
  setTimeout(alarm, 2000)
}, 2000);


// setInterval() замеряет время между началами исполнения
// setTimeout() замеряет время между исполнениями


// setTimeout(func) вызывает код сразу после func(), так как имее дажержку (хоть и 0)


// После 4 моментальных вызовов у setInterval() и setTimeuot() появляется задержка 4+ мс


// Вывод каждую секунду
let from = 0
let to = 10
function printNumbers(from, to) {
  let inscrease = setInterval(() => {
    console.log(from)
    if (from >= to) clearInterval(inscrease)
    from++
  }, 1000);
}
printNumbers2(from, to);

function printNumbers2(from, to) {
  setTimeout(() => {
    console.log(from)
    if (from < to) {
      from++
setTimeout(printNumbers2(from, to), 1000);
    }
  }, 1000);
}

