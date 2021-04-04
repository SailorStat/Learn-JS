//? Blob
//* Blob - необязательная строка type (обычно MIME-тип), другие Blob, строки и BufferSource
// Благодаря type мы можем загружать и скачивать Blob-объекты, где type - это Content-Type в запросах

//* new Blob(blobParts, option)
// blobParts - массив значений Blob/BufferSource/String
// options - необязательный объект с дополнительными настройками
//    type - тип объекта, например image/png
//    endings - если указан, то окочания Blob будут изменены в зависимости от текущей ОС (\r\n или \n).
//        По умолчанию transparent (не изменять). Native означает изменять

{
  const blob = new Blob(['<html></html>'], {type: 'text/html'})
  console.log(blob)

//* получить срез blob.slice([bytestart], [byteend], [contentType])
// bytestart - начальный индекс. По умолчанию 0
// byteen - конечный индекс (не войдёт). По умолчанию равен длине
// contentType - тип записи. По умолчанию тот же
  console.log(blob.slice(0, 13,'text/html'))
}

//TODO Blob нельзя изменить, но их можно объединять или делать срез и получать новые BLob


//* Blob как URL
// Blob может быть использован как URL для <a>, <img> или других тегов, для показа содержимого
{
  const a = document.createElement('a')
  a.download = 'hello.txt'
  a.href = '#'
  a.innerHTML = 'Скачать'
  document.body.append(a)

  const blob= new Blob(['Приветики!'], {type: 'text/plain'})
  a.href = URL.createObjectURL(blob)
}

// также мы можем динамически генерировать документ и
// через a.click() инициировать автоматическое скачивание без добавления а в документ

//* URL.createObjectURL(Blob) берёт Blob и создаёт уникальный URL для него в формате: blob:<origin>/<uuid>
// в примере выше он blob:null/8eedc132-3d73-4d73-9046-da9f9067a486
// после обновления ссылка изменилась

// Для каждого URL сгенерированного через URL.createObjectURL, сохраняет соответствие URL -> Blob
// Таким образом ссылки короткие, но имеют доступ к большому объекту Blob

//TODO каждый Blob будет висеть в памяти, так как для него сгенерированна ссылка
//* URL.revokeObjectURL(url) позволяет удалить ссылку на объект
// Если других ссылок на Blob нет, то сборщик мусора удалит его из памяти
// в качестве url удобно использовать a.href


//* Blob to base64
// Эта кодировка представляет двоичные данные в виде строки
// с безопасными для чтения символами в ASCII-кодах от 0 до 64
// Мы можем использовать эту кодировку для data-urls

// data-urls имеет форму data:[<mediatype>][;base64],<data>
// Такой урл можно везде использоват, как обычный
{
  const img = document.createElement('img')
  img.src = 'data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7'
  document.body.append(img)
}

// Для преобразования Blob в base64 нужен объект типа FileReader
// const link = document.createElement('a')
// link.download = 'hello.txt'

// const reader = new FileReader()
// reader.readAsDataURL(blob)

// reader.onload = function() {
//   link.href = reader.result
//   link.click()
// }

//* URL.createObjectURL(blob) более предпосчтительный


//* Изображение в Blob
// Можно создать Blob для изображения, части изображения или даже скриншот
// Затем это можно использовать для загрузки куда-либо

// Операции с изображзениями выполняются через <canvas>
// Для отрисовки изображения используется canvas.drawImage
// Вызов canvas.toBlob(callback, mimeType, qualityArgument) создаёт Blob и вызывает функцию callback при завершении

// let img = document.createElement('img')
// img.src = "../../30856047.jpg" // сейчас находится на месте main.js

// let canvas = document.createElement('canvas');
// canvas.width = img.clientWidth
// canvas.height = img.clientHeight

// let context = canvas.getContext('2d');

// context.drawImage(img, 0, 0);
// canvas.toBlob(function(blob) {
//   let link = document.createElement('a');
//   link.download = 'example.png';

//   link.href = URL.createObjectURL(blob);
//   link.click();

//   URL.revokeObjectURL(link.href);
// })
//! не работает

//* Blob из ArrayBuffer
// Конструктор Blob позволяет делать Blob-объект из BufferSourse
// Если нужна производительная низкоуровневая обработка, то можно использовать ArrayBuffer из FileReader
{
  const blob = new Blob(['<html></html>'], {type: 'text/html'})
  const fileReader = new FileReader()
  fileReader.readAsArrayBuffer(blob)
  fileReader.onload = function(event) {
    const arrayBuffer = fileReader.result
  }
}