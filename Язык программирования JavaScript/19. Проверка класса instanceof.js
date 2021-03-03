//? Проверка класса instanceof
// Синтаксис obj instanceof Class
class Rabbit {}
let rabbit = new Rabbit()
console.log(rabbit instanceof Rabbit) // true


// instanceof проверяет всех родителей, если не задан статический Sumbol.hasInstance
class Animal {
  static [Symbol.hasInstanse](obj) {
    if (obj.canEat) return true
  }
}

let object = {canEat: true}
console.log(object instanceof Animal)


// .isPrototypeOf() проверяет является ли объект перед точкой прототипом ()
console.log(Rabbit.prototype.isPrototypeOf(rabbit))


//  toString() можно использовать для определения класса
let s = Object.prototype.toString
console.log(s.call(Animal)) // [object Function]
console.log(s.call(Rabbit)) // [object Function]
console.log(s.call(123)) // [object Number]
console.log(s.call(rabbit)) // [object Object]


// Поведение toString можно настраивать через Symbol.toStringTag
let user = {
  [Symbol.toStringTag]: 'User'
}

console.log({}.toString.call(user)) // [object User]
console.log(user)


//* {}.toString.call можно использовать вместо instanceof
//                работает для                                                    возвращает
// typeof	        примитивов	                                                    строка
// {}.toString	  примитивов, встроенных объектов, объектов с Symbol.toStringTag	строка
// instanceof	    объектов	                                                      true/false