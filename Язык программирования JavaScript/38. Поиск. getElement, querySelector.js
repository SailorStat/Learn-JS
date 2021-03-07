//? Поиск: getElement*, querySelector*
//* Получение элемента
//* Если у элемента в html есть id, то его получить через document.getElementById('id')
let main = document.getElementById('main')
main.style.background = 'rgba(200, 100, 150, .4)'

// Также можно просто обратиться к этому классу, как к переменной
main.style.background = 'rgba(200, 100, 150, .4)'

//! Будет работать, если нет переменной с аналогичным названием
// <div id="main"></div>
// <script>
//   let main = 5; // теперь main равен 5, а не <div id="elem">
//   console.log(main); // 5
// </script>

// Усли название id содержит -, то к нему нельзя обратиться обычным способом,
// для этого нужно воспользоваться window['id']


//* elem.guerySelectorAll() возвращает все элементы внутри elem, которым удовлетворяет условие в ()
console.log([...document.querySelectorAll('ul > li:last-child')].map(el => el.innerHTML))


//* elem.querySelector() возвращает первый селектор внутри elem, которому удовлетворяет условие
console.log(document.querySelector('ul > li:last-child').innerHTML)


// * elem.maches() возвращает true или false в зависимости от соответствия elem к ()
console.log(main.matches('.main'))


//*  elem.closest() возвращает 1 родителя, который удовлетворяет ()
console.log(lorem.closest('.main'))


//* также можно искать через tag (* = TagName), class (* = ClassName) и name (* = Name) elem.getElementsBy*()
// используются редко, так как есть классный elem.guerySelectorAll()


//* getElemetsBy возвращает ЖИВУЮ КОЛЛЕКЦИЮ
//* guerySelectorAll возвращает статическую коллекцию


//* elemA.contains(elemB) вернёт true, если elemA родитель elemB или elemA == elemB


//* Задачи
// Таблицу с id="age-table".
// document.getElementById('age-table')

// Все элементы label внутри этой таблицы (их три).
// document.getElementsByTagName('label')

// Первый td в этой таблице (со словом «Age»).
// document.getElementByTagName('td')

// Форму form с именем name="search".
// document.getElementByName('search')

// Первый input в этой форме.
// document.getElementByTagName('input')

// Последний input в этой форме.
// const inputs = document.getElementsByTagName('input')
// inputs[inputs.length -1]
