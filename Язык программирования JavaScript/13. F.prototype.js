//? F.prototype
// F.prototype пописывает свойства объекта в [[Prototype]]
let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

let newRabbit = new Rabbit('Backs Banny')
console.log(newRabbit.eats)


// Переназначение F.prototype не перезаписывает старые привязки
let toy = {
  eats: false
}

Rabbit.prototype = toy
let toyRabbit = new Rabbit('Backs Banny')
console.log('Игрушка ест? - ' + toyRabbit.eats)
console.log('Животное ест? - ' + newRabbit.eats) // Осталось прежним


// // // Свойство constructor помогает создать объект с таким же прототипом
// // let secondRabbit = new newRabbit.constructor('Beely Winkley')
// // console.log(newRabbit)
// // console.log(secondRabbit)