//? Наборы и диапазоны [...]
//* Несколько сиволов внутри [] обозаначают "любой из них"
{
  const str = 'сон, сом, сор'
  const regexp = /со[нмр]/g
  console.log(str.match(regexp))
}


//* Несколько символов через -  в [] обозначают диапазон символов
{
  const str = 'сон, сом, сор'
  const regexp = /с[а-я][а-я]/g
  console.log(str.match(regexp))
}


//* Пример: многоязычный аналог \w
// Он выглядит так: [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]
//    Alphabetic (Alpha) – для букв,
//    Mark (M) – для акцентов,
//    Decimal_Number (Nd) – для цифр,
//    Connector_Punctuation (Pc) – для символа подчёркивания '_' и подобных ему,
//    Join_Control (Join_C) – два специальных кода 200c и 200d, используемые в лигатурах, например, арабских.