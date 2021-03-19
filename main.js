//? Основы событий мыши
//* ТИПЫ СОБЫТИЙ МЫШИ

//* Простые события мыши
//* mousedown/mouseup - клавиша мыши нажата, отпущена
//* mouseover/mouseout - курсор оказался на элементе, покинул элемент
//* mousemove - курсор изменил положение на элементе
//* contextmenu - вызов контекстного меню (правая кнопка) // иногда это клавиша контекстного меню

//* Комплексные события мыши
//* click - mousedown и mouseup над одним и тем же элементом, если использовалась мышь
//* dblclick - двойное событие click

//* Порядок событий
// Клик мыши вызывает следующий порядок: mousedown -> mouseup -> click
// При этом получаем свойство which, которое означает клавишу


//* Получение информации о which
// Это свойство не используется для click и contextmenu,
// так как они обозначают нажатие левой и правой клавиши соответственно
// event.which = 1 - левая кнопка
// event.which = 2 - средняя кнопка
// event.which = 3 - правая кнопка


//* Модификаторы: shift, alt, ctrl и meta
// Модификаторы возвращают true, если была зажата соответствующая кнопка
// event.shiftKey - Shift
// event.altKey - Alt/Opt на Mac
// event.ctrlKey - Ctrl/ иногда Cmd на Mac
// event.metaKey - Cmd на Mac
hider.addEventListener('click', () => rabbit.hidden = 'true')
document.addEventListener('click', (event) => {
  if (event.altKey) {
    console.log('Кто-то кликнул на страницу с Alt и нашёл зайчика =)')
    rabbit.hidden = ''
  }
})
//TODO для мобильных устройств должна быть доступна та же функциональность другим способом


//* Координаты event.clientX/Y и event.pageX/Y показывают положение относительно окна и всей страницы