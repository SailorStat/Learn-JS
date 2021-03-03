//? Статические свойства и методы
// Статические методы нужны, когда мы хотим сравнить несколько объектов
class Animal {
  constructor(name, speed) {
    this.name = name
    this.speed = speed
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed
  }
}

// Наследование работает
class Rabbit extends Animal{}

let rabbits = [
  new Rabbit('First rabbit', 8),
  new Rabbit('Thrith rabbit', 12),
  new Rabbit('Second rabbit', 10)
]
rabbits.sort(Rabbit.compare)
console.log(rabbits)