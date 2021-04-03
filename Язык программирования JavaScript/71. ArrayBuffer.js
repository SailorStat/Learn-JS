//? ArrayBuffer, бинарные массивы
//* ArrayBuffer - ссылка на непрерывную область памяти фиксированной длины
const buffer = new ArrayBuffer(16)
console.log(buffer.byteLength)
console.log('______________')

// TODO ArrayBuffer - не массив, длину нельзя менять, элемент по buffer[index] не получить

//* Для работы с ArrayBuffer требуется спецальный объект, реализующий представление данных
// Эти объекты интерпретируют данные
// UnitЧислоArray - представляет каждый байт ArrayBuffer как отдельное число.
//  Значения находятся между 0 и 2^Число - 1
//  называется 'Число-битное целое без знака'
// Float64Array – представляет каждые 8 байт в ArrayBuffer как число с плавающей точкой;
//  возможные значения находятся в промежутке между 5.0x10-324 и 1.8x10308.
const view = new Uint32Array(buffer)
console.log(Uint32Array.BYTES_PER_ELEMENT)
console.log(view)
console.log(view.length)
console.log(view.byteLength)
console.log('______________')

view[0] = 123456789
for(let num of view) {
  console.log(num); // 123456, потом 0, 0, 0 (всего 4 значения)
}

//TODO как оно влезает: если у нас юнит 32 - это значит, что место разбивается по 32 бита, то есть 4 байта
//TODO но при записи числа там используются все знаки. Получается 2^32 вариантов числа.
//TODO получается, что в 16 байтах при делении по 4 байта можно записать 4 таких числа

//TODO view после юинта представляет собой обычный массив


//* TypedArray - общее название для методов представления Uint, Float
// Типы TypedArray:
// Uint8Array, Uint16Array, Uint32Array – целые беззнаковые числа по 8, 16 и 32 бита соответственно.
//     Uint8ClampedArray – 8-битные беззнаковые целые, обрезаются по верхней и нижней границе при присвоении.
// Int8Array, Int16Array, Int32Array – целые числа со знаком (могут быть отрицательными).
// Float32Array, Float64Array – 32- и 64-битные числа со знаком и плавающей точкой.

// Есть 5 способов создания в зависимости от переданных данных
// new TypedArray(buffer, [byteOffset], [length])
//    если указать byteOffset - длину байтов для числа, то массив его примит.
//    length - длина использованного буфера

// new TypedArray(object)
// new TypedArray(typedArray)
//    при передаче массива создастся аналогичный массив этого типа
//    не числовые значения превратятся в 0
//    если значение больше, чем может обработать ячейка, то будет вписано только максимальное количество значений с конца

// new TypedArray(length)
//    создаст массив указанной длины

// new TypedArray()
//    создаст пустой массив

//* Доступ к ArrayBuffer
// arr.buffer - ссылка на объект ArrayBuffer
// arr.byteLength - длина буфера в байтах


//* Методы TypedArray
// Обладает теми же методами, кроме splice и concat
// Новые свойства:
//    arr.set(fromArr, [offset]) - скопировать массив fromArr в arr, начиная с offset (по умолчанию 0)
//    arr.subarray([begin, end]) - возвращает копию с begin до end (end не входит)


//* DataView - нетипизированное представление данных ArrayBuffer
// Хорошо подходит для хранения разных представлений в одном массиве
// Доступ к данным происходит черех .getUint8(i), .getUint16(i) или .getUint32(i)
// Формат выбирается в момент обращения
// const dataView = new DataView(buffer, [byteOffset], [byteLength])
// buffer - ArrayBuffer для обращения
// byteOffset - начальная позиция представления (по умолчанию 0)
// byteLength - длина байтов в представлении
function concat(arrays) {
  return new Uint8Array(arrays.reduce((acc, el) => [...acc, ...el]))
}

let chunks = [
  new Uint8Array([0, 1, 2]),
  new Uint8Array([3, 4, 5]),
  new Uint8Array([6, 7, 8])
];

console.log(Array.from(concat(chunks)));