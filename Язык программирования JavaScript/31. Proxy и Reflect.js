//? Proxy и Reflect
// Прокси работает, как ловушка над элементом

// Прокси get работает так:
let numbers = [0, 1, 3]

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    }
    return 0
  }
})

console.log(numbers[1])
console.log(numbers[1234])


let dictionary = {
  'hi': "привет",
  'bye': "пока"
}

dictionary = new Proxy(dictionary, {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    }
    return prop
  }
})

console.log(dictionary['hi'])
console.log(dictionary['love'])

//* Прокси надо использовать везде вместо target


// Ловешка для записи set
let num = []

num = new Proxy(num, {
  set(target, prop, value) {
    if (typeof value == "number") {
      target[prop] = value
      return true
    }
    return false
  }
})

num.push(1)
console.log(num)
num.push(5)
console.log(num)
// num.push('Akykaracha')
console.log(num)


// Ловушка для пропуска значений циклами
let user = {
  name: "Vasja",
  age: "45",
  _passvord: "****"
}

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})

for (let key in user) {
  console.log(key)
} // name, age


// Если нам нужно отказать в чтении, перезаписи, удалении и исключить из циклов
let mamkinSin = {
  name: "Vovka",
  age: "13",
  _password: "12345"
}

mamkinSin = new Proxy(mamkinSin, {
  get(target, prop) {
    if (prop.startsWith(_)) {
      throw new Error("Отказано в доступе");
    } else {
      let value = target[prop]
      return (typeof value === "function") ? value.bind(target) : value
    }
  },

  set(target, prop, value) {
    if (prop.startsWith(_)) {
      console.error(new Error("Нельзя прочитать"))
    } else {
      target[prop] = value
      return true
    }
  },

  defineProperty(target, prop) {
    if (prop.startsWith(_)) {
      console.error(new Error("Нельзя удалить"))
    } else {
      delete target[prop]
      return true
    }
  },

  ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith("_"))
  }
})

try {
  console.log(user._password)
} catch(e) { alert(e.message); }


// Прокси с has
let range = {
  from: 1, 
  to: 5
}

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.from && prop <= target.to
  }
})

console.log(2 in range)
console.log(7 in range)


// Прокси для apply
function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms)
    }
  })
}

function sayHi(user) {
  console.log("Hello, " + user)
}

sayHi = delay(sayHi, 2000)

sayHi("Вадик")



//? Reflect – встроенный объект, упрощающий создание прокси
//* Перенаправляет запрос на оригинальный объект
let vasya = {}

Reflect.set(vasya, "name", "Vasja")

console.log(vasya.name)


// Прокси для геттера
let prostoUser = {
  _name: "Человек",
  get name() {
    return this._name
  }
}

let userProxy = new Proxy(prostoUser, {
  get(target, prop, receiver) {
    return Reflect.get(target, prop, receiver) // === Reflect.get(...arguments)
  }
})

let admin = {
  __proto__: userProxy,
  _name: "Бог в чате"
}

console.log(admin.name)


// Для корректной работы Map, Set, Date, Promise используется конструкция
// Причина: внутренние слоты
let map = new Map()

map = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments)
    return (typeof value === "function") ? value.bind(target) : value
  }
})

map.set('1', 1)
console.log(map)

// Приватные поля #
// Решается также

//* Прокси != оригинальный объект


// Прокси можно отключать
let switcher = {
  position: true
}

let {proxy, revoke} = Proxy.revocable(switcher, {})
console.log(proxy.position)

revoke()
// console.log(proxy.position)


// Элемент массива с конца
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = target.length + +prop
    }
    return Reflect.get(target, prop, receiver)
  }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2

let handlers = Symbol('handlers');
function makeObservable(target) {
  target[handlers] = []
  target.observe = function(handler) {
    this[handlers].push(handler);
  };
  return new Proxy(target, {
    set (target, property, value, receiver) {
      let success = Reflect.set(...arguments)
      if (success) {
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  })
}

let user2 = {};
user2 = makeObservable(user2);

user2.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user2.name = "John";