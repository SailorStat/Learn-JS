//? Геттеры и сеттеры

// Для чтения свойства объекта используется get, для изменения set
let user = {
  name: 'Alex',
  surname: 'Pilovin',
  get fullName() {
    return this.name + ' ' + this.surname
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(' ')
  }
}


//! Без set свойство не может изменить значение


// Get и set вызываются, как обычный параметр
console.log(user.fullName)


// Дескрипторы свойств доступа
let people = {
  name: 'Ivan',
  surname: 'Poljakov'
}

Object.defineProperty(people, 'fullName', {
  enumerable: true,
  configurable: true,
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(people)


// Enumerable: true свойства get и set будут видны в циклах
for (let key in people) {
  console.log(people[key])
}


// Set можно использовать, как обёртку над свойством объекта
let newUser = {
  get name() {
    return this._name
  },
  set name(value) {
    if (value.lengs < 4) {
      console.log('Слишком короткое имя пользователя')
      return
    }
    this._name = value
  }
}

newUser.name = 'Igor'
//! Переменные, начинающиеся с _ не принято вызывать, так как они считаются внутренними

