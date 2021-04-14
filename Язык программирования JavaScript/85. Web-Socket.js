//? WebSocket
//* Открыть соединение
const socket = new WebSocket('ws://javascript.info')
// есть ещё wss - он предпочтительнее

// как только создан WebSocket, у него надо слушать события
//    open - соединение установлено
//    message - получены данные
//    error - ошибка
//    close - соединение закрыто

// Если мы хотим что-то отправить, то используем метод socket.send(data)
//    data - текст, бинарные данные, Blob, ArrayBuffer
// socket.bufferType - тип обмениваемых данных. По умолчанию Blob


//* Открытие WebSocket
// когда сокет создан, то он сам начинает устанавливать соединение
// он спрашивает у сервера "досупен веб-сокет соединение?"
// если сервер отвечает да, то вместо html устанавливается веб-сокет

// Соединение запрашивается с помощью заголовков
//   GET /chat
//   Host: javascript.info
//   Origin: https://javascript.info - источник страницы
//   Connection: Upgrade - сигнализирует, что клиент хочет изменить протокол
//   Upgrade: websocket - запрошен протокол websocket
//   Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q== - случайный ключ для безопасности
//   Sec-WebSocket-Version: 13 - версия протокола websocket
//todo Запрос websocket нельзя эмулировать

// Ответ сервера
//   101 Switching Protocols
//   Upgrade: websocket
//   Connection: Upgrade
//   Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g= - пререкодированный ключ браузера


//* Расширения и подпротоколы
// Могут быть и дополнительные заголовки
//    Sec-WebSocket-Extensions: deflate-frame - означает, что браузер поддерживает сжатие данных
//    Sec-WebSocket-Protocol: soap, wamp - означает, что поддерживаются не только произвользые данные,
//        но и SOAP и WAMP. Подпротоколы регистрируются в катологе IANA
// const socket = new WebSocket("wss://javascript.info/chat" [, "soap", "wamp"])

// На такой запрос
//    GET /chat
//    Host: javascript.info
//    Upgrade: websocket
//    Connection: Upgrade
//    Origin: https://javascript.info
//    Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
//    Sec-WebSocket-Version: 13
//    Sec-WebSocket-Extensions: deflate-frame
//    Sec-WebSocket-Protocol: soap, wamp

// Сервер должен дать соответствующий ответ
//    101 Switching Protocols
//    Upgrade: websocket
//    Connection: Upgrade
//    Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=
//    Sec-WebSocket-Extensions: deflate-frame
//    Sec-WebSocket-Protocol: soap


//* Передача данных
// Поток данных состоит из фреймов
//    текстовые фреймы - содержат текстовые данные, которые отправляют друг-другу
//    бинарные фреймы - содержат динарные данные
//    пинг-понг фреймы - для проверки соединения
//        Сервер отправляет, чтобы получить от браузера автоматический ответ
//    фрейм закрытия соединения, и другие служебыне фреймы


//* Ограничения скорости
// Свойство socket.bufferedAmount хранит количество байт буферизированных данных на текущий момент
// setInterval(() => {
//   if (socket.bufferedAmount == 0) {
//     socket.send(moreData())
//   }
// }, 100)


//* Закрытие подключения
// Закрыть соединение может любая сторона
// socket.close([code], [reason])
//    code - специальный код для закрытия
//    reason - строка с причиной закрытия

// это событие можно обработать
// socket.onclose = (event) => {
//    event.code === 1000
//    event.reason === 'end the work' 
//    event.wasClean === true ('закрыто чисто') // false, если нет кода или причины
// }


//* Состояние соединения
// получить состояние помогает socket.readyState
//    0 - 'CONNECTING' соединение ещё не установлено
//    1 - 'OPEN' обмен данными
//    2 - 'CLOSING' соединение закрывается
//    3 - 'CLOSED' соединение закрыто

