//? Цепочка промисов
// цепочка промисов может быть синхронной и асинхронной
function sum(a, b) {
  let promise = new Promise(function(resolve, reject) {
    return setTimeout(() => resolve(a = a + b), 2000)
  })
  .then( function (result) {
    console.log(result)
    return result += 5
  })
  promise.then( function (result) {
    console.log(result)
    return result += 10
  })

  promise.then( function (a) {
    console.log(a)
  })
}

sum(2, 5)


//* // Несложные функции с .then можно делать стрелочными
//* loadScript("/article/promise-chaining/one.js")
//*   .then(script => loadScript("/article/promise-chaining/two.js"))
//*   .then(script => loadScript("/article/promise-chaining/three.js"))
//*   .then(script => {
//*     // скрипты загружены, мы можем использовать объявленные в них функции
//*     one();
//*     two();
//*     three();
//*   });


// для отправки данных по сети используется метод fetch
let promise1 = fetch('https://learn.javascript.ru/article/promise-chaining/user.json')

fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
  // .then в коде ниже выполняется, когда удалённый сервер отвечает
  .then(function(response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();
  })
  .then(function(text) {
    // ...и здесь содержимое полученного файла
    console.log(text); // {"name": "iliakan", isAdmin: true}
  });

// response.json() позволяет читать файлы в формате JSON