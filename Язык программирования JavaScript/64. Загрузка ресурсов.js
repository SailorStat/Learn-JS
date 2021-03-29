//? Загрузка ресурсов: onload и onerror
//* Чтобы загрузить сторонний скрипт, его можно вызвать динамически
const script = document.createElement('script')
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js'
document.body.append(script)


//* Событие 'load' срабатывает, когда скрипт загружен и выполнен
script.onload = function () {
  console.log(_)
}


//* Если загрузка не произошла, то сработает событие error
const script2 = document.createElement('script')
script2.src = '5.js' // такого файла нет
document.body.append(script2)

script2.onerror = function () {
  console.log('Ошибка загрузки')
}


//TODO События load и error не отлавливают ошибки в коде, они отлавливают только процесс загрузки
//* для отлова ошибок в скрипте используется window.onerror


//* Обработчики также срабатывают для любых внешних ресурсов, но есть свои особенности
// img загружаются после получения src
const img = document.createElement('img')
img.src = 'https://e-w-e.ru/wp-content/uploads/2020/08/6bae0dd62924516dadeb9adaafe3f7a7.jpg'
img.onload = () => {
  document.body.append(img)
}
// остальные ресурсы только после добавления в документ
// <iframe> сработает только событие load даже если возникла ошибка


//* Если скрипт находится на другом домене, то мы не уидим содержание ошибки в работе скрипта


//* Исключением будет если правильно нвстроен атрибут crossorigin
// Атрибут crossorigin отсутствует – доступ запрещён.

// crossorigin="anonymous" – доступ разрешён,
//    если сервер отвечает с заголовком Access-Control-Allow-Origin со значениями * или наш домен.
//    Браузер не отправляет авторизационную информацию и куки на удалённый сервер.

// crossorigin="use-credentials" – доступ разрешён,
//    если сервер отвечает с заголовками Access-Control-Allow-Origin со значением наш домен
//    и Access-Control-Allow-Credentials: true.
//    Браузер отправляет авторизационную информацию и куки на удалённый сервер.
const newscript = document.createElement('script')
newscript.src = 'https://cors.javascript.info/article/onload-onerror/crossorigin/error.js'
document.body.append(newscript)

newscript.onerror = function (message, url, line, col, errorObj) {
  console.log(`${message}\n${url}, ${line}:${col}`);
}