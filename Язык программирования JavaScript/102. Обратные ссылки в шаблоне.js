//? Обратные ссылки в шаблоне: \N и \k<имя>
//* Обратная ссылка по номеру \N
// Чтобы правильно обращаться к группе, надо присвоить номер
{ const str = `He said: "She's the one!".`
  const regexp = /(['"])(.*?)\1/g
  console.log(str.match(regexp))}


//* Обратная ссылка по имени: \k<имя>
{ const str = `He said: "She's the one!".`
  const regexp = /(?<quote>['"])(.*?)\k<quote>/g
  console.log(str.match(regexp))}