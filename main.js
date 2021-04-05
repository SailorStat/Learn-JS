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


function calc(num) {
  return +(Array.apply(null, new Array(num + 1)).reduce((acc, el, index) => (index !== 0) ? acc + +(1/index/(index + 1)).toFixed(3) : acc, 0)).toFixed(3)
}

console.log(calc(13))