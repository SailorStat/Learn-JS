// //? Пользовательские ошибки, расширение Error
// // Мы можем создавать собственные классы ошибок, наследуя от Error
// class ValidationError extends Error {
//   constructor(message) {
//     super(message)
//     this.name = 'ValidationError'
//   }
// }

// function test() {
//   throw new ValidationError("Упс")
// }

// try {
//   test()
// } catch(err) {
//   console.log(err)
// }


// // Теперь можно использовать
// function readUse(json) {
//   let user = JSON.parse(json)

//   if (!user.name) {
//     throw new ValidationError("Не указано поле: name")
//   }

//   if (!user.age) {
//     throw new ValidationError("Не указанo поле: age")
//   }
// }

// try {
//   let user = readUse('{"age": 25}')
// } catch(err) {
//   if (err instanceof ValidationError) {
//     console.log("Некорректные данные: " + err.message)
//   } else if (err instanceof SyntaxError) {
//     console.log('Ошибка файла JSON: ' + err.message)
//   } else {
//     throw err
//   }
// }


// // Мы можем использовать собственный класс, как прототип
// class MissPropertyError extends ValidationError {
//   constructor(property) {
//     super('Нет свойства:' + property)
//     this.name = "MissPropertyError"
//     this.property = property
//   }
// }

// function missPropertyError(json) {
//   let user = JSON.parse(json)

//   if (!user.name) {
//     throw new MissPropertyError('name')
//   }
//   if (!user.age) {
//     throw new MissPropertyError('age')
//   }
// }

// try {
//   let user = missPropertyError('{"age": 25}')
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log('Неверные данные: ' + err)
//     console.log(err.name)
//   } else if (err instanceof SyntaxError) {
//     console.log("Ошибка чтения JSON: ")
//   } else {
//     throw err
//   }
// }


// // Вместо имени свойсва можно оставлять имя конструктора
// class MyError extends Error {
//   constructor(message) {
//     super(message)
//     this.name = this.constructor.name
//   }
// }

// class ValidatorError extends MyError {}

// class NewClassError extends ValidatorError{
//   constructor(property) {
//     super('Нет свойства: ' + property)
//     this.property = property
//   }
// }
// console.log(new NewClassError('error').name)


class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }

}

try {
  readUser('{"age": 25}');
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
    console.log("Исходная ошибка: " + e.cause);
  } else {
    throw e;
  }
}

// Наследование от SyntaxError
class FormatError extends SyntaxError{
  constructor(message) {
    super(message)
    this.name = "FormatError"
  }
}
let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true