//? File and Filereader
//* File наследует от Blob и может взаимодействовать с файловой системой OC
// new File(fileParts, fileName, [option])
//    fileParts - массив значений Blob, BufferSourse, строки
//    fileName - имя файла
//    option - необязательный объект
//        lastModifued - дата почследнего изменения числом


//* FileReader - объект, цель которого читать файлы из Blob и File, как его наследника
const reader = new FileReader()

//* Методы FileReader
// reader.readAsArrayBuffer(blob)
// reader.readAsText(blob [, encoding]) - считать данные, как строку. UTF-8 по умолчанию
// reader.readAsDataURL(blob) - считать данные, как base64-кодированный UR:
// reader.abort - отменить операцию

//* События в процессе чтения
// loadstart - чтение начало
// progress - во время чтения данных
// load - нет ошибок, чтение закончено
// abort - вызван abort()
// error - произошла ошибка
// loadend - чтение завершено

// После завершения можем получить исход
// reader.result
// reader.error


//* Для Web Worker доступен FileReaderSync, он возвращает результат, а не генерирует событие