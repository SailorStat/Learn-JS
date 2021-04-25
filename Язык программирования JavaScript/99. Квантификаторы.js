//? Квантификаторы + * ? {n}
//* Количество знаков {n}
// Если к знаку добавить {n}, то поиск будет работать на  n  количество символов
{
  const str = 'white rabbit'
  const regexp = /\w{3}/g
  console.log(str.match(regexp))
}

// Если указать {n,m}, то поиск будет на  n-m  количество знаков
{
  const str = '8(800)-555-35-35'
  const regexp = /\d{1,3}/g
  console.log(str.match(regexp))
}


//* Сокращения
// +    - более 1
{
  const str = '8(800)-555-35-35'
  const regexp = /\d+/g
  console.log(str.match(regexp))
}

// ?    - 0 или 1, делает символ необязательным
{
  const str = '8(800)-555-35-35'
  const regexp = /\d\d?/g
  console.log(str.match(regexp))
}

// *    - 0 или более, символ может быть, повторяться или не быть вообще
{
  const str = '8(800)-555-35-35'
  const regexp = /\d\d*/g
  console.log(str.match(regexp))
}


// Задача. Поиск многоточия
{const regexp = /\.{3,}/g;
console.log("Привет!... Как дела?.....".match(regexp))}

// Задача. Регулярное выражение для HTML-цветов
{ const regexp = /#\p{Hex_Digit}{6}\b/gu
  const str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
  console.log(str.match(regexp))
}