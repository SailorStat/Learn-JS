// function getElementEvenSum(arr) {
//   return arr.reduce((acc, elm, index) => (index % 2) ? acc : acc + elm, 0)
// }

// let a = [3, -6, 7, 8, -9, 0, -67, -3, 11 ,]
// console.log(getElementEvenSum(a))

// function filter(a, b, c) {
//   const [funcA, funcB] = [a, b].sort((a, b) => a - b)

//   let i = funcA
//   for (; i <= funcB; i++) {
//     if (!(i % c)) break
//   }

//   const antwort = []
//   for (; i <= funcB; i += c) {
//     antwort.push(i)
//   }
//   return antwort
// }

// console.log(filter(15, 5, 3))


// const antwort = []
// for (let i = 11; i < 1000000; i++) {
//   if (i === +`${i}`.split('').reverse().join('') &&
//       i.toString(2) === i.toString(2).split('').reverse().join('')) {
//     antwort.push(i)
//   }
// }
// console.log(antwort)

// function isPalindrom(str) {
//   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }

// console.log(isPalindrom('mamam'))

// function getMaxEventElement(arr) {
//   return Math.max(...arr.filter((el, index) => !(index % 2)))
// }

// console.log(getMaxEventElement([5, 3, -10, 15, 8, -1]))


function getPhrase(obj) {
  let phraseArr = []
  for (key in obj) {
    obj[key].map(el => phraseArr[el] = key)
  }
  return phraseArr.join('')
}

const input = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  w: [6]
}
console.log(getPhrase(input))

function findShort(s) {
  return Math.min(s.split(' ').map(el => el.length))
}

findShort("bitcoin take over the world maybe who knows perhaps")
console.log('testing git and github')