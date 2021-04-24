//? Якоря: начало строки ^ и конец $
{
  const str = 'Я хорошо покушал'

  const regexp = /^Я/
  console.log(regexp.test(str))   // true

  const regexp2 = /покушал$/
  console.log(regexp2.test(str))  // true
}

// Эти тва якоря вместе используюстся для полной проверки строки
{
  const str1 = 'ааааааа'
  const str2 = 'ааааа'
  const regexp = /^ааааа$/
  console.log('__________')
  console.log(regexp.test(str1))
  console.log(regexp.test(str2))
}