//? Изменение документа
//* Создание элемента
// document.createElement(tag) создаёт элемент с указанным тегом
const div = document.createElement('div')
console.log()

// document.createTextNode(text) - создаёт текстовый узел с указанным текстом
console.log(document.createTextNode('text for test'))


//* Создание сообщения
div.className = 'alert'
div.innerHTML = "<strong>Всем привет</strong> Вы прочитали важное сообщение"


//* Методы вставки
// objA.append(objB) вставляет элемент objB в objA
document.body.append(div)

// objA.before(objB) вставляет до
  // objA.prepend(objB) вставляет в начало
  // objA.append(objB) вставляет в конец
// objA.after(objB) вставляет после

// objA.replaceWith(objB) вставляет вместо

// before
//   0: prepend
//   1: 0
//   2: 1
//   3: 2
//   4: append
// after


//* insertAdjacentHTML
// Для того, чтобы вставить непосредственно html используется elem.insertAdjacentHTML/Text/Element(pos, html)
// elem - элемент, относительно которого срабостает функция
// pos - расположение нового элемента/текста/html-кода
// "beforebegin"      - перед elem
//    "afterbegin"        - в начало elem
//    "beforeend"         - в конец elem
// "afterend"         - после elem
// html - вставляемый код

//* insertAdjacentText - вставляет текстовый узел
//* insertAdjacentElement - вставляет элемент


//* Для удаления узла используется node.remove()
setTimeout(() => div.remove(), 2000)


//* Для клонирования сообщения используется cloneNode()
// elem.cloneNode(true) - возвращает глубокую копию elem, с дочерними элементами
console.log(main.cloneNode(true))

// elem.cloneNode(false) - возвращает неглубокую копию elem, без дочерних элементов
console.log(main.cloneNode(false))