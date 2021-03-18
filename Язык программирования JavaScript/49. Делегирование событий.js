//? Делегирование событий
//* Если нам нужно одиноковым элементам задать одинаковое поведение
//* мы это поведение вешаем на родителя и через всплытие после погружения получать это поведение
// table.onclick = function(event) {
//   const td = event.target.closest('td') // (1)
//   if (!td) return // (2)
//   if (!table.contains(td)) return // (3)
//   highlight(td) // (4)
// }


//* Применение делегирования
class Menu {
  constructor(elem) {
    elem.onclick = this.onСlick.bind(this)
  }

  save() {
    console.log('сохранение..')
  }

  load() {
    console.log('загрузка..')
  }

  search() {
    console.log('поиск..')
  }

  onСlick(event) {
    const action = event.target.dataset.action
    if (action) this[action]()
  }
}
const newmenu = new Menu(menu)


//* Приём проектирования "поведение"
// Элементу присваивается атрибут, означающий поведение
// На документ ставится обработчик, который в атрибут записывает действия
document.addEventListener('click', function (event) {
  if (event.target.closest('[data-fix]')) {
    event.target.closest('[data-fix]').innerHTML += ' click'
  }
})


// Задача. 49. Делегирование закрытия.html

// Задача. 49. Сворачивающийся список.html