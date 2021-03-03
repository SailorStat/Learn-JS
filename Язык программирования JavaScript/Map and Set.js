// let priceMap = new Map([
//   ['polo', 200],
//   ['t-shot', 300],
//   ['sneakers', 400]
// ])

// for (let clothers of priceMap.keys()) {
//   console.log(clothers)
// }

// for (let price of priceMap.values()) {
//   console.log(price)
// }

// for (let entry of priceMap) {
//   console.log(entry)
// }

// priceMap.forEach((value, key, map) => {
//   console.log(`${key} стоит ${value}р.`)
// })


// // Object.entries: Map из Object
// let objPlice = {
//   polo: 201,
//   tshot: 301,
//   sneakers:  401,
// }

// let mapPrice = new Map(Object.entries(objPlice))
// console.log(mapPrice)


// // Object.fromEntries: Map -> Object
// let mapEat = [
//   ['banana', 50],
//   ['orange', 100],
//   ['apple', 78]
// ]

// let objEat = Object.fromEntries(mapEat)
// console.log(objEat)


// // SET
// let buyList = new Set();

// let ananas = {'ananas': 350}
// let banana = {'banana': 200}
// let orange = {'orange': 50}

// buyList.add(ananas)
// // console.log(buyList)
// buyList.add(banana)
// // console.log(buyList)
// buyList.add(ananas)
// // console.log(buyList)
// buyList.add(orange)
// // console.log(buyList)
// buyList.add(banana)
// console.log(buyList.size)

// for (let value of buyList.keys()) console.log(Object.keys(value));

// // Фильтрация массива
// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// unique(values)

// function unique(arr) {
//   return [...new Set(arr)];
// }

// // Фильтрация анаграмм
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// aclean(arr)

// function aclean(arr) {
//   let library = new Map()

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('')
//     library.set(sorted, word)
//   }

//   console.log([...library.values()])
//   return [...library.values()]
// }

// // Добавить ключ в массив
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);