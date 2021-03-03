//? Обработка ошибок, "try..catch"
// Для отлова ошибок есть конструкция try {} catch
try {
  console.log('Привет')
  bandit;//Бандит, который мешает общаться
  console.log('Сообщение получено')
} catch (err) {
  console.log('Отправка сообщения перехвачена')
}

//* try catch может перехватывать только ошибки с читаемым кодом, который нельзя выполнить


// try catch не видит ошибки снаружи таймеров
// try {
//   setTimeout(function() {
//     errorCode;
//   }, 1000)
// } catch(err) {
//   console.log("ошибка первого теста")
// }

// Надо использовать отлов внутри таймеров
/* setTimeout(function() {
  try {
    errorCode;
  } catch(err) {
    console.log("ошибка второго теста")
  }
}, 1000)*/


// Ошибка содержит поля информации об ошибке
try {
  lola
} catch(err) {
  console.log(err)          // ReferenceError: lola is not defined at main.js:35
  console.log(err.name)     // ReferenceError
  console.log(err.message)  // lola is not defined
  console.log(err.stack)    // ReferenceError: lola is not defined at main.js:35
}


// Если не нужна информация от деталях ошибки, то имя можно пропустить
try {
  // код
} catch {
  // код при ошибке
}


// Генератор ошибок throw
// Есть разные генераторы ошибок
let error = new Error('message')
let syntaxError = new SyntaxError('message')
let referenceError = new ReferenceError('message')
//  для них name - имя конструктора, message - содержание ошибки

let errorTest = new Error('Не просто ошибка, а ошибище')
console.log(errorTest.name)
console.log(errorTest.message);


// как работает throw
let json = '{ "age": 30 }'

try {
  let user = JSON.parse(json)
  if (!user.name) {
    throw new SyntaxError("В данных нет имени")
  }
  console.log(user.name)
} catch(err) {
  console.log("JSON Error: " + err.message);
}


// У нас может быть неожиданная ошибка, для того, чтобы её пропустить, использую проброс
// catch будет обрабатывать только ошибки, которые знает
function readErr() {
  let jsonchik = '{ "name": "Isja" }'

  try {
    let userchik = JSON.parse(jsonchik)
    if (!userchik.name) {
      throw new SyntaxError("В данных нет имени")
    }
    hobacha();
    console.log(userchik.name)
  } catch(err) {
    if (err.name == "SyntaxError") {
      console.log("JSON Error: " + err.message)
    } else {
      throw err
    }
  }
}

try {
  readErr()
} catch(err) {
  console.log("Снаружи кода catch поймал ошибкy: " + err)
}


// имеется ещё блок finally - он выполняется и при ошибке, и без
try {
  // 
} catch(err) {
  // 
} finally {
  //выполнится всегда
}


//* переменные внутри try, catch и finally локальные


//* finally выполнится даже при выходе из кода, в том числе через return
function testFinally() {
  try {
    return console.log('Выход через return')
  } catch(err) {
    console.log(err.name);// на случай ошибки
  } finally{
    console.log('Выполнение finally')
  }
}
testFinally()


//* можно использовать конструкцию try .. finally
// она нужна, когда код должен точно выполниться, а ошибки должны выпасть наружу


'это не часть JS, но можно сделать глобальный catch'
'<script>'
'  window.onerror = function(message, url, line, col, error) {'
'    alert(`${message}\n В ${line}:${col} на ${url}`);'
'  };'

'  function readData() {'
'    badFunc(); // Ой, что-то пошло не так!'
'  }'

'  readData();'
'</script>'