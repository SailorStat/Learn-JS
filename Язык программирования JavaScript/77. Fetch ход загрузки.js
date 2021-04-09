//? Fetch: ход загрузки
// Процесс отправки данных в fetch контролировать нельзя // для этого нужен XMLHttpRequest

// Чтобы отслеживать ход загрузки можно через response.body
// Это ReadableStream - особый объект, предоставляющий тело ответа по частям
//    потоки для чтения описаны в Streams API

//* response.body даёт полный контроль над процессами чтения
// {(async () => {
// const reader = response.body.getReader()

// while (true) {
//   const {done, value} = await reader.read()

//   if (done) break

//   console.log('Получено ' + value.length + ' байт')
// }
// })()}
// когда чтение закончено, done становится true
// value - типизированный массив данных ответа

// Чтобы отследить процесс загрузки, нам нужно прибавить его длину value к счётчику

{(async () => {
// Шаг 1: начинаем загрузку с fetch, получаем поток для 
const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100')

const reader = response.body.getReader()

// Шаг 2: получаем длину содержимого ответа
const contentLength = +response.headers.get('Content-Length')

// Шаг 3: считываем данные
let receivedLength = 0 // количество байт, полученных на дынный момент
const chunks = [] // массив полученных двоичных фрагментов

while (true) {
  const {done, value} = await reader.read()

  if (done) break

  chunks.push(value)
  receivedLength += value.length
  console.log('Получено ' + receivedLength + ' из ' + contentLength)
}

// Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
const chunksAll = new Uint8Array(receivedLength)
let position = 0
for (chunk of chunks) {
  chunksAll.set(chunk, position)
  position += chunk.length
}

// Шаг 5: декодируем Uint8Array обратно в строку
const result = new TextDecoder('utf-8').decode(chunksAll)

// Готово
const commits = JSON.parse(result)
console.log(commits[0].author.login)
})()}