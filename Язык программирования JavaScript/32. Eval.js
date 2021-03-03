//? Eval
// Eval вызывает выполнение функций
let value = eval('1+1');
console.log(value)

function decision() {
  let example = prompt("Enter example", "2 + 3 * 2")
  console.log(eval(example))
}
// decision()

function decision2() {
  let example = prompt("Enter example", "2 + 3 * 2")
  console.log(new Function('return ' + example)())
}
decision2()
