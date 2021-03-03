//? Приватные и защищённые методы и функции
// В ООП свойства и методы разделены на внутренний интерфейс и внешний
// Внутренний интерфейс  - СиМ, которые доступны только внутри класса
// Внешний интерфейс - СиМ, котрые доступны снаружи класса

// Всё, что нужно, для использования объекта - знать, что у него снаружи

class CoffeeMachine{
  constructor(power) {
    this._power = power
    console.log('Создана кофеварка с мощностью ' + this.power + ' ватт')
  }
  get power() {return this._power}

  _waterAmount = 0
  get waterAmount() {return this._waterAmount}
  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды")
    this._waterAmount = value
  }
}

let coffeeMachine = new CoffeeMachine(100)

coffeeMachine._waterAmount = 300
console.log(coffeeMachine)

//* вместо геттеров и сеттеров можно использовать 
//* getWaterAmount() и setWaterAmount() - такой вариант более гибкий

// Защищённые поля наследуются, в отличии от приватных полей


// Приватные свойства недоступны извне и не наследуются
// Используются только внутри классов для пременных
class Cat{
  #eatInStomash = 0

  get eatInStomash() {return this.#eatInStomash}
  set eatInStomash(value) {
    if (value < 0) throw new Error("Не отбирай еду у кота");
    this.#eatInStomash = value
  }
}

let mrMyrsiao = new Cat()
mrMyrsiao.eatInStomash = 10
//* console.log(mrMyrsiao.#eatInStomash) не даст результата


// Наследные классы не получают доступа к приватным переменным
class peopleHand extends Cat {
  mesauringStomash() {
    // return this.#eatInStomash - ошибка доступа к приватной переменной
  }
}

// отделение внутренних и внешних переменных нвзывается Инкапсуляция