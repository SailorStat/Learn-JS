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
// setTimeout(() => div.remove(), 2000)


//* Для клонирования сообщения используется cloneNode()
// elem.cloneNode(true) - возвращает глубокую копию elem, с дочерними элементами
console.log(main.cloneNode(true))

// elem.cloneNode(false) - возвращает неглубокую копию elem, без дочерних элементов
console.log(main.cloneNode(false))


//TODO Устаревший метод добавления document.write выводится при загрузке
// если вызвать с задержкой, то заменит исходный текст


// Задача. Автоматический список
function autoList() {
  let ul = document.createElement('ul')
  document.body.append(ul)
  return function newLi() {
    let text = prompt("Какой новый элемент списка?")
    if (text) {
      let li = document.createElement('li')
      li.textContent = text
      ul.append(li)
      newLi()
    }
  }
}
let createList = autoList()
// createList()

// Задача. Построение списка
let newDiv = document.createElement('div')
newDiv.id = 'container'
document.body.append(newDiv)
let container = document.getElementById('container')

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, branch) {
  for (childBranch in branch) {
    let li = document.createElement('li')
    li.innerHTML = childBranch
    container.append(li)

    if (Object.keys(branch[childBranch]).length) {
      let ul = document.createElement('ul')
      createTree(ul, branch[childBranch])
      li.append(ul)
    }
  }
}
createTree(container, data)


// Задача. Создание календаря
function createCalendar(elem = document.body, year, month) {
  const table = document.createElement('table')
  elem.append(table)
  const tbody = document.createElement('tbody')
  table.append(tbody)

  function createTr() {
    const tr = document.createElement('tr')
    tbody.append(tr)
    for (let i = 0; i < 7; i++) {
      const th = document.createElement('th')
      tr.append(th)
    }
  }
  createTr()

  const weekName = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  const weekNameHTML = document.querySelectorAll('th')
  for (let i = 0; i < 7; i++) {
    weekNameHTML[i].innerHTML = weekName[i]
  }

  const firstDay = new Date(year, month - 1, 1)
  const endDay = new Date(year, month, 0)
  const qualityDay = endDay.getDate()

  createTr()
  
  let currentDay = tbody.lastChild.childNodes[firstDay.getDay() - 1] || tbody.lastChild.lastChild
  
  for (let i = 1; i <= qualityDay; i++) {
    currentDay.innerHTML = i
    if (currentDay.nextSibling) {
      currentDay = currentDay.nextSibling
    } else {
      i !== qualityDay ? createTr() : false
      currentDay = tbody.lastChild.childNodes[0]
    }
  }
  
}

createCalendar(calendar, 2020, 11);


// Задача. Сортировака таблицы по имени
// let stringTable = [...table.rows].slice(1)
// stringTable.sort((a, b) => a.children[0].textContent > b.children[0].textContent ? 1 : -1)
// table.children[0].append(...stringTable)