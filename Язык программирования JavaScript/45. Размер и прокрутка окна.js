//? Размеры и прокрутка окна
//* для большинства запросов можно использовать document.documentElement === <html>


//* Ширина и высота документа
//TODO Прокручиваемая высота может работать неправильно, для правильных значений надо использовать:
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
// помечено не вдумываться, просто использовать


//* Получение текущей прокрутки
// из-за несовместимости с webkit не получится использовать document.documentElement.scrollTop/Left
// текущее значение можно получить через
document.body.scrollLeft/Top
console.log(window.pageXOffset)
console.log(window.pageYOffset)


//* Прокрутка через scrollTo, scrollBy, scrollIntoView
//TODO Для прокрутки станицы она должна быть полностью прогружена
// кроме webkit можно использовать
document.documentElement.scrollTop
document.documentElement.scrollLeft
// есть другие способы
//* window.scrollBy(0, 10) прокручивает страницу на 10 пикселей вниз
//* window.scrollTO(0, 10) прокручивает страницу до 10 пикселей от начала
//* elem.scrollIntoView(true/false) прокручивает страницу до элемента, чтобы он был сверху/снизу


//* Запрет прокрутки
document.body.style.overflow = 'hidden'
// вернуть прокрутку
document.body.style.overflow = ''
// чтобы избежать прыжка текста, нужно сравнить ширину документа до фиксации и добавить padding
