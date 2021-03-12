//? Координаты
//* Координаты относительно окна
console.log(main.getBoundingClientRect())
// возвращает объект, в котором:
// x, y - координаты начала elem от верхней-левой границы клиента
// width, heidht - ширина и высота elem
// top, bottom - расстояние от верхней и нижней границы до начала клиента
// right, left - расстояние от левой границы клиента до правой и левой границы клиента


//* elementFromPoint(x, y) - возвращает самый глубоковложенный элемент в окне по координатам


//* Применение fixed для позиционирования
// Чтобы получить объект рядом с другим, нужно получить его координаты
// и используя свойства top и left создать нужный объект
// если при этом новому объекту задать style.position = 'fixed'
// то этот блок зависнет на одном месте в браузере

// Применение style.position = 'absolute' заставит новый объект всегда оставаться
// рядом с хозяином


// Задача. Нахождение точек. 46. Search.html
let fieldPos = field.getBoundingClientRect()
console.log(fieldPos.left, fieldPos.top)
console.log(fieldPos.right, fieldPos.bottom)
console.log(fieldPos.left + field.clientLeft, fieldPos.top + field.clientTop)
console.log(fieldPos.left + field.clientLeft + field.clientWidth, fieldPos.top + field.clientTop + field.clientHeight)