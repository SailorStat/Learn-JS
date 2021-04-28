//? Поиск на заданной позиции, флаг "y"
// Помогает, когда нам нужно определённое совпадение
// Без флага g нам вернётся первый результат
// C флагом нам через regexp.exec(str) по очереди вернутся все результаты
// regexp.lastIndex может принять значение с которого нужно найти результат
const str = 'let varName = "value"'
const regexp = /\w+/g
regexp.lastIndex = 4
const word = regexp.exec(str);
console.log(word)
// regexp.lastIndex = 3 тоже сработает

// Флаг  у  заставляет искать ровно на позиции, а не после
