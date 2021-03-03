//? Промисы: обработка ошибок
// Промисы отлично подходят для обработки ошибок
fetch('ssilka.na.nichego')
  .then(response => response.json())
  .catch(err => console.log("Тут у нас ошибочка вышла: " + err))
// catch может быть и после нескольких действий, всё равно сработает

//* catch обрабатывает и запланированные ошибки, и случайные

// если then выбрасывает ошибку, то обработка переходит к близжайшему catch
// если catch обработал ошибку, близжайший успешный then включается в работу
// если catch не может обработать ошибку, то она пробрасывается до следующего catch


// когда ошибка не обработана, она выпадает в глобальную ошибку
window.addEventListener('unhandledrejection', function (event) {
  console.log(event.promise)
  console.log(event.reason)
})