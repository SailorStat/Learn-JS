//? Размеры и прокрутка элементов
//* Метрики
//* offsetParrent, offsetLeft/Top содержат координаты верхнего левого угла родителя
// считается родитель, который виден и пзиционирован


//* offsetWidth/Height - внешняя ширина и высота всего блока
// если элемент не видим, то его размер 0


//* clientTop/Left - высота и ширина отступа до внутренней части: бордер и прокрутка, если есть


//* clientWidth/Height - ширина и высота внутренней части


//* scrollWidth/Height - ширина и высота прокручиваемой части


//* scrollTop/Left - высота и ширина прокрученной части
// можно не только получить но и изменить


// Задача. Высота непрокрученной области
let scrollBottom = elem.scrollHeigth - elem.scrollTop - elem.clientHeight


// Задача. Ширина прокрутки
let elemScrollWidth = elem.offsetWidth - elem.clientWidth


// Задача. Выравнивание меча по центру поля
// const ball = document.querySelector('#ball')
// const field = document.querySelector('#field')
// ball.style.top = (field.clientHeight - ball.clientHeight) / 2 + 'px'
// ball.style.left = (field.clientWidth - ball.clientWidth) / 2 + 'px'