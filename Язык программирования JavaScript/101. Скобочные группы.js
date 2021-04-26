//? Скобочные группы
// Часть шаблона можно заключить в (...), чтобы:
//    1. Поместить часть совпадения в отдельный массив
//    2. Квантификатор после скобки применить ко всему в скобках

//* Пример повтрорения части
{
  const str = 'lalalalala'
  const regexp = /(la)+/g
  console.log(str.match(regexp))
}
{
  const str = 'mail.com, users.mail.com, smith.users.mail.com, my-site.com'
  const regexp = /([\w-]+\.)+\w+/g
  console.log(str.match(regexp))
}


//* Содержимое скобок в match
// str.match(regexp) без флага  g  возвращает массив:
//    индекс 0 - совпадение
//    индекс 1 - содержание первой скобочной группы
//    индекс 2 - содержание второй скобочной группы и т.д.


//* Поиск всех совпадений matchAll
// Чтобы получить и множество результатов и скобочные группы, нужен matchAll
{let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi)
console.log(results) // [object RegExp String Iterator]
console.log(results[0]) // undefined

results = Array.from(results) // превращаем в массив
console.log(results[0]) // <h1>,h1 (первый тег)
console.log(results[1]) // <h2>,h2 (второй тег)
}


//* Именованные группы ?<name>
{ const dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g
  const str = "1996-02-07 2020-01-01"
  const groups = str.matchAll(dateRegexp)
  for(result of groups) {
    const {year, month, day} = result.groups
    console.log(`${day}.${month}.${year}`)
  }
}


//* Скобочные группы при замене
// Метод str.replace(regexp, replacement) позволяет использовать скобочные группы
//    для замены содержимого скобок через $n, где n - номер скобочный группы или название
{ const str = "John Bull"
  const regexp = /(?<name>\w+) (\w+)/
  console.log(str.replace(regexp, '$2, $<name>'))
}


//* Исключение черех ?:
// Если в результате нам не нужна скобочная группа, мы можем её исключить
{ const str = 'Lalalalala, the earth turns faster'
  const regexp = /(?:la)+,( \w+)+/gi
  const results = str.matchAll(regexp)
  for (result of results) {
    console.log(result)
  }
}