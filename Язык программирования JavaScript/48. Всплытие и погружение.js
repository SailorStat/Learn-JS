//? Всплытие и погружение
//* Всплытие
//* События сначала обрабатываются от самого глубоко вложенного элемента до самого верхнего
//TODO почти все события всплывают


//* event.target - первый элемент, зарегистрированный обработчиком
//* this - это текущий элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.


//* event.stopPropagation() прекращает всплытие
//* event.stopImmediatePropagation() прекращает выполнение на текущем элементе
//! НЕ ПРЕКРАЩАТЬ ВСПЛЫТИЕ БЕЗ НЕОБХОДИМОСТИ


//* Перед всплытием происходит погружение. DOM пошагово ищет внутренний элемент
// поймать погружение можно, если задать для addEventListener задать 3 аргумент capture: true