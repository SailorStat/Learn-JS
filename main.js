//? ArrayBuffer, бинарные массивы
//* ArrayBuffer - ссылка на непрерывную область памяти фиксированной длины
const buffer = new ArrayBuffer(16)
console.log(buffer.byteLength)
console.log(buffer)

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
console.log(view.length)
console.log(view.byteLength)
console.log('______________')

view[0] = 123456
for(let num of view) {
  console.log(num); // 123456, потом 0, 0, 0 (всего 4 значения)
}