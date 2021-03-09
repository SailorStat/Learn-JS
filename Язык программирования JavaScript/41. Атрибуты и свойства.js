//? Атрибуты и свойства
//* Объектам DOM можно присваивать свойства и методы, как и обычным объектам
const main = document.querySelector('#main')
main.hi = 'hello'
console.log(main.hi)// hello


//* HTML-атрибуты можно использовать, как свойство объекта, если это стандартный атрибут
// В остальных случаях помогают:
// elem.hasAttribute(name) - проверяет наличие атрибута
console.log(main.hasAttribute('data-nose'))

// elem.getAttribute(name) - возвращает значение атрибута
console.log(main.getAttribute('data-nose'))

// elem.setAttribure(name, value) - присваивает значение атрибуту
console.log(main.setAttribute('data-nose', 'big'))
console.log(main.attributes)

// elem.removeAttribute(name) - удаление атрибута
console.log(main.removeAttribute('data-nose'))

// elem.attributes - все атрибуты элемента
console.log(main.attributes)
//! значение аттрибута всегда строка


//* Синхронизация между атрибутами и свойствами
// Стандартные изменяются в обе стороны, кроме некоторых исключений
main.id = 'newMain'
console.log(main.getAttribute('id'))
main.setAttribute('id', 'main')
console.log(main.id)


//* DOM-свойства типизированы
// Обычно свойства имеют тип строки, но могут быть и другими
// булевым для checked
// объектом для style


//* Нестандартные атрибуты, dataset
// Чтобы создать нестандартные аттрибуты можно использовать data-
// Такие свойства доступны через dataset


// Задача.Найти и изменить цвет внешних ссылок
console.log(main.dataset.fix)
const links = [...document.querySelectorAll('a')]
    links.map(el => {
      if (el.hasAttribute('href') &&
          ~el.getAttribute('href').indexOf('://') &&
          !~el.getAttribute('href').indexOf('http://internal.com')) {
            el.style.color = 'orange'
          }
    })
