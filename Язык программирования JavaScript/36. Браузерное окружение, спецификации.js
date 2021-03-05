//? Браузерное окружение, спецификации
// window выступает в виде среды исполнеия js-кода и в виде среды элементов и их методов
function sayHi() {
  return 'Привет'
}
console.log(window.sayHi())// - window, как среда для js

console.log(window.innerHeight)// - window, как среда элементов

//* DOM
// Document Object Model - объектная модель документа, которая представляет всё содержимое страницы
// в виде объектов, которые можно менять.
// DOM может быть не только браузерным, но и серверным

//* BOM
// Browser Object Model - объектная модель браузера, которая предоставляет дополнительные объекты
// для работы с окружением
// alert(), confirm(), prompt() - тоже часть BOM