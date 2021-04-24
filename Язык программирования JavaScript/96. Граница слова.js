//? Граница слова: \b
{
  // const str = 'Мама мыла раму. Рама держал маму'
  const str = 'Vfvf vskf hfve. Hfvf lth;fk vfve'
  const regexp = /\b\p{L}\p{L}\p{L}\p{L}/gu
  console.log(str.match(regexp))
}
//! Работает только для латинского алфавита