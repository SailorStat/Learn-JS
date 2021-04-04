//? TextDecoder and TextEncoder
//* TextDecoder позволяет декодировать бинарные данные в обычную строку
// Создание декодера:
// const decoder = new TextDecoder([label], [options])
// label - тип кодировки. По умолчанию UTF-8. Поддерживаются big5, windows-1251 и другие
// options - объект с дополнительными настройками,
//    fatal - если true, то невалидные значения генерируют ошибку, false вставляет \uFFFD - �
//    ignoreBOM - true игнорирует BOM (дополнительный признак, обозначающий порядок следования байтов)

// после этого можно применять 
// const str = decoder.decode([input], [options])
// input - бинарный буфер BufferSource для декодирования
// options - объект с дополнительными настройками
//    stream - true для декодирования потока данных. 
//        decoder вызывается для каждого следующего фрагмента данных.
//        При этом многобайтовый символ может быть разделён и попасть в разные фрагменты данных.
//        Это опция позволяет запомнить символ, на котором остановился процесс
//        и декодировать со следующем фрагментом
const uint8Array = new Uint8Array([72, 101, 108, 108, 111])
const decoder = new TextDecoder()
console.log(decoder.decode(uint8Array))


//* TextEncoder кодирует строку в бинарный массив
const textEncoder = new TextEncoder()
// кодировка только UTF-8
// Методы TextEncoder
//    encode(str) - возвращает бинарный массив Uint8Array содержащий закодированную строку
//    encodeInto(str, distination) - кодирует строку в destination, который является Uint8Array
//      если после перезаписи остаются неизменённые ячейки, то у них остаётся старое содержимое
textEncoder.encodeInto('хаха', uint8Array)
console.log(decoder.decode(uint8Array))