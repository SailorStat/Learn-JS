//? Генерация пользовательских событий
// Можно не тольуо считывать действия пользователя, но и генерировать
// Сгенерировать можно и стандартные действия: click, mousedown
// И собственные действия

//* Конструктор Event
// const event = new Event(type[, options])
// type - тип события: клик, наведение или придуманный нами
// options - дополнительные опции для события. По умолчанию false
//    bubbles - всплытие события
//    canseleble - отмена действия по умолчанию
//    composed - всплытие наружу за пределы Shaadow DOM


//* elem.dispatchEvent(event) - запускает сгенерированное событие, как если бы это делал пользователь
document.addEventListener('cold', () => console.log('Холодно'))
const cold = new Event('cold', {bubbles: true})
setTimeout(() => main.dispatchEvent(cold), 2000)


//* event.isTrusted возвращает true/false было ли это действие пользователя/сгенерировано


//* Готовые события
// Для некоторых событий есть собственные конструкторы, которые содержат дополнительные опции
// О них можно узнать в спецификации UI Event
const newEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 150
})
console.log(newEvent.clientX)


//* Пользовательские события
// Для создания пользовательского события используется new CustomEvent
// Он имеет дополнительное свойство detail, в которое можно дописать новые свойства
main.addEventListener('hotsun', (event) => {
  console.log('On beach today ' + event.detail.hot + ' hot')
})

main.dispatchEvent(new CustomEvent('hotsun', {
  detail: {hot: 'very'}
}))


//* event.preventDefault() отменяет поведение события
// при этом elem.dispatchEvent() вернёт false
// cancelable для event обеспецивает принятие во внимание отмену дефолтного поведения
document.addEventListener('hide', (event) => {
  if (confirm('Оставить кролика?')) {
    event.preventDefault()
  }
})

hider.addEventListener('click', function hide() {
  const hideEvent = new CustomEvent('hide', {
    cancelable: true,
    bubbles: true
  })
  if (!rabbit.dispatchEvent(hideEvent)) {
    console.log('Кролика оставили')
  } else {
    rabbit.hidden = "true"
  }
})


//* Вложенные события обрабатываются синхронно