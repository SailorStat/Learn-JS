//? Общение между окнами
// Окна из разных источников не могут между собой общаться


//* Политика одинакового источника
// Одинаковый источник считается тогда, когда у окон одинаковые протокол, домен и порт
// В случае одинакового источника у окон между собой полный доступ


//* Доступ к <iframe>
// Если источник тотже, то мы можем изменять iframe
// iframe.contentWindow - ccылка на окно внутри ифрейма
// iframe.contentDocument - ссылка на документ внутри окна, тоже самое, что iframe.contentWindow.document

// iframe.onload тоже самое, что и iframe.contentWindow.onload,
// но работает даже с окнами из других источник


//* Окна на поддоменах
// Для взаимодействия поддоменнов для одного сайта нужно использовать
document.domain = 'site.com'


//* Для работы с iframe из того же источника сначала надо дождаться загрузки
// Иначе все наши изменения пропадут


//* window.frames - массив iframe на странице
// Помимо индекса можно получить доступ через window.frames.iframe_название
// window.parent - родительски iframe
// window.top - ссылка на верхнего родителя


//* Атрибут sandbox позволяет наложить ограничения на действия с iframe
// если указать атрибут, то эти ограничения применяться не будут
//   allow-same-origin - воспринимать ифрейм, как с другого источника
//   allow-top-navigation - позволяет менять parent.location
//   allow-forms - отправлять окна из фрейма
//   allow-scripts - запускать крипты и фрейма
//   allow-popups - открывать всплывающие окна window.open
//TODO sandbox может только наложить ограничения на iframe с другого источника. Убрать из так нельзя


//* Обмен сообщениями между окнами
// Для общения независимо от источника между окнами должен выполниться скрипт с обеих сторон
// Он состоит из двух частей

//* Чтобы отправить сообщение в окне отправителя нужжно вызвать win.postMessage(data, targetOrigin)
// data - данные для отправки, любой объект
// targetOrigin - источник получателя. Если проверка не нужна, указывается '*'

//* Событие message
// Чтобы окно могло получить сообщение, у него должен быть обработчик message
// Он срабатывает, когда был вызван postMessage, и получатель сошёлся
// Свойства у обработчика nessage:
//    data - данные из postMessage
//    origin - источник отправителя
//    source - ссылка на отправителя, можно сразу отправить ответ с помощью sourse.postMessage()
//* Обработчик добавляется 
window.addEventListener('message', (event) => {})
// между окнами нет задержки, это быстрее, чем setTimeout(, 0)


