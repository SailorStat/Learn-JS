//? ФЛАГИ И ДЕСКРИПТОРЫ

//* У свойств объекта есть скрытые атрибуты - флаги. По умолчанию значение true
// writable - изменение/режим чтения
// enumerable - перебор/игнорирование циклами
// configurable - доступно/недоступно удаление/изменеие свойства/флага


// Просмотреть флаги можно методом getOwnPropertyDescriptor
let user = {
  gender: 'man'
} 
let genderDescription = Object.getOwnPropertyDescriptor(user, 'gender')
console.log(genderDescription)


// Создать свойство с флагами помогает метод defineProperty
// если свойство не указано, то оно будет иметь значение false
let people = {}

Object.defineProperty(people, 'name', {
  value: 'Petya',
  configurable: true
})

let peopleDescription = Object.getOwnPropertyDescriptor(people, 'name')
console.log(peopleDescription)


// Если флаг должен быть другим используем defineProperty
Object.defineProperty(user, 'gender', {
  writable: false,
  enumerable: false
})
let genderDescriptio = Object.getOwnPropertyDescriptor(user, 'gender')
console.log(genderDescriptio)

Object.defineProperty(user, 'gender', {
  enumerable: false
})
let genderDescripti = Object.getOwnPropertyDescriptor(user, 'gender')
console.log(genderDescripti)


//! configurable: false нельзя изменить
//* если сойство или флаги будут изменяться, то при создании через defineProperty 
//* нужно обязательно указать true


// Задать несколько свойств объекта можно с помощью Object.defineProperties
Object.defineProperties(user, {
  name: {value: 'Vitja', configurable: true},
  age: {value: 32, writable: true, configurable: true}
})
console.log(user)
console.log(Object.getOwnPropertyDescriptor(user, 'age'))


// Для копирования объекта с флагами используется Object.getOwnPropertyDescriptors
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user))

console.log(clone)
console.log(Object.getOwnPropertyDescriptor(clone, 'age'))


//* Глобальное запечатывание объекта
// Object.preventExensions(obj) - запрет на добавление нового свойства

// Object.seal(obj) - configurable: false для всех свойств

// Object.freeze(obj) - запрет на добавление, удаление и изменение свойства

// Object.isExtensible(obj) - проверяет на добавление свойств, возвращаеит true или false

// Object.isSealed(obj) - true, если нельзя добавлять и удалять свойства и
// configurable для всех свойств false

// Object.isFrozen(obj) - true, если нельзя добавлять, удалять и изменять свойства