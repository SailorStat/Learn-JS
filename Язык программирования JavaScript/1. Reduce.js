const peoples = [
  {name: 'Ilya', age: 30, salary: 15000},
  {name: 'Nina', age: 25, salary: 18000},
  {name: 'Sasha', age: 28, salary: 23000},
  {name: 'Gosha', age: 40, salary: 11000},
  {name: 'Lera', age: 32, salary: 16000},
]

let salarys = peoples.reduce((sal, peoples) => sal + peoples.salary, 0)
console.log(salarys)