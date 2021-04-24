//? Многострочный режим якорей  ^  $ , флаг  m
// Многострочный режим сопровождается флагом   m

//* Поиск в многострочном режиме
{
  const str = `Мама моет раму, Рама держит маму
Вышла замуж мама за индуса Раму`

  const regexp = /^\p{L}/gmu
  const regexp2 = /\p{L}$/gmu
  console.log(str.match(regexp))
  console.log(str.match(regexp2))
}

//* Использование \n вместо  ^  и  $  вернёт такой же результат,
//*    только с /n и без совпадения в начале и конце строки
{
  console.log('_________')
  const str = `Мама моет раму, Рама держит маму
Вышла замуж мама за индуса Раму`

  const regexp = /\n\p{L}/gmu
  const regexp2 = /\p{L}\n/gmu
  console.log(str.match(regexp))
  console.log(str.match(regexp2))
}