//? Расширение встроенных классов
// От встроенных классов можно присваивать методы
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }
}
let arr = new PowerArray(1, 2, 3, 4, 5, 100)
console.log(arr.isEmpty()) // false