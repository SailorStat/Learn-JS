//? Браузерное окружение, спецификации
// Браузер может выступать, как глобальный объект для js-кода, и как среда с элементами и их методами управления
function say(arg) {
  console.log(arg)
}
window.say('Привет')// - window, как объект для кода

console.log(window.innerHeight)// - window, как среда с элементами