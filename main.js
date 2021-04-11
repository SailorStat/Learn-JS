//? XMLHttpRequest
// XMLHttpRequest - встроенный в браузер объект, который помогает отправлять запросы
//    без перезагрузки страницы

// XMLHttpRequest может работать с любыми данными
// Мы можем загружать, скачивать файлы, отслеживать прогресс и многое другое

// Есть 3 причины использвать XMLHttpRequest:
//    1. Исторически существует много кода, который использует XMLHttpRequest
//    2. Необходимо поддерживать старые браузеры при нежелании использовать полифилы
//    3. Потребность в функциональости, которой нет у fetch


//* Основы
// XMLHttpRequest имеет 2 режима работы: синхронный и асинхронный
// Второй используется чаще, так как у него больше функциональность

// Создание
const xhr = new XMLHttpRequest()

// Инициализация
// xhr.open(method, URL [, async, user, password])
// Обычно он вызывается сразу после создания
// Его параметры:
//    method - GET, POST и т.д.
//    URL - URL для отправки запроса
//    async - по умолчанию true, если указать false, то запрос будет синхронный
//    user, password - логин и пароль для базовой HTML-авторизиции (если требуется)

// Послание запроса
// xhr.send([body])

// Прослушивание событий
//    load - когда получен ответ, в том числе с HTML-ошибкой
//    error - когда нет возможности выполнить запрос
//    progress - происходит во время загрузки ответа
//        event.loaded - количество загруженных байт
//        event.lengthComputable - true, если сервер присылает заголовок Content-Length
//        event.total - количество байт всего (если получен Content-Length)
// xhr.onload = () => {
//   console.log('Загужено: ' + xhr.status + ' ' + xhr.response)
// }

// xhr.onerror = () => {
//   console.log('Ошибка соединения')
// }

// xhr.onprogress = (event) => {
//   console.log('Загружено ' + event.loaded + ' из ' + event.total)
// }
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos')
xhr.send()

xhr.onload = () => {
  if (xhr.status != 200) return console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText)
  console.log('Готово, получено ' + xhr.response.length + ' байт')
}

xhr.onprogress = (event) => {
  if (!event.lengthComputable) return console.log('Получено ' + event.loaded + ' байт')
  console.log('Получено ' + event.loaded + ' из ' + event.total + ' байт')
}

xhr.onerror = () => {
  console.log('Ошибка запроса')
}

// status - код состояния HTTP: 200, 401, 404. Если ошибка не связана с HTML, то 0
// statusText - тотже статус в буквенном выражении: ОК, Not Found, Forbidden
// response - тело ответа     // в старых скриптах может встречаться, как responseText
xhr.timeout = 10000 // время ожидания ответа в миллисекундах    //* в одной секунде 1000 миллисекунд 

// для добавления параметров типа ?name=value следует воспользоваться URL
const url = new URL('https://google.com/search')
url.searchParams.set('q', 'добавим тестовый пример')
// xhr.open('GET', url)


//* Тип ответа
// Чтобы указать ожидаемы тип ответа применяется свойство xhr.responseType
// '' - по умолчанию используется строка
// 'text' - строка
// 'arraybuffer' - ArrayBuffer
// 'blob' - Blob
// 'document' - XML-документ (можем использовать XPath и другие XML-методы)
