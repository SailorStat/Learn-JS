//? Классы
// Для ООП используется конструктор классов
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log('Привет')
  }
}
let user = new User('Костя')


//* Методы в классах не разделяются запятой
// Class Expression
let User2 = class {
  sayBye() {
    console.log('Покаки')
  }
}


// Такие классы тоже могут иметь имя, которое видно только внутри класса
let User3 = class User4 {
  sayHo() {
    console.log(User4)
  }
}
new User3().sayHo()
// console.log(User4) выдаёт ошибку


// Классы могут созаваться динамически
function makeClass(text) {
  return class {
    sayJo() {
      console.log('jo ' + text)
    }
  }
}

let lola = new makeClass('приветик, Лола')
new lola().sayJo()


// Геттеры и сеттеры
class Animal {
  constructor(name) {
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Слишком короткое имя");
      return;
    }
    this._name = value;
  }
}
let pig = new Animal("Поросёнок")
console.log(pig.name)

let pig2 = new Animal("Пиг") // 'Слишком короткое имя'


// При объявлении элемента класса через definePrototype, он записывается в Class.prototype
Object.defineProperties(Animal.prototype, {
  _age: {
    writable: true,
    enumerable: false,
    configurable: true
  },

  age: {
    enumerable: true,
    configurable: true,
    get() {
      return this._age
    },
    set(value) {
      if (value < 0) {
        console.log('Возраст не может быть отрицательным')
        return
      }
      this._age = value
    }
  }
})


pig.age = 10
console.log(pig)


// У классов можно создавать методы
class Birth {
  sayChirik() {
    console.log('Чирик-чирик')
  }
}
new Birth().sayChirik()

// Переписать часы из вункционального стиля в классы
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: 'h-m-s' });
clock.start();
console.log(clock)