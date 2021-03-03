// Object.keys, values, entries

// Сумма свойств объекта
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
sumSalaries(salaries)

function sumSalaries(obj) {
  let salaries = 0
  for (let value of Object.values(obj)) {
    salaries += value
  }
  return salaries;
}

// Подсчёт количества свойств объекта
let user = {
  name: 'John',
  age: 30
};
count(user)

// function count(obj) {
//   let arr = []
//   for (let key of Object.keys(obj)) {
//     arr.push(key)
//   }
//   return arr.length;
// }

function count(obj) {
  return Object.keys(user).length;
}
