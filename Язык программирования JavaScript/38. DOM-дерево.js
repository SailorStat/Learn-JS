//? DOM-дерево
//* Верхние узлы
// <html>
document.documentElement

// <head>
document.head

// <body>
document.body
// во время, когда уже прочитан head, но не прочитатн body, у body принимается значение null
// из-за этого синхронный скрипт не может начать работу, та как к null нельзя применить свойства\\

//! null означает не существует


//* Дети
// childNodes содежит всех детей, в том числе текстовые узлы
console.log(document.body.childNodes)

// firstChild и lastChild - быстрый доступ к первому и последнему дочернему элементу

// childNodes - псевдомассив, к нему можно применять цикл for .. of
for (element of document.body.childNodes) {
  console.log(element)
}
// к нему нельзя применить некоторые методы массивов, но это можно обойти с помощью [...]


//* Соседи
// Соседи - соседи, у которых один родитель
// previousSibling - предыдущий сосед, nextSibling - следующий сосед
// parentNode - сосед-родитель


//* Навигация по элементам
// Отличается добавлением 2-ым словом Element: nextElementSibling - следующий элемент
// к элементам не относятся текстовые узлы, комментарии и др.
console.log(document.body.children)// вернёт только детей-элементов

// Таблицы имеют дополнительные свойства


/// Задачи
{/* <html>
      <body>
        <div>Пользователи:</div>
        <ul>
          <li>Джон</li>
          <li>Пит</li>
        </ul>
      </body>
    </html> */}
// как получить..
// элемент <div>? : document.body.firstElementChild
// <ul>? : document.body.lastElementChild
// второй <li> (с именем Пит)?  : document.body.lastElementChild.lastElementChild

let table = document.body.firstElementChild;

// console.log(table.children[0])
// for (let i = 0; i < table.children[0].children.length; i++) {
//   table.children[0].children[i].children[i].style.backgroundColor = 'red';
// }