// Деструктурирующее присваивание
let user = {
  name: "John",
  years: 30
};
let {name, years: age, isAdmin = false} = user;

// Минимальная зарплата
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
topSalary(salaries)
function topSalary(obj) {
  let maxName = null;
  let max = 0
  for (let [name, salary] of Object.entries(obj)) {
    if (salary > max) {
      max = salary;
      maxName = name;
    }
  }
  console.log(maxName);
  return maxName
}