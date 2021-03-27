//? Страница
//* Основные события страницы:
//*   DOMContentLoaded - браузер полностью загрузил html, построил dom, картинки ещё не загружены
//*   load - картинки загружены, стили применены, размеры изместны
//*   beforeunload - пользователь покидает страницу. Можем спросить, точно ли он хочет этого, или сохранить изменения
//*   unload - пользователь почти ушёл. Мы можем отправить статистику


//* DOMContentLoaded
// Срабатывает на document
// Так как внешние русурсы и картинки ещё не загружены, то размер у них 0х0
// Выполнение скриптов блокирует DOMContentLoaded кроме async и createElement
// DOMContentLoaded не ждёт загрузку стилей, если они не требуются в скрипте
// Автозаполнение в браузере выполняется после DOMContentLoaded


//* load
// Срабатывает на window
// Так как страница полностью загружена, то ошибок с размерами картинок не будет


//* unload
// Срабатывает на window
// Используется для нетребовательных недолгих операций

// Обычно используется для отправки статистики через navigator.sendBeacon(url, data)
// Он не задерживает страницу, а в фоне отправляет статистику
const analyticsData = {}
window.addEventListener('unload', () => {
  navigator.sendBeacon('/analytics', JSON.stringify(analyticsData))
})
// Размер данных ограничен 64кб


//* beforeunload
// Срабатывает на window
// Если мы отменим событие, то браузер спросит: точно ли мы хотим уйти?
window.onbeforeunload = () => {return false}


//* document.readyState показывает состояние загрузки документа
// 'loading' - загружается
// 'interactive' - документ полностью прочитан
// 'complete' - документ полностью прочитан и ресурсы загружены


//* событие 'readystatechange' срабатывает при изменении статуса загрузки документа
document.addEventListener('readystatechange', () => {console.log(document.readyState)})