//? Fetch
// Для сетевых запросов в JavaScript используется AJAX

//* Современный способ общаться с сервером - fetch
// const promise = fetch(url [, options])
// options - методы, заголовки и так далее

// Без options это обычный GET-запрос, который скачивает содержимое с url
// Браузер сразу начинает начинает запрос и возвращает код, который оборачивает в промис

// Промис выполняется с объектом встроенного класса Response в качестве результата,
//  сразу, как только сервер пришлёт заголовки ответа
// Это можно использовать, чтобы проверить статус запроса
// status - код статуса запроса.
// ok - возвращает true, если статус 200-299
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response, reject) => {
    if (response.ok) {
      const json = response.json()
      console.log('Данные получены. Код: ' + response.status)
    } else {
      throw new Error('Ошибка HTTP: ' + response.status)
    }
  })

// Для получения ответа его нужо декодировать
// response.text() - читает ответ и возвращает текст
// response.json() - декодирует ответ в виде JSON
// response.fromData() - возвращает ответ в виде FromData
// response.blob() - возвращает отет в виде Blob
// response.ArrayBuffer() - возвращает ответ, как низкоуровневое представление бинарных данных
// response.body - объект ReadebleStream, который позволяет считывать ответ по частям
//! Обработать можно только 1 раз

{(async () => {
  const url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  const response = await fetch(url)
  const commits = await response.json()
  console.log(commits[0].author.login)
})()}

{fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].author.login))}

// Получить логотип спецификации fetch
{(async () => {
  const response = await fetch('https://learn.javascript.ru/article/fetch/logo-fetch.svg')
  const blob = await response.blob()

  const img = document.createElement('img')
  document.body.append(img)

  img.src = URL.createObjectURL(blob)
})()}


//* Заголовки ответа
// Заголовки ответа хранятся в похожем на Map объекте response.headers
{(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await response.json()
  const headersText = response.headers.get('Content-Type')
  for ([key, value] of response.headers) {
    console.log(key + ': ' + value)
  }
})()}

//* Заголовки запроса
// Для установки заголовка запроса можно использовать опцию headers
// const response = fetch(protectedUrl, {
//   headers: {
//     Autentification: 'secret'
//   }
// })

//! Список запрещённых заголовков
// Accept-Charset, Accept-Encoding
// Access-Control-Request-Headers
// Access-Control-Request-Method
// Connection
// Content-Length
// Cookie, Cookie2
// Date
// DNT
// Expect
// Host
// Keep-Alive
// Origin
// Referer
// TE
// Trailer
// Transfer-Encoding
// Upgrade
// Via
// Proxy-*
// Sec-*
//! они используются для корректности работы данных, безопасность обеспечивается браузером


//* POST-запросы
// Для отправки POST-запроса необходимо использовать параметры:
// method - HTTP-метод, например POST
// body - тело запроса, одно из списка:
//    строка (например в JSON)
//    объект FormData для отправки данных как form/multipart
//    Blob/BufferSource для отправки бинарных данных
//    URLSearchParams для отправки данных в кодировке x-www-form-urlencoded (редко)
// {(async () => {
//   const user = {
//     name: 'Jojo',
//     surname: 'Super'
//   }
  
//   const response = await fetch('https://learn.javascript.ru/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(user)
//   })

//   const result = await response.json()
//   console.log(result.message)
// })()}


//* Отправка изображений
// для отправки изображений нужно воспользоваться Blob или BufferSource
{(async () => {
  const canvas = document.createElement('canvas')
  canvas.style = 'width:100px; height:100px; border:1px solid'
  document.body.append(canvas)

  const input = document.createElement('input')
  input.type = 'button'
  input.value = 'Отправить'
  document.body.append(input)

  canvas.onmousemove = (event) => {
    const ctx = canvas.getContext('2d')
    ctx.lineTo(event.clientX, event.clientY)
    ctx.stroke()
  }

  input.onclick = async function() {
    const blob = new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
    const response = await fetch('/article/fetch/post/image', {
      method: 'POST',
      body: blob
    })

    const result = setTimeout(() => {return {message: 'ничего не вышло'}}, 3000)
    console.log(result.message)
  }
})()}


// Задача. 75. Вернуть данные пользователей GitHub.html