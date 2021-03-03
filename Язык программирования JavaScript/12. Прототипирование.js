//? Прототипы
// Объекты имеют прототипы (объекты-родители), на которые могут ссылаться их свойства
// Прототипы обозначают [[Prototype]] и имеют геттеры и сеттреры __proto__

// Для запроса прототипа используются Object.getPrototypeOf
// Для изменения прототипа используются Object.setPrototypeOf
let animal = {
  name: 'animal',
  breathe: true,
  eat: true,
  shit() {
    console.log(this.name + ' покакал')
  }
}

let rabbit = {
  name: 'кролик',
  jumps: true
}

// rabbit.__proto__ = animal            // записи
Object.setPrototypeOf(rabbit, animal)   // равнозначны

console.log(rabbit.eat)

// Функции тоже наследуются
rabbit.shit()


//! Прототипы не могут идти по кругу
//* Прототипы могут быть либо объектом, либо null


// Объект не может удялять свойства прототипа


// Объект не наследует свойства, которые есть у него самого
// Результат cеттера записывается в объект, а не прототип
//* Методы у объекта и прототипа общие, а состояние - нет
let mechanism = {
  _name: 'engine',
  sale: 10000,
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  }
}

let auto = {
  sale: 200000,
  __proto__: mechanism
}

console.log(auto.name)
auto.name = 'Volvo'
console.log(auto.name)


// Цикл for .. in проходится и по свойствам объекта, и по свойствам прототипа
let rabbitKey = []
for (let key in rabbit) {
  rabbitKey = [...rabbitKey, key]
}
console.log(rabbitKey) // ["name", "jumps", "breathe", "eat", "shit"]


// Для циклов без свойств прототипа используется метод obj.hasOwnProperty(key) === true || false
let onlyRabbitKey = []
for (let key in rabbit) {
  if (rabbit.hasOwnProperty(key)) {
    onlyRabbitKey = [...onlyRabbitKey, key]
  }
}
console.log(onlyRabbitKey)

// Многие методы игнорируют свойства объектов-прототипов