//? Генераторы
// Генераторы каждый раз возвращаюют объекты с полями value и done yield при каждом запросе
// если yeild больше нет, то вернётся done: true
function* score() {
  yield console.log(1)
  yield console.log(2)
  return console.log(3)
}

let scoreRes = score()
scoreRes.next()
scoreRes.next()
scoreRes.next()
// последующие вызовы будут возвращать done: true без значения value


//* Перебор генераторов
// Генераторы можно перебирать циклами for of
function* forCycles() {
  yield 1
  yield 2
  return 3
}

let cycleTest = forCycles()

for (let value of cycleTest) {
  console.log(value)
}
//* Не возвращает return, так как игнорирует done: true

console.log([...forCycles()])// return игнорируется


// Symbol.iterator
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value
    }
  }
}
console.log([...range])
// генераторы могут генерировать бесконечно


//* Композиция генераторов
// Генератор может внутри использовать другой генератор
//  синтаксис yield*
function* generatorValue(start, end) {
  for (let value = start; value <= end; value++) {
    yield value
  }
}

function* createPassword() {
  yield* generatorValue(48, 57)
  yield* generatorValue(65, 90)
  yield* generatorValue(97, 122)
}

let str = '';

for(let code of createPassword()) {
  str += String.fromCharCode(code);
}

console.log(str);


//* yield - дорога в обе стороны
// yeild может возращать значение извне, если передать аргумент
function* gen() {
  let result = yield "2 + 3 = ?"

  console.log(result)
}

let generator = gen()

let question = generator.next().value

generator.next(5)


//* generation.throw
try {
  function* genThrow() {
    try {
      let result = yield "2 + 4 = ?"

      console.log("Строка дошла сюда(нет)")
    } catch(err) {
      console.log(err)
    }
  }

  let genThrowTest = genThrow()
  
  genThrowTest.throw(new Error("Ха-ха, твой код в заложниках! ХА-ХА-ХА"))
} catch(err) {
  console.log(err)
}



// Псевдо-случайный генератор
function* pseudoRandom(seed = 1) {
  while (true) {
    yield seed = seed * 16807 % 2147483647
  }
}

let generation = pseudoRandom()
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)
console.log(generation.next().value)